package Astha_java_training.Session1.stringManipulation;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Count number of vowels in a string
 * Time Complexity: O(n)
 */
public class VowelCount {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a string: ");
        String input = scanner.nextLine().toLowerCase();

        int count = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);

            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }

        System.out.println("Number of vowels: " + count);

        scanner.close();
    }
}
