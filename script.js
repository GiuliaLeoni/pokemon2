const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(clicked);
    let pokemonName = e.target.name-input.value;
    fetchPokemon(pokemonName)
    console.log(pokemonName);
}

const form = document.querySelector('form');
form.addEventListener("submit", handleSubmit);

const fetchPokemon = async (pokemonIndex) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`);
    const pokemonData = await response.json();
    console.log(pokemonData);

    //name
    const pokemonName = document.getElementById("pokemon-name");
    pokemonName.style.textTransform = "capitalize"
    pokemonName.textContent = pokemonData.name;

    //images
    const pokeImage = document.getElementById("poke-image");
    pokeImage.src = pokemonData.sprites.front_default;
    const pokeImageBack = document.getElementById("poke-image-back");
    pokeImageBack.src = pokemonData.sprites.back_default;

    //moves list
    const movesList = document.getElementById("list");

    //clear list
    movesList.innerHTML = "";

    for(let i = 0; i < 5; i++) {
        //create list item everytime we go through the loop
        let listItem = document.createElement("li");
        //assign the text content of each list item to the name of the move
        listItem.textContent = pokemonData.moves[i].move.name;
        //append the list item to the list
        movesList.appendChild(listItem);
    }
    
    const inputName = document.getElementById("input-name");
    const searchButton = document.getElementById("search");
    
}

fetchPokemon(1).catch(err => console.log(err));

let index = 1;
const pokemonButton = document.getElementById("next-pokemon");
pokemonButton.addEventListener("click", () => {
    index++;
    fetchPokemon(index);
})
