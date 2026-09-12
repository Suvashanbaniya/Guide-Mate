package com.guidemate.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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

        // Get the values entered in the login form
        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Temporary test response
        response.setContentType("text/html");
        response.getWriter().println("<h1>Login Data Received</h1>");
        response.getWriter().println("<p>Email: " + email + "</p>");
        response.getWriter().println("<p>Password received successfully.</p>");
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