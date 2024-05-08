// searchinput
// searchbtn

const dictionary = (word) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2c4a07aca7msh07d3cecc1b0148bp18936fjsn2d9c92c95796",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };
  fetch(
    `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`,
    options
  )
    .then(response => response.json())
    .then((response) => {
        
      wordheading.innerHTML = response.word;
      definition.innerHTML = response.definition;
    })
    .catch(err => console.error(err));
};

searchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  dictionary(searchinput.value)
});
