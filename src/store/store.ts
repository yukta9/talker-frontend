import { action, createStore, createTypedHooks } from "easy-peasy";
import ModelInIt from "../models";

let InitialState = {};

const Store = createStore({
    ...ModelInIt,
    reset: action(() => ({
        ...InitialState
    }))
})

InitialState = Store.getState();

const typedHooks = createTypedHooks<typeof ModelInIt>();
const appState = typedHooks.useStoreState;
const appAction = typedHooks.useStoreActions;

export { appState, appAction};

export default Store;




