import React,{useState} from "react";

export default function ConsolidatedForm() {
    const [formData, setFormData] = useState({ fname: '',lname:'', email: '' });
    const [error,setError]=useState({fname:'',lname:''})

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });

        if (name === 'fname' || name === 'lname') {
            if (value.length < 5) {
                setError({ ...error, [name]: 'Must have at least 5 characters' });
            } else {
                setError({ ...error, [name]: '' });
            }
        }
    };

    const handleSubmit = () => {
            alert(`FName: ${formData.fname} \n LName: ${formData.lname} \nEmail: ${formData.email}  `)
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>
            <label>
                First Name:
                <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
            </label>
            </p>
            {error.fname && <div style={{ color: 'red' }}>{error.fname}</div>}
            
            <p>
            <label>
                Last Name:
                <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
            </label>
            </p>
            {error.lname && <div style={{ color: 'red' }}>{error.lname}</div>}
            <p>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            </p>
            <button type="submit">Submit</button>
        </form>
    );
}