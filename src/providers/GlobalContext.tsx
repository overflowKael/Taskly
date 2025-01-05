"use client";
import { createContext } from "react";
import { useState} from "react";
import { useContext } from "react";

type GlobalContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({children} : { children : React.ReactNode}) => {

    const [theme , setTheme] = useState("light");

    return (
        <GlobalContext.Provider value={{theme, setTheme}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);

    if (context === undefined){
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }
    else {
        return context;
    }
}