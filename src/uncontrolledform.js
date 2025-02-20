import React,{useRef} from "react";

function UncontrolledForm() {
    const firstRef = useRef(null);
    const lastRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('First Name: ' + firstRef.current.value+ ' Last Name: '+lastRef.current.value);

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <p>First Name: </p>
                <input type="text" ref={firstRef} />
            </label>
            <br></br>
            <label>
                <p>Last Name:</p>
                <input type="text" ref={lastRef} />
            </label>
            <p> <button type="submit">Submit</button> </p>
        </form>
    );
}
export default UncontrolledForm