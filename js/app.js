

// -------------------------------------------
let hours= [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm '];

let locations=[];

function SalmonCookies(locationName,MinCus,MaxCus,AvgCookie){
  this.locationName=locationName;
  this.MinCus=MinCus;
  this.MaxCus=MaxCus;
  this.AvgCookie=AvgCookie;

  this.customers=[];
  this.cookiesPerHour=[];
  this.dailyLocationTotal=0;
  
locations.push(this);


}
// Random Generator
function randomNumberOfCustomers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// prototype
SalmonCookies.prototype.customersPerHour=function(){
  for(let i=0; i< hours.length; i++){  
    this.customers[i]=(randomNumberOfCustomers(this.MinCus,this.MaxCus));
  }
}

SalmonCookies.prototype.cookiesEachHour= function(){
  
  for (let j=0; j< this.customers.length; j++){
    this.cookiesPerHour[j]=(Math.floor(this.customers[j] * this.AvgCookie));

    this.dailyLocationTotal= this.dailyLocationTotal + this.cookiesPerHour[j];

} 
}

let Seattle = new SalmonCookies('Seattle',23,65,6.3);
    
let Tokyo = new SalmonCookies('Tokyo',3,24,1.2);

let Dubai = new SalmonCookies('Dubai',11,38,3.7);

let Paris = new SalmonCookies('Paris',20,38,2.3);


let Lima = new SalmonCookies('Lima',2,16,4.6);


    
    // Create Table
    
let parent = document.getElementById('parent');
console.log(parent);
let table = document.createElement('table');
parent.appendChild(table);
    
    
    // create head row
    
function thaHeader(){

    let HeadRow = document.createElement('tr');
    table.appendChild(HeadRow);

    let th1 = document.createElement('th');
    HeadRow.appendChild(th1);
    th1.textContent = '';
    
    for (let i = 0; i < hours.length; i++) {
      
      let headerTh = document.createElement('th');
      HeadRow.appendChild(headerTh);
      headerTh.textContent = hours[i];
    }
    let lastTh = document.createElement('th');
    HeadRow.appendChild(lastTh);
    lastTh.textContent = 'daily Location Total';
}
  thaHeader();
    //-------------------------------------------------------------
    
    // Create table contents
SalmonCookies.prototype.render= function(){
      
      let Rows1 = document.createElement('tr');
      table.appendChild(Rows1);
    
      let nameData = document.createElement('td');
      Rows1.appendChild(nameData);
      nameData.textContent = this.locationName;
      
      for (let i = 0; i < hours.length; i++) {
        let td2 = document.createElement('td');
        Rows1.appendChild(td2);
        td2.textContent = this.cookiesPerHour[i];
      }

      let lastTd = document.createElement('td');
      Rows1.appendChild(lastTd);
      lastTd.textContent = this.dailyLocationTotal;
      
}

for (let i = 0; i < locations.length; i++) {
  locations[i].customersPerHour();
  locations[i].cookiesEachHour();
  locations[i].render();
}
    //-------------------------------------------------------------
    // table footer:

    function tableFooter() {
      let fRow=document.createElement('tr');
       table.appendChild(fRow);

       let fTh=document.createElement('th');
       fRow.appendChild(fTh);
       fTh.textContent='Totals';

     for (let i = 0; i < hours.length; i++) {
       let Totals=0;
       for (let j = 0; j < locations.length; j++) {
       Totals+=locations[j].cookiesPerHour[i];
        }
          console.log(Totals);
          let TotalThs=document.createElement('th');
          fRow.appendChild(TotalThs);
          TotalThs.textContent=Totals;
    }

    
    let totalTotals =0;
    for (let i = 0; i < locations.length; i++) {
    totalTotals+=locations[i].dailyLocationTotal;    
    }

    let lastTh=document.createElement('th');
    fRow.appendChild(lastTh);
    lastTh.textContent=totalTotals;

    }
      tableFooter();    
    
    console.log(locations);

// ---------------------------------------------- form --------------------------------------

let cookieForm=document.getElementById('cookieForm');
cookieForm.addEventListener('submit', submitter);

function submitter(event){
event.preventDefault();

table.deleteRow(table.rows.length - 1);

let location=event.target.Location.value;
console.log('location is:' + location);

let MinCus=event.target.minCus.value;
console.log('Minimum num of Customers is:' + MinCus , Number);

let MaxCus=event.target.maxCus.value;
console.log('Maximum num of Customer is:' + MaxCus, Number);

let AvgCookie=event.target.avgCookies.value;
console.log('Avg Cookies is:' + AvgCookie, Number);

document.getElementById('cookieForm').reset();

let addDataToCookiesShop = new SalmonCookies (location,MinCus,MaxCus,AvgCookie);

addDataToCookiesShop.customersPerHour();
addDataToCookiesShop.cookiesEachHour();
addDataToCookiesShop.render();

tableFooter();    


}



