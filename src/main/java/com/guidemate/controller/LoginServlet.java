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

/**
 * Servlet implementation for handling user login requests.
 *
 * @author GuideMate Development Team
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Handles POST requests from the login form.
     *
     * @param request HTTP request containing login information
     * @param response HTTP response sent back to the user
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        // Get email and password from the login form
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Basic validation
        if (email == null || email.trim().isEmpty()
                || password == null || password.trim().isEmpty()) {

        	response.sendRedirect("login.html?error=empty");
            return;
        }

        // Create UserDAO object
        UserDAO userDAO = new UserDAO();

        // Check the database for the user
        user loggedInUser = userDAO.login(email, password);

        if (loggedInUser != null) {

            HttpSession session = request.getSession();
            session.setAttribute("user", loggedInUser);

            response.sendRedirect("home.html");

        } else {

        	response.sendRedirect("login.html?error=invalid");
        }
    }

    /**
     * Handles GET requests.
     *
     * @param request HTTP request
     * @param response HTTP response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        response.sendRedirect("login.jsp");
    }
}