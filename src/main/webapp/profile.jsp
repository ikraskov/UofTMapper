<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.entity.review.Review" %>
<%@ page import="com.entity.Reviewable" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/user-profile.css">
    <link rel="stylesheet" href="css/navbar.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/standard_background.css">
    <title>User Profile</title>
</head>

<body>

<header>
    <h1>User Profile</h1>
</header>

<nav>
    <a href="index">Home</a>
    <a href="#mainMap">Main Map</a>
    <div class="dropdown">
        <a class="dropbtn">Profile</a>
        <div class="dropdown-content">
            <a href="#favourites">Favourites</a>
            <a href="#userReviews">Reviews</a>
            <a href="profile">Profile</a>
        </div>
    </div>
    <a href="#about">About</a>
    <a href="signout">Sign Out</a>
</nav>

<section>
    <h1>Welcome, <%= session.getAttribute("username")%></h1>
</section>
<section>
    <h2>Favourites</h2>
    <div>id="favouritesContainer"</div>
</section>
<section>
    <h2>Favourite Buildings</h2>
    <div>id="favBuildingsContainer"</div>
</section>
<section>
    <h2>Favourite Buildings</h2>
    <div>id="favBuildingsContainer"</div>
</section>
<section>
    <h2>Favourite Rooms</h2>
    <div>id="favRoomsContainer"</div>
</section>
<section>
    <h2>Your Reviews</h2>
    <div>id="reviewContainer"</div>
</section>

<div class="contactInformation">
    <h1>Contact Us</h1>
    <h3>The Gods of the UniVerse</h3>
    <p>
        Evan Wang<br>
        Isabella Nguyen<br>
        Ivan Kraskov<br>
        Liam Csiffary<br>
        Raon Kim<br>
    </p>
</div>

</body>
</html>
