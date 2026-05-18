package com.spring_and_rest.session3.model;
// User model class
public class User {
    private int id;
    private String name;
    private int age;
    private String role;

    public User() {
    }
    // Model class for user entity
    public User(int id, String name, int age, String role) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getRole() { return role; }
}

