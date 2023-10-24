# E-commerce Back End Starter Code

## Description

This project serves as the back end for an e-commerce platform. Given the increasing importance of e-commerce, having a robust back end is critical for the competitiveness of any online retail business. 

- **What was my motivation?** 
  - To practice ORM, get my hands dirty with Sequelize, and to prepare for a career in back-end development.
  
- **What problem does it solve?**
  - It provides an API that could serve as the back end for an e-commerce platform.

- **What did I learn?**
  - How to set up a Sequelize project, integrate it with an Express.js API, and how to set up various types of API routes.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation

1. Clone this GitHub repository
   git clone <Your-Repo-URL-Here>
  
2. Navigate to the project folder in your terminal and install all dependent npm packages.
   cd <Your-Project-Directory>
   npm install express sequelize mysql2 dotenv
   npm install --save-dev jest

3. Create a .env file in the root directory for environment variables. Populate it with your MySQL username, password, and database name.
   DB_NAME='your_database_name'
   DB_USER='your_username'
   DB_PASS='your_password'

4. Execute the following command to seed your MySQL database.
   npm run seed
  
5. Execute the following command to start the Express.js server.
   npm start


## Usage

You can use tools like Insomnia Core for testing the API endpoints. The API allows you to:

- Fetch, create, update, and delete Categories, Products, and Tags.

![E-commerce Back End Demo](./assets/images/13-orm-homework-demo-01.gif)
![E-commerce Back End Demo](./assets/images/13-orm-homework-demo-02.gif)
![E-commerce Back End Demo](./assets/images/13-orm-homework-demo-03.gif)

## Credits

- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express.js](https://expressjs.com/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- Starter Code: [University of Texas at Austin Coding Bootcamp](https://bootcamp.cvn.utexas.edu/)
- README.md and Commenting Assistance, Automated Code Snippet Creation: [ChatGPT by OpenAI](https://openai.com/research/chatgpt)

## License

MIT

---

## Features

- Robust API with full CRUD capabilities for Categories, Products, and Tags.
- Secure environment variables using Dotenv.
- Sequelize ORM for MySQL database management.

## How to Contribute

Feel free to fork the project and submit your contributions via a pull request.

## Tests

1. Run `npm run seed` to populate the database with test data.
2. Use Insomnia Core to test all API routes.