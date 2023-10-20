//Anonymous function

//1.find odd number
let Array= [4,5,6,7,8];
const findoddNUmber = function (Arr){
        for(let i =0;i<Arr.length-1;i++){
            if((Arr[i]%2)===1){
                console.log(Arr[i]);
            }
        }
}
findoddNUmber(Array);

//2.title case first
let str = 'Hi this is karthik';
str = str.split(" ");
 
const titleCase = function (str){
    for(let i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
    console.log(str.join(" "));
}
 
titleCase(str);

//3.sum of array
let sumArray = [1,2,3,4,5];
let total = 0;
const sumOfArray = function (Arr){
    for( i in Arr){
        total += Arr[i];
	}
    console.log(total);
}
sumOfArray(sumArray);

//4.return all the prime number in the array
const Arr = [1,2,3,4,5,6,7,8,9,10];
let prime = [];
 
const findPrime = function (arr){
       let identifier = arr/2;	
        for(let j =2;j<=identifier;j++){
            if((arr%j) == 0){
                return true;
            }
            return false;
        }
}
const  primeCheck = function(){
for(let i=0;i<=Arr.length-1;i++){
    if(Arr[i] >=2 && findPrime(Arr[i])){
        prime.push(i);
	}
}
console.log(prime);
}
primeCheck();

//5.Return all the palindromes in an array .
const isPalindrome = function (s)
{
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
const findPalindrom = function (arr,N)
{
    let ans = [];
    for (let i = 0; i < N; i++) {
        if (isPalindrome(arr[i])) {
            ans.push(arr[i]);
        }
    }
    return ans;
}
let arr =['bob','121'];
let N= arr.length;
console.log(findPalindrom(arr,N));



//7.Remove duplicates from an array
let Arr = [1,2,2,2,3,4,4,4];
let tempArr =  [1,2,2,2,3,4,4];
let temp = Arr[0];

let count = 0;

for(let i=0;i<=Arr.length-1;i++){
    for(let j=0;j<Arr.length-1;j++){
        if(temp == Arr[j]){
          count++;
        }
    }
    
    if(count == 2){
        tempArr.splice(i,1);
        count = count-1;
    }
}
console.log(tempArr);


//8.Rotate an array by k times
const reverse = function (arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  let start = 0;
  let end = 1;
  let arr = ['karthik', '23','trichy'];
  reverse(arr,start,end);
  console.log(arr);


//IIFE
  //1.find odd number
 (function (Arr){
    for(let i =0;i<Arr.length-1;i++){
        if((Arr[i]%2)===1){
            console.log(Arr[i]);
        }
    }
})([4,5,6,7,8]);


//2.title case first
let str = 'Hi this is karthik';
str = str.split(" ");
 
(function (str){
    for(let i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
    console.log(str.join(" "));
})(str);


//3.sum of array
let sumArray = [1,2,3,4,5];
let total = 0;
 (function (Arr){
    for( i in Arr){
        total += Arr[i];
	}
    console.log(total);
})(sumArray);



//7.Remove duplicates from an array
let Arr = [1,2,2,2,3,4,4,4];
let tempArr = Arr;
let temp = Arr[0];
let count = 0;
(function(){
    for(let i=0;i<=Arr.length;i++){
        for(let j=0;j<Arr.length;j++){
            if(temp == Arr[j]){
              count++;
            }
        }
        
        if(count == 2){
            tempArr.splice(i,1);
            count = count-1;
        }
    }
    console.log(tempArr);
})();


//8.Rotate an array by k times
let start = 0;
let end = 1;
(function (arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
    console.log(arr);
  })(['karthik', '23','trichy'],0,1);
 