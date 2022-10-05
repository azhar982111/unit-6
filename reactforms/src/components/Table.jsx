import { useEffect, useState} from "react";
import { TableItems } from "./TableItems";

export function Table() {

    const [employee, setEmployee] = useState([]);

    let getData = async () => {
        let res = await fetch('http://localhost:3004/employee');
        let data = await res.json()
        setEmployee(...employee, data)
    }

    useEffect(() => {
        getData()
    },[])


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Marital Status</th>
                        <th>Profile Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {employee.map((ele, index) => (
                        <TableItems ele={ele} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}