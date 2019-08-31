# Tri-Squares
## ``` The purpose of this application was to create a middle-man type of interface to bridge the gap between vendors who sell, produce and distribute food, to the end user, low-income, homeless or destitute people who do not have enough food to feed themselves or their families. ```

## ```Our goal was to eliminate food waste and instead provide a connection from the food vendor to the hungry man before the food is thrown away. Every day our country throws away 65% of the food we produce, while people are hungry and starving. We want to make sure that everyone gets 3 square meals per day, and ultimately, eliminate food waste.```

## Setup for Local Machine
1. Create database: three_squares
2. Run application using npm start or nodemon start
3. [Live Application](https://safe-wildwood-89882.herokuapp.com/)

![Home Page](/Screenshots/Capture.PNG)
![Home Page Continued](/Screenshots/Capture2.PNG)
![user Registration](/Screenshots/Capture3.PNG)
![Vendor Registration](/Screenshots/Capture4.PNG)
![Distributor Registration](/Screenshots/Capture5.PNG)

### We created several user-types. 
- Users
- Vendors
- Distributors

### Everyone was considered a user but different user-types had different priviledges
- Vendors we considered the providers and initial producers of the food items. They could decide if they wanted to have end-users pick food up directly from their location or another specified location. They could also deny end-user pickups and instead use a designated distributor to handle food distribution to end-users
- Distributors may represent a specific geographical location and may be limited to how many meals that they could provide based on their sise, location and type of distributor that they are. For instance, a homeless mission may be able to pick up and distribute 1000 meals to 300 people per day, while a food truck may only be able to distribute 100 meals to 30 people. A food truck may be able to provide service over a wider location than a mission, but are limited in their capacity. We wanted to be able to, in some cases, target specific regions, and in other cases, provide services over a more vast area. 
- User would be the person who is ultimately receiving the food for themselves or their family. We wanted to make sure they received at least 3 meals per person per day but limited to how many meals they receive, so that extra food is not sold or wasted. 