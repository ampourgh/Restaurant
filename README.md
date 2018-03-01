#### Author: Amir Pourghaed | Version: 1.0.0 | Last Modified: 2/26/2017

# Restaurant App
Creating a mock restaurant page with React.js functionality to filter through the Picture gallery. The website is single page with a navigation bar with dropdown menus.

### Prerequisites
Project functions with the following:
* Git (version 2.13.0.windows.1) - command line used
* Node.js - which comes with the virtual environment used for back-end JavaScript programming, which contains npm
* npm - an installation package that contains all the modules related to the application 
* JQuery (version 3.3.1) - within index.html, the script references JQuery for a snippet of code that allows dropdowns to remain if user clicks within them.
* Bootstrap (version 3.3.7) - for the style of the navigations
* React (v0.14.3) - used for the image filtering function on Pictures

### Files included
* /src - includes the components for the toppings list, filterable image gallery, and the react app.
* react & react-dom - which can be found in /src/react/, which are the react libraries imported to run the app
* /images - which includes the icons, page banner and images for the picture gallery, all images are royalty free
* /css - includes the bootsrap plugin and styles.css

### Installing
1. Fork the catalog folder.
2. Copy the link of the fork.
3. In Git, use the clone command as so: git clone <forked url> <folder name>

### Running tests
* Navigate to the folder through Git
* use the commands below: 
```
npm install
npm start
```
* The webpacks from the React library will be initialized, followed by the statement 'webpack: Compiled successfully.', navigate to http://localhost:8080/ on a browser.

### How to Modify Content

#### Toppings List 

Within the render() function of /src/PizzaList.js, the const var pizzas contains the list of toppings that is presented on the Menu dropdown of the site. The list contains the unique identifier of id, the name of the topping and price. The const variable pizzaList contains the JSX that is exported to the class PizzaDisplay in index.js. It also should be noted that the className variable in the JSX div is the equivalent of class in HTML. Also, the 'map' syntax is the equivalent of foreach or any other JavaScript for loop, iterating on all toppings that would be placed on the unordered list.

#### Picture Gallery

For the image gallery, the set up is fairly similar, but with the added layering for the search state, which is used to create what the search defaults on and how the list is manipulated. In the render functon of Menu.js, within the JSX ul tags there map syntax that iterates in another file called Item.js, which contains the images. 

### Acknowledgments
Used tutorials from Udemy's React tutorial on how to use the YouTube API to filter videos, w3schools for CSS features such as the dropdown menu and footer design features, royalty free images for the visual content on the webpage, along with royalty free Restaurant websites to get an idea of design decisions to create a restaurant.
