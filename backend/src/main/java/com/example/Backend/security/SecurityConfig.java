
package com.example.Backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig{
    @Bean
    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests((authz) -> authz
                .requestMatchers("/{id}").permitAll()
                .requestMatchers("/signup").permitAll()
                .requestMatchers("/signin").permitAll()
                .requestMatchers("/queue/{id}").permitAll()
                .requestMatchers("regi_res/**").permitAll()
                .requestMatchers("regi_on/**").permitAll()
                .requestMatchers("/certification/**").permitAll()
                .requestMatchers("/reception/**").permitAll());
        http.csrf(AbstractHttpConfigurer::disable);
        return http.build();
    }
}
