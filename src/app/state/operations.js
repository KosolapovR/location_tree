import {fetchJsonData} from "./actions";
import {organizeData} from "../utils/organizeData";

const fetchData = () => {
    return (dispatch) => {
        let promise = fetch('https://rcslabs.ru/locations.json');
        promise
            .then(data =>
                data.json()
            )
            .then(json => {
                dispatch(fetchJsonData(organizeData(json)));
            });
    }
};

export {fetchData}