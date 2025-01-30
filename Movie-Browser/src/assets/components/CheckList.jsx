import React, { useState } from 'react';

/* The key prop in React helps React identify which items in a list have changed, been added, or been removed, improving performance when re-rendering.

Here’s why it's important:

1. Efficient Updates
Without key, React would have to re-render all the list items on each update, even if only one item changes.
With key, React can efficiently update only the changed item, improving performance. It uses the key to track each element's position and identity.
*/

const CheckList = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        // Using the functional form to ensure the most recent state is used
        setItems((prevItems) => [...prevItems, item]);
    };

    return (
        <div>
            <form 
                onSubmit={(e) => {
                    e.preventDefault(); // Prevent form submission and page reload
                    addItem(e.target[0].value); // Add the task based on the input field's value
                    e.target[0].value = ''; // Clear the input field after adding the task
                }}
            > 
                <input 
                    type="text" 
                    placeholder="What task would you like to add?" 
                />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li> // Display each item in the list
                ))}
            </ul>
        </div>
    );
};

export default CheckList;
