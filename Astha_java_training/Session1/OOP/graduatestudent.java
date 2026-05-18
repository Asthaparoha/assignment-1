package Astha_java_training.Session1.OOP;

/**
 * Author: Astha Paroha
 * Class: GraduateStudent
 * Demonstrates Inheritance & Polymorphism
 */
public class GraduateStudent extends Student {

    private String specialization;

    // Constructor
    public GraduateStudent(String name, int rollNumber, double marks, String specialization) {
        super(name, rollNumber, marks);
        this.specialization = specialization;
    }

    // Overriding method (Polymorphism)
    @Override
    public void calculateGrade() {
        if (getMarks() >= 75) {
            System.out.println("Grade: A");
        } else if (getMarks() >= 60) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C");
        }
    }

    public void displaySpecialization() {
        System.out.println("Specialization: " + specialization);
    }
}
