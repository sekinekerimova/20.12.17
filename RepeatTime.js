var eded1=Number(prompt("ededi daxil edin"));
var reqem=0;
var say=0;
while(eded1>0){var cem=0;
    var eded2=eded1;

while(eded2>0) {
    reqem=eded2%10;
    cem=cem+reqem;
    eded2=parseInt( eded2/10);
    
}
eded1=eded1-cem;
say++;
console.log( eded1,cem,say);

}
console.log("repeatTIME="+say);






















