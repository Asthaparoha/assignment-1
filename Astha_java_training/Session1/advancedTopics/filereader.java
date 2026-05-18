package Astha_java_training.Session1.advancedTopics;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

/**
 * Author: Astha Paroha
 * Program: Read data from a text file
 */
public class FileReadExample {

    public static void main(String[] args) {

        try {
            BufferedReader reader = new BufferedReader(new FileReader("test.txt"));

            String line;

            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }

            reader.close();

        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
