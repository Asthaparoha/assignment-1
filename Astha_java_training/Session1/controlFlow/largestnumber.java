package Astha_java_training.Session1.controlFlow;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Find largest among three numbers
 */
public class LargestNumber {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter three numbers: ");
        int a = scanner.nextInt();
        int b = scanner.nextInt();
        int c = scanner.nextInt();

        int largest;

        if (a >= b && a >= c) {
            largest = a;
        } else if (b >= a && b >= c) {
            largest = b;
        } else {
            largest = c;
        }

        System.out.println("Largest number: " + largest);

        scanner.close();
    }
}
