// Acessing html input fields by their ids and classnames.
var customerId = document.getElementById('customerId');
var customerName = document.getElementById('name');
var customerState = document.getElementById('state');
var typeOfCustomer = document.getElementById('customerType');
var partNumber = document.getElementById('partNumber');
var descriptn = document.getElementById('descrptn');
var partPrice = document.getElementById('pricePerPart');
var quantityEl = document.getElementById('partquantity');
var containerSize = document.querySelectorAll('containerSize');
var compute = document.getElementById('submit');
var ship = document.querySelectorAll('.shipping');
var dispship = document.getElementById('smship');
var ursid = document.getElementById('smid');
var namereq = document.getElementById('smname');
var statereq = document.getElementById('smstate');
var ups = document.getElementById('ups');
var fedexair = document.getElementById('fedexair');
var fedexgr = document.getElementById('fedexgr');
var postal= document.getElementById('postalair')
// Validation measure for specific input fields
const customId = /^[0-9]{3,7}$/;
const name = /^[a-zA-Z]{5,25}$/;
const state = /^[A-Z]{3}$/;
const partNum = /^[0-9]{5,7}$/;
const descript =/^[a-zA-Z0-9]{25,300}$/;
const pricePart = /^[0-9]{1,7}$/;
const qty = /^[0-9]{1,7}$/;

// Acessing html small-fields to display on browser.
var displayId =document.getElementById('smid');

// validation function to ensure correct values

compute.addEventListener("click", (event)=>{
    event.preventDefault();
    const validate = ()=>{
        if(customerId.value.match(customId)){
            customerId.style.border="1px solid green";
        }
        else{
            ursid.innerHTML="Must be numeric only" 
        }
        if(customerName.value.match(name)){
            customerName.style.border="1px solid green";
        }
        else{
            namereq.innerHTML="Required";
        }
        if(customerState.value.match(state)){
            customerState.style.border="1px solid green";
        }
        else{
            statereq.innerHTML="Must be 3 only";
    
        }
        if(partNumber.value.match(partNum)){
            partNumber.style.border="1px solid green";
        }
        else{
            partNumber.style.border="1px solid red";
        }
        if(descriptn.value.match(descript)){
            descriptn.style.border="1px solid green";
        }
        else{
            descriptn.style.border="1px solid red";
        }
        if(partPrice.value.match(pricePart)){
            partPrice.style.border="1px solid green"; 
        }
        else{
            partPrice.style.border="1px solid red";
        }
        if(quantityEl.value.match(qty)){
            quantityEl.style.border="1px solid green";
        }
        else{
            quantityEl.style.border="1px solid red";
        }
         
     };
     validate();

     let mbararebb = parseFloat(5/100).toFixed(2);
     let klaTax = parseFloat(10 / 100).toFixed(2);
     var  quantity =quantityEl.value;
     let price = partPrice.value;
     var cost = parseFloat(price * quantity).toFixed(2);


    // Calculating taxrate for the states 
    var entebMbaraTax =  mbararebb * cost;
     var taxRate= ()=>{
        // Mbarara and Entebbe taxrate calculation
         if(customerState.value === "MBR" || "EBB")
         { 
             if(typeOfCustomer.checked)
             {
                entebMbaraTax;
             }
             else{
                cost; 
             } 
         }
        else if(customerState.value ==="KLA")
        {
            if(typeOfCustomer.checked)
            {
                klaTax;
            }
            else{
                cost;
            }

        }
        
    };
    taxRate();

    var shiphandling = ()=>{
        if(ups.checked && containerSize.checked){
            7.00 * (quantity * 5.00);
        }
        else{
            7.00 * quantity;
        }
        if(fedexair.checked && containerSize.checked){
            12.00 * (quantity * 5.00);
        }
        else{
            12.00 * quantity;
        }
        if(fedexgr.checked && containerSize.checked){
            9.25 * (quantity * 5.00);
        }
        else{
            9.25 * quantity;
        }
        if(postal.checked && containerSize.checked){
            8.50 * (quantity * 5.00);
        }
        else{
            8.50 * quantity;
        }
    };
    shiphandling();
    
var total = cost + taxRate(); + shiphandling();
 console.log(total);
 console.log(shiphandling);
});




