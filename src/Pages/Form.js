//In the name of Allah

import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const axios = require('axios').default;

export default function Form() {
    let [name, setName] = useState("");
    let [password, setPassword] = useState("");

    let user = {
        'name':'',
        'password':''
    };
    const navigate = useNavigate();


    function nameChangeHandler(event) {
        setName(event.target.value);
        console.log("Name : " + name);
    }//func

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
        console.log("Password : " + password);
    }//func

    function submitHandler() {
        user.name = name;
        user.password = password;
        console.log(user);
        let url = "http://127.0.0.1:5212/user/verify";

            axios.post(url,user)
            .then((response)=>{
                if(response.status === 200){
                    if(response.data.name === name){
                        console.log("Successful!");
                        navigate('/menu',{replace:true});
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
            <h1>Form</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={nameChangeHandler}
            />
            <br /><br />
            <input
                type="text"
                placeholder="Password"
                value={password}
                onChange={passwordChangeHandler}
            />
            <br /><br />
            <button onClick={submitHandler}>Login</button>
        </div>
    );
}//func