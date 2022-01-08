# DAPO
## User stories 
- As an existing user I like to have my own account
    - Each user is able to register for their own account
- As an existing user I like seeing my previous orders
    - Each user profiile allows the customer to see previous orders 
- As an existing user I want to receive confirmation of my order
    - Each user receives an emmail confirming their order has been completdt
- As an existing user I want to Log in and out easily
    - Each user can long in and out of their account properly 
 - As a potential user I want to know how much delivery costsis
    - Users can see the cost as it is added to the bag. Amount left to free delivery is alswo visable  
- As a potential user I want to be able to view and filter all your products
    - All products can be filtered for ease
- As a potential user I want to I want sort products into catrgories
    - The website allows you to
- As a user I want to find what I have been searching for in the search bar.
    - The website features a search bar where al bar one/be at one.
- As a potential user I want to be able to reset my password if I forget
    - The website features the ability to reset your password via email

## Manual testing & Bugs
Please find the full testing document [here](https://1drv.ms/x/s!AiwsYx99ZOMqguAkcR_AevcmpS1Vyw?e=n3nqpr)

## Errors
- Failed to Deploy to Heroku
    - The project kept coming up with continuous errors and failures to deploy. After many meetings with Tutors and my mentor we were able to fix the issue.
    - The problem was due to rouge dependecies and required my dockerfile to be updated.
- Products not showing 
    - This error came after the Heroku error was fixed as my products showed up previously
    - The products will not show but was rectified after identifying a problem with the superuser
- Styling not showing
    -   This is mostly fixed. I made the error of keeping my images in a media folder rather than in the static folder.
- Admin not accessible
    - There was a tuple error which I learned was due to either rouge commas or brackets
    - The error was found in the auth section of my settings.py file
- Product images and background not showing
- Stripe API not connecting
    - Issue unresolved at the moment. 
