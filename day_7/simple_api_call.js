fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => res.json())
    .then(res => res.forEach(r => {
        console.log("- " + r.title)
    }))
    .catch(err => console.log("err: " + err))

console.log("hello")