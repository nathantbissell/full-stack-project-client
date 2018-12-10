This application is a full stack project used to show shoes in a user's shoe closet. The app uses a Ruby on Rails backend that handles all incoming API requests and directs them to the proper application controllers. The backend uses a postgreSQL database to create users, and document their email, id, password, favorite brand and favorite color. The information is linked via a one to many dependency where a user has many shoes.

The interface allows a user to create a shoe, pull up one shoe, pull up all shoes in the database, update a shoe that already exists, and delete a shoe from the database. All of these commands run through the API and execute only if the user is signed in. The current user signed in is the only one allowed to destroy and update shoes that they created. All other shoes can be viewed by a signed in user.

The front-end of this application was designed with Javascript, JQuery functions, AJAX requests to the API, CSS, HTML, and the use of Bootstrap and Handlebars as templates to maximize functionality on the UX design.

The inspiration for this app came from a website called StockX.com, where users are able to post shoes and other "streetwear" and list their price where other users are able to bid  or list their own. In the initial build of this website, I chose a black background with red panels and buttons, inspired from Michael Jordan and the Chicago Bulls colors. The second build of the site invoked a black background featuring a Converse shoe that most people have owned or seen in their lifetime. The "jumbotron" panels used from bootstrap feature are a grey color with black and white buttons. The shoes shown in the database use handlebars and a bootstrap list that shows the Model, Brand, Color, Size, and ID of the user it belongs to.

-----------------------------------------------------------------------
In future builds of this website, some exciting features I hope to create
-----------------------------------------------------------------------

- photos of each shoe that either users post or are pulled from the database

- better implementation of a user's favorite brand, favorite type of shoe, and listing shoes that are only their shoe size

- the background shifts ocassionally when pressing buttons, since the size of the website fluctuates and the background expands to fill the need.

- a many to many database that allows users AND retail stores to have many shoes, which would pass foreign keys to the Shoe table and then users would be able to purchase them directly from the retailer!

- a general better understanding of how to show multiple items in bootstrap (everything in this app is top to bottom, not a perfect representation of how bootstrap is supposed to work)

- a more concise use of code. Currently my CSS is filled with classes and IDs that just display: none; would love to consolidate those blocks of code and keep things more DRY.
-----------------------------------------------------------------------

LINKS

Link to Wireframe: https://i.imgur.com/Fj2Evol.jpg

Link to ERD: https://www.lucidchart.com/invitations/accept/ac43ed96-f9fa-4de1-bb7a-cbe7d0d88929

-----------------------------------------------------------------------
Application developed by General Assembly and Nathan Bissell.
-----------------------------------------------------------------------
Special thanks to:
-Danny K
-Arjun R
-Chris K
-Elizabeth B
-Alex C
-Joshua V
-Greg R
-Michael R