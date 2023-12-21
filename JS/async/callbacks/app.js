// console.log("Sending request to server");

// setTimeout(()=>{
//     console.log("request sent")
// }, 3000)

// console.log("end of file")


// setTimeout(()=>{
//     document.body.style.backgroundColor = "red"
//     setTimeout(()=>{
//         document.body.style.backgroundColor = "orange"
//         setTimeout(()=>{
//             document.body.style.backgroundColor = "yellow"
//             setTimeout(()=>{
//                 document.body.style.backgroundColor = "green"
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor = "blue"
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

const colorChange = (newColor, delay, doNext) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor
        doNext && doNext();
    },delay)
};

colorChange("olive", 3000, ()=>{
    colorChange("orange", 3000, ()=>{
        colorChange("blue", 3000)
    })
})

searchMoviesAPI("amadeus", ()=>{
    saveToMyDB(movies, ()=>{
        //If it works run this
    }, ()=>{
        //if it fails run this
    })
})