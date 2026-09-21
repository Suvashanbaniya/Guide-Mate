package com.guidemate.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.guidemate.dao.AdminDAO;
import com.guidemate.model.user;

/**
 * Controls access to the GuideMate admin page.
 *
 * <p>
 * This servlet checks whether the currently logged-in user
 * has an administrator role. Only administrators can access
 * the admin dashboard.
 * </p>
 *
 * @author GuideMate Development Team
 */
@WebServlet("/AdminServlet")
public class AdminServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Handles requests to the admin page.
     *
     * @param request the HTTP request
     * @param response the HTTP response
     * @throws ServletException if a servlet error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        // Get the existing login session.
        HttpSession session = request.getSession(false);

        // If there is no session, the user is not logged in.
        if (session == null) {
            response.sendRedirect("login.html");
            return;
        }

        // Get the logged-in user from the session.
        user loggedInUser = (user) session.getAttribute("user");

        // If there is no logged-in user, go to login page.
        if (loggedInUser == null) {
            response.sendRedirect("login.html");
            return;
        }

        // Check whether the logged-in user is an administrator.
        if (!"admin".equalsIgnoreCase(loggedInUser.getRole())) {

            // Normal users cannot access the admin page.
            response.sendRedirect("home.html");
            return;
        }

        /*
         * The user is an administrator.
         *
         * For now, open the existing admin.html page.
         */
        response.sendRedirect("admin.html");
    }
}