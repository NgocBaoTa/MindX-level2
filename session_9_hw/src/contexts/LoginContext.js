import { useState } from "react";
import { createContext } from "react";

const LoginContext = createContext()

function LoginProvider({children}) {
    const [login, setLogin] = useState(false)

    return (
        <div>
            <LoginContext.Provider
                value={{
                    login, 
                    setLogin,
                }}
            >
                {children}
            </LoginContext.Provider>
        </div>
    )
}

export {LoginContext, LoginProvider}