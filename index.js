function scuberGreetingForFeet(x){
  if (x<=400){
    return "This one is on me!"
  }
  else if (x>2000 && x<2500) {
    return "I will gladly take your thirty bucks."
  }
  else if (x>2500){
    return "No can do."
  }
}
function ternaryCheckCity(x){
  if (x=="NYC"){
    return "Ok, sounds good."
  }
  else {
    return "No go."
  }
}
function switchOnCharmFromTip(x){
  if (x=="generous"){
    return "Thank you so much."
  }
  else if (x=="not as generous"){
    return "Thank you."
  }
  else if (x=="thanks for everything"){
    return "Bye."
  }
}
