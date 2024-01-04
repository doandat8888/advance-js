const artistByGener = {
    jazz: ["Mile Davis", "John Coltrances"],
    rock: {
        classis: ["Bob Seager", "The Eagles"],
        hair: ["White snake", "Poison"],
        alt: {
            classis: ["Pearl Jam", "The Killer"],
            current: ["Joy Wave", "Sir Fly"]
        }
    },
    unclassified: {
        new: ["Camp", "Neil Young"],
        classis: ["Seal", "Monechia", "Chris Stapelon"]
    }
}

//How can get all artist?
//Use recursive
const getArtist = (dataObject, arr = []) => {
    Object.keys(dataObject).forEach(key => {
        if(Array.isArray(dataObject[key])) {
            return dataObject[key].forEach(artist => {
                arr.push(artist);
            })
        }
        getArtist(dataObject[key], arr);
    });
    return arr;
}

const arrArtist = getArtist(artistByGener);
console.log(arrArtist);