import * as allActions from './allActions';

export function receiveData(data) {
    return {type: allActions.RECEIVE_DATA, data: data};
}

export function fetchData() {
    return (dispatch) => {
        fetch('http://localhost:3001/locations')
            .then(response =>
                response.json().then(data => ({
                    data: data,
                    status: response.status
                }))
            )
            .then(response => {
                if(response.status === 200){
                    dispatch(receiveData(response.data))
                } else{
                    var flash = {
                        type: 'error',
                        title: 'Error while getting locations.'
                    };
                    dispatch({type: "DISPLAY_FLASH", data: flash})
                }
            });
    };
}