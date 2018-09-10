# Webshop

This project was created by me and my team during the second half of the 3rd, the OOP/Java module of Codecool. 
The task was to create an online webshop within the timeframe of 1 week-long sprints, 3 sprints in total. The official
guidelines (and thus the user stories) focused on the backend implementation, however we had decided to learn
a popular frontend framework in our spare time instead of using the provided Thymeleaf template engine.

[Here](https://github.com/DanielCs1988/webshop) is the repository link for the backend.

You can check out the deployed webshop [here](https://codeberg-webshop.firebaseapp.com).
The backend will take a couple of seconds to load for the first time, as it is put to sleep automatically by Heroku,
where it is deployed. The frontend is hosted on Google Firebase.

# Frontend: Angular 6 (React previously)

We originally built the frontend using React, but during the last sprint decided to switch to Angular, so
the entirety of it was rewritten. During the project's lifecycle a separate repository was
maintained for the single page application(s). As a sidenote, we dropped the usage of Bootstrap in this
project, so all the styles and animations are written in pure CSS, using new built-in features like the
flexbox and grid displays.  

# Backend: Java SE8 with PostgreSQL database

The web routes are set up using Java Servlets, powered by a Jetty server. Database connection is handled by
JDBC, using the DAO pattern and a modular, reusable utility package to make performing CRUD operations
simple and powerful, using JAVA generics. Unit tests are using JUnit5.

The app creates JWT tokens for registered users using the HSA256 algorithm, and after that all authentication
and authorization is dealt with via those tokens.
