package com.guidemate.model;

/**
 * Represents a user in the GuideMate application.
 *
 * @author GuideMate Development Team
 */
public class user {

    private int id;
    private String name;
    private String email;
    private String password;

    /**
     * Creates an empty User object.
     */
    public user() {
    }

    /**
     * Creates a User object with all user information.
     *
     * @param id user's unique ID
     * @param name user's name
     * @param email user's email address
     * @param password user's password
     */
    public user(int id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    /**
     * Gets the user's ID.
     *
     * @return user's ID
     */
    public int getId() {
        return id;
    }

    /**
     * Sets the user's ID.
     *
     * @param id user's ID
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * Gets the user's name.
     *
     * @return user's name
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the user's name.
     *
     * @param name user's name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets the user's email.
     *
     * @return user's email
     */
    public String getEmail() {
        return email;
    }

    /**
     * Sets the user's email.
     *
     * @param email user's email
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * Gets the user's password.
     *
     * @return user's password
     */
    public String getPassword() {
        return password;
    }

    /**
     * Sets the user's password.
     *
     * @param password user's password
     */
    public void setPassword(String password) {
        this.password = password;
    }
}