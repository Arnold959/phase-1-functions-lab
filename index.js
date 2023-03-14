// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance > 42){
        return distance - 42;
    }else if (distance < 42){
        return 42 - distance;
    }
        
}
function distanceFromHqInFeet(feet){

let distanceInFeet = distanceFromHqInBlocks(feet) * 264

return distanceInFeet
}
function distanceTravelledInFeet(start, destination){
    let distance ;
    if (start>destination){
        distance=(start - destination)*264
        return distance
    }
    else if (destination>start){

        distance= (destination - start)*264
        return distance
    }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
   
   if (distance <= 400){
        return 0;
       }
   else if (distance <= 2000) {
        return (distance - 400) * 0.02
    
   }
   else if (distance <= 2500) {
        return 25;
   }
   else {
    return `cannot travel that far`;
   }

}
