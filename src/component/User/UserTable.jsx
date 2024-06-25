import {  Table } from 'antd';

const UserTable = (props) => {
   const {dataTable} = props;
   console.log (">>>cho toi data:", dataTable)
    const columns = [
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


    ];

    return (
        <div
            style={{
                padding: '30px 80px'
            }}
        >
            <Table columns={columns} dataSource={dataTable} />
        </div>

    )
}
export default UserTable;