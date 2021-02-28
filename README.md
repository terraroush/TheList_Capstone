# TheList

## Application Overview

​
TheList is an application for users to create and organize lists. TheList will accomodate a ToDo list, or grocery, or whatever; it is your choice. I created TheList to make my weekly grocery trip more interactive and efficient. A fun feature is grocery ingredient autocomplete when you select the grocery button.

​

### Technologies Used

![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white)
C#
SQL
LINQ
​
-> This app was built 100% remotely in three weeks. I used Javascript, React, HTML, CSS to build the client-side and C#, .NET with Entity Framework Core 5.0 to build the server side. I used Figma and DB Diagram to begin the imaginings and inner workings of the app. I used Zoom to participate in daily standups and to stay in contact with my learning team and any fellow student support network.

## Running This Application

### Firebase
1. Create a Firebase project for authentication and authorization:
- Go to [Firebase](https://firebase.google.com/)
- click "get started" then "add project" then name according to your preference
- add Authentication by enabling Email/Password
- click the gear next to "Project Overview", from Project Settings, collect the Project ID and the Web API Key for later use

### Spoonacular
2. Create an account with Spoonacular to get an API key [Spoonacular](https://spoonacular.com/food-api), sign up is free
- create an account and locate your key for use later

### Terminal
3. Clone the project locally.
- from terminal run: ```git clone git@github.com:terraroush/TheList_Capstone.git```

### Visual Studio (for back-end code)
4. Open TheList_Capstone in Visual Studio
5. Include your Firebase Project ID:
- open ```appsettings.json```; change ```"FirebaseProjectId": "thelist-capstone"``` to the name of your Firebase Project ID.
6. Set up the database
- In the ```SQL``` folder, open and run ```02_Db_Create.sql``` to create the database and starter data
7. Serve the project by clicking the play button (select the correct project first)

### Visual Studio or VS Code
8. Supply your freshly created API keys, Firebase and Spoonacular:
- create a file called ```.env.local``` in the ```client``` folder
- copy/paste with your keys instead of the placeholders:
  ```
  REACT_APP_API_KEY=yourFirebaseApiKey
  REACT_APP_SPOONACULAR_KEY=yourSpoonacularApiKey
  ```
### Terminal
9. from ```client``` dir, run ```npm install```
10. run ```npm start```

## Wireframe v1 The Original Mock Ups

<!-- ![Image of wireframe2]()
![Image of wireframe4]()
![Image of wireframe7]() -->

## ERD _entity relationship diagram_

