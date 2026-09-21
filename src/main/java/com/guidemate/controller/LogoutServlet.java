package com.guidemate.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet responsible for logging out the currently
 * authenticated GuideMate user.
 *
 * <p>This servlet invalidates the user's active session
 * and redirects the user to the login page.</p>
 *
 * @author GuideMate Development Team
 */
@WebServlet("/LogoutServlet")
public class LogoutServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Processes a logout request.
     *
     * <p>The method invalidates the current session if one exists
     * and redirects the user to the login page.</p>
     *
     * @param request the HTTP request from the user
     * @param response the HTTP response used to redirect the user
     * @throws ServletException if a servlet-related error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);

        if (session != null) {
            session.invalidate();
        }

        response.sendRedirect("login.html");
    }
}