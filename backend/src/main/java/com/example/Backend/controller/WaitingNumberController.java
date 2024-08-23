package com.example.Backend.controller;

import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins ="*", methods={RequestMethod.GET})
public class WaitingNumberController {
    @Autowired
    private UserService userService;
    //user name 조회
    @GetMapping("/queue/{id}")
    public ResponseEntity<String> name(@PathVariable String id){
        //서비스에 위임
        String name = userService.name(id);
        //결과 응답
        return ResponseEntity.status(HttpStatus.OK).body(name);
    }
    //예외 처리
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
