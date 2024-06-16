# AdminDashboad
## Overview

This project is a simple inventory management dashboard built with React and Redux. It fetches inventory data from an API and displays it in a dashboard with filters and charts.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/my-inventory-project.git
   cd my-inventory-project
   
 2.Install dependencies:
    
    npm install
     
#Usages
1.Start the development server:
    
    npm start
2.Open your browser and navigate to http://localhost:3000.

## Project Structure
***
src/: Contains all the source code for the project
* components/: React components. 
* redux/: Redux slices.
* App.js: Main application component.
*index.js: Entry point of the application.

## Build
To build the project for production, run:

    npm run build

## Tests
To run tests, you can use:

    npm test

## Approach
***
In this project, the following approach was taken:
* Redux for State Management: Redux was used to manage the state of the inventory data.
* Asynchronous Thunks: Redux Thunk was used to handle asynchronous API calls.
* Recharts for Data Visualization: Recharts library was used to create interactive bar charts.
* Material-UI for Styling: Material-UI was used to style the components and layout the dashboard.

## Time Taken
The total amount of time taken to author this solution was approximately 42 hours. This includes time spent on planning, coding, testing, and writing documentation.

## Conclusion
This project demonstrates a basic implementation of a React/Redux application with data fetching, state management, and data visualization. It can be extended with more features and improvements based on requirements.
