package com.bnyte.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author kaisa.liu
 * @since 1.0.0
 */
@RestController
@RequestMapping("/home")
public class HomeController {

    @GetMapping("/authentication_free")
    public String authenticationFree() {
        return "Authentication free";
    }

    @GetMapping("/authentication_required")
    public String authenticationRequired() {
        return "Authentication required";
    }

}
