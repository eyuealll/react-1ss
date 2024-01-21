import { createContext/*creating a context you can make it aware what are the default option what are the data which is available to you */ , useContext/* in the context useContext was getting used */   } from "react";

/* this createContext is also capable of taking the data */
export const ThemeContext/* we use this for wrapping */ = createContext({/* we dont define the date (we cant define the function but the function define outer this) but we actually provide just a generelize info about it */ 
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () => {}
})
/* this is used like in miniContext project userContextProvider and userContextProvider.provider */
export const ThemeProvider = ThemeContext.Provider /* this variable is whose ultimately value is ThemeProvider.Provider hover your cusror to ThemeProvider*/

export default function useTheme() {
    return useContext(ThemeContext) /* this means useContext have ThemeContext ThemeContext have value all these are in useTheme function like we use as hook in other part. before this in miniContext we provide useContext with the context name in all component thats need value of context  but now we all end on this part so we use only useTheme custom hook when ever we want */
}