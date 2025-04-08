function nombre(fr: {nombre: string; edad: Number}):string {
return fr.nombre
}

function returnUnion(fernanda: string | Number):string{
    return `${fernanda  }`
}

console.log(returnUnion("fernanda"))
console.log(returnUnion(25))

function names(name : "Fernanda" | "Piña" | "Fuentealba"): string{
    return name
}

console.log(names("Piña"))