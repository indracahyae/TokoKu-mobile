import axios from 'axios';
const baseUrl = 'http://192.168.1.42:3000/restapi/mobile';

export const getMyProfile = (id) =>
    axios.get(`${baseUrl}/myprofile/${id}`)
    .then((res)=>{
        return res.data[0];
    })
    .catch((error)=>{
        console.log(error);
    });

export const updatePassword = (id,data) =>
    axios.post(`${baseUrl}/updatePassword/${id}`,data)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });

export const lupaSandi = (email) =>
    axios.get(`${baseUrl}/lupaSandi/${email}`)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });