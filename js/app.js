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

let Tokyo	 = {
    MinCus: 3,
    MaxCus : 24,
    AvgCookie: 1.2,
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

Tokyo.customersPerHour();
Tokyo.cookiesEachHour();

let unorderedList1 = document.createElement('ul');
parent.appendChild(unorderedList1);
console.log(unorderedList1);
unorderedList1.textContent =('Tokyo');

for (let i = 0; i < hours.length; i++) {
   let listItems1 = document.createElement('li');
   unorderedList1.appendChild(listItems1);

   listItems1.textContent = hours[i] + ' : ' + Tokyo.cookiesPerHour[i];
}

    let sum1 = 0;
  for (j=0 ; j< hours.length ; j++){
   sum1=sum1 + Tokyo.cookiesPerHour[j];
     }
      console.log(sum1);

let listItems1 = document.createElement('li');
unorderedList1.appendChild(listItems1);
listItems1.textContent = 'Total :' + sum1;
// -----------------------------------------------------------------------

let Dubai	 = {
    MinCus: 11,
    MaxCus : 38,
    AvgCookie: 3.7,
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

Dubai.customersPerHour();
Dubai.cookiesEachHour();

let unorderedList2 = document.createElement('ul');
parent.appendChild(unorderedList2);
console.log(unorderedList2);
unorderedList2.textContent =('Dubai');

for (let i = 0; i < hours.length; i++) {
   let listItems2 = document.createElement('li');
   unorderedList2.appendChild(listItems2);

   listItems2.textContent = hours[i] + ' : ' + Dubai.cookiesPerHour[i];
}

    let sum2 = 0;
  for (j=0 ; j< hours.length ; j++){
   sum2=sum2 + Dubai.cookiesPerHour[j];
     }
      console.log(sum2);

let listItems2 = document.createElement('li');
unorderedList2.appendChild(listItems2);
listItems2.textContent = 'Total :' + sum2;

//------------------------------------------------


let Paris	 = {
    MinCus: 20,
    MaxCus : 38,
    AvgCookie: 2.3,
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

Paris.customersPerHour();
Paris.cookiesEachHour();

let unorderedList3 = document.createElement('ul');
parent.appendChild(unorderedList3);
console.log(unorderedList3);
unorderedList3.textContent =('Paris');

for (let i = 0; i < hours.length; i++) {
   let listItems3 = document.createElement('li');
   unorderedList3.appendChild(listItems3);

   listItems3.textContent = hours[i] + ' : ' + Paris.cookiesPerHour[i];
}

    let sum3 = 0;
  for (j=0 ; j< hours.length ; j++){
   sum3=sum3 + Paris.cookiesPerHour[j];
     }
      console.log(sum3);

let listItems3 = document.createElement('li');
unorderedList3.appendChild(listItems3);
listItems3.textContent = 'Total :' + sum3;

// --------------------------------------------------------------------

let Lima	 = {
    MinCus: 2,
    MaxCus : 16,
    AvgCookie: 4.6,
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

Lima.customersPerHour();
Lima.cookiesEachHour();

let unorderedList4 = document.createElement('ul');
parent.appendChild(unorderedList4);
console.log(unorderedList4);
unorderedList4.textContent =('Lima');

for (let i = 0; i < hours.length; i++) {
   let listItems4 = document.createElement('li');
   unorderedList4.appendChild(listItems4);

   listItems4.textContent = hours[i] + ' : ' + Lima.cookiesPerHour[i];
}

    let sum4 = 0;
  for (j=0 ; j< hours.length ; j++){
   sum4=sum4 + Lima.cookiesPerHour[j];
     }
      console.log(sum4);

let listItems4 = document.createElement('li');
unorderedList4.appendChild(listItems4);
listItems4.textContent = 'Total :' + sum4;
