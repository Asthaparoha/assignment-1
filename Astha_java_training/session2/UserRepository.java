package com.example.session2.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.session2.model.User;

@Repository
public class UserRepository {

    private final List<User> users = new ArrayList<>();

    public List<User> getAllUsers() {
        return users;
    }

    public User getUserById(int id) {
        return users.stream()
                .filter(user -> user.getId() == id)
                .findFirst()
                .orElse(null);
    }

    public void saveUser(User user) {
        users.add(user);
    }
}
