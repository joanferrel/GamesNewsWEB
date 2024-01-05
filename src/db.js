const { Sequelize, DataTypes} = require('sequelize');
require("dotenv").config();


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const UserModel = require("./models/UserModel");
const PostsModel = require("./models/PostsModel");



// Option 1: Passing a connection URI

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{logging: false}
);


UserModel(sequelize);
PostsModel(sequelize);

const {User, Post}= sequelize.models;

User.hasMany(Post);


module.exports={
    ...sequelize.models,
    conn:sequelize
}