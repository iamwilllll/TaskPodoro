export const ErrorLibrary = {
    create(name: string, message: string) {
        const CustomError = class extends Error {
            constructor() {
                super(message);
                this.name = name;
                this.stack = '';
            }

            print() {
                console.error(`${this.name}: ${this.message}`);
            }
        };

        const error = new CustomError();
        error.print();
        return error;
    },

    IndexedDB(message: string) {
        return this.create('IndexedDBError', message);
    },
};
