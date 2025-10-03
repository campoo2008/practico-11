
// --- Variables y array base ---
let seguir_cargando = false;
const pokemones = [
  {
    nombre: "Pikachu",
    nivel: 25,
    tipo: ["eléctrico"], 
    hp: 100,
    hp_total: 100,
    evolución: false,
  },
  {
    nombre: "Charmander",
    nivel: 12,
    tipo: ["fuego"],  
    hp: 90,
    hp_total: 90,
    evolución: false,
  },
  {
    nombre: "Squirtle",
    nivel: 10,
    tipo: ["agua"],
    hp: 95,
    hp_total: 95,
    evolución: false,
  },
];

const pokemon = {
  nombre: "string",
  nivel: Number,
  tipo: [Array],
  foto: "string",
  hp: Number,
  hp_total: Number,
  evolución: Boolean,
};

// --- MENÚ PRINCIPAL ---
let opcion;
do {
  opcion = prompt(
    "¿Qué desea hacer?\n1. Mostrar pokemones\n2. Cargar nuevo pokémon\n3. Restar HP a un pokémon\n4. Salir"
  );

  switch (opcion) {
    case "1":
      console.log("📋 Pokemones cargados:");
      console.log(pokemones);
      console.log("Nombres:");
      for (let i = 0; i < pokemones.length; i++) {
        console.log("- " + pokemones[i].nombre);
      }
      break;

    case "2":
      do {
        pokemon.nombre = prompt("Ingrese el nombre del Pokémon:");
        pokemon.nivel = Number(prompt("Ingrese el nivel del Pokémon:"));
        pokemon.tipo = prompt("Ingrese el tipo (separado por coma si son varios):").split(",");
        pokemon.foto = prompt("Ingrese la URL de la imagen:");
        pokemon.hp_total = Number(prompt("Ingrese el HP total:"));
        pokemon.hp = pokemon.hp_total;
        pokemon.evolución = prompt("¿Tiene evolución? (si/no)") === "si";

        const nuevoPokemon = { ...pokemon };
        pokemones.push(nuevoPokemon);

        let terminar = prompt("¿Desea cargar otro Pokémon? (si/no)");
        seguir_cargando = terminar === "si";
      } while (seguir_cargando === true);

      console.log("✅ Pokemones actualizados:");
      console.log(pokemones);
      console.log("Nombres:");
      for (let i = 0; i < pokemones.length; i++) {
        console.log("- " + pokemones[i].nombre);
      }
      break;

    case "3":
      let nombreRestar = prompt("Ingrese el nombre del Pokémon al que desea restar HP:");
      let pokemonEncontrado = pokemones.find(p => p.nombre.toLowerCase() === nombreRestar.toLowerCase());
      if (pokemonEncontrado) {
        let daño = Number(prompt("¿Cuánto HP desea restar?"));
        pokemonEncontrado.hp -= daño;
        if (pokemonEncontrado.hp < 0) pokemonEncontrado.hp = 0;
        console.log(`💥 Se le restaron ${daño} puntos a ${pokemonEncontrado.nombre}. HP restante: ${pokemonEncontrado.hp}`);
      } else {
        console.log("❌ Pokémon no encontrado.");
      }

      console.log("Pokemones actuales:");
      console.log(pokemones);
      console.log("Nombres:");
      for (let i = 0; i < pokemones.length; i++) {
        console.log("- " + pokemones[i].nombre);
      }
      break;

    case "4":
      console.log("👋 Saliendo del programa...");
      break;

    default:
      console.log("⚠️ Opción no válida. Intente nuevamente.");
      break;
  }
} while (opcion !== "4");

