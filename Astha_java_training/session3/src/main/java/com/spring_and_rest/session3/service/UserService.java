package com.spring_and_rest.session3.service;
// Service layer handling business logic
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.spring_and_rest.session3.model.User;
import com.spring_and_rest.session3.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;
    // Implemented search filtering logic
    // Constructor Injection (MANDATORY)
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> searchUsers(String name, Integer age, String role) {

        List<User> users = userRepository.findAll();

        if (name == null && age == null && role == null) {
            return users;
        }

        return users.stream()
                .filter(user ->
                        (name == null || user.getName().equalsIgnoreCase(name)) &&
                        (age == null || user.getAge() == age) &&
                        (role == null || user.getRole().equalsIgnoreCase(role))
                )
                .collect(Collectors.toList());
    }

    public void submitUser(User user) {

        if (user == null) {
            throw new IllegalArgumentException("User cannot be null");
        }

        if (user.getName() == null || user.getName().trim().isEmpty()) {
            throw new IllegalArgumentException("Name is required");
        }

        if (user.getRole() == null || user.getRole().trim().isEmpty()) {
            throw new IllegalArgumentException("Role is required");
        }

        if (user.getAge() <= 0) {
            throw new IllegalArgumentException("Invalid age");
        }

        userRepository.save(user);
    }

    public void deleteUser(int id, boolean confirm) {

        if (!confirm) {
            throw new IllegalStateException("Confirmation required");
        }

        boolean deleted = userRepository.deleteById(id);

        if (!deleted) {
            throw new IllegalArgumentException("User not found");
        }
    }
}
