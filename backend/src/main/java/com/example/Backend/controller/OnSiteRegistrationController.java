package com.example.Backend.controller;

import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/regi_on")
public class OnSiteRegistrationController {

    @Autowired
    private UserService userService;

    // 현장환자 이름
    @GetMapping("/name/{id}")
    public ResponseEntity<String> validationName(@PathVariable String id, @Valid @RequestParam String name){
        try {
            // 서비스에 위임하여 이름 검증
            boolean isSame = userService.validateName(id, name);

            // 결과 응답
            if (isSame) {
                return ResponseEntity.status(HttpStatus.OK).body(null);  // 이름이 일치하는 경우 200 OK
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND)  // 이름이 일치하지 않는 경우 404
                        .body("정보가 일치하지 않습니다.");
            }
        } catch (UserNotFoundException e) {
            // 유저가 없는 경우 예외 처리 (404 반환)
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body( "해당 아이디 " + id + "는 존재하지 않습니다.");
        } catch (Exception e) {
            // 다른 예외 발생 시 500 서버 에러 반환
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(e.getMessage());
        }
    }

    // 현장환자 전화번호
    @GetMapping("/phone/{id}")
    public ResponseEntity<Map<String, String>> validatePhoneAndGetName(@PathVariable String id, @Valid @RequestParam String phone){
        Map<String, String> response = new HashMap<>();
        try {
            // 서비스에서 사용자 이름 가져오기
            String name = userService.name(id);
            response.put("name", name);  // 이름 저장

            // 서비스에 위임하여 이름 검증
            boolean isSame = userService.validatePhone(id, phone);

            // 결과 응답
            if (isSame) {
                return ResponseEntity.status(HttpStatus.OK).body(null);  // phone이 일치하는 경우 200 OK
            } else {
                response.put("error", "정보가 일치하지 않습니다.");
                return ResponseEntity.status(HttpStatus.NOT_FOUND)  // phone이 일치하지 않는 경우 404
                        .body(response);
            }
        } catch (UserNotFoundException e) {
            // 유저가 없는 경우 예외 처리 (404 반환)
            response.put("error", "해당 아이디 " + id + "는 존재하지 않습니다.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(response);
        } catch (Exception e) {
            // 다른 예외 발생 시 500 서버 에러 반환
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);  // 500 Internal Server Error
        }
    }

    // 현장환자 주민번호
    @GetMapping("/ssn/{id}")
    public ResponseEntity<Map<String, String>> validateSsnAndGetName(@PathVariable String id, @Valid @RequestParam String ssn){
        Map<String, String> response = new HashMap<>();
        try {
            // 서비스에서 사용자 이름 가져오기
            String name = userService.name(id);
            response.put("name", name);  // 이름 저장

            // 서비스에 위임하여 이름 검증
            boolean isSame = userService.validateSsn(id, ssn);

            // 결과 응답
            if (isSame) {
                return ResponseEntity.status(HttpStatus.OK).body(null);  // ssn이 일치하는 경우 200 OK
            } else {
                response.put("error", "정보가 일치하지 않습니다.");
                return ResponseEntity.status(HttpStatus.NOT_FOUND)  // ssn이 일치하지 않는 경우 404
                        .body(response);
            }
        } catch (UserNotFoundException e) {
            // 유저가 없는 경우 예외 처리 (404 반환)
            response.put("error", "해당 아이디 " + id + "는 존재하지 않습니다.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(response);
        } catch (Exception e) {
            // 다른 예외 발생 시 500 서버 에러 반환
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);  // 500 Internal Server Error
        }
    }

    //예외 처리
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
