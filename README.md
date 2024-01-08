# SocialNoSQL-API

## Description

The SocialNoSQL-API is a Node.js-based API for a NoSQL database that facilitates social interactions. It includes features for managing users, thoughts, and friend relationships.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Contact Info](#contact-info)

## Installation

To run the SocialNoSQL-API app locally, follow these steps:

1. **Clone the repository to your local machine:**

    ```bash
    git clone https://github.com/joellopez95/SocialNoSQL-API.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd SocialNoSQL-API
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Seed data:**

    ```bash
    npm run seed
    ```

5. **Start the application:**

    ```bash
    node index.js
    ```

6. **Open Insomnia application and go to [http://localhost:3001](http://localhost:3001) to use the application.**

## Usage

1. **GET all Users**

    ```bash
    To retrieve a list of all users, make a GET request to the following endpoint:

    GET http://localhost:3001/api/users

    ```

2. **Get a single User:**

    ```bash
    To retrieve information about a specific user, make a GET request to the endpoint with the user ID:

    GET http://localhost:3001/api/users/:userId


    ```

3. **Create a New User:**

    ```bash
    To create a new user, make a POST request to the following endpoint with the required data in the request body:

    POST http://localhost:3001/api/users
    Content-Type: application/json

    {
    "username": "newUser",
    "email": "newuser@example.com"
    }

    ```

4. **Get all Thoughts:**

    ```bash
    To retrieve a list of all thoughts, make a GET request to the following endpoint:

    GET http://localhost:3001/api/thoughts


    ```

5. **Get a Single Thought:**

    ```bash
    To retrieve information about a specific thought, make a GET request to the endpoint with the thought ID:

    GET http://localhost:3001/api/thoughts/:thoughtId

    ```

6. **Create a New Thought**

    ```bash
    To create a new thought, make a POST request to the following endpoint with the required data in the request body:

    POST http://localhost:3001/api/thoughts
   Content-Type: application/json
    {
     "thoughtText": "This is a new thought!",
    "username": "newUser"
    }   

    ```

7. **The rest of the CRUD Operations in Video Attached:**

## Video

Usage of the SocialNoSQL-API.

[Watch the Video](https://watch.screencastify.com/v/7NRedju1pgdJMrAZgiix)


## Contributing

A special thanks to the following resources that contributed to the development of this project:

- [W3-Schools](https://www.w3schools.com/)
- [Mozilla Developer](https://developer.mozilla.org/)
- [Jeremy Henry (Bootcamp Instructor)](https://exampleinstructor.com/)

Feel free to contribute to this project by forking and submitting a pull request.

## Tests

N/A

## License

This project is licensed under the [MIT License](LICENSE).

## Contact Info

For any questions or concerns, feel free to contact me:

- Name: Joel Lopez
- GitHub: (https://github.com/joellopez95)
- Email: jolopez.satx@gmail.com
