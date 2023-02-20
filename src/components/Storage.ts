import {atom} from 'nanostores'

export const counterStore = atom<number>(0)

export const add = () => counterStore.set(counterStore.get() + 1);

export const subtract = () => counterStore.set(counterStore.get() - 1);
