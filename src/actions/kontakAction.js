import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
    console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
        type: GET_LIST_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
        });

        // get API
        axios({
        method: "GET",
        url: "http://localhost:3000/kontak",
        timeout: 120000,
        })
        .then((response) => {
            // berhasil get api
            console.log("3. Berhasil dapet data : ", response.data);
            dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
            },
            });
        })
        .catch((error) => {
            // gagal get api
            console.log("3. gagal dapet data : ", error.message);
            dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
            },
            });
        });
    };
};
