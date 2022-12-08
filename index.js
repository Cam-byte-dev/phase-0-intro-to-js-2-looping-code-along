


for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}



const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i <= gifts.length-1; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);


function writeCards(names,EventName){
    
    const message = [];
    for(let i = 0; i < names.length; i++)  {
        message.push( `Thank you, ${names[i]}, for the wonderful ${EventName} gift!`);
       
    }
    return message;
    
}

function countDown(number){

    
    while(number > -1){
        console.log(number);
        number--;
    }
}

console.log(10);