function scuberGreetingForFeet(num){
  let result;
  if (num <= 400) {
    result = 'This one is on me!';
  } else if (num > 2000 && num < 2500) {
      result = 'I will gladly take your thirty bucks.'
  } else if (num > 2500) {
        result = 'No can do.'}
  return result;
}

function ternaryCheckCity(city){
  let result;
  city === 'NYC' ? (result='Ok, sounds good.') : (result='No go.');
  return result;
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
    }
    return result
}
