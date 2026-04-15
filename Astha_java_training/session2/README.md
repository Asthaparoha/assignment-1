# User Management System - Spring Boot

## 📌 Overview
This is a Spring Boot application that manages users using REST APIs.  
It demonstrates core backend concepts like layered architecture, dependency injection, and component-based design.

---

## 🚀 Features

### 👤 User Management
- Create User
- Get All Users
- Get User by ID

### 🔔 Notification System
- Sends notification when user is created
- Implemented using @Component

### 🧠 Message Formatter
- Dynamic message based on type
- SHORT → short message
- LONG → detailed message

---

## 🏗️ Architecture
Controller → Service → Repository → Data

---

## ⚙️ Tech Stack
- Java 17
- Spring Boot
- Maven
- REST API

---

## 📂 Project Structure
controller/
service/
repository/
model/
component/
exception/

---

## 🧪 API Endpoints

### User APIs
- GET /users
- POST /users
- GET /users/{id}

### Notification
- GET /notify

### Message Formatter
- GET /message?type=SHORT
- GET /message?type=LONG

---

## ▶️ Run Project

```bash
./mvnw spring-boot:run
🌐 Test APIs

Example:

http://localhost:8080/users
💡 Concepts Used
Dependency Injection
IoC (Spring manages objects)
Layered Architecture
Exception Handling
Component-based design
