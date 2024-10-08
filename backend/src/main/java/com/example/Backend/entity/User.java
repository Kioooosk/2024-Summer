package com.example.Backend.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity     //해당 클래스가 엔티티임을 선언, 클래스 필드를 바탕으로 DB에 테이블 생성
@Table(name = "USER")  // 테이블 이름을 USER로 변경
@Getter    //각 필드 값을 조회할 수 있는 getter 메서드 자동 생성
@Setter //각 필드 값을 생성할 수 있는 setter 메서드 자동 생성
@ToString   //모든 필드를 출력할 수 있는 toString 메서드 자동 생성
@AllArgsConstructor //모든 필드를 매개변수로 갖는 생성자 자동 생성
@NoArgsConstructor  //매개변수가 아예 없는 기본 생성자 자동 생성
public class User implements UserDetails {
    @Id
    @Column(nullable = false, unique = true) // ID는 고유해야 하므로 unique 제약조건 추가
    private String id;

    // 비밀번호: 첫 글자는 영문, 5~8자
    @Column
    private String pw;

    // 이름: 한국어나 영어로 15글자 미만, 공백 없음
    @Column
    private String name;

    // 전화번호: "010-dddd-dddd" 형식
    @Column
    private String phone;

    // 주민등록번호: "dddddd-ddddddd" 형식
    @Column
    private String ssn;

    @Enumerated(EnumType.STRING)
    private Role role;

    public void addUserAuthority() {
        this.role = Role.ROLE_USER;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> auth = new ArrayList<>();
        auth.add(new SimpleGrantedAuthority(role.name()));
        return auth;
    }

    @Override
    public String getPassword() {
        return pw;
    }

    @Override
    public String getUsername() {
        return id;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
