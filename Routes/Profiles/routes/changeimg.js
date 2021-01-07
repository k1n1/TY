const jwt = require("jsonwebtoken");
const router = require("express").Router();
const tokenvetifying = require("../../../token");
const Auth = require("../../../DataBase/Auth/Auth");
const multer = require('multer');
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'D:\\Projects\\Backend\\media\\profiles');
    },
    filename : function(req, file, cb){
      var imageext = file.mimetype
      imageext = imageext.split('/')
      cb(null, req.user.id + '.' + imageext[1]);
    }
  })
  
const uploadprofilefolder = multer({storage : storage})

router.post("/", tokenvetifying, uploadprofilefolder.single("file"), (req, res)=>{
    Auth.updateOne({email:req.user.email}, {img:req.file.filename})
    .then((data)=>{
        Auth.findOne({email:req.user.email})
        .then((data)=>{
            const token = jwt.sign(
                {
                    email: data.email,
                    id: data._id,
                    user: data.username,
                    displayname : data.displayname,
                    img : data.img
                },
                process.env.JWT_TOKEN
            );
            res.json({
                img:req.file.filename,
                token : token
            })
        })
        .catch((err)=>{
            console.log(err);
            res.json({
                message:"Somthing Got Wrong"
            })
        })
    })
    .catch((err)=>{
        res.json({
            message:"Somthing Got Wrong"
        })
    })
    
    
})



module.exports = router