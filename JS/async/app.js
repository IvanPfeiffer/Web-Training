async function hello(){

} //async returns a promise. 

const sing = async ()=>{
    throw new Error("Error")
    return "LA LA"
}

const login = async (username, password) =>{
    if(!username || !password) throw "missindg credentials"
    if(password === "12334") return "Welcome"
    throw "Invalid Password"
}

login("jahahjz","12334")
.then(msg =>{
    console.log("Logged In!", msg)
})
.catch(err=>{
    console.log("Error", err)
})

//await 
const colorChange= (color,delay) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
};

// colorChange("red", 1000)
// .then(()=> colorChange("orange", 1000))
// .then(()=>colorChange("yellow", 1000))
// .then(()=>colorChange("green", 1000))
// .then(()=>colorChange("blue", 1000))

async function rainbow(){
    await colorChange("red", 1000)
    await colorChange("orange", 1000)
    await colorChange("yellow", 1000)
    await colorChange("green", 1000)
    await colorChange("blue", 1000)
}

const fakeRequest = (url)=>{
    return new Promise((resolve, reject)=>{
        const delay = Math.floor(Math.random()*4500) + 500;
    setTimeout(() =>{
        if(delay > 4000){
            reject("connection Timeout")
        } else {
            resolve(`Here is your fake data from ${url}`)
        }
    }, delay)
    })
}

async function  makeTwoRequests(){
    try{
        let data1 = await fakeRequest("/page1");
        console.log(data1)
        let data2 = await fakeRequest("/page2")
       
        console.log(data2)
    }
    catch(e) {
        console.log("Error catched")
    }
   
};