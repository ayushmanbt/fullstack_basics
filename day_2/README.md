# Day 2 - All about flexboxes

In this class we talked all about flexboxes. 

- Flexboxes are one dimenstional layout for laying items in either rows or columns (as columns are the default layout, we use rows)
- We can use the `display: flex` property in the wrapping container to have a flexbox layout initiated
- We can use the `justify-content` to define the positioning of items in the flexbox with the values of `start`, `center`, `space-around`, `space-evenly` and `space-between`
- Using the `align-items` property we define the positioning of the items in the secondary axis (if we have a row flex then column based align and if we have a column based flexbox then row based alignment)  with `center`, `start`, `end`, `strech` 
- We can use flexbox to center an element in a page (example: centering a page)
- We can use the `flex-direction` and set it to `row`, `row-reverse`, `column` and `column-reverse` to  lay out the flex accordingly
- While centering a div we learnt about a few units used in measurements in CSS namely -
    - `px` - gives all the measures in pixels
    - `rem` - rem calcuates sizes relative to the font size of the root element (if set by the HTML; otherwise the default browser unit). This is better to use in terms to accomodate for users with different preferences than other user. 
    - `em` - em calculates the sizes based on the font size of nearest parent element. That is why it is better to use em for margins and paddings to adjust it with the nearby font sizes. 
    - `vw` and `vh` - Uses viewport and adjust according to the percentage values of those. (We used 100vh to make the body to take the full height of the page)
    - (LATEST ADDITIONS) `dvw` and `dvh` - dynamically adapts to the viewport (like the viewport size changing due to the appearence and disapperance of the top bar on android phones)


## Resources to reference 

(Justify Content)[https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content]
(Align Items)[https://developer.mozilla.org/en-US/docs/Web/CSS/align-items]
(rem vs em units)[https://www.geeksforgeeks.org/difference-between-em-and-rem-units-in-css/]