"use strict";

import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
// import enVariables from '../config/config.json';
import { fileURLToPath } from "url";
import db from "../util/database.js";

import { readFile } from "fs/promises";
import { createRequire } from "node:module";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const example = require("../config/config.json");
// const json = JSON.parse(await readFile(new URL('../../config.json', import.meta.url)));

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = example[env];
// const db = {};
console.log("DEBUG : ", config);
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    // eslint-disable-next-line global-require,import/no-dynamic-require
    // const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
    const model = sequelize.define(path.join(__dirname, file));
    console.log("MODEL : ", model);
    console.log(`\n \x1b[31m DEBUG : MODEL ${model} \x1b[0m \n`);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log(Object.keys(db))
export default db;
