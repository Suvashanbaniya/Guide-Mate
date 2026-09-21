package com.guidemate.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.guidemate.model.user;

/**
 * Servlet responsible for providing profile information
 * for the currently logged-in user.
 *
 * @author GuideMate Development Team
 */
@WebServlet("/ProfileServlet")
public class ProfileServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Returns the currently logged-in user's profile information.
     *
     * @param request the HTTP request
     * @param response the HTTP response
     * @throws ServletException if a servlet-related error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request,
                         HttpServletResponse response)
            throws ServletException, IOException {

        HttpSession session = request.getSession(false);

        // Check whether the user is logged in
        if (session == null || session.getAttribute("user") == null) {

            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getWriter().write("User is not logged in.");
            return;
        }

        // Get the logged-in user from the session
        user loggedInUser = (user) session.getAttribute("user");

        // Send user information as simple JSON
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        String json = "{"
                + "\"id\":" + loggedInUser.getId() + ","
                + "\"name\":\"" + escapeJson(loggedInUser.getName()) + "\","
                + "\"email\":\"" + escapeJson(loggedInUser.getEmail()) + "\","
                + "\"password\":\"" + escapeJson(loggedInUser.getPassword()) + "\""
                + "}";

        response.getWriter().write(json);
    }

    /**
     * Escapes characters that could cause problems in JSON strings.
     *
     * @param value the string to escape
     * @return the escaped string
     */
    private String escapeJson(String value) {

        if (value == null) {
            return "";
        }

        return value
                .replace("\\", "\\\\")
                .replace("\"", "\\\"");
    }
}