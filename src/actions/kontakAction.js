import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";

// READ / GET kontak
export const getListKontak = () => {
    // console.log("2. Masuk Action");
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
            // console.log("3. Berhasil dapet data : ", response.data);
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
            // console.log("3. gagal dapet data : ", error.message);
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

// CREATE / Add Kontak
export const addKontak = (data) => {
    // console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
        type: ADD_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
        });

        // add Kontak
        axios({
        method: "POST",
        url: "http://localhost:3000/kontak",
        timeout: 120000,
        data: data
        })
        .then((response) => {
            // berhasil get api
            // console.log("3. Berhasil dapet data : ", response.data);
            dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
            },
            });
        })
        .catch((error) => {
            // gagal get api
            // console.log("3. gagal dapet data : ", error.message);
            dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
            },
            });
        });
    };
};

// DELETE / delete kontak
export const deleteKontak = (id) => {
    console.log("2. Masuk Action");
    return (dispatch) => {
        // loading
        dispatch({
        type: DELETE_KONTAK,
        payload: {
            loading: true,
            data: false,
            errorMessage: false,
        },
        });

        // delete Kontak
        axios({
        method: "DELETE",
        url: "http://localhost:3000/kontak/"+id,
        timeout: 120000
        })
        .then((response) => {
            // berhasil delete api
            console.log("3. Berhasil dapet data : ", response.data);
            dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
            },
            });
        })
        .catch((error) => {
            // gagal delete api
            console.log("3. gagal dapet data : ", error.message);
            dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
            },
            });
        });
    };
};