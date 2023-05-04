const { siteMangementModel } = require("../models/site.management");

// this is the get Method for reading the data for only one user
const siteGet = async (req, res) => {
  const result = await siteMangementModel.findOne(req.params.email);
  res.status(201).send(result);
};
// getting all the data
const siteAllGet = async (req, res) => {
  try {
    const Flat = await siteMangementModel.find();
    Flat.forEach((obj) => {
      obj.flatDetails = obj.flatDetails.filter((data) => {
        return data.isBought === false;
      });
    });
    return res.status(201).send(Flat);
  } catch (error) {
    return res.status(401).send(error);
  }
};
// this is for update  the site using the address id
const sitePatch = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await siteMangementModel.findById({ _id: id });
    noOfFloor = req.body.noOfFloor;
    noOfFlatPerFloor = req.body.noOfFlatPerFloor;
    totalFlat = noOfFloor * noOfFlatPerFloor;

    let flats = [];
    let numberOfFlats = countFlat(noOfFloor, noOfFlatPerFloor, flats);

    let image;
    if (req.file) {
      image = await req.file.path;
     
      console.log(image)// this is for checking the valid name and giving the path
    }
    console.log(req.body)
    try {
      const data = req.body
      if(req.file){
      data.brandLogo=req.file.path
      }
      const update = await siteMangementModel.findByIdAndUpdate(id,data,{new:true});
      console.log("update",update)
      res.status(201).send({message:"successfully"});
    } catch (error) {
      console.log(error);
    }
  
    
  } catch (error) {
    
    res.status(401).send({ message: error });
  }
};
// this method is to delete the data from the db
const siteDelete = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteAddress = await siteMangementModel.findByIdAndDelete({
      _id: id,
    });
    return res.status(201).send(deleteAddress);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};
// this is for posting the data in db through post method
const sitePost = async (req, res) => {
  try {
    noOfFloor = req.body.noOfFloor;
    noOfFlatPerFloor = req.body.noOfFlatPerFloor;
    totalFlat = noOfFloor * noOfFlatPerFloor;

    let flats = [];
    let numberOfFlats = countFlat(noOfFloor, noOfFlatPerFloor, flats);
    console.log(numberOfFlats);

    const siteManage = new siteMangementModel({
      siteName: req.body.siteName,
      category: req.body.category,
      location: req.body.location,
      noOfFloor: req.body.noOfFloor,
      noOfFlatPerFloor: req.body.noOfFlatPerFloor,
      totalFlat: totalFlat,
      flatDetails: numberOfFlats,
    });

    if (req.file) {
      siteManage.brandLogo = req.file.path; // this is for checking the valid name and giving the path
    }
    const saved = await siteManage.save();
    return res.status(200).send(saved);
  } catch (error) {
    return res.status(401).send(error.message);
  }
};





// function for giving the size of array using the below funciton with spwecific field
function countFlat(noOfFloor, noOfFlatPerFloor, flats) {
  let temp = 100;
  for (let i = 1; i <= noOfFloor; i++) {
    let count = temp;
    for (let j = 1; j <= noOfFlatPerFloor; j++) {
      count++;
      let flat = new Object();
      (flat.flatNo = count), (flat.userId = null), (flat.isBought = false);
      flats.push(flat);
    }
    temp = 0;
    temp = (i + 1) * 100;
  }
  return flats;
}

module.exports = { sitePost, siteGet, sitePatch, siteDelete, siteAllGet };
