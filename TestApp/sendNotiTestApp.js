
var admin = require("firebase-admin");

var serviceAccount = require("./push-notification-10227-firebase-adminsdk-3an8i-35fc423625.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://push-notification-10227.firebaseio.com"
});

const registrationTokens = [
    'cfCYqRRo278:APA91bEzT76WmlAyAUvCEAVUgO-c2dy4lEktVOJSCH8PxlB2cx1SPCV22h2ZIOYwBe5D9iVMKKyhu07A8x8ETaz7W1-NZMWDKEjeeqOjDkca-vTsoSIDvQL4h8pN58KDXLPfizSqPevW',
    'd616kxpfdy4:APA91bHOj3ZpiJI69vS4DubM3z8KB68YE87a--8_TCWilOz18qMVK8pjbxvkYCrCDzfokzdBFyVD7bSPju4-cX-HuWsmYdhsKIoZ6YXpMNgtJ8OV4nu2mPSs1UQ37vgo0ED4Vejyk7g9',
    'ccyO_DXLuo0:APA91bFSevPOH0r8bWc5luFmNpRX6yMMXeKva0FqfLhBk4RueQ4PDDH9B5xCJ5ltTM7I8hpzfbc5OO-vEuW--1u4W6Wp3av3wjNkopEB4qqAnkyL-Q2-TMXvXQVCTECKKWayKleL5aOi',
    // 'coII67rEDOA:APA91bEwe3XqEYj1GpcVaZ1oJK2MwFLbq1oV30xIgw1yQe8pFatD6eURkSFhaKg0y4D1bIk9RneyPev8QL5q7tVjGUSQlEprmk8daX6ZXEvyQC7RmJwUZfAuH4HwZUFwt9pW-zozNbOq'
  ];

var payload ={
    notification: {
        title: "Push App",
        body: "Notifications"
    },
    tokens:registrationTokens
};

admin.messaging().sendMulticast(payload).then((response) => {
    console.log(response.successCount+' Messages were sent successfully')
    process.exit()
})

// admin.messaging().sendToDevice('d616kxpfdy4:APA91bHOj3ZpiJI69vS4DubM3z8KB68YE87a--8_TCWilOz18qMVK8pjbxvkYCrCDzfokzdBFyVD7bSPju4-cX-HuWsmYdhsKIoZ6YXpMNgtJ8OV4nu2mPSs1UQ37vgo0ED4Vejyk7g9',payload).then(
//     function(response){
//         console.log("success", response)
//     }
// ).catch(function(err){
//     console.log("error", error)
// })