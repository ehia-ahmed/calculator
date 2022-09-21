

   let result = document.getElementById("result")
   function numShow(num){
    result.value +=num;
   }
function claAll(){
    result.value = "";
}

function del(){
    result.value = result.value.slice(0,-1);
    
}

function calculate(){
    let x = result.value;
    let y = eval(x);

    result.value = y;
}
