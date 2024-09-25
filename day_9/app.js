const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

async function fetchData(){
  try {
    let res = await fetch("https://official-joke-api.appspot.com/random_joke")
    res = await res.json()
    setup.innerText = res.setup 
    punchline.innerText = res.punchline
  } catch (error) {
    console.log(err)
  }  
}

fetchData();

// fetch("https://official-joke-api.appspot.com/random_joke")
//     .then(res => res.json())
//     .then(res => {
//         setup.innerText = res.setup 
//         punchline.innerText = res.punchline
//     })
//     .catch(err => {
//         console.log(err)
//     })


