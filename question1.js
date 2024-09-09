function capitalizeFirstLetter(str) {
    return str
        .split(' ')                      
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))  
        .join(' ');                      
}

let str = "the quick brown fox";
let capitalizedStr = capitalizeFirstLetter(str);


capitalizedStr.split(' ').forEach(word => console.log(word));


console.log(capitalizedStr);
