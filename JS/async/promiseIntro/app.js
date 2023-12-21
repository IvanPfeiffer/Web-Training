const fakeRequestCallback = (url,success, failure)=>{
    const delay = Math.floor(Math.random()*4500) + 500;
    setTimeout(() =>{
        if(delay > 4000){
            failure("connection Timeout")
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url)=>{
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

// fakeRequestCallback("books.com",()=>{
//     console.log("it worked!")
// },()=>{
//     console.log("It failed")
// })

// fakeRequestPromise("book.com").then(()=>{
//     console.log("it worked!")
//     fakeRequestPromise("book.com/page2")
//     .then(()=>{
//         console.log("it worked! (2)")
//     }).catch(()=>{
//         console.log("It failed (2)")
//     })
// }).catch(()=>{
//     console.log("It failed :(")
// })

fakeRequestPromise("yelp.com/api/cofee")
.then(()=>{
    console.log("It Worked! ")
    return fakeRequestPromise("yelp.com/api/cofee/page2")
})
.then(()=>{
    console.log("It worked (page 2)")
    return fakeRequestPromise("yelp.com/api/cofee/page3")
})
.then(()=>{
    console.log("It worked (page 3)")
})
.catch(()=>{
    console.log("A request failed")
})