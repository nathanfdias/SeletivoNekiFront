import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: 'http://localhost:8080',
});

export const createSession = async (username, password) => {
    return api
    .post(`http://localhost:8080/login`, {
        username: username,
        password: password
    })
    .catch((response) => {
        toast.warning(response.data)
    });
}

export function UseAPI(url) {
    const [carregando, setCarregando] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        api
          .get(url)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setCarregando(false);
          });
      }, []);
    
      return { data, carregando, error };
}