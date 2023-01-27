# Project 4

### World Attraction App
#### Description and background of the app
* The World Attraction App is a world attraction-focused promotion service which publishes world attraction profiles for travel planning.
* It lets users create their own attraction, and share them to other users for travel planning

### Screenshots
#### Screenshot #1 - Landing page before login
![Screenshot #1](https://i.imgur.com/4OD5aNj.png)

#### Screenshot #2 - Landing page after login / View all attractions
![Screenshot #2](https://i.imgur.com/GcyLw3t.png)

#### Screenshot #3 - View a particular attraction
![Screenshot #3](https://i.imgur.com/zP9zBDs.png)

#### Screenshot #4 - Edit a particular attraction
![Screenshot #4](https://i.imgur.com/gO4l49m.png)

### Technologies Used
* Web languages
    * HTML
    * CSS
    * JavaScript
* Server environment
    * Node.js
* Node.js module
    * dotenv
    * mongoose
    * react-router-dom
    * bcrypt
    * jsonwebtoken
* Authorization and authentication
    * Token-based authentication
* Database
    * MongoDB

### Getting Started
#### Click on the following link to access the World Attraction app
* [Trello board - project planning](https://trello.com/b/KuWZWOF9/sei56-project-4-planning)
* [Project 4 - Site](https://project-4-attractions.herokuapp.com/)

### Next Steps
#### The following functionality can be added 
* User model
    * Add fields to the user model to allow users to input more profile details, such as user level (operaters of certain attractions (museum, national parks, etc.), regular users)
* Attraction
    * Add map feature for location
    * Allow users to upload more pictures of the attraction
* Other models
    * Add location model to allow users to choose the city, province/state, country, continent
    * Add itinerary model to allow users to add attractions to their itinerary
    * Add review and favorite model to allow users to review attractions and add attractions to favorites
* Other features
    * Allow users to change theme of the app
    * Add messaging function between users to share their experience
    * Consume third-party APIs for populating attraction information to database
    * Consume API for Imgur
    * Upload images/assets to AWS S3
