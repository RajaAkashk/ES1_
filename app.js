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


console.log("Answer 1:");
function calculateSalary(hoursWorked, hourlyRate) {
  let totalSalary = hourlyRate * hoursWorked;
  return totalSalary;
}
console.log("Total Salary:", calculateSalary(40, 500));

console.log('\n')
console.log("Answer 2:");
function calculateBonus(workedHours, marks, salary) {
  if (workedHours > 25 && marks > 85) {
    let bonus = salary * 0.1;
    let salarywithBonus = bonus + salary;
    return salarywithBonus;
  }
  else if (workedHours > 15 && marks > 75) {
      let bonus = salary * 0.05;
      let salarywithBonus = bonus + salary;
      return salarywithBonus;
    }else{
    return salary;
    }
}
console.log(calculateBonus(20, 80, 5000));


console.log('\n')
console.log("Answer 3:");

function calculateFinalAmount(price1,quantity1,price2,quantity2){
  let priceOfQuantity1 = price1 * quantity1;
  let priceOfQuantity2 = price2 * quantity2;
  let totalPrice = priceOfQuantity1 + priceOfQuantity2;
  return totalPrice;
}
console.log(calculateFinalAmount(200, 10, 500, 5));


console.log('\n')
console.log("Answer 4:");
function calculateAllowance(age,isStudent,baseAllowance){
  if(age < 18 && isStudent === true){
    return baseAllowance = baseAllowance + 100;
  } else if(age > 18 && age < 25 && isStudent === true){
      return baseAllowance = baseAllowance + 50;
    }else{
    return baseAllowance
    }
}
console.log(calculateAllowance(16,true,500))

console.log('\n')
console.log("Answer 5:");
function calculateShippingCost (totalWeight,country,baseCost){
  if(totalWeight<1 && country === 'Local'){
    return baseCost = baseCost + 10;
  }
  else if(totalWeight>1 && country === 'International'){
      return baseCost = baseCost + 20;
    }else{
    return baseCost;
    }
}
console.log(calculateShippingCost(0.5,"Local",50))




const car ={
  brand:'Toyota',
  model:'Camery'
}

console.log('1.1', car.brand)
console.log('1.2', car.model)

console.log('1.3', car.brand = 'Honda')
console.log('1.4', car)

car.year = 2022;
car.color = 'Blue';
console.log('1.5', car)

console.log('1.6')
for(let val in car){
  console.log(val,':',car[val])
}

const citizen ={
  name:'Ramesh Kumar',
  age:62,
  occupation:'Retired'
}
citizen.age = 68;
console.log('\n')
console.log('2.1: Updated age:', citizen.age)

citizen.age += 2 ;
console.log('2.2: Updated age after addding 2:', citizen.age)

citizen.city = "Delhi"
console.log('2.3: Properties of the',"'",'citizen',"'",'object')
for(let val in citizen){
  console.log(val, ':', citizen[val])
}


const person ={
  name:'Ram',
  age: '65'
}
person.bp = "Normal"

console.log('\n')
console.log('3.1: bp:', person.bp)

console.log('\n')
console.log('3.2:')
if(person.bp ==="Normal" && person.age > 60){
  console.log("Fit to travel.")
}else{
   console.log("Not fit to travel.")
}
