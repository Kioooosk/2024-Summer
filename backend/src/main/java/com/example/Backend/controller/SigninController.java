package com.example.Backend.controller;

import com.example.Backend.dto.SigninRequestDto;
import com.example.Backend.entity.User;
import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.jwt.JwtTokenProvider;
import com.example.Backend.repository.UserRepository;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins ="*", methods={RequestMethod.POST})
public class SigninController {
    @Autowired
    private UserService userService;
    @Autowired
    UserRepository userRepository;
    @Autowired
    JwtTokenProvider jwtTokenProvider;
    // 회원 정보 저장
    @Transactional
    @PostMapping("/signin")
    public ResponseEntity<String> signIn(@RequestBody SigninRequestDto dto){
        // 비밀번호 일치 확인
        boolean result = userService.validatePw(dto.getId(),dto.getPw());
        // 응답: 401 에러
        if (!result) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("올바른 비밀번호를 기입해주세요.");  // 500 Internal Server Error
        }

        // 토큰 발행
        User user = userRepository.findById(dto.getId())
                .orElseThrow(() -> new IllegalArgumentException("가입된 아이디가 아닙니다."));

        String role = user.getRole().name();
        String token = jwtTokenProvider.createToken(dto.getId(), role);

        // 응답: 200 성공
        return ResponseEntity.status(HttpStatus.OK).body("jwtAccessToken: "+token);
    }

    // 응답: 404 에러
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
