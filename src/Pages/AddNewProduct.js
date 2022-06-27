//In the name of Allah

import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const axios = require('axios').default;

export default function AddProductForm() {
    let [name, setName] = useState("");
    let [price, setPrice] = useState("");

    let product = {
        'name':'',
        'price':''
    };
    const navigate = useNavigate();


    function nameChangeHandler(event) {
        setName(event.target.value);
        console.log("Name : " + name);
    }//func

    function priceChangeHandler(event) {
        const result = event.target.value.replace(/\D/g, '');
        setPrice(result);
        console.log("price : " + price);
    }//func

    function submitHandler() {
        product.name = name;
        product.price = price;
        console.log(product);
        let url = "http://127.0.0.1:5212/product/add";

            axios.post(url,product)
            .then((response)=>{
                if(response.status === 200){
                    if(response.data.name === name){
                        console.log("Successful!");
                        navigate('/',{replace:true});
                    }
                }//if
            })
            .catch((error)=>{
                alert("Error Massage : \n"+error);
                console.log(error);
            });

        }//func

        


    return (
        <div>
            <h1>Product</h1>
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
            <button onClick={submitHandler}>Add</button>
        </div>
    );
}//func