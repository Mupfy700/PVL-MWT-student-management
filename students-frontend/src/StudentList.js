// In StudentList.js
import React from 'react';

function StudentList({ students, onDelete }) {
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name}
                        <button onClick={() => onDelete(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;

