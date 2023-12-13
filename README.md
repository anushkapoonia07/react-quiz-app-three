
![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium PROJECT BUILDER | REACT - QUIZ STAGE III - Connecting Components

## Learning Goals

In this exercise, the goal is to learn building a complete quiz app on a stage by stage basis:

- props and state,
- how to work with event handlers.
- how to use routes to connect different components with each other - (how to pass states from one component to the other)

### Introduction

We will continue to improve our code from where we left previously. We will work on connecting all the components with each other.


### PROGRESSION 1 | Connect Components:

Till now, we were only working with individual components. Now is the correct time to connect them.
Here is a demo of how things should work:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/project-react-routes-working.gif)


So, as you can see above -> 
If I click on play button, I should be directed to the quiz game, and if I click on `finish` button, I should be directed to result page.

***NOTE:*** Use routers to perform the task. ( Remember to install routers before importing them. )


### PROGRESSION 2 | Calculate Score:

So, once all the components are connected to each other, now is the correct time, to calculate the score as well.
So, by now, we are only able to move from one question to the other. Now, your task is to be able to click on any option and based upon the correct answer of that question, you should be able to calculate the score.

***Constraints:*** If a user clicks on a wrong option -> an alert should pop-up stating that: `wrong answer`, and
                   If a user clicks on the right option -> an alert should pop-up stating that: `correct answer`

Once you click on the `finish` button (finish button was not added previously, you need to add a new button -> which will redirect the user to the result page), you should be able to reach to the result page, which displays the result for you, as shown below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/project-react-final-working.gif)


Happy Coding ❤️!

