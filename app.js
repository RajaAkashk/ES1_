console.log("Program 1:");
const isBirthday = true;
let age = 20;
if (isBirthday) {
  age += 1;
  console.log("Your current age is:", age);
} else {
  console.log("Your age is:", age);
}
console.log("\n");

console.log("Program 2:");
const passengerAge = 65;
const ticketPrice = 1000;
const discountedPrice = ticketPrice - ticketPrice * 0.15;

if (passengerAge > 60) {
  console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
  console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

console.log("Program 3:");
const num1 = 25;
const num2 = 26;
const num3 = 27;

if (num3 > num2 && num3 > num1) {
  console.log("The third is the largest number.");
} else {
  console.log("The third is not the largest number.");
}
console.log("\n");

console.log("Program 4:");
console.log("\n");

const list = {
  saree: 500,
  kurta: 300,
  jeans: 900,
  shoes: 400,
};

let totalPrice = 0;
const deliveryCharges = 99;

for (let val in list) {
  totalPrice = totalPrice + list[val];
}

let deliveryChargesresult ;
if (totalPrice < 1999) {
  totalPrice = totalPrice + deliveryCharges;
    deliveryChargesresult = totalPrice 
} else {
  deliveryChargesresult = "No Delivery Charge"
}

let output = 'Shopping Cart:' + "\n" + "-----------------------" + "\n";

for (let item in list) {
  output += `Item: ${item} , Price: ${list[item]} \n`;
}

output += "-----------------------" + "\n" + "Delivery Charges: " + deliveryChargesresult + '\n' +   "-----------------------" + '\n' + "Total Cart Price: " + totalPrice ;


console.log(output);
console.log("\n");


console.log("Program 5:");

const number = 29 ;

if(number > 0){
  console.log("The number is positive number.")
}
else if(number < 0){
    console.log("The number is positive number.")
  }
else{
  console.log("The number is zero.")
}

console.log("\n");
console.log("Program 6:");

const student1="Rahul";
const student2="Priya";
const student3="Tina";

const marks1=85;
const marks2=90;
const marks3=78;

if(marks1 > marks2 && marks1 > marks3){
  console.log(student1,', scored the highest marks:', marks1)
}
else if(marks2 > marks1 && marks2 > marks3){
    console.log(student2,', scored the highest marks:', marks2)
  }
else{
   console.log(student3,', scored the highest marks:', marks3)
}
