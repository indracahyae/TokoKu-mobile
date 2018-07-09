import axios from 'axios';
const baseUrl = 'http://192.168.1.55:3000/restapi/mobile';
export const imgUrl = 'http://192.168.1.55:3000/images/barang/';

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

export const getProvinsi = () =>
    axios.get(`${baseUrl}/getProvinsi`)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });

export const getKota = (id) =>
    axios.get(`${baseUrl}/getKota/${id}`)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });

export const registerCustomer = (data) =>
    axios.post(`${baseUrl}/registerCustomer`,data)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });

export const loginUser = (data) =>
    axios.post(`${baseUrl}/login`,data)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });

export const updateProfile = (uid,data) =>
    axios.post(`${baseUrl}/myprofile/${uid}`,data)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });

// MENU HOME
export const getBarangs = () =>
    axios.get(`${baseUrl}/barangs`)
    .then((res)=>{
        return res.data;
    })
    .catch((error)=>{
        console.log(error);
    });