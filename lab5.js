var shoppingList = [
  {
    name: 'apple',
    price: 5.00
},
{
  name: 'banana',
  price: 2.5
},
{
  name: 'pear',
  price: 3.8
},
{
  name: 'orange',
  price: 4.3
}
];
var total = 0;

shoppingList.forEach(function(element){
  console.log(element.name + ' ...$' + element.price.toFixed(2));
  total += element.price;
});

console.log("Your total for your shopping list is $" + total.toFixed(2));
