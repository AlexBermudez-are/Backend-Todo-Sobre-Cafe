import '#Config/env.js';
import {createServer} from 'http'
import mongoose from 'mongoose';
import { expressApp } from './config/express.js';

const createServerHttp = createServer(expressApp)

const connectMongoose = (url) => mongoose.connect(url)

connectMongoose
    ? console.log("congratulations, we are successfully connected to mongoose")
    : console.log("Error, could not connect to mongoose")

const init = async () => {

    await connectMongoose("mongodb+srv://AlexisB:5pfhqVHP89tqLNgt@blogdenotas.gqmxwvg.mongodb.net/?retryWrites=true&w=majority");

    createServerHttp.listen(3080, () => { console.log(`Servidor funcionando en el puerto ${process.env.PORTDB}`) })
}

init()