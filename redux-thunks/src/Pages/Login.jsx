import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    let initlogin = {
        email: "",
        password: ""
    }

    let [loginData, setloginData] = useState(initlogin)
    let [error, seterror] = useState(false)

    let navigate = useNavigate()

    const handleChange = (e) => {
        // do something
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
        const token = await res.json();
        
        if(res.status == "200"){
            navigate('/dashboard')
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
        <div>

            <input type="text" value={email} name="email" onChange={handleChange} placeholder="Email" /> <br /> <br />
            <input type="password" value={password} name="password" onChange={handleChange} placeholder="Password" /> <br /> <br />
            <button onClick={handleSubmit}>LOGIn</button>
            <br/>
            <Link to="/register">NEW USER? register Here</Link>
            <p style={{"color":"red"}}>{error?"Invaild credentials":""}</p>
        </div>
    )
}