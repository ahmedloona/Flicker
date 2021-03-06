## Description

Flutter is a photo management and photo sharing application where users can upload, organize, and share their photos.
Users may also caption and tag their own photos, as well as comment on all photos. 

## Technologies Employed

This application is built using the React.js library with Redux (for maintaining application state) on the frontend together with Rails for implementing the necessary APIs on the backend server. AJAX used to enable asynchronous interaction between frontend and backend. 

The database used is PostgreSQL. 

CSS3 was used for frontend styling.


## Feature 1: User Authentication

1. User visits the application [flutter](https://friskr.herokuapp.com/#/)

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/1_home.png" width="600">


2. User clicks the login (existing user) or signup button (new user)

2 A. _Logging in_. On clicking Login button, user may enter their credentials or click __Demo__ button to try out the site without having to create an account

* User clicks the __Demo__ button

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/2_demo_login.png" width="600">


* User enters their own credentials with errors. The errors are displayed and handled allowing user to correct their input

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/3_invalid_credentials.png" width="400">


* Upon successful login, user is directed to an index page showing all photos. The navigation bar shows a greeting for the current user

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/5_dashboard_1.png" width="400">
<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/6_dashboard_2.png" width="400">
<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/7_dashboard_3.png" width="400">

2 B. _Signing Up_ 

* On clicking the signup button, user sees the signup form

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/3_signup.png" width="400">

* User __Signs Up__ with invalid credentials, missing password. 

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/3_invalid_credentials.png" width="400">

* User __Signs Up__ with invalid credentials, missing email. 

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/4_credential_validation.png" width="400">


* User __Signs Up__ with invalid credentials, duplicate username. User receives feedback with suggested correction

<img src="https://github.com/ahmedloona/Flicker/blob/master/readme_images/3_invalid_credentials_username_taken.png" width="400">


## Feature 2: Photos


## Feature 3: Albums
Coming soon

## Feature 4: Tags
Coming soon

## Feature 5: Comments
Coming Soon


## Pending List
* Implement albums feature
* Implement tags and comments features
* Enhance frontend design responsive based on device screensize


