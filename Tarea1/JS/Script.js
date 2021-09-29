
document.getElementById("retornar").addEventListener("click", conteo);
document.getElementById("aplanarbtn").addEventListener("click", aplanar);
document.getElementById("generarPalabra").addEventListener("click", formarpalabra);
document.getElementById("elevarbtn").addEventListener("click", elevar);


function conteo(){
     
    secuencia = document.getElementById('ingresosecuencia').value; 
    document.getElementById('secuenciaIngresada').innerHTML = secuencia;
    var arreglo = new Array;
    var arreglocuenta= new Array;
    let contador=0;
    var letra ;

    for (let i=0;i<secuencia.length;i++){

        arreglo.push(secuencia[i]);
    }    
   
    for(let j=0;j<=arreglo.length;j++){   
        
        letra=arreglo[0];            
        for(let i=0;i<arreglo.length;i++){     
                            
                if(letra== arreglo[i]){          
                    contador++;           
                }    
            }
            arreglocuenta.push(letra,contador)
            arreglo.shift();
            contador=0;
    }
    document.getElementById('secuenciaNueva').innerHTML = arreglocuenta;
}
 function aplanar(){

    var argumentos= new Array();
     argumentos = document.getElementById('argumentostxt').value; 
    var limpio = new Array();
    var aux = new Array();
    for (let i = 0; i < argumentos .length; i++) {
        
        if(argumentos[i]==","||argumentos[i]==" "){
             console.log("Removiendo espacios o comas extra");
        }else{
            aux.push(argumentos[i]);
        }
    }
    
   
     document.getElementById('lista').innerHTML = aux;
 }


 function formarpalabra(){

    var palabras= document.getElementById('palabras').value; 
    var auxiliar= palabras.split(',');
    var palabrameta= document.getElementById('meta').value; 
    var palabraformada;
    var posiciones;
    var parteA= new Array();

    for( let i=0; i< auxiliar.length; i++){

            if(palabrameta.includes(auxiliar[i])){

                parteA.push(auxiliar[i], i);
                
            }

    }

    palabraformada=parteA[0]+ parteA[2];
    posiciones=parteA[1] +","+  parteA[3];



    if(palabrameta==palabraformada){
        document.getElementById('palabrameta').innerHTML = palabraformada;

    }else{
        palabraformada=parteA[2] + parteA[0];
        posiciones=parteA[3] +","+ parteA[1];
     
    }
        document.getElementById('palabrameta').innerHTML ="Palabra meta: "+ palabraformada;
        document.getElementById('posiciones').innerHTML = "posiciones :" + posiciones;
 }

 function elevar(){
    var numero= document.getElementById('numero').value; 
    var aux = "";
    for(let i=0;i<numero.length;i++){
        
        aux = aux + Math.pow(numero[i],2);
    }
    document.getElementById('resultado').innerHTML = aux ;
}
 
    

    
    
    


 
 