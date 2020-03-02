 function getHistory() {
	return document.getElementById("history-value").innerText;
 }
 function  printHistory(num) {
	 document.getElementById("history-value").innerText=num;
} 
 function getOutput() {
	 document.getElementById("output-value").innerText;
}
 function printOutput(num) {
	 if(num=="")  {
		 document.getElementById("output-value").innerText=num;
}
	else {
		return document.getElementById("output-value").innerText=getFormattedNmumber(num);
	}
} 
 function getFormattedNmumber(num){
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
 }
  function reverseNumberFormat(num){
	  return Number(num.replace(/,/g,''))
  }
  var operator = document.getElementByClassName("operator");
   for(var i =0;i<operator.length;i++){
	   operator[i].addEventListener('onclick',function(){
	alert ("The operator clicked:"+this.id);
   })
	}