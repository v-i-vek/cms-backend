const express = require('express')

const {site_get,site_post,site_patch, site_delete ,upload_File,site_allGet} = require('../controller/site.management.controller')
const uploads = require('../middleware/site.uploads')

const site_route = express.Router()

site_route.get('/getSite/:id',site_get)

site_route.get('/getAllDetails',site_allGet)

site_route.post('/postSite/',uploads.single('image'),site_post)// in uploads.single ==>siteImage is must be written in the form as key

site_route.patch('/updateSite/:id',site_patch)

site_route.delete('/deleteSite/:id',site_delete)


module.exports = {site_route}

