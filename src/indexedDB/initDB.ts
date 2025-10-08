import { ErrorLibrary } from '../lib/errorHandler';

class initDB {
    init = () => {
        return new Promise((resolve, reject) => {
            const request = window.indexedDB.open('task_groups', 1);

            request.onsuccess = (event: Event) => resolve(event);
            request.onerror = () => reject(ErrorLibrary.IndexedDB("IndexedDB can't create"));

            request.onupgradeneeded = (event: Event) => {
                const db = (event.target as IDBOpenDBRequest).result;
                db.createObjectStore('groups', { keyPath: 'id', autoIncrement: true });
            };
        });
    };
}

class indexedDB {
    private db;

    constructor() {
        this.db = new initDB();
    }

    createDB = () => this.db.init();
}

export const indexedDBManager = new indexedDB();
