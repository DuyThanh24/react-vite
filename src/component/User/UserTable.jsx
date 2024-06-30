import { Table, Popconfirm, notification, Pagination } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './UpdateUser';
import { useState } from 'react';
import ViewUserDetail from './ViewUserDetail'
import { deleteApi } from '../../services/api.service';
const UserTable = (props) => {
    const { dataTable, loadData, current, setCurrent, pageSize, setPageSize, total } = props;
    const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);
    const [openDetail, setOpenDetail] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [dataDetail, setDataDetail] = useState(null);

    const confirm = async (id) => {
        const res = await deleteApi(id)
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Xoa user thanh cong"
            })
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }
        await loadData()
    }

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>
                        {/* bắt đầu từ số 0 */}{/* {index} */}
                        {/* bắt đầu từ số 1  */} {
                        (index + 1) + (current -1)* pageSize
                        }
                    </>
                )
            }
        },
        {
            title: 'ID',
            key: '_id',
            render: (_id, record) => (
                <a
                    onClick={() => {
                        setOpenDetail(true);
                        setDataDetail(record);
                        console.log("ngu nhu thanh:", record)
                    }}

                >
                    {record._id}
                </a>
            ),
        },
        {
            title: 'Name',
            dataIndex: 'fullName',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "20px" }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record);
                            setIsModalOpenUpdate(true);
                        }}
                        style={{ cursor: "pointer", color: "blue", fontSize: "18px" }} />

                    <Popconfirm
                        title="Delete the task"
                        placement="left"
                        onConfirm={() => confirm(record._id)}
                        description="Are you sure to delete this task?"
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red", fontSize: "18px" }} />
                    </Popconfirm>

                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log(">>check onchange:", { pagination, filters, sorter, extra })
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current)
            }
        }
        if (pagination && pagination.pageSize) {
            setPageSize(+pagination.pageSize)
        }
    };

    return (
        <div
            style={{
                padding: '30px 80px'
            }}
        >
            <Table
                columns={columns}
                dataSource={dataTable}
                pagination={{
                    current: current,
                    pageSize: pageSize,
                    showSizeChanger: true,
                    total: total,
                    showTotal: (total, range) => {
                        return (
                            <div> {range[0]}-{range[1]} trên {total} rows</div>
                        )
                    }
                }}
                onChange={onChange}
            />

            <UpdateUserModal
                isModalOpenUpdate={isModalOpenUpdate}
                setIsModalOpenUpdate={setIsModalOpenUpdate}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadData={loadData}
            />
            <ViewUserDetail
                openDetail={openDetail}
                setOpenDetail={setOpenDetail}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                loadData={loadData}
            />
        </div>

    )
}
export default UserTable;