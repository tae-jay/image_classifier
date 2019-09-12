   let net;

async function app(){
    console.log("Loading Mobilenet...");

//load model
net=await mobilenet.load();
console.log("sucessfully loaded..");

//make predicton
const imgEl= document.getElementById("img");
const result=await net.classify(imgEl);
console.log(result);
}


app();