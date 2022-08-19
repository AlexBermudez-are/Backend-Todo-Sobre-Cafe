import '#Config/env.js';
import {createServer} from 'http'
import mongoose from 'mongoose';
import { expressApp } from './config/express.js';

const createServerHttp = createServer(expressApp)

const connectMongoose = (url) => mongoose.createConnection("mongodb+srv://AlexisB:5pfhqVHP89tqLNgt@blogdenotas.gqmxwvg.mongodb.net/?retryWrites=true&w=majority")

connectMongoose
    ? console.log("congratulations, we are successfully connected to mongoose")
    : console.log("Error, could not connect to mongoose")

const init = async () => {

    await connectMongoose(process.env.MONGODB_URL);

    createServerHttp.listen(process.env.PORTDB, () => { console.log("Servidor funcionando") })
}

init()