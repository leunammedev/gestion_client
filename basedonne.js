
function afficherDate() 
{
    let cejour = new Date();
    let format={weekday:"long", year:"numeric", month:"long", day:"2-digit"}
    let date = cejour.toLocaleDateString("fr",format)
    let heure = ("0" + cejour.getHours()).slice(-2) + "h" + ("0" + cejour.getMinutes()).slice(-2) + "m" + ("0" + cejour.getSeconds()).slice(-2) +"s";
    let dateheure = date + " / " + heure;
    document.getElementById('date').innerHTML = dateheure;
}
setInterval(afficherDate, 1000);

// function dateheure(){
//     var d = new Date();
// var date = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
// var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
// var fullDate = date+' / '+hours;
// document.getElementById('date').innerHTML = fullDate;
// }
// setInterval(dateheure, 1000);

