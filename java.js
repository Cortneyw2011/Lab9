var item1 = {name: 'bananas',
            price: 1.50};
var item2 = {name: 'strawberries',
            price: 2.50};
var item3 = {name: 'yogurt',
            price: 1.00};
var item4 = {name: 'milk',
            price: 2.99};
var item5 = {name: 'oatmeal',
            price: 1.49};
total=0;




var list = [item1, item2, item3, item4, item5];
var grocerList = document.createElement('div');
var fullGroceries = document.createElement('p');
var totalFinal = document.createElement('p');





for (var i = 0; i<list.length; i++){


//with each iteration
    fullGroceries.innerHTML += ( list[i].name+ ': ' +list[i].price +' \n');
//append fullGroceries <div> to grocerList <div> this is appending a div to a paragraph
   fullGroceries.appendChild(grocerList);



  total = total + list[i].price;

  if (i===list.length-1){


 totalFinal.innerHTML = ( 'total: ' + total) ;


  }
}



//append grocerList and total Final to the body
    document.body.appendChild(fullGroceries);
     document.body.appendChild(totalFinal);




    function grabInput(){
      //get input values
      //make a new object
      //add objects to groceries array
      var newItem = document.getElementById('item').value;
      var newPrice = document.getElementById('price').value;
      var newObject = {name: newItem,
                  price: newPrice};
      list.push(newObject);
    }

grabInput();
