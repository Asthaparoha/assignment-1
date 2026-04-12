package Astha_java_training.Session1.basic;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Print triangle pattern
 */
public class Pattern {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter number of rows: ");
        int rows = scanner.nextInt();

        if (rows <= 0) {
            System.out.println("Invalid input");
            scanner.close();
            return;
        }

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }

        scanner.close();
    }
}
