const express = require('express')

const {site_get,site_post,site_patch, site_delete ,upload_File} = require('../controller/site.management.controller')
const uploads = require('../middleware/site.uploads')





const site_route = express.Router()

// this is to get the call the data
site_route.get('/api/site/:id',site_get)



// this is post the data of address in db
site_route.post('/api/site/',uploads.single('image'),site_post)// in uploads.single ==>siteImage is must be written in the form as key



// this is for patch the data from the db
site_route.patch('/api/site/:id',site_patch)


// this  is for deleteing the data from the db
site_route.delete('/api/site/:id',site_delete)


module.exports = site_route

