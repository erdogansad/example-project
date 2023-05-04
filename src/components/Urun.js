import React, {useEffect, useState} from 'react'
import { useParams, useHistory } from "react-router-dom";
//import axios from "axios";
import "./Urun.css";

const Urun = (props) => {
    const { products } = props;
    const { gelenId } = useParams();
    const nav = useHistory();

    const [urun, setUrun] = useState({});

    useEffect(() => {
        //let prod = products.filter(product => product.id === gelenId);
        let prod = products.find(product => product.id === gelenId);
        setUrun(prod);
    }, [products, gelenId]) 

    /* useEffect(() => {
        axios.get("https://64517f5ba322196911649cd9.mockapi.io/users/"+gelenId)
            .then(response => {
                setUrun(response.data);
            })
    }, [gelenId]) */

    if(urun === undefined) {
        return (<div>Yükleniyor...</div>)
    }

    return (
        <div className='product-card'>
            <img className='product-card-image' src={urun.img} alt="" />
            <div className='product-card-text'>
                <h4 onClick={() => nav.goBack()}>Geri</h4>
                <h2>{urun.product}</h2>
                <h3>{urun.price}</h3>
                <button>Satın Al</button>
            </div>
        </div>
    )
}

export default Urun