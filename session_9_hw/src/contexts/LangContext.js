import { useState } from "react";
import { createContext } from "react";

const LangContext = createContext()

function LangProvider({children}) {
    const [lang, setLang] = useState('VI')

    return (
        <div>
            <LangContext.Provider
                value={{
                    lang, 
                    setLang
                }}
            >
                {children}
            </LangContext.Provider>
        </div>
    )
}

export {LangContext, LangProvider}