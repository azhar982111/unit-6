import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginIsAuth } from "../redux/action";
import { Input } from '@chakra-ui/react'

import { Button } from '@chakra-ui/react'

export default function Login() {

    let initlogin = {
        email: "",
        password: ""
    }

    let [loginData, setloginData] = useState(initlogin)
    let [error, seterror] = useState(false)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    const handleChange = (e) => {
        let { name, value } = e.target;

        setloginData((login) => ({
            ...login,
            [name]: value
        }));
    };

    async function postData() {
        const res = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
        
        if(res.status == "200"){
            dispatch(getLoginIsAuth())
            navigate('/')
        }
         
        else{
            seterror(true)
        }
    }

    function handleSubmit() {

        postData()

    }

    const { email, password } = loginData;

    return (
        <div style={{width: "40%", marginLeft: "30%"}}>
            <br/><br/>
            <Input type="text" value={email} name="email" onChange={handleChange} placeholder="Email" /> <br /> <br />
            <Input type="password" value={password} name="password" onChange={handleChange} placeholder="Password" /> <br /> <br />
            <Button onClick={handleSubmit}>Login</Button>
            <br/>
            <p style={{"color":"red"}}>{error?"Invaild credentials":""}</p>
        </div>
    )
}