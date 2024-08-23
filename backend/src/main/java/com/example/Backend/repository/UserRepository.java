package com.example.Backend.repository;

import com.example.Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;    //더 안전하게 처리하기 위함

public interface UserRepository extends JpaRepository<User, String> {
    Optional<User> findById(String id);
}
