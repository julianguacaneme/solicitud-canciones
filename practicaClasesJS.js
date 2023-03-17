class Cancion {
    constructor(titulo, artista, genero) {
        this.titulo = titulo;
        this.artista = artista;
        this.genero = genero;
    }
}

let cancion1 = new Cancion(
    "El Cuarto de Tula",
    "Buenavista Social Club",
    "Son Cubano"
);
let cancion2 = new Cancion(
    "El Bodeguero",
    "Orquesta Aragón",
    "Cha cha cha"
);

console.log(`La primera cancion es: ${cancion1.titulo} y es interpretada por: ${cancion1.artista} en ritmo de:${cancion1.genero}`);