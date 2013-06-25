#!/usr/bin/env node
//Homework 1. Tirso Peralta
var maxNumber;

// Prime Number. Wikipedia https://en.wikipedia.org/wiki/Prime_number
// Calculate the prime number using the trial division knowing
// primes numbers up to sqrt(k)
var  prime = function (k, nums){
			var p = Math.ceil(Math.sqrt(k));
			
			if (k == 2){
				return true;
			}else{
				var d;
				var i = 0;
				
				while(nums[i] <= p){
					d = k % nums[i];
					
					if (d == 0){
						return false;
					}
					i++;
				}
				return true;		
			}
		
		}

var primesUpTo = function(maxNumber){
		var pNumbers = [];
		var j = 0; //number of primes
		var n = 2;
		
		while(j <= maxNumber){
			if (prime(n, pNumbers)){
				pNumbers.push(n);
				j++;	
			} 
			n++;
		}
		
		return pNumbers;
	}


var pmt = function(arr){
	return arr.join(',');
}


//show the results
var fs = require('fs');
var outfile = "primes.txt";
var out = pmt(primesUpTo(100));
console.log(out+"\n");
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);

