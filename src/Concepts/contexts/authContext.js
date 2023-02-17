import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
    const [user, setUser] = useState({
        userId : 1,
        fullName : 'tindeptrai',
        email : 'tindeptrai@gmail.com',
        avatar : 'https://images.unsplash.com/photo-1670161599938-3c143c778231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80 '

    })
    const value = {user, setUser}
    return (
        <AuthContext.Provider value = {value} {...props}></AuthContext.Provider>
    )
}
const useAuth = () => {
    const context = useContext(AuthContext);
    if (typeof context === 'undefined') throw new Error ('useAuth must be used within an AuthProvider')
    return context
}
export {useAuth, AuthProvider} ;