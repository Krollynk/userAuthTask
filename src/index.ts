import {ENV} from './utilities/env';
import {AppDataSource} from "./config/data-source";
import app from './app';

AppDataSource.initialize().then(
    () => {
        console.log("Conexión con la base de datos establecida");
        app.listen(ENV.PORT, ()=>{
            console.log("Servidor escuchando en puerto: ", ENV.PORT);
        });
    }
).catch(
    (error) => {
        console.error("error al conectar la base de datos: ", error.message);
    }
)

