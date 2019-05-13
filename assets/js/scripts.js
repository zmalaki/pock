
function changeName(color){
   var y=document.getElementById("color");
   var z=document.getElementById("number").value;
   console.log(z)
   switch(z){
     case 1:
      color="yellow";
      break;
    case 2:
      color="green";
      break;
   default:
      color="blue";
      break;

   }
   y.style.backgroundColor=color;
}





