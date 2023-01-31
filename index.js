function distanceFromHqInBlocks(block) {
  if (block > 42){
    return block - 42
  }
  if (block < 42){
    return (block - 42)*-1;
  }
}
function distanceFromHqInFeet(block) {
  let blocks = distanceFromHqInBlocks(block);
  let distanceInFeet = blocks *264
  //console.log(distanceInFeet)
  return  distanceInFeet;
}


function distanceTravelledInFeet(start, destination) {
  const distanceInBlocks = (start - destination);
  const distFeet = distanceInBlocks * 264;
 if (distFeet < 0)
 return distFeet *-1;
}
function calculatesFarePrice(start, destination) {
  const inBlocks = (start - destination);
  const fareFeet = inBlocks * 264;
  if (fareFeet < 400)
  return 'free sample'
  if (fareFeet > 400 && fareFeet < 2000){
    return fareFeet * 2
  }
  if (fareFeet > 2500){
    return 'cannot travel that far'
  }
}




  
  //console.log(distFeet)
  
  //distanceTravelledInFeet(12,25)
  //console.log("hello")
  //distanceTravelledInFeet(20,10)


  







