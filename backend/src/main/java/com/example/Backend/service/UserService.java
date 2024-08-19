package com.example.Backend.service;

import com.example.Backend.entity.User;
import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.repository.UserRepository;
import com.example.Backend.security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SecurityConfig securityConfig;

    //이름 검색
    public String name(String userId) {
        return userRepository.findById(userId).orElseThrow(()-> new UserNotFoundException("해당 아이디 "+userId + "는 존재하지 않습니다.")).getName();
    }
    //이름 일치 확인
    public boolean validateName(String userId, String name) {
        String realName = userRepository.findById(userId).orElseThrow(()->new UserNotFoundException("해당 아이디 "+userId+"는 존재하지 않습니다.")).getName();
        return realName.equals(name);
    }
    //전화번호 일치 확인
    public boolean validatePhone(String userId, String phone){
        String realPhone = userRepository.findById(userId).orElseThrow(()->new UserNotFoundException("해당 아이디 "+userId+"는 존재하지 않습니다.")).getPhone();
        return securityConfig.encoder().matches(phone, realPhone);
    }

    public boolean validateSsn(String userId, String ssn) {
        String realSsn = userRepository.findById(userId).orElseThrow(()-> new UserNotFoundException("해당 아이디 "+userId+"는 존재하지 않습니다.")).getSsn();
        return securityConfig.encoder().matches(ssn, realSsn);
    }
}
