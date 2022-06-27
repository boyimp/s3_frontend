//In the name of Allah

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
const axios = require('axios').default;

export default function EditProductForm() {
    let [name, setName] = useState('');
    let [price, setPrice] = useState(0.0);
    let [oldProductName,setOldProductName] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    let newProduct = {
        'name': '',
        'price': 0.0
    };

    useEffect(() => {
        let getProductByNameUrl = "http://127.0.0.1:5212/product/get/" + location.state.name;
        axios.get(getProductByNameUrl)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    let name = response.data.name.toString();
                    setOldProductName(name);
                    setName(name);
                    setPrice(Number.parseFloat(response.data.price));
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios

    }, [location]);//useEffect


    function nameChangeHandler(event) {
        setName(event.target.value)
        console.log("Name : " + name);
    }//func

    function priceChangeHandler(event) {
        const result = event.target.value.replace(/\D/g, '');
        setPrice(result);
        console.log("price : " + price);
    }//func

    function submitHandler() {
        newProduct.name = name;
        newProduct.price = price;
        console.log(newProduct);

        let addProductUrl = "http://127.0.0.1:5212/product/update?oldProductName="+oldProductName;
        console.log(addProductUrl);

        axios.put(addProductUrl,newProduct)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.name === name) {
                        console.log("Successful!");
                        navigate('/', { replace: true });
                    }//if
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios

    }//func




    return (
        <div>
            <h1>product</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={nameChangeHandler}
            />
            <br /><br />
            <input
                type="text"
                placeholder="Price"
                value={price}
                onChange={priceChangeHandler}
            />
            <br /><br />
            <button onClick={submitHandler}>Edit</button>
        </div>
    );
}//func