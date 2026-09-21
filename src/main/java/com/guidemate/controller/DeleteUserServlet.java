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
 * Handles deletion of user accounts from the GuideMate application.
 *
 * <p>
 * This servlet allows only logged-in administrators
 * to delete non-admin user accounts.
 * </p>
 *
 * @author GuideMate Development Team
 */
@WebServlet("/DeleteUserServlet")
public class DeleteUserServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;


    /**
     * Processes a user deletion request.
     *
     * @param request the HTTP request containing the user ID
     * @param response the HTTP response
     * @throws ServletException if a servlet-related error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {


        // Get the existing login session.

        HttpSession session =
                request.getSession(false);


        // Check whether the admin is logged in.

        if (session == null) {

            response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Login required."
            );

            return;
        }


        // Get the logged-in user.

        user loggedInUser =
                (user) session.getAttribute("user");


        // Check whether a user exists in the session.

        if (loggedInUser == null) {

            response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED,
                    "Login required."
            );

            return;
        }


        // Check whether the user is an administrator.

        if (!"admin".equalsIgnoreCase(
                loggedInUser.getRole())) {

            response.sendError(
                    HttpServletResponse.SC_FORBIDDEN,
                    "Administrator access required."
            );

            return;
        }


        // Get the user ID from the request.

        String userIdText =
                request.getParameter("userId");


        // Check whether user ID was supplied.

        if (userIdText == null
                || userIdText.trim().isEmpty()) {

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "User ID is required."
            );

            return;
        }


        try {

            // Convert user ID to integer.

            int userId =
                    Integer.parseInt(
                            userIdText
                    );


            // Create UserDAO.

            UserDAO userDAO =
                    new UserDAO();


            // Delete the selected user.

            boolean deleted =
                    userDAO.deleteUser(userId);


            // Tell JavaScript whether deletion succeeded.

            if (deleted) {

                response.setStatus(
                        HttpServletResponse.SC_OK
                );

                response.setContentType(
                        "text/plain"
                );

                response.getWriter().write(
                        "USER_DELETED"
                );

            } else {

                response.sendError(
                        HttpServletResponse.SC_NOT_FOUND,
                        "User could not be deleted."
                );

            }


        } catch (NumberFormatException e) {

            // User ID was not a valid number.

            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Invalid user ID."
            );

        }

    }


    /**
     * Prevents deletion through a GET request.
     *
     * @param request the HTTP request
     * @param response the HTTP response
     * @throws ServletException if a servlet-related error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        response.sendError(
                HttpServletResponse.SC_METHOD_NOT_ALLOWED,
                "Use POST to delete a user."
        );

    }

}