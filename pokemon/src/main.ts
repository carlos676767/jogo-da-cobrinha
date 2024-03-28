const pokedex = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1302", {
      method: "GET"
    })
    const data = await response.json()
    console.log(data)
  } catch (erro) {
    console.error(erro)
  }
} 
pokedex()