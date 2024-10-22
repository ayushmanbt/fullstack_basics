# Handlebars, full stack ticket application

In today's class we are learning about using handlebars for making a full stack application with node.js as the backend and handlebars to serve the content to the frontend. Along the way we will learn about the four main helpers provided by handlebars and we will see how to use them -

1. `{{#if <condition>}} <conditionally rendered secquence> {{\if}}`- we can use this helper to render some elements conditionally 

1.a. `{{#if <condition>}} <conditionally rendered secquence> {{else}} <else part> {{/if}}` - This provides us with the control to mention something else if the condition is not met

2. `{{#each <list>}} <html> {{each}}` this lets us iterate through each element in the list.

3. `{{#unless <condition>}} {{/unless}}` works as the reverse of if

4. `{{#with <object>}} {{/with}}` helps us to traveerse through nested objects with ease

We also learnt about partials to give the repeated components their seperate layout.

We are in progress with the todo application currently ... 