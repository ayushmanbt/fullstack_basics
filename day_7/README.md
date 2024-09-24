# Day 7 - Aysnchronous JS and API calls

- Asynchronous JS relies on promises
- Promises can be written with the following syntax
```js
new Promise((resolve, reject) => {
    resolve(value)
    reject(error)
})
```
- The modern way of API call / fetch API, uses promises to resolve or reject based on the API response.
- We can use API's to get access to third party resources like weather, temperature etc.
- We can use two methods to handle API requests `async...await` functions and `.then().then()...catch()`
- The `fetch` api used to call APIs from JS uses promises udnerneat.
- The `setTimeout()` method uses a callback function (a function which is called back from the setTimeout, after the set time) to return an asynchronous, delayed output.