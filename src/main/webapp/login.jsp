<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>GuideMate - Login</title>

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">
</head>

<body>

    <div class="login-container">

        <h1>GuideMate</h1>
        <h2>Login</h2>

        <!-- Login Form -->
        <form action="LoginServlet" method="post">

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email"
                       id="email"
                       name="email"
                       placeholder="Enter your email"
                       required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password"
                       id="password"
                       name="password"
                       placeholder="Enter your password"
                       required>
            </div>

            <button type="submit">Login</button>

        </form>

        <p>
            Don't have an account?
            <a href="register.jsp">Register</a>
        </p>

    </div>

    <!-- JavaScript -->
    <script src="js/script.js"></script>

</body>
</html>