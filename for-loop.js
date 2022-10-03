var score =[24,32,17];
var arrayLength=score.length;
var roundNumber=0;
var msg='';
 for (var i=0;i<arrayLength;i++){
     roundNumber=(i+1);
     msg +='Round' + roundNumber +':';
     msg +=score[i]+'<br/>';
 }
 document.getElementById('answer').innerHTML=msg;