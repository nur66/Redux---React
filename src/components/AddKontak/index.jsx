import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addKontak, getListKontak } from '../../actions/kontakAction';

function AddKontak() {

    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');

    const dispatch = useDispatch();
    const { addKontakResult } = useSelector((state) => state.KontakReducer);    // agar auto reload

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("1, Masuk Handle Submit");
        // addKontak adalah nama action nya, dan dia akan kirim parameter nama dan nohp
        dispatch(addKontak({nama: nama, nohp: nohp}))
    }

    // agar auto reload
    useEffect(() => {

        // agar auto reload
        if(addKontakResult) {
            console.log("5. Masuk component did update");
            dispatch(getListKontak());
            setNama('');    // agar hilang di form inputnya
            setNohp('');
        }
        // jika ada perubahan, contohnya state addKontakResult, setiap yang ingin ada perubahan masuk ke array deps ini
    }, [addKontakResult, dispatch])

    return (
        <div>
            <h3>Add Kontak Page</h3>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" name="nama" placeholder='Nama . . .' value={nama} onChange={(event) => setNama(event.target.value)} />

                <input type="text" name="nohp" placeholder='No. HP . . .' value={nohp} onChange={(event) => setNohp(event.target.value)} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddKontak;