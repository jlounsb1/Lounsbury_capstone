<h1>Doggy Play Dates</h1>
<h3>A Per Scholas Software Engineering Capstone</h3>
<p>Jeff Lounsbury, August 2024 MERN Software Stack</p>

<h3>About the App</h3>
<p>This project is a doggy play date app.  The user can sign up then log in to see what playdates have been made by them or other users in the playdates tab.  To make a playdate with another dog, the user can navigate to the dog list tab, see the other dogs on the app with some basic information.  They can then click on the make a playdate button which takes them to a screen with their information and they other dogs information. They fill out the form at the bottom, and hit the make a play date button. This will redirect them to their lists of playdates which is then updated.</p>

<h3>About the Project</h3>

<p>This is a capstone project by Jeff Lounsbury for the Per Scholas Software Engineering program.  The MERN stack was used. The front end is a react application, and the backend is a very simple API on an express web server connected to a MongoDB database.</p>

<p>User encription is not part of this application, so no sensitive information should be registered with the database. Login information is held in local storage, then when information about that user is needed, or a playdate needs to be created, it is referenced with that information inside the MongoDB collection. To show only the playdates associated with the user, the playdate collection contains the ._id of both users, then is filtered through to get only the matching ._id's.</p>

<h3>Unlisted video tour of the website:</h3>
<a href=""></a>

To deploy:
 https://dashboard.render.com/