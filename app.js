const mongoose = require("mongoose");

async function main(){
    mongoose.connect(process.env.ATLASDB_URL);
}

main().then(()=>{
    console.log("successful connection with db");
}).catch((err)=>{
    console.log(err);
});

// no of teachers needed each day