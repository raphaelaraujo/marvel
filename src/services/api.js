import axios from "axios";

//BASE_URL: http://gateway.marvel.com/v1/public/
//URL: characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

//public_key: 9153bfb4aea6c854a88a10d5b4dcc6b4 
//timestamp: 1655487037
// hash: 75d45cd14d99bcad4c234a4ba0b82fb2

const api = axios.create(
    {
        baseURL: 'http://gateway.marvel.com/v1/public/',
    }
);

export default api;