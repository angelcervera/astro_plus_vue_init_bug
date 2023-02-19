import { defineStore } from "pinia";
import { ref } from 'vue';



export const useCounter = defineStore("SharedStorage", () => {
    const count = ref(0);
    const add = () => (count.value = count.value + 1);
    const subtract = () => (count.value = count.value - 1);

    return {
        count,
        add,
        subtract,
    };
});
