function scuberGreetingForFeet(rideDistance) {
  let rideCostNote ;
  if (rideDistance <= 400) {
   rideCostNote = 'This one is on me!'; 
  }
  else if (rideDistance > 2000 && rideDistance < 2500) {
    rideCostNote = 'I will gladly take your thirty bucks.';
  }
  else {
    rideCostNote = 'No can do.';
  }
  return rideCostNote;
}

function ternaryCheckCity(city){
  let isItNyc
  city === 'NYC' ?  isItNyc = 'Ok, sounds good.' : isItNyc = 'No go.';
  return isItNyc;
}

function switchOnCharmFromTip(tipAmt){
  let response
  switch (tipAmt) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default: 
      response = 'Bye.'
  }
  return response;

}