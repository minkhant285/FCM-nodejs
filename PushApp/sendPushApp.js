
var admin = require("firebase-admin");

var serviceAccount = require("./Push-App-sdk.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://push-app-79c4e.firebaseio.com"
  });

const registrationTokens = [
    'eQJrpzL2n_4:APA91bGa6lflLrFsFAqxoCCt7NLKIjAvHLoRXiDKVrfcB7Zw0RF63exenNGysKlRmfQMf8gcPdt0JZVz_sIW2dCjVHI65XwCIzxvOu-7w4aTpxot7xAe0Yln54F6ry_-Oiih299eXo67',
    'ed8ffLHtuVY:APA91bFu3iECQF_x41ygLBj4wtRHusaA6QBdrWEN8wmVcH_eZ0USCftbzwxbKOJa74HYIfUDCv1vw4TrtqEdEyu3bW-3-bZlf6lyPQD_3wgDwPBzSxKC2ExRCpDJe26k4GcyKNZ9CSGX'
  ];

var payload ={
    notification: {
        title: "Push App",
        body: "Emergency Altered",
    },
    data: {
      username:"minkhant",
      location:"122433,343",
      category:"fire",
      incident:"in",
      notify: "th"
    },
    tokens:registrationTokens
};

admin.messaging().sendMulticast(payload).then((response) => {
    console.log(response.successCount+' Messages were sent successfully')
    process.exit()
})

// admin.messaging().sendToDevice(registrationTokens[0],payload).then(
//     function(response){
//         console.log("success", response)
//     }
// ).catch(function(err){
//     console.log("error", error)
// })
