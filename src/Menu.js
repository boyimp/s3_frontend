//In the name of Allah
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
const axios = require('axios').default;



export default function Count(){
    let [products,setProducts] = useState([{'id':'','name':'','price':0.0}]);
    let navigate = useNavigate();


    useEffect(()=>{
        let getProductsUrl = "http://127.0.0.1:5212/product/get";
        axios.get(getProductsUrl)
            .then((response) => {
                if (response.status === 200) {
                    setProducts(products = response.data);
                    console.log(products);
                }//if
            }).catch((error) => {
                alert("Error Massage : \n" + error);
                console.log(error);
            });//axios
    },[]);//useEffect

    function addProductHandler(){
        navigate('/product/add');
    }//func
    function editProductHandler(event,param){
        navigate('/product/edit',{state:{name:param}});
    }//func

    function removeProductHandler(event,param){
        //navigate('/product/edit',{state:{name:param}});
    }//func

    return (
        <div className='Count'>
            <h1>Dashboard</h1>
            <button onClick={addProductHandler} >Add Product</button>

            <div>
                <ul>{products.map((val,index)=>{ 
                    return <div> <li key={index}>{"name : "+val.name +" | price : "+val.price}</li> 
                    <button onClick={event=>editProductHandler(event,val.name)}>Edit Product</button>
                    <button onClick={removeProductHandler}>Remove Product</button>
                    </div>})}</ul>
            </div>
        </div>
    );
}//func
