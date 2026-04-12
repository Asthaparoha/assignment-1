package Astha_java_training.Session1.Arrays;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Sort an array using Bubble Sort
 * Description: Takes user input and sorts array in ascending order
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
public class SortArray {

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

        // Taking array elements input
        System.out.println("Enter " + size + " elements:");
        for (int index = 0; index < size; index++) {
            numbers[index] = scanner.nextInt();
        }

        // Bubble Sort Logic
        for (int i = 0; i < size - 1; i++) {

            // Optimization: check if already sorted
            boolean isSwapped = false;

            for (int j = 0; j < size - i - 1; j++) {

                if (numbers[j] > numbers[j + 1]) {
                    // Swap elements
                    int temp = numbers[j];
                    numbers[j] = numbers[j + 1];
                    numbers[j + 1] = temp;

                    isSwapped = true;
                }
            }

            // If no swapping happened, array is already sorted
            if (!isSwapped) {
                break;
            }
        }

        // Output sorted array
        System.out.print("Sorted array: ");
        for (int num : numbers) {
            System.out.print(num + " ");
        }

        scanner.close();
    }
}
