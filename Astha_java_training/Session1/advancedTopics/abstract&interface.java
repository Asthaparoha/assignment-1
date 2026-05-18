/**
 * Interface:
 * - 100% abstraction (methods are abstract by default)
 * - Supports multiple inheritance
 *
 * Abstract Class:
 * - Can have both abstract and concrete methods
 * - Cannot be instantiated
 */
package Astha_java_training.Session1.advancedTopics;

/**
 * Author: Astha Paroha
 * Demonstrates Interface
 */
interface Animal {
    void sound(); // abstract method
}
package Astha_java_training.Session1.advancedTopics;

/**
 * Demonstrates Abstract Class
 */
abstract class Vehicle {

    abstract void start(); // abstract method

    void fuelType() { // concrete method
        System.out.println("Uses fuel or electricity");
    }
}
package Astha_java_training.Session1.advancedTopics;

/**
 * Implementation of Interface and Abstract Class
 */
public class Demo implements Animal {

    @Override
    public void sound() {
        System.out.println("Animal makes sound");
    }

    public static void main(String[] args) {

        // Interface usage
        Animal obj = new Demo();
        obj.sound();

        // Abstract class usage
        Vehicle v = new Vehicle() {
            @Override
            void start() {
                System.out.println("Vehicle starts");
            }
        };

        v.start();
        v.fuelType();
    }
}
