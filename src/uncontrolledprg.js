import { useRef } from 'react';

export default function UserPreferencesForm() {
    const nameRef = useRef(null);
    const colorRef = useRef(null);
    const likesBlueRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const name = nameRef.current.value;
        const favoriteColor = colorRef.current.value;
        const likesBlue = likesBlueRef.current.checked;

        alert(`Name: ${name}\nFavorite Color: ${favoriteColor}\nLikes Blue: ${likesBlue ? "Yes" : "No"}`);
    };

    return (
        <div>
            <h1>User Preferences Form</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Name:
                        <input type="text" ref={nameRef} />
                    </label>
                </p>
                <p>
                    <label>
                        Favorite Color:
                        <select ref={colorRef}>
                            <option value="red">Red</option>
                            <option value="green">Green</option>
                            <option value="blue">Blue</option>
                            <option value="yellow">Yellow</option>
                        </select>
                    </label>
                </p>
                <p>
                    <label>
                        <input type="checkbox" ref={likesBlueRef} />
                        Do you like the color Blue?
                    </label>
                </p>

                <button type="submit">Submit</button>
            </form>

            {/* The summary is displayed in an alert on form submission */}
        </div>
    );
}