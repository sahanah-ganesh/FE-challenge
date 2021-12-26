#### Assumptions

Add any assumptions you made about the design or functionality here

- i would assume the drop-downs would show data and that at least one of the fields (either search, genre, min or max rating) would need to be populated for the search to work. if it wasn't populated i would assume there would be an error shown
- i would assume there would be a loader (either spinner or skeleton loader) when you first visit the page and the data did not load yet, in subsequent loads i would imagine you would load from cache to not keep making expensive api calls
- re: cache, because there is not much data i would assume the endpoints for /movies and /genres would only be hit once when first accessing the site and then stored in cache for subsequent loads
- i would assume the cards were clickable to either open a modal or new tab on desktop or just new tab on mobile to show more info about the movie (because there were a lot of data fields)
- re: clickable cards opening new tabs, i would assume there is routing needed to support multiple pages and that clicking the logo would take you back to home
- i would assume the search populates movies as you enter characters but would debounce
- i would assume there was pagination or lazy loading scroll to show the 90 movies in the data set
- i would assume on mobile the card view switches to column instead of row and takes up more of the screen
- on mobile the search bar and search button is probably sticky to the top of the screen with the other filters that can be show/hide to save space
- i didn't notice until later but the images of the cards were slightly cut off at the bottom and top compared to the originals
- i would assume if this was a production site there would be a cookie banner on first visit and the response to that would be stored in the browser

### Next Steps/Approach to remaining tasks

Outline how you would approach the remainder of the build here

- complete the design and functionality (especially the search bar and no results if no results)
- box shadows
- proper overlap of star icon and rating
- create utility functions to work with the data and not have heavy data manipulation in the components
- implement caching or maybe a simple react store with actions and reducers
- fix husky
- would have implemented responsiveness
- would have made sure it was accessible (put it through wave for example)
- would have make sure it worked on a wide variety of browsers
- would have actually created proper types and interfaces for type safety when passing props to components
- would have created a hook for the axios calls
- would have made components more reusable and code splitting
- would have implemented media queries for breakpoints
- would have actually implemented frontend tests

### Changes to start project (if appicable)

Add any assumptions you made about the design or functionality here

- i used create-react-app and set it up with typescript, eslint, prettier, rebass, styled-components
- i did not use Vue

### What/How would you change, and why?

Add any points here on what or how you would do things differently if you were to approach this again (if necessary)

- i would have spent less time on boilerplate (eslint, prettier)
- less time styling the search bar and more time on functionality. in general i would spend more time in functionality than style
- i would have implemented mobile first development and then built out desktop
- i would have actually wrote out proper types (the reason for using typescript)
- i would have made the styled components more reusable and done more code splitting
- probably wouldn't have used trunk based git (merging everything to master) and would have made separate branches for complete features or styling
