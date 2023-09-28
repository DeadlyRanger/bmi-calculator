 const weight = document.querySelector("#weight");
 const height = document.querySelector("#height");

  const button = document.querySelector("#btn");

  const demo = document.querySelector("#demo");
  const result = document.querySelector("#result");
  const output = document.querySelector("#output"); 

  button.addEventListener("click",function(){
   var a = weight.value;
   var b = height.value;

    var  c = a/(b*b);
      
      if( a>=0 && b>=0){

    
    output.style.opacity = 1;
    result.innerHTML = c;
      }
      else {
          output.style.opacity = 1;
        result.innerHTML = "Invalid Data !!";
      }

  })
