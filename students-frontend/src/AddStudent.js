import React, { useState } from 'react';

function AddStudent({ onStudentAdded }) {
    const [studentName, setStudentName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const student = { name: studentName };
            const response = await fetch('http://localhost:8080/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            });
            if (response.ok) {
                alert('Student added successfully!');
                setStudentName(''); // Reset the input field after successful addition
                onStudentAdded(); // Trigger the function passed from the parent to refresh the student list
            } else {
                alert('Failed to add student.');
            }
        } catch (error) {
            console.error('Error adding student:', error);
            alert('Error adding student.');
        }
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;
