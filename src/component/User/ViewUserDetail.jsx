
import { Drawer, Button, notification } from 'antd';
import { useState } from 'react';
import { handleUploadFile, handleUploadFileUpdateUserAPI } from '../../services/api.service';

const ViewUserDetail = (props) => {
    const { openDetail, setOpenDetail, dataDetail, setDataDetail, loadData } = props;
    console.log("test:", dataDetail);
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleUpdateAvatar = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            return
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file); // Fixed this line
            setPreview(URL.createObjectURL(file)); // Fixed this line
        }
    };
    const updateAvatar = async () => {
        const resUpload = await handleUploadFile(selectedFile, "avatar");

        if (resUpload.data) {
            const newAvatar = resUpload.data.fileUploaded;
            console.log(">>>check newAvatar:", newAvatar);

            //Cập nhật lại avatar
            const resUploadAvatar = await handleUploadFileUpdateUserAPI(
                newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.phone
            );
            if (resUploadAvatar.data) {
                setOpenDetail(false)
                setPreview(null);
                setSelectedFile(null);
                await loadData()
                notification.success(
                    {
                        message: " Upload File",
                        description: "Cập nhật avatar thành công"
                    }
                )
            } else {
                notification.error(
                    {
                        message: " Error update avatar",
                        description: JSON.stringify(resUploadAvatar.message)
                    }
                )
            }

        } else {
            notification.error(
                {
                    message: " Error Upload File",
                    description: JSON.stringify(resUpload.message)
                }
            )
            return;
        }
        
    }



    return (
        <>
            <Drawer
                title="Information"
                style={{ fontWeight: "bold" }}
                open={openDetail}
                onClose={() => {
                    setDataDetail(null)
                    setOpenDetail(false)
                }}
            >
                {dataDetail ?
                    <div
                        style={{ display: "flex", flexDirection: "column", gap: "25px", fontSize: "17px" }}>
                        <p> <span style={{ fontWeight: "bold" }}>ID:</span> {dataDetail._id}</p>
                        <p> <span style={{ fontWeight: "bold" }}>Full Name:</span> {dataDetail.fullName}</p>
                        <p> <span style={{ fontWeight: "bold" }}>Email:</span> {dataDetail.email}</p>
                        <p> <span style={{ fontWeight: "bold" }}>Phone:</span> {dataDetail.phone}</p>

                        <div className="image_avata">
                            <span>Avatar</span> <br />
                            <div style={{
                                marginTop: "10px",
                                height: "140px",
                                width: "150px",
                                border: "2px solid #667b98"
                            }}>
                                <img
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "contain"
                                    }}
                                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                            </div>
                            <br />
                            <div>
                                <label
                                    style={{
                                        padding: "8px",
                                        backgroundColor: "GrayText",
                                        borderRadius: "10px", color: "white",
                                        display: "block",
                                        width: "fit-content"
                                    }}
                                    htmlFor="uploadAvatar"> UpLoad
                                </label>
                                <input
                                    onChange={(event) => handleUpdateAvatar(event)}
                                    type="file" hidden id="uploadAvatar" />
                            </div>

                            {preview &&
                                <div style={{
                                    marginTop: "10px",
                                    height: "140px",
                                    width: "150px",
                                }}>
                                    <img
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            objectFit: "contain",
                                            marginBottom: "20px"
                                        }}
                                        src={preview} />

                                    <Button
                                        onClick={() => updateAvatar()}
                                        type="primary">Save Avatar</Button>
                                </div>}
                        </div>
                    </div>
                    :
                    <div>
                        <p>Không có dữ liệu</p>
                    </div>}

            </Drawer>
        </>
    );
};
export default ViewUserDetail;