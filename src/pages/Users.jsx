import UserInput from "../component/User/UserInput";
import UserTable from "../component/User/UserTable";
import { useEffect, useState } from 'react';
import { fetchAllApi } from '../services/api.service';
const User = () => {
    const [dataTable, setDataTable] = useState([
    ]);

    useEffect(() => {
        loadData()
    }, []);
    const loadData = async () => {
        console.log(">>> start");
        const res = await fetchAllApi()
        console.log(">>> end:", res.data);
        setDataTable(res.data)
    }
    // lift-up state 
    return (
        <>
            <UserInput loadData={loadData} />
            <UserTable dataTable={dataTable} />
        </>
    )
}
export default User;