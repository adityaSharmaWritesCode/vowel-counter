document.getElementById('checkButton').onclick = function(){
//Storing the value entered by the user in the textarea in a JS variable:
var text = document.getElementById('text').value;
//Checking if any text has been entered by the user or not:
if(text==''){
alert('You need to enter some text!');
return;
}
//Declaring counter variables for each vowel:
var a = 0; var e = 0; var i = 0; var o = 0; var u = 0;
//The following loop scans every element of the input text and checks for the presence of a
vowel using switch:case
for (let index = 0; index < text.length; index++) {
switch(text.charAt(index)){
case 'A':
case 'a': a = a+1;
break;
case 'E':
case 'e': e = e+1;
break;
case 'I':
case 'i': i = i+1;
break;

case 'O':
case 'o': o = o+1;
break;
case 'U':
case 'u': u = u+1;
break;
default: continue;
}
}
//The counters are updated with the count of all vowels respectively:
document.getElementById('aCount').innerHTML = "Letter 'A' : " + a;
document.getElementById('eCount').innerHTML = "Letter 'E' : " + e;
document.getElementById('iCount').innerHTML = "Letter 'I' : " + i;
document.getElementById('oCount').innerHTML = "Letter 'O' : " + o;
document.getElementById('uCount').innerHTML = "Letter 'U' : " + u;
//The count of all vowels are displayed:
document.getElementById('countHeader').style.display = 'block';
document.getElementById('aCount').style.display = 'block';
document.getElementById('eCount').style.display = 'block';
document.getElementById('iCount').style.display = 'block';
document.getElementById('oCount').style.display = 'block';
document.getElementById('uCount').style.display = 'block';
//Summing all counter variables to determine the total number of vowels in the entered text:
a = a + e + i + o + u;
alert('Text Verification Complete... 100%\r\nTotal vowel(s) entered are: ' + a )
}
