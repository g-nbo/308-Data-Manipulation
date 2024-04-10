// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) === 50;
console.log("According to isSum50 these four numbers total up to 50 (" + isSum50 + ")");

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`According to isTwoOdd 2 or more of the numbers input are odd (${isTwoOdd})`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.

//Changed from isOver25 to isUnder25
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log("According to isUnder25 all of these numbers are below 25 (" + isUnder25 + ")");

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`According to isUnique all four are unique from eachother (${isUnique})`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;
console.log("According to isValid these four numbers meet all the requirments (" + isValid + ")");
// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Math Problems:

// Checks if all numbers are divisible by 5
const divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(divBy5);

// Checks if first number is larger than the last
const firstLast = (n1 > n4);
console.log(firstLast);

// Arithmetic chain
const arithChain = ((n1 - n2) * n3) % n4;
console.log(arithChain);



// Practical Problems: 

const distanceOfTrip = 1500;
const budget = 175;
const costPerGallon = 3;

// Car fuel efficiency // How many miles per gallon each speed gets you.
const mph55 = 30;
const mph60 = 28;
const mph75 = 23;

// Takes the car fuel efficiency (see comment above) and returns how many gallons it takes to complete 1 trip (totalGallons).
function howManyGallons(efficiency) {
    const totalGallons = distanceOfTrip / efficiency;

    return (totalGallons);
}

// Takes car fuel efficiency and uses it as an argument in the howManyGallons() function. After getting the number of totalGallons -
// we multiply it by costPerGallon, giving us the total price. Afterwards we compare the price and ensure it is less than or equal to our budget.
// We then store the answer in a variable (canAfford) and then return it, telling us whether or not we can afford the price of the trip at the selected speed.
function priceOfTrip(efficiency) {
    const price = howManyGallons(efficiency) * costPerGallon;
    const canAfford = price <= budget;

    return canAfford;
}

// Takes mph and divides it into how many miles we plan to travel (distanceOfTrip). Stores the result into a variable and returns it.
function howManyHours(mph) {
    let hours = distanceOfTrip / mph;

    return hours;
}

// How many gallons of fuel will you need for the entire trip?
console.log(`It will take ${howManyGallons(mph55)} gallons to complete your trip going 50mph!`);
console.log(`It will take ${howManyGallons(mph60)} gallons to complete your trip going 60mph!`);
console.log(`It will take ${howManyGallons(mph75)} gallons to complete your trip going 75mph!`);

// Will your budget be enough to cover the fuel expense?
console.log(`Going 55 mph you can afford the price of the trip (${priceOfTrip(mph55)})`);
console.log(`Going 60 mph you can afford the price of the trip (${priceOfTrip(mph60)})`);
console.log(`Going 75 mph you can't afford the price of the trip (${priceOfTrip(mph75)})`);

// How long will the trip take, in hours?
console.log(`It will take ${howManyHours(55)} hours to complete your trip going 50mph!`);
console.log(`It will take ${howManyHours(60)} hours to complete your trip going 60mph!`);
console.log(`It will take ${howManyHours(75)} hours to complete your trip going 75mph!`);

console.log(`After comparing all 3 speeds, the one that makes the most sense to me is 60mph. 
This will allow us to get their in as little time as possible, while still being able to afford the cost of the trip. `)



