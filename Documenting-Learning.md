# Documenting Learnings

## 15 March 2021

### Afternoon

- After deciding on our team name, we discussed what projects we would all like to do. The project with the most backing was a mobile app that could be used to estimate a user's carbon footprint.
- We decided on our MVP and created a Trello board with initial tasks. The MVP would consider a single means of travel, and the mileage of the journey would be converted to kilos of carbon emitted.
- We designed the wireframe for how the app would look using Envision.
- We decided on what roles we would have throughout the project, and came up with a team charter
- We looked at using Kivy with Python for a mobile app and assessed how viable this would be
- After struggling with installation and realising that there were scarce resources for support with Kivy online, we decided against using Kivy/Python and decided to switch to either React Native or Swift.

## 16 March 2021

### Morning

- We decided on React Native as our framework of choice
- All of us downloaded XCode (loooooong) and looked at what testing framework we could use. Jest comes with React Native, but we were looking at how to run E2E tests and decided on Detox
- Potential features after the MVP has been created: benchmark comparison based on average carbon footprint, other means of transport, CRUD functionality, enter license plate to find out make, model, fuel of car, ability to switch between units of measurement

### Afternoon

- We started creating features in the App.js file (text box, button)
- Our plan for the next day was to split into teams and look at testing and routing.

### End of Sprint

- Glykeria 🍝
- Karsten
- Tom
- Jon
- Miranda 🥦 vegetable + feta tray bake

## 17 March 2021

### Morning

- We asked the coaches what framework to use for e2e testing, since our original plan of Detox doesn't work with Expo.
- Split into two teams to work on routing and testing.
- Routing team: our goal was to add a second screen, so we watched some of a Udemy course where he demonstrated how to use React Navigation. We learned about stack navigation. We then installed the latest version of React Navigation, and set up folders to store screens, components and navigation files. We connected up a HomeScreen and ResultsScreen, but the routing didn't work. We decided to spend our self-learning time after lunch researching what to do with the main App.js file now that React Navigation is involved.
