package com.guidemate.util;

import java.sql.Connection;

/**
 * Tests the connection between GuideMate and PostgreSQL.
 *
 * @author GuideMate Development Team
 */
public class DBConnectionTest {

    public static void main(String[] args) {

        try (Connection connection = DBConnection.getConnection()) {

            System.out.println("Database connection successful!");

        } catch (Exception e) {

            System.out.println("Database connection failed!");
            e.printStackTrace();
        }
    }
}