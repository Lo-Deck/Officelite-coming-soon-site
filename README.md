# Frontend Mentor - Officelite coming soon site solution

This is a solution to the [Officelite coming soon site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/officelite-coming-soon-site-M4DIPNz8g). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See error states when the contact form is submitted if:
  - The `Name` and/or `Email Address` fields are empty
  - The `Email Address` is not formatted correctly
- **Bonus**: See a live countdown timer that ticks down every second
- **Bonus**: See a custom-styled `select` form control in the sign-up form


### Screenshot

![screenshot mobile](https://github.com/Lo-Deck/Officelite-coming-soon-site/blob/main/screenshot/Officelite%20coming%20soon%20site-mobile.png).
![screenshot mobile-2](https://github.com/Lo-Deck/Officelite-coming-soon-site/blob/main/screenshot/Officelite%20coming%20soon%20site-mobile-index2.png).
![screenshot tablet](https://github.com/Lo-Deck/Officelite-coming-soon-site/blob/main/screenshot/Officelite%20coming%20soon%20site-tablet.png).
![screenshot tablet-2](https://github.com/Lo-Deck/Officelite-coming-soon-site/blob/main/screenshot/Officelite%20coming%20soon%20site-tablet-index2.png).
![screenshot desktop](https://github.com/Lo-Deck/Officelite-coming-soon-site/blob/main/screenshot/Officelite%20coming%20soon%20site-desktop.png).
![screenshot desktop-2](https://github.com/Lo-Deck/Officelite-coming-soon-site/blob/main/screenshot/Officelite%20coming%20soon%20site-desktop-index2.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Officelite-coming-soon-site).
- Live Site URL: [Website](https://lo-deck.github.io/Officelite-coming-soon-site/).



## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS


### What I learned

I learned how to make a `select` custom in CSS to replace the default one, and to set it when the page is loading 

```js

window.addEventListener("load", function () {

    selectDefault.classList.add('widget-hidden');
    selectCustom.classList.remove('widget-hidden');

});

```

And when the user click on a button (to make a choice), keep it on the url and use it on the other page on a `select`

```js

const url = window.location.href;
const regex = /plan=/;
let whichPlan = url.split(regex);
whichPlan = whichPlan.pop();

inputSelectCustom.innerHTML = `${selectDefault.value} Pack <span>Free</span><span class="arrow"></span>`;

```

To change a `select` when the user click on it and make a choice 

```js

optionCustom[i].children[1].classList.add('checked');
subscription = index;
selectDefault.value = selectDefault[index].value;

```

And to make a timer in JS

```js

setInterval( () => {

    minutes = Math.floor(((releaseDate - new Date()) % (1000 * 60 * 60)) / (1000 * 60));
    secondes = Math.floor(((releaseDate - new Date()) % (1000 * 60)) / (1000));

    arrayTimer[2] = minutes;
    arrayTimer[3] = secondes;

    setTimer.forEach((item, index) => {

        item.innerText = `${arrayTimer[index]}`;
    
    });
    
}, 1000);

```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.
- [Utopia](https://utopia.fyi/) - To have a better responsive design.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.