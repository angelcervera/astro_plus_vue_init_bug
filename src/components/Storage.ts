import {atom, computed, map} from 'nanostores'
import type {ExampleModel} from "./StorageModel";

export const exampleStore = map<ExampleModel>({
    flag: false,
    text: ""
})

export const toggleFlag =
    () => exampleStore.setKey("flag", !exampleStore.get().flag);


export const exampleComputed = computed(exampleStore, exampleValue => {
    // This callback will be called on every `users` changes
    return `Flag = [${exampleValue.flag}] Text = [${exampleValue.text}]`
})

exampleStore.listen((value, changed) => {
    console.log(`${changed} new value ${value[changed]}`)
})
