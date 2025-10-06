import { ErrorLibrary } from '../lib/errorHandler';

class IndexedDB {
    private readonly GROUP_INDEXED_NAME: string;
    private request!: IDBOpenDBRequest;

    constructor() {
        this.GROUP_INDEXED_NAME = 'GROUPS';
    }

    initDB = () => {
        return new Promise((resolve, reject) => {
            if (!window.indexedDB) ErrorLibrary.IndexedDB('"IndexedDB" does not exist in your browser');

            this.request = window.indexedDB.open(this.GROUP_INDEXED_NAME, 1);

            this.request.onerror = (event) => reject(event.target);
            this.request.onsuccess = (event) => resolve(event.target);

            this.request.onupgradeneeded = (event) => {
                console.log(event.target);
            };
        });
    };
}

export const indexedDBManager = new IndexedDB();

export class indexedDB {}
