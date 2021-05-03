'use srtict'

let hours= [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm '];

let parent = document.getElementById('parent');
console.log(parent);

let Seattle = {
  locationName: 'Seattle',
    MinCus: 23,
    MaxCus : 65,
    AvgCookie: 6.3,
    customers:[],
    cookiesPerHour:[],
    total:0,
    customersPerHour: function(){

        for(let i=0; i< hours.length; i++){   
       this.customers.push(randomNumberOfCustomers(this.MinCus,this.MaxCus));
}  
},
    cookiesEachHour : function(){

      for (let j=0; j< this.customers.length; j++){
      this.cookiesPerHour.push(Math.floor(this.customers[j] * this.AvgCookie));
    }
    },
     renderFunction: function(){
    let shopName = document.createElement('h2');
parent.appendChild(shopName);
shopName.textContent = this.locationName;
// creat ul
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);


//creat li 
for (let i = 0; i < hours.length; i++) {
   let listItems = document.createElement('li');
   unorderedList.appendChild(listItems);

   listItems.textContent = hours[i] + ' : ' + Seattle.cookiesPerHour[i];

   this.total= this.total + this.cookiesPerHour[i];
}


let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent = `Total :${this.total} `;

     }


}
console.log(Seattle);
Seattle.customersPerHour();
Seattle.cookiesEachHour();
Seattle.renderFunction();

function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// -------------------------------------------

let Tokyo = {
  locationName: 'Tokyo',
    MinCus: 3,
    MaxCus : 24,
    AvgCookie: 1.2,
    customers:[],
    cookiesPerHour:[],
    total:0,
    customersPerHour: function(){

        for(let i=0; i< hours.length; i++){   
       this.customers.push(randomNumberOfCustomers(this.MinCus,this.MaxCus));
}  
},
    cookiesEachHour : function(){

      for (let j=0; j< this.customers.length; j++){
      this.cookiesPerHour.push(Math.floor(this.customers[j] * this.AvgCookie));
    }
    },
     renderFunction: function(){
    let shopName = document.createElement('h2');
parent.appendChild(shopName);
shopName.textContent = this.locationName;
// creat ul
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);


//creat li 
for (let i = 0; i < hours.length; i++) {
   let listItems = document.createElement('li');
   unorderedList.appendChild(listItems);

   listItems.textContent = hours[i] + ' : ' + Seattle.cookiesPerHour[i];

   this.total= this.total + this.cookiesPerHour[i];
}


let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent = `Total :${this.total} `;

     }


}
console.log(Tokyo);
Tokyo.customersPerHour();
Tokyo.cookiesEachHour();
Tokyo.renderFunction();

function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// -------------------------------------------------------

let Dubai = {
  locationName: 'Dubai',
    MinCus: 11,
    MaxCus : 38,
    AvgCookie: 3.7,
    customers:[],
    cookiesPerHour:[],
    total:0,
    customersPerHour: function(){

        for(let i=0; i< hours.length; i++){   
       this.customers.push(randomNumberOfCustomers(this.MinCus,this.MaxCus));
}  
},
    cookiesEachHour : function(){

      for (let j=0; j< this.customers.length; j++){
      this.cookiesPerHour.push(Math.floor(this.customers[j] * this.AvgCookie));
    }
    },
     renderFunction: function(){
    let shopName = document.createElement('h2');
parent.appendChild(shopName);
shopName.textContent = this.locationName;
// creat ul
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);


//creat li 
for (let i = 0; i < hours.length; i++) {
   let listItems = document.createElement('li');
   unorderedList.appendChild(listItems);

   listItems.textContent = hours[i] + ' : ' + Seattle.cookiesPerHour[i];

   this.total= this.total + this.cookiesPerHour[i];
}


let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent = `Total :${this.total} `;

     }


}
console.log(Dubai);
Dubai.customersPerHour();
Dubai.cookiesEachHour();
Dubai.renderFunction();

function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// -------------------------------------------------------

let Paris = {
  locationName: 'Paris',
    MinCus: 20,
    MaxCus : 38,
    AvgCookie: 2.3,
    customers:[],
    cookiesPerHour:[],
    total:0,
    customersPerHour: function(){

        for(let i=0; i< hours.length; i++){   
       this.customers.push(randomNumberOfCustomers(this.MinCus,this.MaxCus));
}  
},
    cookiesEachHour : function(){

      for (let j=0; j< this.customers.length; j++){
      this.cookiesPerHour.push(Math.floor(this.customers[j] * this.AvgCookie));
    }
    },
     renderFunction: function(){
    let shopName = document.createElement('h2');
parent.appendChild(shopName);
shopName.textContent = this.locationName;
// creat ul
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);


//creat li 
for (let i = 0; i < hours.length; i++) {
   let listItems = document.createElement('li');
   unorderedList.appendChild(listItems);

   listItems.textContent = hours[i] + ' : ' + Seattle.cookiesPerHour[i];

   this.total= this.total + this.cookiesPerHour[i];
}


let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent = `Total :${this.total} `;

     }


}
console.log(Paris);
Paris.customersPerHour();
Paris.cookiesEachHour();
Paris.renderFunction();

function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// -------------------------------------------------------

let Lima = {
  locationName: 'Lima',
    MinCus: 2,
    MaxCus : 16,
    AvgCookie: 4.6,
    customers:[],
    cookiesPerHour:[],
    total:0,
    customersPerHour: function(){

        for(let i=0; i< hours.length; i++){   
       this.customers.push(randomNumberOfCustomers(this.MinCus,this.MaxCus));
}  
},
    cookiesEachHour : function(){

      for (let j=0; j< this.customers.length; j++){
      this.cookiesPerHour.push(Math.floor(this.customers[j] * this.AvgCookie));
    }
    },
     renderFunction: function(){
    let shopName = document.createElement('h2');
parent.appendChild(shopName);
shopName.textContent = this.locationName;
// creat ul
let unorderedList = document.createElement('ul');
parent.appendChild(unorderedList);


//creat li 
for (let i = 0; i < hours.length; i++) {
   let listItems = document.createElement('li');
   unorderedList.appendChild(listItems);

   listItems.textContent = hours[i] + ' : ' + Seattle.cookiesPerHour[i];

   this.total= this.total + this.cookiesPerHour[i];
}


let totalItem = document.createElement('li');
unorderedList.appendChild(totalItem);
totalItem.textContent = `Total :${this.total} `;

     }


}
console.log(Lima);
Lima.customersPerHour();
Lima.cookiesEachHour();
Lima.renderFunction();

function randomNumberOfCustomers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}