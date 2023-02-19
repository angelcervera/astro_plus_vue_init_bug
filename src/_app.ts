import type { App } from "vue";
import { createPinia } from 'pinia'

export default (app: App) => {
    console.log("Why is initializing one time per component!", app.config)
    app.use(createPinia());
};
