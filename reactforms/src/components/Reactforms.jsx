
import { useState } from "react";
import { Table } from "./Table";

const initState = {
    name: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    maritalstate: false,
    profilephoto: ""
};

export default function ReactForms() {
    const [formData, setFormData] = useState(initState);

    const handleChange = (e) => {

        const { value, checked, type, name } = e.target;

        const val = type === "checkbox" ? checked : value;

        setFormData({ ...formData, [name]: val });
    };

    let postData = () => {
        fetch('http://localhost:3004/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData();
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name :
                        <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age :
                        <input
                            name="age"
                            type="text"
                            value={formData.age}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Address :
                        <input
                            name="address"
                            type="text"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Department  :
                        <select
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                        >
                            <option value="C.A">C.A</option>
                            <option value="Developer">Developer</option>
                            <option value="Teacher">Teacher</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Salary :
                        <input
                            name="salary"
                            type="text"
                            value={formData.salary}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Marital Status :
                        <input
                            name="maritalstate"
                            type="checkbox"
                            checked={formData.maritalstate}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Profile Photo :
                        <input
                            name="profilephoto"
                            type="text"
                            checked={formData.profilephoto}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <input type="submit" value="SUBMIT FORM" />
                </div>
            </form>
            <Table/>
        </div>
    );
}
