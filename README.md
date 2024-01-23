# Tech Educators Bootcamp Week 07 Assignment
============================================

## Build a database driven React app
------------------------------------

### Task

Create a database driven React app in the form of a simple forum.

<br>
<br>

### Requirements

- Make in the order of : Database (Supabase), Server (Express), Client (React)
- Design a database schema with relationships between tables
- Create a new application with a React client and an Express server
- Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file
- Create Express endpoints to handle requests so you can POST and GET the data appropriately for your application
- Create multiple pages using react-router-dom
- Create a home page
- Create a page to show all the posts and use fetch to call your server to get your data
- Create a page where users can create new posts using a form


<br>

### Feedback from user stories


- As a user, I want to be able to create new posts and add them to the page
- As a user, I want to be able to assign a category to each post
- As a user, I want to be able to view all posts added on the page and the category they're in
- As a user, I want to be able to view all posts in a specific category by visiting a dedicated page for that category
- As a user, I want to be able to add new categories
<br>


### Issues and process

I had three major problems on this project

1. Making the assumption that it would be straightforward to use a previous assignment as a design guide to create the project (guestbook).
2. Thinking too far ahead with implementing stretch goals while creating the project.
3. Having to abandon the project and start over on the Saturday before the assignment was due


The project was implemented in the three stages

1. Database (Supabase)
2. Server (Express) 
3. Client (React)
<br>

The database and server were relatively straightforward to set up.
The first iteration was set up on the Render service before Friday and there was evidence that data needed was succesfully being fetched and the client was in a running state.

Problems started when I was attempting to pull in data and placing it on the page to list posts, while having a live form for data entry at the top of the page. The way it was structured meant that React hooks were attempting too many database calls in the background. I thought I had resolved the problem, but found that it had stopped data being read again after looking at different pages. 

I had a second attempt at the project, but struggled to implement the page routing properly, which meant that it couldn't pull in the data for the single instance of the post via fetch(), even though the ID was being found and displayed on the page. I simplified the functionality of project in an attempt to just achieve the requirements

Running out of time, I pushed it to GitHub. The Render service created the server properly, but couldn't finish deploying it. No errors were given and I even gave it an hour to finish and cleared out the database cache. I found out that it was not allowing the port of 8080 for the server, which had been used successfully on previous projects. Having gone through the documentation on Render, which stated that the recommended port is 10000. This fixed that issue.
Then later on the Monday I discovered another problem in that the service was far more fussy about 'Link' being used than the local setup was, which means it is not opening the component is not connecting for the single post instance and therefore won't even pull through the post id.


### Requirements achieved

- Make in the order of : Database (Supabase), Server (Express), Client (React)
- Design a database schema with relationships between tables
- Create a new application with a React client and an Express server
- Seed the database with data. Either run your SQL queries in Supabase SQL Editor OR use a seed.js file
- Create Express endpoints to handle requests so you can GET the data appropriately for your application
- Create multiple pages using react-router-dom
- Create a home page
- Create a page to show all the posts and use fetch to call your server to get your data
- The database schema is in the 'design' folder inside the 'client' folder.
- A seed file is present on the server, containing table creation scripts and INSERT scripts to create the test data.
<br>

### Requirements NOT achieved

- Create Express endpoints to handle requests so you can POST the data appropriately for your application
- Create a page to show all the posts and use fetch to call your server to get your data
- Create a page where users can create new posts using a form
<br>

This was uploaded after the deadline.
The only other changes made after the deadline was a fix to the package.json file, due to the server having issues with deployment due to port number.