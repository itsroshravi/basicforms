import React,{useState} from "react";

function ControlledForm() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form>
            <label>
                Name:
                <input type="text" value={inputValue} onChange={handleChange} />
            </label>
            <p>Input Value: {inputValue}</p>
        </form>
    );
}
export default ControlledForm