# Handlebars and templating

- This class we talked about template setup using handlebars
- handlebars is the View part of MVC
- We can add handlebars view element using the handlebars package `npm install express-handlebars`
- Why we use handlebars and other templating engine -
    - Prevents attacks like XSS by having the server and clinet in the same origin. 
    - Helps us to dynamically generate content (by passing data to the template from the backend)
    - Helps us to repeat ourselves less (main problem with normal HTML) (reusability)
    - Helps us to keep the client and server side logic in one code hence making it easier to debug
- We can initialize the handlebars using the following lines
```js
app.set("view engine", 'handlebars')
app.set("views", viewsPath)
app.engine('handlebars', handlebars.engine())
```
- After initializing we can use the handlebars pages in the views directory referencing the `main.handlebars` layout.
- We can use the render function to render these view engine based pages.
- We can pass data to these pages easily using javascript objects after the view name in the render function.
- We can use a static folder to host static resources like images, css files and etc.
```js
app.use(express.static("./static"))
```
