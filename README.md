#  Ionic Weather & News Reader

This is an ionic mobile application that reads the weather and news stories from internet resources.

# Structure
The app features two pages, a home page that displays the information and a settings page.

### Home Page
The Home Page is the first page of the application. It features a navigation bar, main weather screen and various weather information.
It also has a news button that can show the most recent news based on the selected city.

![alt text](https://github.com/VladimirNovac/Weather-App/blob/main/src/jpg/homePage1.JPG "Home Page 1")
![alt text](https://github.com/VladimirNovac/Weather-App/blob/main/src/jpg/homePage2.JPG "Home Page 1")

### Settings Page
The Settings Page allows the user to select the city for which the weather and news will be displayed. It also allows to the change the
measurement system in which the data is displayed.

![alt text](https://github.com/VladimirNovac/Weather-App/blob/main/src/jpg/settingsPage1.JPG "Home Page 1")

# Api's
This app uses Weather and News API keys from [openweathermap.org](https://openweathermap.org/) and [newsapi.org](newsapi.org).
These can be obtained by registering with the respective providers.

# Extra Functionality
-	I used an additional provider (https://developers.teleport.org/api/getting_started/) to get an image of the searched city and display it at the top of the page. If the city is not found in the provider’s database, then, a placeholder image is shown instead.
-	I’ve added a method in the settings class to automatically convert any city name to title case. This ensures that the image provider receives the correct name of the city.
-	The news is displayed using ion cards that scale nicely to any size.
-	Lightweight CSS to show everything in a more structured way. 

