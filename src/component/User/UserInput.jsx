import React, { useState } from 'react';
import { Button, Input, notification, Modal } from 'antd';
import { createUserAPI } from '../../services/api.service';

const UserInput = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addDataInformation = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        console.log("API Response:", res);
        // debugger
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tao moi user thanh cong"
            })
            // debugger
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        setIsModalOpen(false)
    }
    return (
        <>
            <div>                     
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "30px",
                        padding: "0px 90px"
                    }}                  
                >
                    <h3 style={{ fontSize: "26px" }} className=''>Table User</h3>
                    <Button
                        type='primary'
                        style={{
                            fontSize: "15px",
                            fontWeight: "600",
                            padding: "20px",
                            backgroundColor: "#1c56a8"
                        }}
                        onClick={() => setIsModalOpen(true)}
                    >  Create User </Button>                  
                </div>

                {/* modal */}
                <Modal
                    open={isModalOpen}
                    onOk={() => addDataInformation()}
                    onCancel={() => setIsModalOpen(false)}
                >
                    <p
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#1c56a8",
                            padding: "0px 10px"
                        }}
                    >
                        Create User
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
                            <span>Full Name</span>
                            <Input
                                placeholder="Full Name"
                                value={fullName}
                                onChange={(e) => { setFullName(e.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Email</span>
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Password</span>
                            <Input
                                placeholder="Password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                        </div>
                        <div>
                            <span>Phone</span>
                            <Input
                                placeholder="Phone"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}
export default UserInput;