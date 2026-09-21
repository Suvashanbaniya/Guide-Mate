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
 * Handles password change requests for logged-in GuideMate users.
 *
 * <p>
 * This servlet gets the current password and new password
 * from the change password form. It checks the current
 * password and updates it in the database if it is correct.
 * </p>
 *
 * @author GuideMate Development Team
 */
@WebServlet("/ChangePasswordServlet")
public class ChangePasswordServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Processes the change password request.
     *
     * @param request the HTTP request containing password details
     * @param response the HTTP response used for redirection
     * @throws ServletException if a servlet error occurs
     * @throws IOException if an input or output error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response)
            throws ServletException, IOException {

        // Get the current logged-in session.
        HttpSession session = request.getSession(false);

        // Check whether the user is logged in.
        if (session == null || session.getAttribute("user") == null) {

            response.sendRedirect("login.html");
            return;
        }

        // Get the logged-in user from the session.
        user loggedInUser = (user) session.getAttribute("user");

        // Get password values from the form.
        String currentPassword =
                request.getParameter("currentPassword");

        String newPassword =
                request.getParameter("newPassword");

        String confirmNewPassword =
                request.getParameter("confirmNewPassword");

        // Check whether any password field is empty.
        if (currentPassword == null
                || currentPassword.trim().isEmpty()
                || newPassword == null
                || newPassword.trim().isEmpty()
                || confirmNewPassword == null
                || confirmNewPassword.trim().isEmpty()) {

            response.sendRedirect(
                    "profile.html?passwordError=empty"
            );
            return;
        }

        // Check whether the new passwords match.
        if (!newPassword.equals(confirmNewPassword)) {

            response.sendRedirect(
                    "profile.html?passwordError=mismatch"
            );
            return;
        }

        // Make sure the new password is different.
        if (currentPassword.equals(newPassword)) {

            response.sendRedirect(
                    "profile.html?passwordError=same"
            );
            return;
        }

        // Create the DAO object.
        UserDAO userDAO = new UserDAO();

        // Change the password in the database.
        boolean changed = userDAO.changePassword(
                loggedInUser.getId(),
                currentPassword,
                newPassword
        );

        // Check whether the password was changed.
        if (changed) {

            /*
             * Update the password stored in the session
             * so the session contains the latest user data.
             */
            loggedInUser.setPassword(newPassword);

            session.setAttribute("user", loggedInUser);

            // Return to the profile page with success message.
            response.sendRedirect(
                    "profile.html?passwordSuccess=true"
            );

        } else {

            /*
             * The current password was incorrect
             * or the database update failed.
             */
            response.sendRedirect(
                    "profile.html?passwordError=incorrect"
            );
        }
    }

    /**
     * Redirects GET requests to the profile page.
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

        response.sendRedirect("profile.html");
    }
}