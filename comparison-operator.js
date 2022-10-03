var pass =50;
var score = 90;
var hasPassed = score >= pass;
var el=document.getElementById('answer');
el.textContent = 'level passed :' + hasPassed;