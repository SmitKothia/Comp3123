function moveLastThreeToStart(str) {
    
    if (str.length >= 3) {
        
        let lastThree = str.substring(str.length - 3);
        
        let startPart = str.substring(0, str.length - 3);
        
        return lastThree + startPart;
    } else {
        
        return "String must be at least 3 characters long.";
    }
}


console.log(moveLastThreeToStart("Python"));        
console.log(moveLastThreeToStart("JavaScript"));    
console.log(moveLastThreeToStart("Hi"));           
