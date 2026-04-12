package Astha_java_training.Session1.OOP;

/**
 * Author: Astha Paroha
 * Class: Student
 * Demonstrates Encapsulation
 */
public class Student {

    // Private variables (Encapsulation)
    private String name;
    private int rollNumber;
    private double marks;

    // Constructor
    public Student(String name, int rollNumber, double marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }

    // Getters and Setters
    public String getName() {
        return name;
    }

    public int getRollNumber() {
        return rollNumber;
    }

    public double getMarks() {
        return marks;
    }

    public void setMarks(double marks) {
        if (marks >= 0 && marks <= 100) {
            this.marks = marks;
        } else {
            System.out.println("Invalid marks");
        }
    }

    // Method
    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Roll Number: " + rollNumber);
        System.out.println("Marks: " + marks);
    }

    // Polymorphism method (overloading)
    public void calculateGrade() {
        System.out.println("General Grade Calculation");
    }
}
