import {CHANGE_TREE_MODE, FETCH_JSON_DATA} from "./types";

const initialState = {
    treeMode: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JSON_DATA: {
            return {...state, tree: action.payload}
        }
        case CHANGE_TREE_MODE: {
            return {...state, treeMode: !state.treeMode}
        }
        default: return state
    }
};

export default reducer;