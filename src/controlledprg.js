import { useState } from 'react';

export default function UserPreferencesForm() {
    const [name, setName] = useState('');
    const [favoriteColor, setFavoriteColor] = useState("red");
    const [likesBlue, setLikesBlue] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleColorChange = (event) => {
        setFavoriteColor(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setLikesBlue(event.target.checked);
    };

    return (
        <div>
            <h1>User Preferences Form</h1>
            <form>
                <p>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                </p>
                <p>
                <label>
                    Favorite Color:
                    <select value={favoriteColor} onChange={handleColorChange}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                    </select>
                </label>
                </p>
                <p>
                <label>
                    <input type="checkbox" checked={likesBlue} onChange={handleCheckboxChange} />
                    Do you like the color Blue?
                </label>
                </p>
              
            </form>

            <h2>Summary of Your Preferences:</h2>
            <p>Name: {name}</p>
            <p>Favorite Color: {favoriteColor}</p>
            <p>{likesBlue ? "You like Blue!" : "You do not like Blue."}</p>
        </div>
    );
}

