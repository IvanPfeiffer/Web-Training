setTimeout(()=>{
    console.log("hello")
},3000)

const id = setInterval(()=>{
    console.log(Math.random())
},2000)

clearInterval(id); //This is to stop the process. 