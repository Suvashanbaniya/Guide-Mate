package com.guidemate.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.guidemate.dao.UserDAO;
import com.guidemate.model.user;

@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Processes login requests sent using the POST method.
     *
     *  request the HTTP request containing the login details
     * response the HTTP response used for redirection
     * ServletException if a servlet-related error occurs
     *  IOException if an input or output error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        // Get the email and password entered by the user.
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Check whether the required login fields are empty.
        if (email == null || email.trim().isEmpty()
                || password == null || password.trim().isEmpty()) {

            response.sendRedirect("login.html?error=empty");
            return;
        }

        // Create the DAO object used to communicate with the database.
        UserDAO userDAO = new UserDAO();

        // Check the email and password against the database.
        user loggedInUser = userDAO.login(email, password);

        // Check whether the login was successful.
        if (loggedInUser != null) {

            // Create a session for the logged-in user.
            HttpSession session = request.getSession();

            // Store the user object in the session.
            session.setAttribute("user", loggedInUser);

            /*
             * Check the user's role.
             *
             * Admin users go to the admin dashboard. 
             * the admin and user are from the database 
             * Other users go to the normal home page.
             */
            if ("admin".equalsIgnoreCase(loggedInUser.getRole())) {

                response.sendRedirect("admin.html");

            } else {

                response.sendRedirect("home.html");
            }

        } else {

            // Login failed because the email or password was incorrect.
            response.sendRedirect("login.html?error=invalid");
        }
    }
//If someone accesses the login servlet directly with GET, send them to the login page.
    
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        response.sendRedirect("login.html");
    }
}