let promise=new Promise((resolve,reject)=>{
    resolve("Result1")
})

promise
.then(
    new Promise((resolved,reject)=>{
        resolved("result2")

    })
.then(result1=>console.log(result1))
)
 .then(result2=>console.log(result2))
