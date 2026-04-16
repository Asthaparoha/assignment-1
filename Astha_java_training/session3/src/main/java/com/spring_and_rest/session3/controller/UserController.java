package com.spring_and_rest.session3.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.spring_and_rest.session3.model.User;
import com.spring_and_rest.session3.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {
    // REST controller for user APIs
    private final UserService userService;

    // Constructor Injection
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/test")
    public String test() {
        return "API is working";
    }

    // 1. SEARCH API
    @GetMapping("/search")
    public List<User> searchUsers(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Integer age,
            @RequestParam(required = false) String role
    ) {
        return userService.searchUsers(name, age, role);
    }
    // API to create new user
    // 2. SUBMIT API
    @PostMapping("/submit")
    @ResponseStatus(HttpStatus.CREATED)
    public String submitUser(@RequestBody User user) {
        userService.submitUser(user);
        return "User created successfully";
    }
    // API to delete user with confirmation
    // 3. DELETE API
    @DeleteMapping("/{id}")
    public String deleteUser(
            @PathVariable int id,
            @RequestParam(defaultValue = "false") boolean confirm
    ) {
        userService.deleteUser(id, confirm);
        return "User deleted successfully";
    }
}
