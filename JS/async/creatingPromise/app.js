const fakeRequest = (url) =>{
    return new Promise((resolve, reject)=>{
        const rand = Math.random()
        setTimeout(()=>{
            if(rand< 0.7){
                resolve("Your fake data here")
            }
           reject("Request failed")
        },1000)
    })
}

fakeRequest("hola").then((data)=>{
    console.log("All done")
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})

const colorChange= (color,delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
};

colorChange("red", 1000)
.then(()=> colorChange("orange", 1000))
.then(()=>colorChange("yellow", 1000))
.then(()=>colorChange("green", 1000))
.then(()=>colorChange("blue", 1000))