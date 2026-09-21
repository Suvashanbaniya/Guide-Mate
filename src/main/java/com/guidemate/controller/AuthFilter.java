package com.guidemate.controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.guidemate.model.user;

/**
 * Authentication and authorization filter for the GuideMate application.
 
 *
 * This filter checks whether a user has an active login session
 * before allowing access to protected pages.
 * 
 *
 * 
 * The filter also protects the admin page by checking the role
 * of the logged-in user. Only users with the "admin" role can
 * access the admin dashboard.
 *
 *

 */
@WebFilter(urlPatterns = {
        "/home.html",
        "/profile.html",
        "/find-guides.html",
        "/destination.html",
        "/payment.html",
        "/reviewpage.html",
        "/chat.html",
        "/admin.html"
})
public class AuthFilter implements Filter {

    /**
     * Checks whether the user is logged in and has permission
     * to access the requested page.
     *
     * @param request the servlet request
     * @param response the servlet response
     * @param chain the filter chain used to continue the request
     * @throws IOException if an input or output error occurs
     * @throws ServletException if a servlet-related error occurs
     */
    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
            throws IOException, ServletException {

        System.out.println("AUTH FILTER RUNNING");

        HttpServletRequest httpRequest =
                (HttpServletRequest) request;

        HttpServletResponse httpResponse =
                (HttpServletResponse) response;

        // Get the existing login session.
        HttpSession session =
                httpRequest.getSession(false);

        // Check whether a valid user login session exists.
        if (session == null
                || session.getAttribute("user") == null) {

            // User is not logged in.
            httpResponse.sendRedirect(
                    httpRequest.getContextPath()
                    + "/login.html"
            );

            return;
        }

        // Get the logged-in user from the session.
        user loggedInUser =
                (user) session.getAttribute("user");

        /*
         * Check whether the user is trying to access
         * the administrator page.
         */
        if ("/admin.html".equals(httpRequest.getServletPath())) {

            /*
             * Only users with the "admin" role can access
             * the administrator dashboard.
             */
            if ("admin".equalsIgnoreCase(loggedInUser.getRole())) {

                // Admin user is allowed to continue.
                chain.doFilter(request, response);

            } else {

                // Normal users cannot access the admin page.
                httpResponse.sendRedirect(
                        httpRequest.getContextPath()
                        + "/home.html"
                );
            }

            return;
        }

        /*
         * For all other protected pages, a logged-in user
         * is allowed to continue.
         */
        chain.doFilter(request, response);
    }

    /**
     * Initializes the filter.
     *
     * @param filterConfig configuration information for the filter
     * @throws ServletException if the filter cannot be initialized
     */
    @Override
    public void init(FilterConfig filterConfig)
            throws ServletException {

        // No initialization is required.
    }

    /**
     * Performs cleanup when the filter is destroyed.
     *
     * <p>
     * No cleanup is currently required for this filter.
     * </p>
     */
    @Override
    public void destroy() {

        // No cleanup is required.
    }
}