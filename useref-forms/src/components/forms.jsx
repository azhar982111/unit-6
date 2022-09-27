
import { useState } from "react";

const initState = {
    name: "",
    gender: "",
    role: "",
    maritalStatus: false,
};

export default function Form() {
    const [formData, setFormData] = useState(initState);
    const [users, setUsers] = useState([]);

    const handleChange = (e) => {

        const { value, checked, type, name } = e.target;

        const val = type === "checkbox" ? checked : value;

        setFormData({ ...formData, [name]: val });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData]);
        console.log(users)
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
                        Gender :
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                    Role :
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="developer">developer</option>
                            <option value="c.a">c.a</option>
                            <option value="teacher">teacher</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        Marital Status :
                        <input
                            name="maritalStatus"
                            type="checkbox"
                            checked={formData.maritalStatus}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <input type="submit" value="SUBMIT FORM" />
                </div>
            </form>
        </div>
    );
}
