const express = require('express')

const {siteGet,sitePost,sitePatch, siteDelete ,upload_File,siteAllGet,flatFalse} = require('../controller/site.management.controller')
const uploads = require('../middleware/site.uploads')

const siteRoute = express.Router()

siteRoute.get('/getSite/:id',siteGet)
siteRoute.get('/getAllDetails',siteAllGet)
siteRoute.post('/postSite',uploads.single('image'),sitePost)// in uploads.single ==>siteImage is must be written in the form as key
siteRoute.patch('/updateSite/:id',sitePatch)
siteRoute.delete('/deleteSite/:id',siteDelete)

siteRoute.get('/getFalse',flatFalse)



module.exports = siteRoute



