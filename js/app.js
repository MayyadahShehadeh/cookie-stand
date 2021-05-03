

// -------------------------------------------
let hours= [' 6:00am ', ' 7:00am ', ' 8:00am ', ' 9:00am ', ' 10:00am ', ' 11:00am ', ' 12:00pm ', ' 1:00pm ', ' 2:00pm ', ' 3:00pm ', ' 4:00pm ', ' 5:00pm ', ' 6:00pm ', ' 7:00pm '];



function SalmonCookies(locationName,MinCus,MaxCus,AvgCookie){
  this.locationName=locationName;
  this.MinCus=MinCus;
  this.MaxCus=MaxCus;
  this.AvgCookie=AvgCookie;
  this.customers=[];
  this.cookiesPerHour=[];
  this.dailyLocationTotal=0;

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
    }}
    SalmonCookies.prototype.dailyLocationTotalCookies= function(){

    for (let i = 0; i < hours.length; i++) {
   
      this.dailyLocationTotal= this.dailyLocationTotal + this.cookiesPerHour[i];
   }}




   
   // Create Table
   let parent = document.getElementById('parent');
   let table = document.createElement('table');
   parent.appendChild(table);
   
   
   
   // create head row
   let HeadRow = document.createElement('tr');
   table.appendChild(HeadRow);
   console.log(parent);
   let th1 = document.createElement('th');
   HeadRow.appendChild(th1);
   th1.textContent = '';
    
   for (let i = 0; i < hours.length; i++) {
     
     let th2 = document.createElement('th');
     HeadRow.appendChild(th2);
     th2.textContent = hours[i];
   }
   let th3 = document.createElement('th');
    HeadRow.appendChild(th3);
    th3.textContent = 'daily Location Total';
//-------------------------------------------------------------

   // Create table contents
     SalmonCookies.prototype.LocationColomn= function(){

       let Rows1 = document.createElement('tr');
        table.appendChild(Rows1);

        let td1 = document.createElement('td');
        Rows1.appendChild(td1);
        td1.textContent = this.locationName;

        for (let i = 0; i < hours.length; i++) {
          let td2 = document.createElement('td');
     Rows1.appendChild(td2);
     td2.textContent = this.cookiesPerHour[i];
    }
    let lastTd = document.createElement('td');
    Rows1.appendChild(lastTd);
    lastTd.textContent = this.dailyLocationTotal;
    
     }




  




let Seattle = new SalmonCookies('Seattle',23,65,6.3);
Seattle.customersPerHour();
Seattle.cookiesEachHour();
Seattle.dailyLocationTotalCookies();
Seattle.LocationColomn();
console.log(Seattle);

let Tokyo = new SalmonCookies('Tokyo',3,24,1.2);
Tokyo.customersPerHour();
Tokyo.cookiesEachHour();
Tokyo.dailyLocationTotalCookies();
Tokyo.LocationColomn();
console.log(Tokyo);

let Dubai = new SalmonCookies('Dubai',11,38,3.7);
Dubai.customersPerHour();
Dubai.cookiesEachHour();
Dubai.dailyLocationTotalCookies();
Dubai.LocationColomn();
console.log(Dubai);

let Paris = new SalmonCookies('Paris',20,38,2.3);
Paris.customersPerHour();
Paris.cookiesEachHour();
Paris.dailyLocationTotalCookies();
Paris.LocationColomn();
console.log(Paris);

let Lima = new SalmonCookies('Lima',2,16,4.6);
Lima.customersPerHour();
Lima.cookiesEachHour();
Lima.dailyLocationTotalCookies();
Lima.LocationColomn();
console.log(Lima);


