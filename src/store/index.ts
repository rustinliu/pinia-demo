import { defineStore } from 'pinia';
export const mainStore = defineStore('main', {
    state: () => {
        return {
            helloworld: 'hello world',
            count: 0,
        };
    },
    getters: {
        getCountTen(): number {
            return this.count * 10;
        },
    },
    actions: {
        setHelloworld(content: string) {
            this.helloworld = content;
        },
    },
});
