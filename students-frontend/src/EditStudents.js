import React, { useState, useEffect } from 'react';

function EditStudent({ match, history }) {
    const [name, setName] = useState('');
    const studentId = match.params.id;  // Assuming you're using React Router and passing the student ID in the URL

    // Fetch student details when component mounts or studentId changes
    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const response = await fetch(`http://localhost:8080/students/${studentId}`);
                if (response.ok) {
                    const data = await response.json();
                    setName(data.name);
                } else {
                    alert('Student not found');
                    history.push('/');  // Redirect to another route if student not found
                }
            } catch (error) {
                console.error('Error fetching student:', error);
                alert('Error fetching student.');
            }
        };

        fetchStudent();
    }, [studentId, history]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const student = { name };
            const response = await fetch(`http://localhost:8080/students/${studentId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            });
            if (response.ok) {
                alert('Student updated successfully!');
                history.push('/');  // Redirect after successful update
            } else {
                alert('Failed to update student.');
            }
        } catch (error) {
            console.error('Error updating student:', error);
            alert('Error updating student.');
        }
    };

    return (
        <div>
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Update Student</button>
            </form>
        </div>
    );
}

export default EditStudent;
