//// add two numbers 
function add(a,b){
    console.log(`the result is ${a+b}`)
}
add(3,4)

//////// even odd
function check(a){
    if(a%2==0){
        console.log("Nmber is even")
    }
    else
    console.log("nmber is odd")
}
check(4)
////////////
function largest(a,b,c){
  if(a>b && a>c){
    return a
  }
  else if(b>a && b>c){
    return b
  }
  else return c
}
console.log(largest(9,4,11))

////////////////

function reverse(str){
return str.split("").reverse().join("")
}
console.log(reverse("physics"))
///////////////
function fact(a){
    let result =1
    for(let i=a; i>=1;i--){
        result*=i;
    }
    return result
}
console.log(fact(5))