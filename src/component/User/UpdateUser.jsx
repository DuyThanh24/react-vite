
import React, { useEffect, useState } from 'react';
import {  Input, notification, Modal } from 'antd';
import { updateUserAPI } from '../../services/api.service'

const UpdateUserModal = (props) => {

    const { isModalOpenUpdate, setIsModalOpenUpdate, dataUpdate, setDataUpdate, loadData } = props;

    const [fullName, setFullName] = useState('');
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');

    // next dataUpdate != prev dataUpdate
    useEffect(() => {
        console.log(">>check props:", dataUpdate);
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleOk = async () => {
        const res = await updateUserAPI(id, fullName, phone);
        console.log('test put:', res)
        if (res.data) {
            notification.success({
                message: "Update user",
                description: "Thay doi user thanh cong"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        await loadData()
        resetAndCloseModal()
    }




    const resetAndCloseModal = () => {
        setIsModalOpenUpdate(false)
        setId("")
        setFullName("");
        setPhone("");
        setDataUpdate(null);
    }
    return (
        <Modal
            open={isModalOpenUpdate}
            onOk={handleOk}
            okText={"Save"}
            onCancel={() => resetAndCloseModal()}>
            <p
                style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#1c56a8",
                    padding: "0px 10px"
                }}
            >
                Update a User
            </p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "20px 10px"
                }}
            >
                <div>
                    <span>ID</span>
                    <Input
                        disabled
                        value={id}
                    />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(e) => { setFullName(e.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone</span>
                    <Input
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value) }}
                    />
                </div>
            </div>
        </Modal>

    )
}
export default UpdateUserModal;