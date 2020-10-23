/*
____  __.                .___                                  
|    |/ _|____ _______  __| _/____   ___________________  ____  
|      < \__  \\_  __ \/ __ |/ __ \ /  ___/\____ \_  __ \/  _ \ 
|    |  \ / __ \|  | \/ /_/ \  ___/ \___ \ |  |_> >  | \(  <_> )
|____|__ (____  /__|  \____ |\___  >____  >|   __/|__|   \____/ 
        \/    \/           \/    \/     \/ |__|                 
*/
const express = require("express");
const generator = require("generate-password");
const krds = express();

//Modul kullandim
krds.get("/api/sifre-olustur", function(req,res){
var password = generator.generate({
    length: 10,//sifrenin uzunlugu
    numbers: true //rakamlardan oluşumu
   //not:true aktiv demekdir
});
let result = [];
//sayfada random sifreyi gosterelim
res.json(password);
//olusturulmus sifreyi konsola gonderelim
console.log("======Sifre Olusturuldu====");
console.log(password);
console.log("=======kardespro.cf==========");
});
/*
____  __.                .___                                  
|    |/ _|____ _______  __| _/____   ___________________  ____  
|      < \__  \\_  __ \/ __ |/ __ \ /  ___/\____ \_  __ \/  _ \ 
|    |  \ / __ \|  | \/ /_/ \  ___/ \___ \ |  |_> >  | \(  <_> )
|____|__ (____  /__|  \____ |\___  >____  >|   __/|__|   \____/ 
        \/    \/           \/    \/     \/ |__|                 
*/
app.listen(6060);

/*
____  __.                .___                                  
|    |/ _|____ _______  __| _/____   ___________________  ____  
|      < \__  \\_  __ \/ __ |/ __ \ /  ___/\____ \_  __ \/  _ \ 
|    |  \ / __ \|  | \/ /_/ \  ___/ \___ \ |  |_> >  | \(  <_> )
|____|__ (____  /__|  \____ |\___  >____  >|   __/|__|   \____/ 
        \/    \/           \/    \/     \/ |__|                 

*/

