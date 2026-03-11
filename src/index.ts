import { getConfig } from "./config.js";
import { health } from "./health.js";

const config = getConfig();
console.log(health(config.serviceName));
