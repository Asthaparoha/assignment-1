package Astha_java_training.Session1.basic;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Check if number is even or odd
 */
public class EvenOdd {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        if (number % 2 == 0) {
            System.out.println("Even Number");
        } else {
            System.out.println("Odd Number");
        }

        scanner.close();
    }
}
