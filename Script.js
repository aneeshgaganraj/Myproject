//searchinput
//searchbt

const dictionary = (word)=>{
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '18b270588emshabdd70a374fcc6fp19827bjsna58161f134bd',
          'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
};
fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word ,options)
.then(response => response.json())
.then((response) => {
    console.log(response)
    wordheading.innerHTML = "Here is the Meaning: " + response.word;
    definition.innerHTML = response.definition.replace("1.","<br>1.").replace("2.","<br>2.").replace("3.","<br>3.");

})

.catch(err => console.error(err));
}
searchbtn.addEventListener("click", (e)=> {
    e.preventDefault();
    dictionary(searchinput.value)
})