package com.view.User;

import com.entity.user.LoggedInUser;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class UserProfileServlet extends HttpServlet {

//    private LoggedInUser user;
//
//    public UserProfileServlet(LoggedInUser user) {
//        this.user = user;
//    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Perform data retrieval or processing here
        HttpSession session = request.getSession();
        if (session.getAttribute("username") == null) {
            session.setAttribute("username", "You are not signed in");
        } else {
            // if user is signed in things go here. Mostly will be handled
            // elsewhere though I think.
        }

        response.sendRedirect("profile.jsp");
    }
}