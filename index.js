function getRandomJoke() {
  fetch('jokes.json')
    .then(response => response.json())
    .then(data => {
//       const jokes = data;
//       const randomIndex = Math.floor(Math.random() * jokes.length);
//       const randomJoke = jokes[randomIndex];
//       return randomJoke;
    
    const sp = document.getElementById('api');
    sp.textContent = data;
    
    })
    .catch(error => console.error(error));
}

getRandomJoke();
