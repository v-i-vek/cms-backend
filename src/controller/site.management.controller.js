const site_mangement_Model = require('../model/site.management')
const multer = require('multer')





// this is the get Method for reading the data
const site_get = async (req, res) => {

    const result = await site_mangement_Model.findById(req.params.id)
    res.send(result)
    console.log("site api is called")
}












// this is for update  the site using the address id
const site_patch = async (req, res) => {

    try {
        const id = req.params.id
        const result = await site_mangement_Model.findById({ _id: id })
        const update = await result.updateOne({


            brand_logo: req.body.brand_logo,
            name: req.body.name,
            site_id: req.body.id,
            location: req.body.location,

        })
        console.log(update)
        res.status(201).send('successful')

    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }

}







// this method is to delete the data from the db
const site_delete = async (req, res) => {
    try {
        const id = req.params.id
        const DeleteAddress = await site_mangement_Model.findByIdAndDelete({ _id: id })
        console.log(DeleteAddress)
        res.send("Deleted")
    } catch (error) {
        console.log(error)
    }
}





// this is for posting the data in db through post method
const site_post = async (req, res) => {

    // the heirechy of storing imagge   
    // Brand_logo,
    // Name,
    // Site_id,
    // location

    try {
        const site_manage = new site_mangement_Model({

           
            name: req.body.name,
            // site_id: req.body.id,
            location: req.body.location,

        })
        console.log("before saving")
        console.log(req.file)
        if(req.file){
            console.log("coming here")
            site_manage.brand_logo = req.file.path// this is for checking the valid name and giving the path
        }
        const saved = await site_manage.save();
        console.log(saved)
        return res.status(200).send("successful")

    } catch (error) {
        console.log(error)
    }
}






module.exports = { site_post, site_get, site_patch, site_delete, }