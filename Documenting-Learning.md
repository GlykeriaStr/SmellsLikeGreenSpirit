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
- Karsten 🐋
- Tom 👀
- Jon 🚣‍♀️
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

- Glykeria 🍰 (maybe) Shepherd’s pie
- Karsten 🧃 Quorn and peas
- Tom 🌝 Chicken soup
- Jon 🌴 Big Mac with 6 nuggets
- Miranda 🐠 stirfry maybe?

## 19 March 2021

### Morning

- Tom, Karsten and Jonathan worked on the toggle switch, trying to save the value of the toggle.
- Miranda and Glykeria worked on the Licence number plate API.
- Licence plate API team: Had problems with passing the API results to the next page, value seemed to have reset or was not set.
- Miles to carbon API team: Had problems with getting miles and km text to be read above the toggle.

### Afternoon

- Licence plate API team: Navigation was going to the next page before the response of the API was rendered. Spoke to another member of the cohort. Who advised the team to put the navigation into the handle of the promise. In the end Licence plate API team came out victorious.
- Miles to carbon API team: Had the toggle switch in a different file, they couldn't access the boolean value of the Switch. Called in the coach, they told us to have `useState` const in the same file we were trying access it.
- Overall though, the team managed to complete the MVP 🎉🎉🎉

## 20 March 2021

### Morning

- Logos were shown off, we went for Miranda's idea of the spring onion being represented by a car with a green exhaust coming out of it.
- Miranda and Glykeria started to look at styling, but decided it would be best to leave it and have a look at some resources on styling.
- Tom and Karsten managed to get the miles to km conversion working.
- Project was linted and corrected the spelling of licence

### Afternoon

- Karsten and Miranda worked on the about page, just making sure that hyper links worked, managed to complete this task.
- Glykeria and Tom worked on error messages appearing if the user were to input an invalid number or licence plate. They managed to get this working in no time.
- Miranda and Karsten started to work on the messages for the results logic. Added a switch condition, needs to be updated with some R & D in place.

### End of Sprint

- Glykeria 🔥 Vegan Shepherds' pie
- Karsten 🎩 Quorn and peas
- Tom 🐡 Oysters and ceviche
- Miranda 💤 Roast potatoes (does not care what is with them)
- Jon 🌝 Home made pizza

## 22 March 2021

### Morning

- Talked about what we learnt about over the weekend.
- Miranda was able to eject the project, with her dummy project, will see about doing this with the Spring onion project.
- Miranda found a bug where small distances in miles were converted incorrectly.
- Discussion on styling, and how we will go about designing the main page.
- Tom and Miranda split off to work on the styling.
- Glykeria and Karsten worked on giving the user some context about their carbon emissions.
- Jonathan worked on fixing the aforementioned km to miles bug.
- Alice spoke to the group about how to handle in app purchases, the group is leaning more towards bringing the user to a website which handles with carbon offset, perhaps the carbon emission data can be transferred across.
- Miranda, Tom and Jonathan worked on styling and managed to liven up the main page.
- Karsten and Glykeria got the context all working.

### Afternoon

- Tom and Miranada carried on with the styling for the app.
- Glykeria and Karsten put in a hyper link to a carbon offset app which Tom found.
- Jonathan went away to work on animations for result page.
- Miranda and Tom cleaned the home page layout so that it was more presentable.
- Karsten and Glykeria got a hyper link working, however couldn't fill in the carbon emissions with the data from the app.
- Jonathan got the basics of the animation in code, but still needs to implement the animation.

## 23 March 2021

### Morning

- Had a talk about team dynamics, and how to improve them for the future.
- Miranda and Glykeria worked on Out of app purchases.
- Karsten, Tom and Jonathan worked on trying to implement secure storage.
- Glykeria and Miranda were able to get the hyper link embedded within the actual app.
- Tom, Jonathan and Karsten were struggling, decided to take a break and ask other members of teh cohort how they managed to implement it.

### Afternoon

- Glykeria and Miranda were able to make is so that when you logged onto the website, you were put directly on the form fill in.
- Jonathan, Karsten and Tom had a call with the other memebers and were successful at first.
- However, later down the line Karsten, Tom and Jonathan struggled a decent amount with getting to display the data, and called it for a day.

### End of Sprint

- Glykeria 🤬 Pasta with broccoli, lemon, garlic and cream
- Karsten 🥔 Quorn, peas and a fried egg
- Tom 💩 Lentil, rice and veggie stew
- Miranda 💀 Kale and pasta
- Jon 🔋 Thai fish noodle soup

## 24 March 2021

### Morning

- We messaged the coaches and Alex got back to us. He suggested we try googling send key to manage the eventListeners on the offset website.
- Miranda and Glykeria decided to leave it for now and work on the Facts page and some styling. The links from the facts page are embeded in the app. All created and merged!
- Karsten, Tom and Jonathan worked on trying to implement secure storage.

### Afternoon

- Karsten, Tom and Glykeria kept working on implementing secure storage. We managed to save all our inputs but are not able to see them on the page yet.
- Miranda and Jonathan created a history page and worked on styling. It is now merged.
- We decided to all go away and give it a go at secure storage.

## 25 March 2021

### Morning

- Miranda fixed the async issue with the history of the journeys. Merged.
- Glykeria styled the about page. Merged.
- Tom, Miranda and Jon styled the history page. Merged.
- Karsten worked on the presentation.
- Assigned roles for presentation and deleted borders from homepage.

### Afternoon

- Attended the presentation.
- For tomorrow's one we decided to add a screenshot of the app working on Android.
- We decided to work on styling pages separately.
- Glykeria will do the results page
- Miranda will do the little 2 in the facts page
- Karsten will do the logo
- Jon will create a diagram for the presentation
- Tom will do the about and history buttons

### End of Sprint

- Glykeria 🦾 Quorn with mash,peas and gravy
- Karsten 🎊 Quorn and peas
- Tom 🎓 Fried egg and chorizo sandwich
- Miranda 🌸 Pierogi
- Jon 🍉 Toasted chickpeas in a wrap with tzatziki
