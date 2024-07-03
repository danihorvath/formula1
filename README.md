# Formula 1 Application

Frontend: React (Typescript, Vite)

Backend: ExpressJS (Typescript)

![Screenshot](https://raw.githubusercontent.com/danihorvath/formula1/main/screenshots/1.png "Screenshot")

## Running locally
- clone repository: https://github.com/danihorvath/formula1-api
- npm install, npm run dev

- clone repository: https://github.com/danihorvath/formula1
- npm install, npm run dev

## Features
- Randomizing driver positions at the time of API initialization and storing in the memory
- Returning complete list of drivers on GET /api/drivers
- Possibility to move a driver to the front with one position via POST /drivers/:driverId/overtake. Returning new positions.
- Error messages when the driver is not found by the given id or the driver is already in the 1st position
- The frontend loads and presents the drivers in a responsive grid of MUI cards
- Displaying the name of the driver, their team, their current place, their code and their photo (which is served from the backend)
- Button at the bottom of the card, triggering the overtake endpoint when clicked (and updating the list)
- Unit test for the frontend

## TODO
- Display the flag of the driver’s home country. Use the country code provided in the JSON, and the CountryFlags API
- Develop the functionality for overtaking multiple drivers at a time. So DriverA from the 5th place could jump directly to the 2nd place with a single user interaction. You can use query params, or send data in the body, implementation details are up to you
- Enable the users to reorder the drivers via drag and drop
- Dockerize your application
- Persist data in a dockerized PostgreSQL database instead of in-memory
- Have CSS animation on your frontend component when the user reorders the drivers
- Write some basic tests on the backend using Jest
