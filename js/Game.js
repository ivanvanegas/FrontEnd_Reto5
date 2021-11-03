/*function traerInformacion(){
    $.ajax({
        url:"http://150.136.82.173:8080/api/Game/all",
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
        myTable+="<td>"+respuesta[i].developer+"</td>";
        myTable+="<td>"+respuesta[i].year+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>";
        myTable+="<td> <button onclick='actualizarInformacion("+respuesta[i].id+")'>Actualizar</button>";
        myTable+="<td> <button onclick='borrar("+respuesta[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacion(){
    let var2 = {
        name:$("#name").val(),
        developer:$("#developer").val(),
        year:$("#year").val(),
        description:$("#description").val(),
        category:{id: +$("#select-category").val()}
        };
      
        $.ajax({
        url:"http://150.136.82.173:8080/api/Game/save",
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),     
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#developer").val("");
            $("#year").val("");
            $("#description").val("");
            traerInformacion();
            alert("se ha guardado correctamente el juego")
    
        }
        });

}

function actualizarInformacion(idElemento){
    let myData={
        id:idElemento,
        name:$("#name").val(),
        developer:$("#developer").val(),
        year:$("#year").val(),
        description:$("#description").val()

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Game/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#developer").val("");
            $("#year").val("");
            $("#description").val("");
            traerInformacion();
            alert("se ha Actualizado correctamente el juego")
        }
    });

}

function borrar(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.136.82.173:8080/api/Game/"+idElemento,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado el juego")
        }
    });

}
function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://150.136.82.173:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })
}
*/
function autoInicioCategoria(){
    console.log("se esta ejecutando")
    $.ajax({
        url:"http://150.136.82.173:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            let $select = $("#select-category");
            $.each(respuesta, function (id, name) {
                $select.append('<option value='+name.id+'>'+name.name+'</option>');
                console.log("select "+name.id);
            }); 
        }
    
    })
}
//Manejador GET
function traerInformacion() {
    $.ajax({
        url:"http://150.136.82.173:8080/api/Game/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function pintarRespuesta(respuesta){

    let myTable="<table>"
    myTable+="<tr>";
        myTable+="<td>Nombre</td>";
        myTable+="<td>Modelo</td>";
        myTable+="<td>Año</td>";
        myTable+="<td>Descripcion</td>";
        myTable+="<td>Categoria</td>";
    "</tr>";

    for(i=0;i<respuesta.length;i++){
    myTable+="<tr>";
        myTable+="<td>" + respuesta[i].name+"</td>";
        myTable+="<td>" + respuesta[i].developer+"</td>";
        myTable+="<td>" + respuesta[i].year+"</td>";
        myTable+="<td>" + respuesta[i].description+"</td>";
        myTable+="<td>" + respuesta[i].category.name+"</td>";
        myTable+='<td><button class = "botonSkate2" onclick="borrar('+respuesta[i].id+')">Borrar juego!</button></td>';
        myTable+='<td><button class = "botonSkate2" onclick="cargarDatos('+respuesta[i].id+')">Editar juego!</button></td>';
        myTable+='<td><button class = "botonSkate2" onclick="actualizar('+respuesta[i].id+')">Actualizar juego!</button></td>';
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#miLista").html(myTable);
}
//Capturar informacion para Actualizar
function cargarDatos(id) {
    $.ajax({
        dataType: 'json',
        url:"http://150.136.82.173:8080/api/Game/"+id,
        type: 'GET',

        success: function (respuesta) {
            console.log(respuesta);
            var item = respuesta;

            $("#id").val(item.id);
            $("#name2").val(item.name);
            $("#developer").val(item.developer);
            $("#year").val(item.year);
            $("#description2").val(item.description);

        },

        error: function (jqXHR, textStatus, errorThrown) {

        }
    });
}

function agregar() {

    if($("#name2").val().length == 0 || $("#developer").val().length == 0 || $("#year").val().length == 0 || $("#description2").val().length == 0){
       alert("Todos los campos son obligatorios")
    }else{

            let elemento = {
                name: $("#name2").val(),
                developer: $("#developer").val(),
                year: $("#year").val(),
                description: $("#description2").val(),
                category:{id: +$("#select-category").val()},
            }

            let dataToSend = JSON.stringify(elemento);
            console.log(elemento);

            $.ajax({
                type: "POST",
                contentType: "application/json",
                url:"http://150.136.82.173:8080/api/Game/save",
                data: dataToSend,
                datatype: 'json',

                success: function (respuesta) {
                    console.log(respuesta);
                    console.log("Se guardo Correctamente");
                    //Limpiar Campos
                    $("#resultado2").empty();
                    $("#name2").val("");
                    $("#developer").val("");
                    $("#year").val("");
                    $("#description2").val("");
                    

                    //Listar Tabla

                    alert("Se ha guardado Correctamente!")
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert("No se Guardo Correctamente")
                }
            });
    }
}
//Manejador DELETE
function borrar(idElemento) {
    var elemento = {
        id: idElemento
    }

    var dataToSend = JSON.stringify(elemento);
console.log(dataToSend);
    $.ajax(
        {
            dataType: 'json',
            data: dataToSend,
            url:"http://150.136.82.173:8080/api/Game/"+idElemento,
            type: 'DELETE',
            contentType: "application/JSON",
            success: function (respuesta) {
                console.log(respuesta);
                $("#miLista").empty();

                alert("se ha Eliminado Correctamente!")
            },

            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se Elimino Correctamente!")
            }
        });
}

//Manejador PUT
function actualizar(idElemento) {
    
    if($("#name2").val().length == 0 || $("#developer").val().length == 0 || $("#year").val().length == 0 || $("#description2").val().length == 0){
        alert("Todos los campos deben estar llenos")
    }else{
        let elemento = {
            id: idElemento,
            name: $("#name2").val(),
            developer: $("#developer").val(),
            year: $("#year").val(),
            description: $("#description2").val(),
            category:{id: +$("#select-category").val()},
        }

        console.log(elemento);
        let dataToSend = JSON.stringify(elemento);

        $.ajax({
            datatype: 'json',
            data: dataToSend,
            contentType: "application/JSON",
            url:"http://150.136.82.173:8080/api/Game/update",
            type: "PUT",

            success: function (respuesta) {
                console.log(respuesta);
                $("#miLista").empty();
                listarGame();
                alert("se ha Actualizado Correctamente!")

                //Limpiar Campos
                $("#resultado2").empty();
                $("#id").val("");
                $("#name2").val("");
                $("#developer").val("");
                $("#year").val("");
                $("#description2").val("");


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("No se Actualizo Correctamente!")
            }
        });
    }
}
