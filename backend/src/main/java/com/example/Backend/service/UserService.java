package com.example.Backend.service;

import com.example.Backend.dto.SigninRequestDto;
import com.example.Backend.entity.User;
import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.repository.UserRepository;
import com.example.Backend.security.SecurityConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SecurityConfig securityConfig;
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

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

    public boolean validatePw(String userId, String pw) {
        // 해당 아이디가 없는 경우
        String realPw = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("해당 아이디 " + userId + "는 존재하지 않습니다."))
                .getPw();

        // 입력받은 비밀번호와 데이터베이스에 저장된 비밀번호를 비교
        return passwordEncoder.matches(pw, realPw);
    }

}
