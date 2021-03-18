import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333' // ou pelo id pra carregar as imagens no mobile 
})

export default api;