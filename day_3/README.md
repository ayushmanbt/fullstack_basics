# Day 3

In Day 3 we talked about grids and media queries. 

- grids can be initiated by the statement `display: grid` in the parent layout
- we can use `grid-template-columns` to have a column layout using `fr` (fraction). 
For example we can have `grid-template-columns: 1fr 1fr 1fr` to have a 3 column grid
with each column having equal width.
- We can use `grid-template-rows` similar to grid template columns to have a row based layout
- We can use `grid-gap` to create a gap between grid elements. (p.s. the normal `gap` property also works with grids)
- We can use `grid-column-start` and `grid-column-end` to denote the starting and ending column to make a grid item take more space than one grid cell. We can also combine these two properties together into `grid-column` property where we can use the `/` symbol to seperate the start and end positions. So we can write the following ways
```css
grid-column-start: 1;
grid-column-end: 5; /* Ends exactly at the start of 5th column */
```
or we can write the same as -
```css
grid-column: 1/5;
```
(P.S) this same technique can also be done for `grid-row`
- We talked about media queries and how those can be used to apply styles based on the screen size (max-widht, min-width, width, max-height, min-height, height) and orientation. For example if we write `@media (max-width: 500px)` then the styles following this will only be applied when the screen size is 500px or less. 

