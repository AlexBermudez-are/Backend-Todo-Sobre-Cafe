import '#Config/env.js'; // Importa la configuracion de .Env

import { createServerHttp } from '#Config/Http.js';


const init = async () => {

    createServerHttp.listen(process.env.PORTDB, () => { console.log("Servidor funcionando") })
}

init()