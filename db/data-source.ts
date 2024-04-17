import { DataSource, DataSourceOptions } from 'typeorm';

/**
 * Live DB SetUp
 */

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'coldsg-mysql-db.csospewx4kb0.ap-south-1.rds.amazonaws.com',
  port: 3306,
  username: 'admin',
  password: 'admin123',
  database: 'cold_live_db',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  // synchronize: true,
};

/**
 * Local DB setup
 */

// export const dataSourceOptions: DataSourceOptions = {
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'password',
//     database: 'cold_local_db',
//     entities: ['dist/**/*.entity.js'],
//     migrations: ['dist/db/migrations/*.js'],
//     // synchronize: true,
//   };

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
