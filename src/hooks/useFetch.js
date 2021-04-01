import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function useFetch() {
    const [user, setUser] = useState([]);
    // const [userlist, setUserlist] = useState([]);

    useEffect(() => {
        const apiUrl = `https://panorbit.in/api/users.json`;
        axios
          .get(apiUrl)
          .then(res => {
              console.log(res.data.users);
              setUser(res.data.users);
          })
          .catch(err => console.log(err));
    }, [])

    
    
      return [user,setUser];
}
