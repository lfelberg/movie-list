# Movie List

The idea here is to develop a list of movies using the React framework. The link to the gist is [here](https://gist.github.com/beth/3e7eb34ff1a46b674d40ece896c593c2)

## To run

1. npm install
2. npm install -g webpack-cli
2. webpack -d -w
3. live-server

## Steps:

### Level 0

[Gist link](https://gist.github.com/beth/3e7eb34ff1a46b674d40ece896c593c2)

- [Complete] Display a list of movies from hardcoded data.

### Level 1

[Gist link](https://gist.github.com/beth/a9626adab3042e740e3f4245a7b99093)

- [Complete] Add a search bar so that a user may see if a movie is in the list. 
- [Complete] After a user submits the search, display all matches (or partial matches) to that title.
- [Complete] Bonus: Handle the case of "no movie by that name found" gracefully

### Level 2

[Gist link](https://gist.github.com/beth/f447b5a6c9e3ce292469307e515f5cb1)

- [ ] Add an input field for users to add movies.
- [ ] Display only user added movies, not the hardcoded data.

### Level 3

[Gist link](https://gist.github.com/beth/2513507e9233161a5b0ba1adb7434ffa)

- [ ] Add a button to each list item that allows the user to toggle a 'watched' property.
- [ ] Add two buttons to allow the users to toggle between a list of 'watched' movies and movies 'to watch'.

### Level 4

[Gist link](https://gist.github.com/beth/348b8e28057cddc4b9bfbfcb49e3d45d)

- [ ] Add a panel of movie information that appears when the title is clicked (consider starting with hardcoded information)
- [ ] Refactor the watch toggle to be part of the movie information panel
- [ ] Get movie information from the The Movie Database API (https://www.themoviedb.org/documentation/api) 

![level 4_image 1](https://cloud.githubusercontent.com/assets/7968370/26704478/3ddcc304-46e4-11e7-83c2-2c04de3baa5d.png)
![level 4_image 2](https://cloud.githubusercontent.com/assets/7968370/26704480/3f2d5b4c-46e4-11e7-9d19-1f684022139c.png)

You've reached the end of the front end levels! To proceed to the server levels, check out [level 5](https://gist.github.com/beth/ed2a6033b055d6419789fe32a015d590)!

If you don't want to start servers yet, but want to add more to your front end, here are some bonus ideas:

#### Other ideas (not pictured)
- [ ] Think about when it makes sense to request this information from the api - when the user clicks on the title? When the movie gets added? Refactor your code as necessary.
- [ ] Add a way for the user to add their own rating
- [ ] Add a sorting mechanism so the user can sort on rating or other properties
- [ ] Refactor search to allow users to search for movies with a specific director or actor/actress

### Level 5

- [ ] Create a server that listens on port 3000 and responds to all requests with "Hello World" 
- [ ] In your request handler, when a GET request is made to /api/movies, respond with a list of movies (just start with some made up list)
- [ ] Confirm, using postman, that your route works as expected and responds to all other requests with "Hello World"
- [ ] Refactor your front end to get the list of movie titles from the server, instead of using a hardcoded list of movie titles
