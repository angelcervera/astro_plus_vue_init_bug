import type { App } from "vue";
import { createPinia } from 'pinia'

export default (app: App) => {
    console.log("This should be run one time per page loaded: Initializing", app.config)
    app.use(createPinia());
};
