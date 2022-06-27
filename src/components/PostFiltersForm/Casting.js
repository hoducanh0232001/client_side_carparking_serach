export function convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert timestamp to ms
        yyyy = d.getFullYear(),
        mm = ('0' + (d.getMonth() + 1)).slice(-2), 
        dd = ('0' + d.getDate()).slice(-2),        
        hh = d.getHours(),
        h = hh,
        min = ('0' + d.getMinutes()).slice(-2),   
        ampm = 'AM',
        time;
    
    // if (hh > 12) {`
    //     h = hh - 12;
    //     ampm = 'PM';
    // } else if (hh === 12) {
    //     h = 12;
    //     ampm = 'PM';
    // } else if (hh == 0) {
    //     h = 12;
    // }
    
    // ie: 2014-03-24, 3:00 PM
    time = yyyy + '-' + mm + '-' + dd + ', ' + hh + ':' + min + ' ' //+ ampm // edit time to 24h format
    return time;
    }
// export function convertVehicle(vehicle){
//      new String(vehicle);
//     if(vehicle == 3){
//         console.log("Xe moto 2 banh");
//     }
//     else if(vehicle == 4){
//         console.log("Xe oto");
//     }else if(vehicle == 5){
//         console.log("Xe oto dien");
//     }
//     return vehicle;
// }