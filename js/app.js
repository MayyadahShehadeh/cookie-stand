'use srtict'

let hours= [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm '];

let Seattle = {
    MinCus: 23,
    MaxCus : 65,
    AvgCookie: 6.3,
    customers:[],
    cookiesPerHour:[],
    
    customersPerHour: function(){

        for(let i=0; i< hours.length; i++){
          let x =randomNumberOfCustomers(this.MinCus,this.MaxCus);
            
       this.customers.push(x);
        console.log(this.customers);
}  
},
    cookiesEachHour : function(){

      for (let j=0; j< this.customers.length; j++){
      let z = Math.floor(this.customers[j] * this.AvgCookie);
      this.cookiesPerHour.push(z);
      console.log(this.cookiesPerHour);
    }
    }

}

Seattle.customersPerHour();
Seattle.cookiesEachHour();


function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


let parent = document.getElementById('parent');
console.log(parent);

let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);
console.log(unorderedList);
unorderedList.textContent =('Seattle');

for (let i = 0; i < hours.length; i++) {
   let listItems = document.createElement('li');
   unorderedList.appendChild(listItems);

   listItems.textContent = hours[i] + ' : ' + Seattle.cookiesPerHour[i];
}


    let sum = 0;
  for (j=0 ; j< hours.length ; j++){
   sum=sum + Seattle.cookiesPerHour[j];
     }
      console.log(sum);

let listItems = document.createElement('li');
unorderedList.appendChild(listItems);
listItems.textContent = 'Total :' + sum;

// -------------------------------------------
