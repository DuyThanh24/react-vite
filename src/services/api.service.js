import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const fetchAllApi = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND);
}

const deleteApi = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`
    return axios.delete(URL_BACKEND);
}

const updateUserAPI = (_id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        // _id: _id
        // fullName: fullName
        // phone: phone,
        _id,
        fullName,
        phone,
    }
    return axios.put(URL_BACKEND, data);
}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = "/api/v1/file/upload"
    const config = {
        headers: {
            "upload-type": folder,
            "Content-Type": "multipart/form-data"
        }
    }
    const formData = new FormData()
    formData.append("fileImg", file)
    return axios.post(URL_BACKEND, formData, config);
}

//Cập nhật lại avatar
const handleUploadFileUpdateUserAPI = (avatar, _id, fullName, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        _id,
        avatar,
        fullName,
        phone,
    }
    return axios.put(URL_BACKEND, data);
}

const handleRegister = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const handleLogin = (email, password) =>{
    const URL_BACKEND = "/api/v1/auth/login"
    const data = {
        username: email,
        password: password,
        // delay: 4500
    }
    return axios.post(URL_BACKEND, data);
}

export {
    createUserAPI,
    fetchAllApi,
    updateUserAPI,
    deleteApi,
    handleUploadFile,
    handleUploadFileUpdateUserAPI,
    handleRegister,
    handleLogin
}