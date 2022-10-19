import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

    let initregister = {
        email: "",
        password: ""
    }

    let [registerData, setregisterData] = useState(initregister)
    let [error, seterror] = useState(false)

    let navigate = useNavigate()

    const handleChange = (e) => {
        // do something
        let { name, value } = e.target;

        setregisterData((register) => ({
            ...register,
            [name]: value
        }));

    };

    async function postData() {
        const res = await fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerData)
        });
        const token = await res.json();

        if (res.status == "200") {
            navigate('/login')
        }
        else
        {
            console.log(res)
        }

    }

    function handleSubmit() {

        if (registerData.email === "" || registerData.password === "") {
            seterror(true)
        }
        else {
            postData()
        }

    }

        const { email, password } = registerData;

        return (
            <div>

                <input type="text" value={email} name="email" onChange={handleChange} placeholder="Email" /> <br /> <br />
                <input type="password" value={password} name="password" onChange={handleChange} placeholder="Password" /> <br /> <br />
                <button onClick={handleSubmit}>SUBMIT</button>
                <br />
                <p style={{ "color": "red" }}>{error ? "Fill all details" : ""}</p>
            </div>
        )
    }