const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Comment, User } = require('../models');

// get all posts
router.get('/', (req, res) => {
    console.log(req.session);

    Post.findAll({
        attributes: [
            
        ]
    })
});