import express from "express";
import morgan from "morgan";
import { connectToDatabase } from "./utils/db";
import router from "./utils/router";


async function main(){
    await connectToDatabase();

    const server = express();
    
    server.use(morgan('tiny'));
    
    server.use('/', router);
    
    server.listen(8080, () => console.log("server listening on port 8080"));
}


main().catch(console.error)