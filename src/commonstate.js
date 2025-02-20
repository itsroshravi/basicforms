import React,{useState} from "react";

export default function ConsolidatedForm() {
    const [formData, setFormData] = useState({ fname: '',lname:'', email: '' });
   

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({...formData, [name]: value });
        
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
            
            
            <p>
            <label>
                Last Name:
                <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
            </label>
            </p>
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