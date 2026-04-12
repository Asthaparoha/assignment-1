package Astha_java_training.Session1.Arrays;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Calculate average of elements in an array
 * Description: Takes user input and computes average
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
public class AverageArray {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        // Taking array size input
        System.out.print("Enter number of elements: ");
        int size = scanner.nextInt();

        // Edge case validation
        if (size <= 0) {
            System.out.println("Error: Array size must be greater than zero.");
            scanner.close();
            return;
        }

        int[] numbers = new int[size];
        int sum = 0;

        // Taking array elements input
        System.out.println("Enter " + size + " elements:");

        for (int index = 0; index < size; index++) {
            numbers[index] = scanner.nextInt();
            sum += numbers[index];
        }

        // Calculating average
        double average = (double) sum / size;

        // Output result
        System.out.printf("Average of elements: %.2f\n", average);

        scanner.close();
    }
}
