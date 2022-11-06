import { Loader } from "./components";

export default {
    install: (app, options = {}) => {
        app.component("Loader", Loader);
        app.provide("Loader", options.icon);
    },
};

export { Loader };