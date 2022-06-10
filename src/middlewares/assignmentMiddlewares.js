// const requestIp = require('request-ip');


// // const mid1= function ( req, res, next) {
// //     console.log("Hi I am a middleware named Mid1")
// //     // logic
// //     let loggedIn = false

// //     if (loggedIn== true) { 
// //         console.log( "OK LOGGED IS IS TRUE NOW")
// //         next ()
// //     }
// //     else {
// //         res.send ("Please login or register")
// //     }
// //     { timestamps: true };
// // }

// // const appuse=(function(req, res) {
// //     var ipInfo = getIP(req);
// //     console.log(ipInfo);
// //     // { clientIp: '127.0.0.1', clientIpRoutable: false }
    
// // });


// const currentdateTimes =function(req, res, next){
//     var dateTimes = new Date();
//     // console.log(dateTimes)
//     res.send({dateTimes})
//     next();
// }

// // inside middleware handler
// const ipMiddleware = function(req, res, next) {
//     const clientIp = requestIp.getClientIp(req); // on localhost > 127.0.0.1
//     // console.log(clientIp)
//     res.send({clientIp})
//     next();
// }


// // const assinmentMW =function(req, res, next){
// //     let datetime = currentdate.getDate() +" "
// //                 +   (currentdate.getMonth()+1) + " "
// //                 +   currentdate.getFullYear() + " "
// //                 +   currentdate.getHours() + " "
// //                 +   currentdate.getMinute() + " "
// //                 +   currentdate.getSecond() + ""
// //     let ipy =req.ip

// //     console.log(`${datetime} ${ipy}`)
// //     next()
// // }




// module.exports.ipMiddleware = ipMiddleware
// module.exports.currentdateTimes = currentdateTimes