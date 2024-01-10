package com.danielhahn.mwtpvl;

import com.danielhahn.mwtpvl.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    // The basic CRUD methods are already provided by JpaRepository
}
