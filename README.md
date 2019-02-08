## Learning React by building 5 Projects:

- [X] Person List [`link`](https://github.com/MaxBaranowski/mb-react-learninig/tree/person_list_project)
- [ ] City Tours
- [ ] Todo List
- [ ] Room Search
- [ ] Portfolio

### Person List
Making smth like this
![Screenshot](screenshot.png)

## Code Refactoring

### Goals to achieve

- [X] Rewrite Components/Replace to Component Folder
- [X] Get users info from [`Random User Generator`](https://randomuser.me/)
- [X] Ajax call for getting basic users info
- [ ] Showing detail user info
- [ ] Ajax call for getting detail user info

#### In progress...

## After completing first three things...

### Showing detail user info/getting detail user info 
Component which shows all available users now looks like:
![Screenshot](in-progress-1.gif)

Appeared a problem with getting/storing user detailed data.<br>  
[`Random User Generator`](https://randomuser.me/) is good, but seems not good enough for me. As i wants user data been `basic` (id, name, nationality) and `detailed` (all available keys which user generator gives). So i decided to create my own database with users. I will use [`mlab.com`](https://mlab.com) - Free Database-as-a-Service for MongoDB, to store users.

Also simple server is needed, as i\`m interesting in Node.js, server which should handle requests from React app and sending appropriate requests to the DataBase will be written in Node.js with further deploying on [`Heroku`](https://www.heroku.com/).
