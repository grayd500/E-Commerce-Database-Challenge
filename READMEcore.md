# E-commerce Back End Starter CodeObject-Relational Mapping (ORM) Challenge: E-commerce Back End
Internet retail, also known as e-commerce, plays a significant role within the electronics industry, as it empowers businesses and consumers alike to conveniently engage in online buying and selling of electronic products. In the latest available data from 2021, the industry in the United States alone was estimated to have generated the substantial amount of US$2.54 trillion, according to the United Nations Conference on Trade and Development. E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.

Your challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

Refer to the Video Submission GuideLinks to an external site. on the Full-Stack Blog for additional guidance on creating a video.

IMPORTANT
Make sure to clone the starter code repository and make your own repository with the starter code. Do not fork the starter code repository!

Before you start, clone the starter codeLinks to an external site..

User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
Mock-Up
The following animations show examples of the application's API routes being tested in Insomnia Core.

![E-commerce Back End Demo](./assets/images/13-orm-homework-demo-01.gif)


![E-commerce Back End Demo](./assets/images/13-orm-homework-demo-02.gif)


![E-commerce Back End Demo](./assets/images/13-orm-homework-demo-03.gif)

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia Core:
https://bootcampspot.instructure.com/courses/4010/assignments/59481?module_item_id=1040645

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:
https://bootcampspot.instructure.com/courses/4010/assignments/59481?module_item_id=1040645

Your walkthrough video should also show the POST, PUT, and DELETE routes for products and tags being tested in Insomnia Core.

Getting Started
You’ll need to use the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect your Express.js API to a MySQL database and the dotenv packageLinks to an external site. to use environment variables to store sensitive data, like your MySQL username, password, and database name.

Use the schema.sql file in the db folder to create your database using MySQL shell commands. Use environment variables to store sensitive data, like your MySQL username, password, and database name.

Database Models
Your database should contain the following four models, including the requirements listed for each model:

### Category
id 🎇
Integer
Doesn't allow null values
Set as primary key
Uses auto increment
category_name 🎇
String
Doesn't allow null values

### Product
id 🎇
Integer
Doesn't allow null values
Set as primary key
Uses auto increment
product_name 🎇
String
Doesn't allow null values
price 🎇
Decimal
Doesn't allow null values
Validates that the value is a decimal
stock 🎇
Integer
Doesn't allow null values
Set a default value of 10
Validates that the value is numeric
category_id 🎇
Integer
References the category model's id

### Tag
id 🎇
Integer
Doesn't allow null values
Set as primary key
Uses auto increment
tag_name 🎇
String

### ProductTag
id 🎇
Integer
Doesn't allow null values
Set as primary key
Uses auto increment
product_id 🎇
Integer
References the product model's id
tag_id 🎇
Integer
References the tag model's id

## Associations
You'll need to execute association methods on your Sequelize models to create the following relationships between them:

Product belongs to Category, as a category can have multiple products but a product can only belong to one category.

Category has many Product models.

Product belongs to many Tag models. Using the ProductTag through model, allow products to have multiple tags and tags to have many products.

Tag belongs to many Product models.

Make sure you set up foreign key relationships that match the column we created in the respective models.

Seed the Database
After creating the models and routes, run npm run seed to seed data to your database so that you can test your routes.

Sync Sequelize to the Database on Server Start
Create the code needed in server.js to sync the Sequelize models to the MySQL database on server start.

## Grading
A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your README file.

The walkthrough video must show all of the technical acceptance criteria being met.

The walkthrough video must demonstrate how to create the schema from the MySQL shell.

The walkthrough video must demonstrate how to seed the database from the command line.

The walkthrough video must demonstrate how to start the application’s server.

The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia Core.

The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia Core.

The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia Core.

Technical Acceptance Criteria: 40%
Satisfies all of the preceding acceptance criteria plus the following:

Uses the MySQL2Links to an external site. and SequelizeLinks to an external site. packages to connect to a MySQL database.

Uses the dotenv packageLinks to an external site. to use environment variables to store sensitive data, like a user’s MySQL username, password, and database name.

Syncs Sequelize models to a MySQL database on the server start.

Includes column definitions for all four models outlined in the Challenge instructions.

Includes model associations outlined in the Challenge instructions.

|--- Develop
|  |--- config\
|  |    |--- connection.js
|  |--- db\
|  |    |--- schema.sql
|  |--- models\
|  |    |--- Category.js
|  |    |--- Product.js
|  |    |--- ProductTag.js
|  |    |--- Tag.js
|  |    |--- index.js
|  |--- routes\
|  |    |--- index.js
|  |    |--- api\
|  |        |--- category-routes.js
|  |        |--- index.js
|  |        |--- product-routes.js
|  |        |--- tag-routes.js
|  |--- seeds\
|  |    |--- category-seeds.js
|  |    |--- index.js
|  |    |--- product-tag-seeds.js
|  |    |--- tag-seeds.js
|  |--- server.js
|  |--- .env
|  |--- .gitignore
|  |--- package.json
