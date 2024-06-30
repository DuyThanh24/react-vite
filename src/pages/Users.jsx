import UserInput from "../component/User/UserInput";
import UserTable from '../component/User/UserTable';
import { useEffect, useState } from 'react';
import { fetchAllApi } from '../services/api.service';


const User = () => {
    const [dataTable, setDataTable] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState();

    console.log ("check current:", current);
    console.log ("check pageSize:", pageSize);
    useEffect(() => {
        loadData()
    }, [current, pageSize]);
    const loadData = async () => {
        console.log(">>> start");
        const res = await fetchAllApi(current, pageSize)

        if (res.data) {
            setDataTable(res.data.result);
            setCurrent (res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal (res.data.meta.total)

        }


    }
    // lift-up state 
    return (
        <>
            <UserInput loadData={loadData} />

            <UserTable
                dataTable={dataTable}
                loadData={loadData}
                setDataTable={setDataTable}

                current={current}
                setCurrent={setCurrent}
                pageSize={pageSize}
                setPageSize={setPageSize}
                total={total}
            />
        </>
    )
}
export default User;