package com.guidemate.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Provides a connection between the GuideMate application
 * and the PostgreSQL database.
 *
 * @author GuideMate Development Team
 */
public class DBConnection {

    private static final String URL =
            "jdbc:postgresql://localhost:5433/guidemate";

    private static final String USERNAME = "postgres";

    private static final String PASSWORD = "1234";

    /**
     * Loads the PostgreSQL JDBC driver.
     *
     * @throws SQLException if the driver cannot be loaded
     */
    private static void loadDriver() throws SQLException {

        try {
            Class.forName("org.postgresql.Driver");

        } catch (ClassNotFoundException e) {

            throw new SQLException(
                    "PostgreSQL JDBC Driver not found!", e
            );
        }
    }

    /**
     * Creates and returns a connection to the PostgreSQL database.
     *
     * @return database connection
     * @throws SQLException if a database connection cannot be established
     */
    public static Connection getConnection() throws SQLException {

        // Load PostgreSQL JDBC driver
        loadDriver();

        return DriverManager.getConnection(
                URL,
                USERNAME,
                PASSWORD
        );
    }
}