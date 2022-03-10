import express from "express";
import morgan from "morgan";
import { connectToDatabase } from "./utils/db";
import router from "./utils/router";

const unused = "x"

async function main(){
    await connectToDatabase();

    const server = express();
    
    server.use(morgan('tiny'));
    
    server.use('/', router);
    
    server.listen(8000, () => console.log("server listening on port 8000"));
}


main().catch(console.error)