package Astha_java_training.Session1.stringManipulation;

import java.util.Arrays;
import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Check if two strings are anagrams
 * Time Complexity: O(n log n)
 */
public class AnagramCheck {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first string: ");
        String str1 = scanner.nextLine().toLowerCase();

        System.out.print("Enter second string: ");
        String str2 = scanner.nextLine().toLowerCase();

        // Remove spaces (optional improvement)
        str1 = str1.replaceAll("\\s", "");
        str2 = str2.replaceAll("\\s", "");

        if (str1.length() != str2.length()) {
            System.out.println("Not Anagrams");
            scanner.close();
            return;
        }

        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();

        Arrays.sort(arr1);
        Arrays.sort(arr2);

        if (Arrays.equals(arr1, arr2)) {
            System.out.println("Anagrams");
        } else {
            System.out.println("Not Anagrams");
        }

        scanner.close();
    }
}
