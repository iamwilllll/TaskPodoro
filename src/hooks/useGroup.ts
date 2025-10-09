import { useCallback, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { indexedDBManager } from '../indexedDB/initDB';

import type { GroupsT, GroupsTDraftT } from '../types';

import { useGroupContext } from '../context/store';

export const useGroup = () => {
    const [db, setDB] = useState<IDBDatabase | null>(null);
    const { setMaxGroups, addGroupToContext, setGroupsInContext } = useGroupContext();
    const MAX_GROUPS = 4;

    useEffect(() => {
        indexedDBManager.createDB().then((res) => {
            const db = ((res as Event).target as IDBOpenDBRequest).result;
            setDB(db);
        });
    }, []);

    const createGroups = (group: GroupsTDraftT) => {
        allGroupsAvailable().then(() => {
            if (!db) return;
            const transaction = db?.transaction('groups', 'readwrite');
            const objectStore = transaction?.objectStore('groups');

            const updatedGroup: GroupsT = { ...group, id: `${uuid()}-${uuid()}` };
            objectStore?.add(updatedGroup);
            addGroupToContext(updatedGroup);
            allGroupsAvailable();

        });
    };

    const readGroups = useCallback(() => {
        return new Promise<GroupsT[]>((resolve) => {
            if (!db) return;
            
            const transaction = db?.transaction('groups', 'readonly');
            const objectStore = transaction?.objectStore('groups');
            const request = objectStore?.getAll();
            
            request.onsuccess = () => resolve(request.result);
            
        });
    }, [db]);

    const allGroupsAvailable = useCallback(() => {
        return new Promise<number>((resolve) => {
            readGroups()
                .then((groups) => groups.length)
                .then((amount: number) => {
                    if (amount >= MAX_GROUPS) {
                        setMaxGroups(true);
                    }
                    resolve(amount);
                });
        });
    }, [readGroups, setMaxGroups]);

    useEffect(() => {
        if (!db) return;
        readGroups().then((groups) => setGroupsInContext(groups));

        allGroupsAvailable();
    }, [db, readGroups, setGroupsInContext, allGroupsAvailable]);

    return {
        createGroups,
        readGroups,
    };
};
