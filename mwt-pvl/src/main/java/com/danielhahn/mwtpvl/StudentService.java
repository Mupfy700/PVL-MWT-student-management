package com.danielhahn.mwtpvl;

import com.danielhahn.mwtpvl.Student;
import com.danielhahn.mwtpvl.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public Student createStudent(Student student) {
        // Assuming that Student entity has an auto-generated ID,
        // saving an entity with a null ID will create a new entry in the database.
        return studentRepository.save(student);
    }

    public Optional<Student> getStudent(Long id) {
        // Retrieve a student by their ID
        return studentRepository.findById(id);
    }

    public List<Student> getAllStudents() {
        // Retrieve all students from the database
        return studentRepository.findAll();
    }

    public void deleteStudent(Long id) {
        // Delete a student by their ID
        studentRepository.deleteById(id);
    }
}
