const frases = [ "Keep trying", "Better let it go", "One more try","You can do it better", 
"Go to walk and the think about it", "Put you first", "you live only once", "your healthy is first", 
"finders keepers", "take care of your money", "enjoy it", "have some fun", "you can find a better job"];

//let username = document.getElementById("name").value;
//let saludo = username || "Hi" ;


function respuesta() {  
   let username = document.getElementById("name").value;
   let saludo = username || "Hi" ;
   let azar = Math.floor(Math.random() * frases.length );
   let result = frases[azar];
   let final =`${saludo}, ${result}.`;
   window.ondblclick= () => {
    alert(final);
  }};
  

  
  // debo es poner todo dentro de la function para que funcione



