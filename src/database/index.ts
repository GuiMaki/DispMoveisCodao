import { createConnection } from "typeorm";
import { initialize } from "../initialize";

createConnection().then(() => {
    initialize(); 
});