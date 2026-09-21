package com.guidemate.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.guidemate.dao.UserDAO;

/**
 * Servlet responsible for handling new user registration
 * in the GuideMate application.
 *
 * @author GuideMate Development Team
 */
@WebServlet("/SignupServlet")
public class SignupServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Processes a new user registration request.
     *
     * @param request the HTTP request containing signup information
     * @param response the HTTP response used to redirect the user
     * @throws ServletException if a servlet-related error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        // Get signup information from the form
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String phone = request.getParameter("phone");
        String city = request.getParameter("city");
        String password = request.getParameter("password");
        
        System.out.println("===== SIGNUP REQUEST =====");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Phone: " + phone);
        System.out.println("City: " + city);
        System.out.println("Password received: " + (password != null));

        // Basic validation
        if (name == null || name.trim().isEmpty()
                || email == null || email.trim().isEmpty()
                || phone == null || phone.trim().isEmpty()
                || city == null || city.trim().isEmpty()
                || password == null || password.trim().isEmpty()) {

            response.sendRedirect("login.html?error=signupEmpty");
            return;
        }

        // Remove unnecessary spaces
        name = name.trim();
        email = email.trim();
        phone = phone.trim();
        city = city.trim();

        // Create UserDAO object
        UserDAO userDAO = new UserDAO();

        // Save the new user
        boolean registered = userDAO.register(
                name,
                email,
                phone,
                city,
                password
        );

        if (registered) {

            // Registration successful
            response.sendRedirect("login.html?success=registered");

        } else {

            // Registration failed
            response.sendRedirect("login.html?error=signupFailed");
        }
    }
}