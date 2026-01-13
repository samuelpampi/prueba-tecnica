export function getNameParts(fullName: string): {name: string; surname: string} {
    //Dividimos las partes de los nombres separando por un espacio en blanco
    const parts = fullName.split(" ");

    //Asignamos la primera parte al nombre y el resto a los apellidos
    const name = parts[0];
    const surname = parts.slice(1).join(" ");

    return {name, surname};
}