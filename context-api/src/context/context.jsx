import { createContext, useState } from "react";

export const AuthContext = createContext();


function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState("");

    let validateLogin = async () => {
        const res = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            })
        });
        const data = await res.json();

        return ([data.token, res.status]);
    };

    const toggleAuth = async () => {
        if (!isAuth) {
            let res = await validateLogin()
            if (res[1] == "200") {
                setIsAuth(!isAuth)
                setToken(res[0])
            }
        }
        else
        setIsAuth(!isAuth);
    };


    return (
        <AuthContext.Provider value={{ isAuth, toggleAuth, token }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;