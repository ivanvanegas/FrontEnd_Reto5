/*function traerInformacion(){
    $.ajax({
        url:"http://150.136.82.173:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}

function pintarRespuesta(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].idMessage+"</td>";        
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td> <button onclick='actualizarInformacion("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrar("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacion(){
    let var2 = {
        idMessage:$("#idMessage").val(),
        messageText:$("#messageText").val()
        };
      
        $.ajax({
        url:"http://150.136.82.173:8080/api/Message/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),     
        success:function(respuesta){
            $("#resultado").empty();
            $("#idMessage").val("");
            $("#messageText").val("");
            traerInformacion();
            alert("se ha guardado correctamente el mensaje")
    
        }
        });

}

function actualizarInformacion(idElemento){
    let myData={
        idMessage:idElemento,
        
        messageText:$("#messageText").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            
            $("#messageText").val("");
            traerInformacion();
            alert("se ha Actualizado correctamente el mensaje")
        }
    });

}

function borrar(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });

}
*/
function autoInicioRelacionCliente(){
    
    $.ajax({
        url:"http://150.136.82.173:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
          
            let $select = $("#select-client");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.idClient+'>'+name.name+'</option>');
            
            }); 
        }
    
    })
}
function autoInicioGame(){

    $.ajax({
        url:"http://150.136.82.173:8080/api/Game/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
        
            let $select = $("#select-game");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
         
            }); 
        }
    
    })
}


function autoInicioMensajes(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://150.136.82.173:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaMensajes(respuesta);
        }
    
    })

}

function pintarRespuestaMensajes(respuesta){

    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        
        myTable+="<td>"+respuesta[i].messageText+"</td>";
        myTable+="<td>"+respuesta[i].game.name+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";
        myTable+="<td> <button onclick=' actualizarInformacionMensaje("+respuesta[i].idMessage+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrarMensaje("+respuesta[i].idMessage+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultadoMensajes").html(myTable);
}

function guardarInformacionMensajes(){
    if ($("#messagetext").val().length==0 ){

        alert("Todos los campos son obligatorios");
    }else{
    
    
    let var2 = {
        
        messageText:$("#messagetext").val(),
        game:{id: +$("#select-game").val()},
        client:{idClient: +$("#select-client").val()},

     
        };
       
        console.log(var2);
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        
        url:"http://150.136.82.173:8080/api/Message/save",
       
        
        success:function(response) {
                console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()
    
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
             window.location.reload()
            alert("No se guardo correctamente");
    
    
        }
        });
    }
}

function actualizarInformacionMensaje(idElemento){
    let myData={
        idMessage:idElemento,
        messageText:$("#messagetext").val(),
        game:{id: +$("#select-game").val()},
        client:{idClient: +$("#select-client").val()},

    


    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#messagetext").val("");
           
            autoInicioMensajes();
            alert("se ha Actualizado correctamente el Mensaje")
        }
    });

}

function borrarMensaje(idElemento){
    let myData={
        idMessage:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Message/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            autoInicioMensajes();
            alert("Se ha Eliminado.")
        }
    });

}
