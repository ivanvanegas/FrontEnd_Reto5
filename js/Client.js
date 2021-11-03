/*function traerInformacion(){
    $.ajax({
        url:"http://150.136.82.173:8080/api/Client/all",
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
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].age+"</td>";
        myTable+="<td>"+respuesta[i].email+"</td>";
        myTable+="<td>"+respuesta[i].password+"</td>";

        myTable+="<td> <button onclick='actualizarInformacion("+respuesta[i].idClient+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrar("+respuesta[i].idClient+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacion(){
    let var2 = {
        
        name:$("#name").val(),
        age:$("#age").val(),
        email:$("#email").val(),
        password:$("#password").val()
        };
      
        $.ajax({
        url:"http://150.136.82.173:8080/api/Client/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),     
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#age").val("");
            $("#email").val("");
            $("#password").val("");
            traerInformacion();
            alert("se ha guardado correctamente el cliente")
    
        }
        });

}

function actualizarInformacion(idElemento){    
    let myData={
        idClient:idElemento,
        name:$("#name").val(),
        age:$("#age").val(),
        email:$("#email").val(),
        password:$("#password").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#age").val("");
            $("#email").val("");
            $("#password").val("");
            traerInformacion();
            alert("se ha actualizado correctamente el cliente")
        }
    });

}

function borrar(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Client/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado el cliente.")
        }
    });

}
*/

function autoInicioCliente() {
    console.log("se esta ejecutando")
    $.ajax({
        url: "http://150.136.82.173:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    })

}
function traerInformacion() {
    $.ajax({
        url: "http://150.136.82.173:8080/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    myTable += "<tr>";
    myTable += "<td>NOMBRE</td>";
    myTable += "<td>EMAIL</td>";
    myTable += "<td>PASSWORD</td>";
    myTable += "<td>EDAD</td>";
    "</tr>";

    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td>" + respuesta[i].password + "</td>";       
        myTable += "<td>" + respuesta[i].age + "</td>";
        myTable += "<td> <button onclick='actualizarInformacion(" + respuesta[i].idClient + ")'>Actualizar</button>";
        myTable += "<td> <button onclick='borrar(" + respuesta[i].idClient + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").html(myTable);
}

function guardarInformacion() {
    let var2 = {

        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),

    };

    console.log(var2);
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),

        url: "http://150.136.82.173:8080/api/Client/save",


        success: function (respuesta) {
            console.log(respuesta);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente");
            window.location.reload()

        },

        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("No se guardo correctamente");


        }
    });

}

function actualizarInformacion(idElemento) {
    let myData = {
        idClient: idElemento,
        email: $("#Clemail").val(),
        password: $("#Clpassword").val(),
        name: $("#Clname").val(),
        age: $("#Clage").val(),


    };
    console.log(myData);
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        url: "http://150.136.82.173:8080/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idClient").val("");
            $("#Clemail").val("");
            $("#Clpassword").val("");
            $("#Clname").val("");
            $("#Clage").val("");
            autoInicioCliente();
            alert("se ha Actualizado correctamente Cliente")
        }
    });

}

function borrar(idElemento) {
    let myData = {
        idClient: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    console.log(dataToSend);
    $.ajax({
        url: "http://150.136.82.173:8080/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultado").empty();
            autoInicioCliente();
            alert("Se ha Eliminado.")
        }
    });

}