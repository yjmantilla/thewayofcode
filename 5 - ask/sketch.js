var v1 = 5;
var v2 = "Hello";
var v3 = 'hello';
var hoyEsSabado = true;
var hoyEsDomingo = false;

if(hoyEsDomingo){
    alert("hoy es domingo");
}

if(hoyEsSabado){
    alert("hoy es sabado");
}

if (hoyEsDomingo || hoyEsSabado){
    alert("hoy es domingo o sabado"); 
}

if (hoyEsDomingo && hoyEsSabado){
    alert("hoy es domingo y sabado"); 
}