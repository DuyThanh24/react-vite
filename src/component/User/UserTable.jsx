import { Table } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './UpdateUser';



const UserTable = (props) => {
    const { dataTable } = props;

    const columns = [
        {
            title: 'ID',
            key: '_id',
            render: (_id, record) => (
                <a>{record._id}</a>
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
                    <EditOutlined style={{ cursor: "pointer", color: "blue", fontSize: "18px" }} />
                    <DeleteOutlined style={{ cursor: "pointer", color: "red", fontSize: "18px" }} />
                </div>
            ),
        },
    ];

    return (
        <div
            style={{
                padding: '30px 80px'
            }}
        >
            
            <Table columns={columns} dataSource={dataTable} />
            <UpdateUserModal />
        </div>

    )
}
export default UserTable;