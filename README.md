# 30days of React- day 06 Exercise level 2 

This is a solution to the [30 days of React day 6  exercise level 2 question two](https://github.com/Asabeneh/30-Days-Of-React/blob/master/06_Day_Map_List_Keys/06_map_list_keys.md). This exercise challenges help you improve your react coding skills by building  projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Proud of this](#proud-of-this)
  - [Continued development](#continued-development)
- [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size


### Screenshot

![mobile](Capture027.png)
![Desktop](Capture026.png)

### Links

- Solution URL: (https://github.com/ibimina/exercise-five)
- Live Site URL: (https://ibimina.github.io/exercise-five/)

## My process

### Built with

- Create react app
- export Main component
- Rendered App component
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### Proud of this

I used this function to style the backgroundcolor of the  list and display the hexadecimal string using the given array
```jsx
const formate = colorHex.map((colorr) => (
  <li style={{ backgroundColor: colorr}} key={colorr}>
    {colorr}
  </li>
));
  return <ul>{formate}</ul>; 

}
```

### Continued development

React framework

## Author

- Ibimina Hart
- Frontend Mentor - (https://www.frontendmentor.io/profile/ibimina)
- Twitter - (https://www.twitter.com/ibiminaaH)



