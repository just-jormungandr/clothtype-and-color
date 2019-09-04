/* 
The questions are: <br>
  Create switch case expression, under the conditions below:<br>
    - if clothes type is 'GAUN' and the color is 'MERAH', print 'SAYA SUKA GAUN MERAH'
    - if clothes type is 'KAOS' and the color is 'BIRU', print 'SAYA SUKA KAOS BIRU'
    - if clothes type is 'KEMEJA' and the color is 'KUNING', print 'SAYA SUKA KEMEJA KUNING'
    - and if the conditons other than the above, print 'SAYA SUKANYA PAKAI BAJU KEBAYA'
*/
    
    
let clothType = "KEMEJA"
let color = "MERAH"

switch(true){
  case(clothType === "GAUN" && color === "MERAH"):
    console.log("SAYA SUKA GAUN MERAH");
    break;
  case (clothType === "KAOS" && color === "BIRU"):
    console.log("SAYA SUKA KAOS BIRU");
    break;
  case (clothType === "KEMEJA" && color === "KUNING"):
    console.log("SAYA KEMEJA KUNING");
    break;
  default:
    console.log("SAYA SUKANYA PAKAI BAJU KEBAYA")
}
