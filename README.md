Purpose:

This app is to allow me to Create, Read, Updaate and Delete subjective ratings of the users in my MongoDB sample-mflix data. This is completely based on personal sentiment. Other clients are welcome to make CRUD updates based on their interpretation of the character.

Ex.

- {"\_id": {"$oid": "66804038ed86f587d65ded06"},
  "name": "Little Finger",
  "email": "aidan_gillen@gameofthrones",
  "password": "$2b$12$qM.YvmiekyYYY7p7phpK3OicbRCDkN7ESwYAnG/o9YnfHC0Mhkmbi",
  "ratings": "-10/10",
  "reason": "Master manipulator and habitual liar too.",
  "\_\_v": 0
  }

# Project Requirements

- Use at least three different data collections within the database (such as users, posts, or comments).
  - users
  - actors
  - reviews
- Utilize reasonable data modeling practices.
- Create GET routes for all data that should be exposed to the client, using appropriate query commands to retrieve the data from the database.

  - I created GET routes for all three collections but you only need it for User

- Create POST routes for data, as appropriate, using appropriate insertion commands to add data to the database. At least one data collection should allow for client creation via a POST request.

  - I created POST routes for all three collections but you only need it for User

- Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change data in the database. At least one data collection should allow for client manipulation via a PATCH or PUT request.

  - I created PATCH/PUT routes for all three collections but you only need it for User

- Create DELETE routes for data, as appropriate, using appropriate delete commands to remove data from the database. At least one data collection should allow for client deletion via a DELETE request.

  - I created PATCH/PUT routes for all three collections but you only need it for User

- Include sensible indexes for any and all fields that are queried frequently. For fields that may have a high write-to-read ratio, you may forgo indexes for performance considerations. Make comments of this where applicable.
- Include sensible MongoDB data validation rules for at least one data collection.

  - Note: This may be accomplished in a number of ways. If you choose to perform this task outside of your application's code, you must include a way to test the validation within the application's routes. This can be as simple as providing a POST route that attempts to create an invalid document and displays the resulting error.

- Populate your application's collections with sample data illustrating the use case of the collections. You must include at least five sample documents per collection.

  - Actors 10 documents
  - Reviews 10 documents
  - users 5 documents

  - Note: Double-check this requirement before submission. Testing your delete routes may leave you under the requirement. To be safe, populate your collections with sample data well above the requirement (we recommend 10-20 documents).

- Utilize reasonable code organization practices.
- Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
- Commit frequently to the git repository.
- Include a README file that contains a description of your application.
  - This README must include a description of your API's available routes and their corresponding CRUD operations for reference.
- Level of effort displayed in creativity and user experience.

API Documentation
Base URL
The base URL for the API is: http://localhost:3000/api

Routes and Operations

1. Create a User
   Route: POST /users
   Description: Create a new user in the database.
   Request Body: JSON object containing user details (e.g., name, email, password, ratings, reason).
   Response:
   Success (201 Created): Returns the created user object.
   Error (400 Bad Request): Returns a message describing the validation error.
2. Get All Users
   Route: GET /users
   Description: Retrieve a list of all users from the database.
   Response:
   Success (200 OK): Returns an array of user objects.
   Error (500 Internal Server Error): Returns a message indicating the failure to retrieve users.
3. Get a Single User
   Route: GET /users/:id
   Description: Retrieve a single user by their ID.
   Request Parameters:
   id: The MongoDB \_id of the user.
   Response:
   Success (200 OK): Returns the user object with the specified ID.
   Error (404 Not Found): Returns a message indicating that the user was not found.
4. Update a User
   Route: PUT /users/:id
   Description: Update an existing user's information by their ID.
   Request Parameters:
   id: The MongoDB \_id of the user.
   Request Body: JSON object containing the updated user details (e.g., name, email, password, ratings, reason).
   Response:
   Success (200 OK): Returns the updated user object.
   Error (404 Not Found): Returns a message indicating that the user was not found.
5. Delete a User
   Route: DELETE /users/:id
   Description: Delete a user from the database by their ID.
   Request Parameters:
   id: The MongoDB \_id of the user.
   Response:
   Success (204 No Content): No response body.
   Error (404 Not Found): Returns a message indicating that the user was not found.

This is similar for actors and reviews as well
