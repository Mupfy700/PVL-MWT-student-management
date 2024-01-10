// In App.js

import React, { useState, useEffect } from 'react';
import StudentList from './StudentList';
import AddStudent from './AddStudent';

function App() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch students from the API and update state
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:8080/students');
            if (response.ok) {
                const data = await response.json();
                setStudents(data); // Ensure this is correctly updating the state
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const deleteStudent = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/students/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setStudents(students.filter(student => student.id !== id));
            } else {
                alert('Failed to delete student.');
            }
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('Error deleting student.');
        }
    };

    return (
        <div>
            <h1>Student Management System</h1>
            <AddStudent onStudentAdded={fetchStudents} />
            <StudentList students={students} onDelete={deleteStudent} />
        </div>
    );
}

export default App;
