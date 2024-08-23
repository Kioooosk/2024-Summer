package com.example.Backend.controller;

import com.example.Backend.dto.UserDto;
import com.example.Backend.entity.User;
import com.example.Backend.exception.DuplicateIdException;
import com.example.Backend.exception.MissingUserInfoException;
import com.example.Backend.service.SignupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*", methods={RequestMethod.POST})
public class SignupController {
    @Autowired
    private SignupService signupService;
    // 회원 정보 저장
    @PostMapping("/signup")
    public ResponseEntity<String> create(@RequestBody UserDto dto){
        // 서비스에 위임
        User createdUser = signupService.create(dto);
        // 결과 응답
        return ResponseEntity.status(HttpStatus.OK).body("id: "+createdUser.getId()+", success: 회원가입에 성공하였습니다.");
    }
    //예외 처리
    @ExceptionHandler(MissingUserInfoException.class)
    public ResponseEntity<String> handleMissingUserInfoException(MissingUserInfoException ex){
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("알맞지 않은 형식의 데이터를 기입하였습니다.");
    }
    @ExceptionHandler(DuplicateIdException.class)
    public ResponseEntity<String> handleDuplicateIdException(DuplicateIdException ex){
        return ResponseEntity.status(HttpStatus.CONFLICT).body("중복된 아이디, 다른 아이디를 입력해주세요.");
    }
}
