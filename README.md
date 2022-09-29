# When2Meet Prototype for CS 279r

### By Ayana Yaegashi and RunLin Wang

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Most of the project was written by us independently. SchedulingSelector React tool (top blue part that you click and drag) was imported from https://github.com/andrew200101/react-schedule-selector and tooltip CSS was inspired by code at https://www.w3schools.com/css/css_tooltip.asp

## How to Use

The working prototype is deployed at https://runlinwang.github.io/when2meet279/

Alternately, you can also deploy the program locally by downloading the repository and running "npm install" and "npm start".

The website should be fairly intuitive to use (essentially the same as when2meet)! Drag your availability on the top blue scheduling app, and you will see it instantly reflected on the green grid below. Hover over any green square to see the list of available people at that time.

The original code base (with comments) is at https://github.com/runlinwang/when2meet279

## Unique Aspects of When2Meet (vs Doodle)

1. Drag to multi-select or unselect a series of availability, vs Doodle only allows individual clicking.

2. Uses shades of colors to distinguish which times are most available for others, vs Doodle which shows sums of number of people available instead.

3. Generally allows for scheduling of continuous time periods, vs Doodle which makes you specify discrete individual time slots.
