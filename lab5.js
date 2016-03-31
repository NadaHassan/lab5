var shoppingList = [
 var one = {
    name: 'apple',
    price= 5.00,
},
 var two = {
  name: 'banana',
  price= 2.00,
},

 var three = {
  name: 'pear',
  price= 3.00,
},

 var four = {
  name: 'orange',
  price= 4.00,
}
];

shoppingList.forEach(function(name and price){
  console.log(name and price)
});

function total () {
  (one.price + two.price + three.price + four.price)
};
console.log("Your total for your shopping list is $" + total)
