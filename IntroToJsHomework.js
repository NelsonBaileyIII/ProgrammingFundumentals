//Hello,you Part 1 & 2
function hello(name) {
    if (name === undefined) name = "World";
    console.log("Hello, " + name + "!") 
}
hello("Mustache");
hello()


// Madlib function
function madlib(name, subject) {
    console.log(name + "'s favorite subject in school is " + subject)
}
madlib("Mandela", "Science");
madlib("Sarah","Gym")

//tipCalc 1
function lol(x,y){
    return x * y;
}
//For the Multiplication problem

function tipAmount(x, y) {
    if (y === "good") y = .20
    if (y === "fair") y = .15
    if (y === "bad") y = .10
    let multi = lol(x,y)
    console.log(multi);

}
//To complete the tip Calculator, Used "const", "let" works as well, to use the "lol" function for it to work properly.

tipAmount(100,"good");
tipAmount(300,"fair")
tipAmount(70,"bad")

//tipCalc 2
function add(x,y) {
    return x*y+x;
}
// Just add the "+ 'x'" to the above function change names to avoid conflicts. 
function totalAmount(x, y) {
    if (y === "good") y = .20
    if (y === "fair") y = .15
    if (y === "bad") y = .10
    let alg = add(x,y)
    console.log(alg);

}
totalAmount(100,"good")
totalAmount(300,"fair")
totalAmount(70,"bad")

//tipCalc3 
function div(x,y,){
    return x*y+x;
}
function splitAmount(x,y,z) {
    if (y === "good") y = .20
    if (y === "fair") y = .15
    if (y === "bad") y = .10
    let bra = div(x,y,z)
    var total = bra / z
    console.log(total)
}
splitAmount(100,"good",2)
splitAmount(100,"fair",3)
splitAmount(1000,"bad",5)
//Was having issues at first, pemdas was kicking my ass, to fix added a "var" to divide after the inital equation to ensure the correct amount.  




