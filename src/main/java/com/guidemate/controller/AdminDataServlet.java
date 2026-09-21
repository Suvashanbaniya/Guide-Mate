package com.guidemate.controller;

import java.io.IOException;
import java.io.PrintWriter;
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
 * Provides user information for the GuideMate admin dashboard.
 *
 * <p>
 * This servlet checks the admin session and retrieves tourist
 * or guide information from the database through AdminDAO.
 * </p>
 *
 * @author GuideMate Development Team
 */
@WebServlet("/AdminDataServlet")
public class AdminDataServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    /**
     * Handles requests for tourist and guide information.
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

        // Make sure the user is logged in.
        if (session == null) {
            response.sendError(
                    HttpServletResponse.SC_UNAUTHORIZED
            );
            return;
        }

        // Get the logged-in user.
        user loggedInUser =
                (user) session.getAttribute("user");

        // Only administrators can access this servlet.
        if (loggedInUser == null
                || !"admin".equalsIgnoreCase(
                        loggedInUser.getRole())) {

            response.sendError(
                    HttpServletResponse.SC_FORBIDDEN
            );
            return;
        }

        // Get the requested data type.
        String type = request.getParameter("type");

        // Create the DAO.
        AdminDAO adminDAO = new AdminDAO();

        // Tell the browser that HTML is being returned.
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        PrintWriter out = response.getWriter();

        /*
         * Return tourist accounts.
         */
        if ("tourists".equalsIgnoreCase(type)) {

            List<user> tourists =
                    adminDAO.getAllTourists();

            for (user tourist : tourists) {

                out.println("<tr>");

                // Display the user's ID.
                out.println("<td>"
                        + tourist.getId()
                        + "</td>");

                // Display the user's name.
                out.println("<td>"
                        + tourist.getName()
                        + "</td>");

                // Display the user's email.
                out.println("<td>"
                        + tourist.getEmail()
                        + "</td>");

                // Display the user's phone.
                out.println("<td>"
                        + tourist.getPhone()
                        + "</td>");

                // Display the user's city.
                out.println("<td>"
                        + tourist.getCity()
                        + "</td>");

                // Delete button.
                out.println("<td class='text-center'>");

                out.println(
                        "<button type='button' "
                        + "class='delete-btn' "
                        + "onclick='deleteTourist("
                        + tourist.getId()
                        + ")'>"
                        + "<i class='fa-solid fa-trash'></i> "
                        + "Delete"
                        + "</button>"
                );

                out.println("</td>");

                out.println("</tr>");
            }

        /*
         * Return guide accounts.
         */
        } else if ("guides".equalsIgnoreCase(type)) {

            List<user> guides =
                    adminDAO.getAllGuides();

            for (user guide : guides) {

                out.println("<tr>");

                // Display the guide's ID.
                out.println("<td>"
                        + guide.getId()
                        + "</td>");

                // Display the guide's name.
                out.println("<td>"
                        + guide.getName()
                        + "</td>");

                // Display the guide's email.
                out.println("<td>"
                        + guide.getEmail()
                        + "</td>");

                // Display the guide's role.
                out.println("<td>"
                        + guide.getRole()
                        + "</td>");

                // Display the guide's city.
                out.println("<td>"
                        + guide.getCity()
                        + "</td>");

                // Delete button.
                out.println("<td class='text-center'>");

                out.println(
                        "<button type='button' "
                        + "class='delete-btn' "
                        + "onclick='deleteTourist("
                        + guide.getId()
                        + ")'>"
                        + "<i class='fa-solid fa-trash'></i> "
                        + "Delete"
                        + "</button>"
                );

                out.println("</td>");

                out.println("</tr>");
            }

        } else {

            // Invalid request type.
            response.sendError(
                    HttpServletResponse.SC_BAD_REQUEST,
                    "Invalid data type."
            );

            return;
        }

        out.close();
    }
}