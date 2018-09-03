// Write your code in this file!
function scuberGreetingForFeet(sample)
{
  if(sample<=400)
   return "This one is on me!"
   else if (sample>=2000 && sample<=2500)
    return "I will gladly take your thirty bucks.";
    else 
     return "No can do."
} 
function ternaryCheckCity(city)
{
  if(city === "NYC")
   return "Ok, sounds good."
   
   return "No go."
}
function switchOnCharmFromTip(tip)
{
  let charm
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
  return charm


    return "Bye."
}