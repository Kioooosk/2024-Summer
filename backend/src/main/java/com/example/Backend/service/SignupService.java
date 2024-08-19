package com.example.Backend.service;

import com.example.Backend.dto.UserDto;
import com.example.Backend.entity.User;
import com.example.Backend.exception.DuplicateIdException;
import com.example.Backend.exception.MissingUserInfoException;
import com.example.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    @Autowired
    UserRepository userRepository;  // userRepository 객체 주입
    public User create(UserDto dto){
        User user = dto.toEntity();

        // 필수 정보가 모두 입력되었는지 확인
        if (user.getId() == null || user.getPw() == null || user.getName() == null
                || user.getPhone() == null || user.getSsn() == null) {
            throw new MissingUserInfoException("User information is incomplete.");
        }

        // 중복된 id일 경우 return null
        if (userRepository.findById(user.getId()).isPresent()) {
            throw new DuplicateIdException("Duplicate ID exists.");
        }

        return userRepository.save(user);
    }
}
