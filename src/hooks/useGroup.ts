import { useEffect } from 'react';
import { indexedDBManager } from '../indexedDB';

export const useGroup = () => {
    useEffect(() => {
        indexedDBManager
            .initDB()
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.error(err));
    }, []);

    const addGroup = () => {
        console.log('a');
    };

    return {
        addGroup,
    };
};
