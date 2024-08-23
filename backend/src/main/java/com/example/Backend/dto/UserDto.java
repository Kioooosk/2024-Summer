package com.example.Backend.dto;

import com.example.Backend.entity.Role;
import com.example.Backend.entity.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor     //모든 필드를 포함하는 생성자 자동 생성
@NoArgsConstructor      //매개변수 없는 기본 생성자 자동 생성
@Getter                 //getter 메서드 자동 생성
@ToString               //클래스의 모든 필드 포함하는 'toString()'메서드 자동 생성
public class UserDto {
    @Email
    @NotNull
    private String id;

    // 비밀번호: 첫 글자는 영문, 5~8자
    @Pattern(regexp = "^[a-zA-Z][0-9a-zA-Z]{4,7}$")
    @NotNull
    private String pw;

    // 이름: 한국어나 영어로 15글자 미만, 공백 없음
    @Pattern(regexp = "^[가-힣a-zA-Z]{1,14}$")
    @NotNull
    private String name;

    // 전화번호: "010-dddd-dddd" 형식
    @Pattern(regexp = "^010-\\d{4}-\\d{4}$")
    @NotNull
    private String phone;

    // 주민등록번호: "dddddd-ddddddd" 형식
    @Pattern(regexp = "^[0-9]{6}-[1-4][0-9]{6}$")
    @NotNull
    private String ssn;

    public User toEntity() {
        return new User(id, pw, name, phone, ssn, null);
    }
}
