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
            "jdbc:postgresql://localhost:5433/postgres";

    private static final String USERNAME = "postgres";

    private static final String PASSWORD = "1234";

    /**
     * Creates and returns a connection to the PostgreSQL database.
     *
     * @return database connection
     * @throws SQLException if a database connection cannot be established
     */
    public static Connection getConnection() throws SQLException {

        return DriverManager.getConnection(
                URL,
                USERNAME,
                PASSWORD
        );
    }
}