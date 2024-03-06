// number
// string
// boolean
// null
// undefined
// any <- typeScriptï¿½ï¿½ï¿½ï¿½ ï¿½ß°ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½ Å¸ï¿½ï¿½ (Å¸ï¿½Ô¸ï¿½ï¿½ï¿½ ï¿½ï¿½ï¿½Æµï¿½ ï¿½ï¿½ï¿½Î¸ï¿½ ï¿½ï¿½ï¿½ï¿½Ï´ï¿? Å¸ï¿½ï¿½

// º¯¼ö
let a:number = 3;
a = 4;

//  any type
let c:any = 4;
c= "asd";

// º¹¼ö µ¥ÀÌÅÍ Å¸ÀÔ
let d : number | string = "asddsa" + 1;
d = 3;

// ¹è¿­
let e:string[] = ['apple','mongo'];

// Å¬·¡½º
//           ¸Å°³º¯¼ö1 , ¸Å°³º¯¼ö2 , return µ¥ÀÌÅÍ Å¸ÀÔ
function addNumber(a:number,b:number):number{
    return a + b
}
