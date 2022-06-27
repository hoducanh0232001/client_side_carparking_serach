import { useQRCode } from 'next-qrcode';

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

    export function CreateQrCode() {
        const { Image } = useQRCode();
      
        return (
          <Image
            text={'https://github.com/bunlong/next-qrcode'}
            options={{
              type: 'image/jpeg',
              quality: 0.3,
              level: 'M',
              margin: 3,
              scale: 3,
              width: 20,
              color: {
                dark: '#010599FF',
                light: '#FFBF60FF',
              },
            }}
          />
        );
      }

// export function CreateQrCode() {
//     const { Canvas } = useQRCode();
  
//     return (
//       <Canvas
//         text={'https://github.com/bunlong/next-qrcode'}
//         options={{
//           type: 'image/jpeg',
//           quality: 0.3,
//           level: 'M',
//           margin: 3,
//           scale: 4,
//           width: 200,
//           color: {
//             dark: '#010599FF',
//             light: '#FFBF60FF',
//           },
//         }}
//       />
//     );
//   }
//  export function printThis() {

        // var content = "Your contents";
    
        // $('<iframe>', {
        //     name : 'myiframe',
        //     id   : 'printFrame',
        //     style: 'display:none'
        // })
        // .appendTo('body')
        // .contents().find('body')
        // .append(content);
    
        // setTimeout(() => { 
        //     window.frames['myiframe'].focus();
        //     window.frames['myiframe'].print(); 
        //     var frame = document.getElementById("printFrame");
        //     frame.parentNode.removeChild(frame);
        // }, 200); 
    
    // }
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