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
- Split into two teams: Routing and Testing.
- Routing team: our goal was to add a second screen, so we watched some of a Udemy course where he demonstrated how to use React Navigation. We learned about stack navigation. We then installed the latest version of React Navigation, and set up folders to store screens, components and navigation files. We connected up a HomeScreen and ResultsScreen, but the routing didn't work. We decided to spend our self-learning time after lunch researching what to do with the main App.js file now that React Navigation is involved.
- Testing team: discovered that it's essentially not possible to do end to end testing with the Expo set up we are using (managed Expo workflow). Detox doesn't work. Tried out the competitor frameworks Appium and Cypress but they weren't appropriate.

### Afternoon

- Concluded as a team to give up on e2e testing for now, given that it's a choice between tests or Expo. The option is left open to eject Expo later on once we feel more comfortable with React Native.
- Coach Ben offered to meet with us 10am tomorrow to discuss testing.
- We will look out for opportunities to use unit and component tests.
- New teams: Linter and API set-up
- Linter team: Successfully set up ESLint with Prettier. Should be run with `yarn lint`. We changed the default rule to allow spaces inside curly brackets.
- API team: signed up for API keys but they haven't arrived yet. Discussed using an API placeholder like JSONPlaceholder to get the code working initially.

### End of Day

- Made a load more cards on the Trello board for the next round of work, and decided that we would focus on getting APIs set up tomorrow.

## 18 March 2021

### Morning

- Spoke to coach Ben about e2e testing in React Native. He confirmed that it's very difficult, and said it's better to stick with the managed workflow even though e2e testing isn't possible. Just try to extract as much logic out as possible into separate classes/functions (he called them utilities, like helper methods in Ruby/Rails) and test them with Jest.
- Watched some of Tom's Udemy about API calls. Decided to use Axios library rather than Fetch.
- Split into team to work on license plate API and miles to carbon API.
- Alice visited the Zoom at one point and gave us advice on hiding API keys from Github, and on debugging. She suggested coming up protocols for manual testing, to be run occasionally, in place of automated e2e tests.
- License plate API team: Managed to get an API from the government. Discovered that cars have a "CO2 emissions" measurement of g/km. Therefore, we don't necessarily need another API to calculate emissions from car details!
- Miles to carbon API team: Were able to get the Cloverly API set up and working. Decided not to proceed with this for now since the License Plate CO2 measurements will be enough for satisfying the MVP.

### Afternoon

- Moving stuff between screens team: discovered how to move data across screens by giving another argument to the `navigation.navigate` call.
- Decided to focus next on hooking up the license plate API to get the CO2 amounts, tidying up the code to remove references to Detox which we're not using, and adding a switch between miles and km.
- License plate team: Added code using Axios to access the API but getting 403 errors.
- Units switch team: created a toggle switch that can be connected up to logic later on.

### End of Sprint

- Agreed to continue with same problems for next sprint, plus starting styling.
- Working title: Spring Onion.
- Decided not to merge the current working branches because the features aren't finished.

- Glykeria :cake: (maybe) Shepherd’s pie
- Karsten :beverage_box: Quorn and peas
- Tom :full_moon_with_face: Chicken soup
- Jon :palm_tree: Big Mac with 6 nuggets
- Miranda :tropical_fish: stirfry maybe?
