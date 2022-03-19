<template>
    <div class="content">
        <h1 id="top-title">This is About Page</h1>
        <br><br>
        <p>
            I have made this project to help me practice the topics which I covered in Nodejs and Vuejs course. During the start the process was very vague 
            about how to go on with this project. The main thing was i wanted to get hands on experience on Vuejs Authentication, how it works and Nodejs. I 
            had already made APIs using Flask in one of my assignments so it was a bit easy for me to understand.I did some research and exploration on my own 
            and asked some friends. This application provides a Login/Register page through which a user can register and add Notes/Secrets. Notes refer to private data
            that a user might have if this application would have bigger application. A user can see his/her notes only after he/she is registered or logged in.
            They can add and update notes after logging in or signing up.

        </p>
    </div>
    <br>
    <div class="content">
        <h2>Overview</h2>
        <p>
            A user can sign up or login and then he/she can see the notes they made,update or delete them. By completing this project I got some more practice in
            Nodejs and Vuejs.
        </p>
    </div>
    
    <div class="content">
        <h2>Frontend</h2>
        <p>
            I used bootstrap to help make the website more responsive. There are several pages in this application which includes a Register, Login, About, Home, Secret pages.
            Register Page :-  A user can register using email and password. <br>
            Login Page :-  A user can login using email and password.<br>
            About Page:- It contains an Overview of the project and the process of making it.<br>
            Home Page:-I haven’t got any ideas on what to include in this page. Further exploration is needed.<br>
            Secret Page:- After a User has logged in or Signed up he/she can start adding notes/secret.<br>
            <br>
            I included navigation bar from bootstrap and also added a form for register and login page from bootstrap. When a user signs up or logs in the email and password is set to the backend and we get the user object and jwt-token from the backend. The user and token object received from the backend is saved in the vuex store for app-wide use. I used axios to send the requests.
            <br><br>
            When a unauthorized user tries to go to the secret page ,they are redirected to home page. I used navigation guard for this purpose.  Before entering the secret page I check if there is jwt-token present. If its present , the user is permitted to go forward. Otherwise the user has to login or signup.



        </p>
    </div>
    

    <br>
    <div class="content">
        <h2>Backend</h2>
        <p>
            There are 4 basic routes which I set up using express package which are Register, Login, Get-Notes, Add-Notes. There are some more functionality to be added namely to edit or delete a note. I have to work on that.
            <br><br>
            Only register and login routes are exposed rest all are behind authentication. When a user Registers the backend first checks if there is a user with the same email. If present the request is rejected with error that the user with same email is already present. Otherwise if all is well ,the  user is created and the jwt-token is sent back. Same is in login, the backend gets email and password and checks if it matches the ones in Database. If everything is well the jwt-token is sent back.
            <br><br>
            I have two collection/table, users and secret. The User table contains information regarding user, that is email, password, uuid. The secret table contains information about the secrets/notes , which are title, body, uuid, owner . I have used Mongodb as the database and mongoose for setting up ODM. I have a virtual field in the user object and an owner field in secret for User and Secret relationship.

        </p>
    </div>
    

</template>


<style scoped>
.content{
    margin-left: 3%;
    margin-right: 3%;
}
p{
    font-family: 'Roboto Condensed', sans-serif;
    text-align:justify;
    word-spacing: 2px;
}
#top-title{
    text-align: center;
font-weight: 600;
font-size: xxx-large;

}
</style>