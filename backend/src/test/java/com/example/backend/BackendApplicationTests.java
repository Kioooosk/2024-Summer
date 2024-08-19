package com.example.Backend;

import com.example.Backend.controller.CertificationController;
import com.example.Backend.controller.WaitingNumberController;
import com.example.Backend.dto.UserDto;
import com.example.Backend.exception.UserNotFoundException;
import com.example.Backend.repository.UserRepository;
import com.example.Backend.security.SecurityConfig;
import com.example.Backend.service.SignupService;
import jakarta.transaction.Transactional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {

	@Test
	void contextLoads() {
	}

}

@SpringBootTest
@Transactional
class CertificationTests{
	private static final String id = "dldmstkd";
	private static final String pw = "1234";
	private static final String name = "Eunsang";
	private static final String phone = "01000000000";
	private static final String ssn = "9999999999999";
	@Autowired
	SignupService signupService;
	@Autowired
	CertificationController certificationController;
	@Autowired
	SecurityConfig securityConfig;
	@Autowired
	UserRepository userRepository;
	@Autowired
	WaitingNumberController wt;
	//phone number check test
	@Test
	void phoneCheck(){
		//데이터 넣고
		signupService.create(new UserDto(id, pw, name, securityConfig.encoder().encode(phone), ssn));
		String encoded = userRepository.findById(id).orElseThrow(()->new UserNotFoundException("해당 아이디 "+id+"는 존재하지 않습니다.")).getPhone();
		//컨트롤러로 비교
		certificationController.validationPhone(id, phone);
	}

	@Test
	void waitingCheck(){
		wt.name("abcde");
	}

}
