package com.guidemate.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.guidemate.model.user;
import com.guidemate.util.DBConnection;

/**
 * Data Access Object for performing database operations
 * related to users.
 *
 * @author GuideMate Development Team
 */
public class UserDAO {

    /**
     * Authenticates a user using email and password.
     *
     * @param email user's email address
     * @param password user's password
     * @return user object if credentials are correct,
     *         otherwise null
     */
    public user login(String email, String password) {

        String sql = "SELECT id, name, email, password "
                   + "FROM users "
                   + "WHERE email = ? AND password = ?";

        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(sql)) {

            statement.setString(1, email);
            statement.setString(2, password);

            try (ResultSet resultSet = statement.executeQuery()) {

            	if (resultSet.next()) {

            	    System.out.println("USER FOUND IN DATABASE!");

            	    user loggedInUser = new user();

                    

                    loggedInUser.setId(resultSet.getInt("id"));
                    loggedInUser.setName(resultSet.getString("name"));
                    loggedInUser.setEmail(resultSet.getString("email"));
                    loggedInUser.setPassword(resultSet.getString("password"));

                    return loggedInUser;
                }
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        System.out.println("USER NOT FOUND IN DATABASE!");
        return null;
    }
}