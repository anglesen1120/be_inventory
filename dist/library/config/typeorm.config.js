"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("./config.json"));
exports.typeOrm = String(config_json_1.default.development.typeorm);
exports.typeOrmConfig = {
    type: exports.typeOrm,
    host: process.env.RDS_HOSTNAME || config_json_1.default.development.host_postgresql,
    port: config_json_1.default.development.port_postgresql,
    username: process.env.RDS_USERNAME || config_json_1.default.development.username,
    password: process.env.RDS_PASSWORD || config_json_1.default.development.password,
    database: process.env.RDS_DB_NAME || config_json_1.default.development.database,
    entities: ["dist/**/*.entity.{ts,js}"],
    synchronize: config_json_1.default.development.synchronize,
    ssl: config_json_1.default.development.ssl,
};
//# sourceMappingURL=typeorm.config.js.map