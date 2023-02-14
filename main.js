// first program

let number1 = Number(prompt("Enter first number (compare large one)"));

let number2 = Number(prompt("Enter another number"));

if(number1 > number2){
     document.write(`${number1} is the large number`);
}
else if(number1 == number2){
     document.write("Both numbers are same");
	 }
else{
     document.write(`${number2} is the large number`)
}

document.write("<br>");

// second program

let number = Number(prompt("Enter any number (number is +ve or -ve)"));

if(number >0){
     document.write(`${number} is positive`);
}
else if(number == 0){
     document.write(`${number} is neither positive nor negative`)
}
else{
    document.write(`${number} is negative`)
}
document.write("<br>");

let a = Number(prompt("enter first number"));
let b = Number(prompt("enter second number"));
let c = Number(prompt("enter third number"));
let largest;
let smallest;
 
 				  if ((a>b)&&(a>c)){
				    if (b>c){
					   largest=a;
					   smallest = c;
						 }
                      else{
					  largest = a; 
					  smallest = b;
					  }
					  }
                  else if((b>a)&&(b>c)){
				     if (a>c){
						largest = b;
						smallest = c;
						}
						else{
						console.log("y is larger,x is smaller");
						largest = b;
						smallest = a;
						}
						}
				else {
                    if (b>a){
                       console.log("z is larger,x is smaller");
					   largest = c;
					   smallest = a;
                      }
                    else{
                     console.log("z is larger,y is smaller");
					 largest = c;
					 smallest = b;
}
}			

document.write(`Largest number among ${a}, ${b}, ${c} is ${largest} & Smallest number among ${a}, ${b}, ${c} is ${smallest}`)	

 