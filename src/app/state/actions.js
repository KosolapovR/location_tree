import {CHANGE_TREE_MODE, FETCH_JSON_DATA} from "./types";

const fetchJsonData = (payload) => ({
    type: FETCH_JSON_DATA,
    payload
});

const changeTreeMode = () => ({
    type: CHANGE_TREE_MODE
});

export {fetchJsonData, changeTreeMode}