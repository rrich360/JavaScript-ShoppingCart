# JavaScript-ShoppingCart

This project consist of HTML, CSS, and JavaScript. It is a simulation of online shopping where the end user can add or delete items from their shopping cart before making a final transaction.


# DESIGN

1[]()

•	In the gif above, it demonstrates how the styling for each item is created, such that there is consistency in how the item appears in the cart when it is added. 

•	In this example, I copy and paste everything that was inside of my ‘div class: cart-row’ from my store.html page to my variable, “cartRowContents” inside of my Javascript function, “ addItemToCart ( ) ” in my store.js file.

•	If you look closely, you will see I am using back-tics instead of quotation marks for the html string because it allows me to use this string on multiple different lines, which designs the format of each item being added to the cart. The main attributes for each item include the following:

 	Image
 	Price
 	Quantity
  
•	Next, I use “cartRow.innerHTML” and set it to my “cartRowContents”. I use “.innerHTML” because the inside of the string is using html tags instead of just text. Then I need to add the class, “cartRow.classList.add(‘cart-row’)”, to my function to make sure the format is consistent, and an item can be added. 

•	Finally, I inserted variables inside of the html string using the “${var}”. The dollar sign and the curly bracket allows any variable inside of it to evaluate. In this instance, each item with the following variables is being evaluated and put inside of the HTML page simultaneously :

 	${title}
 	${price}
 	${imgSrc}


# Checking for duplicate items in Shopping cart
![Design-checkDuplicateItems-demo](https://user-images.githubusercontent.com/20470279/103630382-90f4d400-4f0f-11eb-817f-7ff207ed76b4.gif)


•	The gif above demonstrates how to make a check to verify if an item has been added to the cart already. To check for this, I created a variable called, “cartItemNames”, to get all the names of the cart item in the cart. 

•	I set this variable equal to “cartItems.getElementsByClassName ( )”, which passes in the class name, ‘cart-item-title’, from store.html page. 

•	Next, I have to create a method to loop through all the different cart-items in the cart. Then you want to check for each item to verify if the title is a duplicate of the next item being passed in the loop from the cart.

•	If there is a duplicate, then I can use the alert function to notify the user that the item is already added to the cart.

3[ ] ( )

•	This is a gif demo of how to set up your document with an event listener that passes in “DOMContentLoaded” event and “ready ( )” function, which fires as soon as the page is done loading.

•	The ready function allows my code for hooking up all the buttons to automatically work even if the page is not already loaded. 

•	I cleaned up the code a little bit by creating a ‘removeCartItem’ function separate from the ready function.  

•	I separated the code from the event listener inside of the ready function and put it inside the “ function removeCartItem ( )”, which passes in the event from the ready function. 

•	This makes it easier to see what is happening in the code and easier to read.  

•	Also, the code for removing cart items in the cart still works the same as well. 


# FUNCTIONALITY

4[ ]( )

•	This gif demonstrates the basic functionalities of this web app. It simulates a web store that a user can access to buy tickets, merchandise, and/or music from their favorite artist. In this example, the theme of this webstore is inspired by The Wu-Tang Clan, one of my favorite music groups. 

•	There are 3 pages that I designed, however, the store page is the interactive page where the user can buy either albums or merchandise.

•	I included alert messages for checking duplication errors in the shopping cart and thanking the customer once a purchase is completed. 

•	The total updates instantly every time you add or remove an item from the cart. The decimal place is rounded to two decimal places(one-hundredths place).

•	You can also access the links at the bottom of each page which includes the following icons:

 	YouTube
 	Spotify
 	Facebook
