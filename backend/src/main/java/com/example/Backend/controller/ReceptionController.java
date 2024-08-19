package com.example.Backend.controller;

import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReceptionController {
    @Autowired
    private UserService userService;

    @GetMapping("/reception/{id}")
    public ResponseEntity<String> validationPhone(@PathVariable String id, @RequestParam String phone){
        //서비스에 위임
        boolean isSame = userService.validatePhone(id, phone);
        //결과 응답
        if(isSame) return ResponseEntity.status(HttpStatus.OK).body(null);
        else{
            throw new UserNotFoundException("정보가 일치하지 않습니다.");
        }
    }
}
