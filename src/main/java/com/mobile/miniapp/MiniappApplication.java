package com.mobile.miniapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class MiniappApplication {

    public static void main(String[] args) {
        SpringApplication.run(MiniappApplication.class, args);
        System.out.println("Welcome to mini Mobile.de application!");

    }

}
