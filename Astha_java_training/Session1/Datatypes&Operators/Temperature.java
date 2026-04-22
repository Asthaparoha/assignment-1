package Astha_java_training.Session1.DataTypes&Operators;

import java.util.Scanner;

/**
 * Author: Astha Paroha
 * Program: Convert temperature between Celsius and Fahrenheit
 */
public class TemperatureConverter {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("Choose conversion:");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");

        int choice = scanner.nextInt();

        switch (choice) {

            case 1:
                System.out.print("Enter temperature in Celsius: ");
                double celsius = scanner.nextDouble();
                double fahrenheit = (celsius * 9 / 5) + 32;
                System.out.println("Temperature in Fahrenheit: " + fahrenheit);
                break;

            case 2:
                System.out.print("Enter temperature in Fahrenheit: ");
                double f = scanner.nextDouble();
                double c = (f - 32) * 5 / 9;
                System.out.println("Temperature in Celsius: " + c);
                break;

            default:
                System.out.println("Invalid choice");
        }

        scanner.close();
    }
}
