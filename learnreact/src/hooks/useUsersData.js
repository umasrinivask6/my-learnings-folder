import { useEffect, useState } from 'react'

const useUsersData = (url) => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(()=>{
        fetchUsers(url)
    },[url])

    const fetchUsers = () =>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(url, requestOptions)
            .then(res=>res.json())
            .then(data=>{setUsers(data)})
            .catch(err=> setError(err));
    }
    console.log(users)
    return [users, error]
}

    // const fetchAxiosUsers = async() =>{
    //     Axios(url,{request:"GET"})
    //     .then(res=>{setUsers(res.data)})
    //     .catch(err=>{
    //         setError(err)
    //     })
    // }

export default useUsersData;


