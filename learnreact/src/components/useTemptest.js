import { useEffect, useState } from "react";

export const useTemptest = (url) => {
    const [users, setUser] = useState([]);
    const [error,setError] = useState(null);
    
    const fetchUsers = async() =>{
        try{
            const users = await fetch("https://jsonplaceholder.typicode.com/users").then(res=>res.json())
            setUser(users)
        }
        catch(error){
            setError(error)
        }
    }

    useEffect(()=>{
        fetchUsers();
    },[])

    return [users,error];
}