# 🚀 Spring Boot User Management API (Session 3)

## 📌 Project Overview

This project is a **Spring Boot REST API** that demonstrates core backend development concepts including:

* Layered architecture (Controller → Service → Repository)
* Dependency Injection (constructor-based)
* REST API design
* Exception handling
* In-memory data management

The application manages a list of users and supports **searching, adding, and deleting users**.

---

## 🛠️ Tech Stack

* Java 17
* Spring Boot
* Maven
* REST APIs
* VS Code 

---

## 📂 Project Structure

```
com.spring_and_rest.session3
│
├── controller       → Handles HTTP requests
├── service          → Contains business logic
├── repository       → Manages data (in-memory)
├── model            → Defines User entity
├── exception        → Global exception handling
└── Session3Application.java
```

---

## 🧠 Key Concepts Implemented

### ✅ 1. Inversion of Control (IoC)

Spring manages all objects (beans) automatically using annotations like:

* `@RestController`
* `@Service`
* `@Repository`

---

### ✅ 2. Dependency Injection (Constructor-Based)

All dependencies are injected via constructors:

```java
public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
}
```

---

### ✅ 3. Layered Architecture

Strict separation of concerns:

* Controller → Handles API requests
* Service → Contains business logic
* Repository → Handles data storage

---

### ✅ 4. Exception Handling

Centralized error handling using:

```java
@RestControllerAdvice
```

---

## 👤 User Data

The application uses an **in-memory list** with dummy users (no database).

---

# 🔥 API ENDPOINTS

---

## 🔍 1. Search Users

### Endpoint:

```
GET /users/search
```

### Query Parameters:

* `name` (String)
* `age` (Integer)
* `role` (String)

### Behavior:

* No parameters → returns all users
* With parameters → filters users

### Examples:

```
/users/search
/users/search?name=Priya
/users/search?age=30
/users/search?role=USER
/users/search?age=30&role=USER
```

### Features:

* Case-insensitive matching (name, role)
* Exact match for age
* Multiple filters use AND condition

---

## ➕ 2. Add User

### Endpoint:

```
POST /users/submit
```

### Request Body:

```json
{
  "id": 7,
  "name": "Rahul",
  "age": 27,
  "role": "USER"
}
```

### Response:

* ✅ 201 Created → Success
* ❌ 400 Bad Request → Invalid input

### Validation:

* Name cannot be empty
* Role cannot be empty
* Age must be > 0

---

## ❌ 3. Delete User

### Endpoint:

```
DELETE /users/{id}?confirm=true
```

### Behavior:

* `confirm=false` or missing → ❌ Not deleted
* `confirm=true` → ✅ User deleted

### Example:

```
DELETE /users/1?confirm=true
```

---

## ⚠️ Error Handling

All errors return proper HTTP status codes:

| Scenario             | Response        |
| -------------------- | --------------- |
| Invalid input        | 400 Bad Request |
| Confirmation missing | 400 Bad Request |
| User not found       | 400 Bad Request |

---

## ▶️ How to Run

### Step 1:

```bash
./mvnw clean install
```

### Step 2:

```bash
./mvnw spring-boot:run
```

### Step 3:

Open browser:

```
http://localhost:8081/users/test
```

---

## 🧪 Testing APIs

APIs were tested using:

* Thunder Client (VS Code)

---

## 📈 Learning Outcomes

* Understood Spring Boot architecture
* Implemented REST APIs
* Learned Dependency Injection and IoC
* Practiced clean code structure
* Handled real-world API scenarios

---

## 👨‍💻 Author

Astha Paroha

---
