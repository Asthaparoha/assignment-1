package com.spring_and_rest.session3.repository;
// managing dummy user data
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

import org.springframework.stereotype.Repository;

import com.spring_and_rest.session3.model.User;

@Repository
public class UserRepository {

    private final List<User> users = new CopyOnWriteArrayList<>();

    public UserRepository() {
        users.add(new User(1, "Priya", 30, "USER"));
        users.add(new User(2, "Amit", 25, "ADMIN"));
        users.add(new User(3, "Rohit", 30, "USER"));
        users.add(new User(4, "Neha", 28, "USER"));
        users.add(new User(5, "Karan", 35, "MANAGER"));
        users.add(new User(6, "Priya", 22, "ADMIN"));
    }

    public List<User> findAll() {
        return users;
    }

    public void save(User user) {
        users.add(user);
    }

    public boolean deleteById(int id) {
        return users.removeIf(user -> user.getId() == id);
    }
}