import { useEffect, useState } from 'react';
import { indexedDBManager } from '../indexedDB';

export const useGroup = () => {
    const [db, setDB] = useState<IDBDatabase | null>(null);

    useEffect(() => {
        indexedDBManager.createDB().then((res) => setDB(res));
    }, []);

    const addGroup = () => {
        if (!db) return;
        const transaction = db?.transaction('groups', 'readwrite');
        const objectStore = transaction?.objectStore('groups');

        objectStore?.add({ wil: 'a' });
    };

    return {
        addGroup,
    };
};
