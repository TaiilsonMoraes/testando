let btn = document.querySelector("#btn").addEventListener("click",function(e){
    e.preventDefault();
    let nomeInput = document.querySelector("#nome");
    let nome = nomeInput.value;
   

    if(nome){
        let p = document.createElement("p");

    let ptext = p.textContent = `PARABENS [${nome}] VOCÊ VOCÊ FOI CONTRATADA PRA TRABALHAR 24HRS`
    
    

    let output = document.querySelector("#output");

   

    let input = document.querySelector("#input");
    input.style.display = "none";

    
    
    output.style.display = "block";
    output.appendChild(p);

    document.body.style.background = "black"

    
    function redirecionar() {
        window.location.href = "https://www.youtube.com/watch?v=08i9kvCJvJ0";
    }

    setInterval(redirecionar,5000)
    

    }else{
        alert("COLOCA O NOME RETARDADO")
    }
})