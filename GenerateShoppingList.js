
var groceryItems =  [
   {name: "Bread",
    price: 1},
   {name:  "Milk",
    price: 2.50}
];

//   How do you do this with an array - rather than with an object?   
//   ["Bread", 1],
//   ["Milk",  2.50],
//   ["Beef", 10],
//   ["Cereal", 1.99],
//   ["Celery", 1.25]
//];

  var total = 0;  // Initialize total
  var newUserTotal = 0;
  
  // Read elements groceryList (array), foodTotal and Button from HTML file
  var groceryList = document.getElementById("groceryList");
  var foodTotal   = document.getElementById("foodTotal");
  var button      = document.getElementById("button");
  
  // Loop through array and display text in HTML page
  groceryItems.forEach(function(item) {
    var newItem = document.createElement("li");
    newItem.innerText += item.name + " " + item.price;
    console.log(newItem); 
    groceryList.appendChild(newItem);
    total += item.price;
    console.log(total);
  });

  button.addEventListener ("click", function() {
    var userFood = document.getElementById("food").value;
    var userPrice=document.getElementById("price").value;
    console.log(userPrice);
    var newUserFood = document.createElement("li");
    newUserFood.innerText += userFood + ": " + userPrice;
    groceryList.appendChild(newUserFood);
    newUserTotal = +total + +userPrice;
    total = newUserTotal;
    foodTotal.innerText = "Grocery List total is: " + total;
    console.log(newUserTotal);
  });

foodTotal.innerText = "Grocery List total is: " + total;

  