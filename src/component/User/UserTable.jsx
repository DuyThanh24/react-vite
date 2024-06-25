import { Space, Table, Tag } from 'antd';
import { fetchAllApi } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        loadData()
    }, [])
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

    const loadData = async () => {
        console.log(">>> start");
        const res = await fetchAllApi()
        console.log(">>> end:", res.data);
        setDataTable(res.data)

    }

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