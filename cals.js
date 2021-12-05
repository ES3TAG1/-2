function Calculate()
 {
 var a = Number(document.figure.a.value);
 var b = Number(document.figure.b.value);
 var c = Number(document.figure.c.value);
 var d = b * b - 4 * a * c;


if(!isNaN(a+b+c)){
 if( d < 0)
 {
    alert ("Дискриминант меньше нуля");
 }
 else
 {
 document.forms.figure.dis.value = d;
 document.forms.figure.x1.value = (-b+Math.sqrt(d))/(2*a);
 document.forms.figure.x2.value = (-b-Math.sqrt(d))/(2*a);
 }
}

 }