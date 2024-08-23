package com.example.Backend.service;

import com.example.Backend.dto.UserDto;
import com.example.Backend.entity.User;
import com.example.Backend.exception.DuplicateIdException;
import com.example.Backend.exception.MissingUserInfoException;
import com.example.Backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    @Autowired
    UserRepository userRepository;  // userRepository 객체 주입
    private final BCryptPasswordEncoder encoder;
    @Autowired  // Constructor Injection
    public SignupService(UserRepository userRepository, BCryptPasswordEncoder encoder) {
        this.userRepository = userRepository;
        this.encoder = encoder;
    }

    public User create(UserDto dto) {
        User user = dto.toEntity();

        // 필수 정보가 모두 입력되었는지 확인
        if (user.getId() == null || user.getPw() == null || user.getName() == null
                || user.getPhone() == null || user.getSsn() == null) {
            throw new MissingUserInfoException("User information is incomplete.");
        }

        // 중복된 id일 경우 예외 처리
        if (userRepository.existsById(user.getId())) {
            throw new DuplicateIdException("Duplicate ID exists.");
        }

        // 비밀번호, 전화번호, 주민번호 암호화 (null 체크 후 진행)
        user.setPw(encoder.encode(dto.getPw()));
        user.setPhone(encoder.encode(dto.getPhone()));
        user.setSsn(encoder.encode(dto.getSsn()));

        // User 권한 member로 지정
        user.addUserAuthority();

        // 유저 저장
        return userRepository.save(user);
    }
}
