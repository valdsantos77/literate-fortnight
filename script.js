const simBtn = document.getElementById("simBtn");
const naoBtn = document.getElementById("naoBtn");
const resultadoDiv = document.getElementById("resultado");
const gifContainer = document.getElementById("gifContainer"); 

simBtn.addEventListener("click", function() {
    resultadoDiv.innerHTML = "<img src='picmix.com_887912.gif'>";
});

naoBtn.addEventListener("click", function() {
    resultadoDiv.innerHTML = "<img src='broken_heart_hc.gif'>";

        resultadoDiv.style.display = "flex";
        resultadoDiv.style.justifyContent = "center";
        resultadoDiv.style.alignItems = "center";
      
    });
   


    
