import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import config from './config.json';
import {createConnection, Connection} from "typeorm";
// Confix Test Evimemont
export const typeOrm: any = String(config.development.typeorm);
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: typeOrm,
    host: process.env.RDS_HOSTNAME || config.development.host_postgresql,
    port: config.development.port_postgresql,
    username: process.env.RDS_USERNAME || config.development.username,
    password: process.env.RDS_PASSWORD || config.development.password,
    database: process.env.RDS_DB_NAME || config.development.database,
    entities: ["dist/**/*.entity.{ts,js}"],
    synchronize: config.development.synchronize,
    ssl: config.development.ssl,

}




// Config ProductTion
// export const typeOrm: any = String(config.production.typeorm);
// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type: typeOrm,
//     host: process.env.RDS_HOSTNAME || config.production.host_postgresql,
//     port: config.production.port_postgresql,
//     username: process.env.RDS_USERNAME || config.production.username,
//     password: process.env.RDS_PASSWORD || config.production.password,
//     database: process.env.RDS_DB_NAME || config.production.database,
//     entities: ["dist/**/*.entity.{ts,js}"],
//     synchronize: config.production.synchronize,
//     ssl: config.production.ssl,

// }



// Config ProductTion SQL Server
// export const typeOrm: any = String(config.productionSql.typeorm);
// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type: typeOrm,
//     host: process.env.RDS_HOSTNAME || config.production.host_postgresql,
//     port: config.production.port_postgresql,
//     username: process.env.RDS_USERNAME || config.production.username,
//     password: process.env.RDS_PASSWORD || config.production.password,
//     database: process.env.RDS_DB_NAME || config.production.database,
//     entities: ["dist/**/*.entity.{ts,js}"],
//     synchronize: config.production.synchronize,
//     logging: true,
    
//     options: {
//         useUTC: true,
//         encrypt : true,

//     },
    
//     ssl: config.production.ssl,

// }




