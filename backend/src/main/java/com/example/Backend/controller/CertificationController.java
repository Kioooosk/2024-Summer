
package com.example.Backend.controller;

import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CertificationController {
    @Autowired
    private UserService userService;

    //증명서 이름
    @GetMapping("/certification/name/{id}")
    public ResponseEntity<String> validationName(@PathVariable String id, @RequestParam String name){
        //서비스에 위임
        boolean isSame = userService.validateName(id, name);
        //결과 응답
        if(isSame) return ResponseEntity.status(HttpStatus.OK).body(null);
        else{
            throw new UserNotFoundException("정보가 일치하지 않습니다.");
        }
    }

    // 증명서 전화번호
    @GetMapping("/certification/phone/{id}")
    public ResponseEntity<String> validationPhone(@PathVariable String id, @RequestParam String phone){
        //서비스에 위임
        boolean isSame = userService.validatePhone(id, phone);
        //결과 응답
        if(isSame) return ResponseEntity.status(HttpStatus.OK).body(null);
        else{
            throw new UserNotFoundException("정보가 일치하지 않습니다.");
        }
    }

    //증명서 주민번호
    @GetMapping("/certification/ssn/{id}")
    public ResponseEntity<String> validationSsn(@PathVariable String id, @RequestParam String ssn){
        //서비스에 위임
        boolean isSame = userService.validateSsn(id, ssn);
        //결과 응답
        if(isSame) return ResponseEntity.status(HttpStatus.OK).body(null);
        else{
            throw new UserNotFoundException("정보가 일치하지 않습니다.");
        }
    }

    //예외 처리
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}