module.exports =(req,res,next)=>{
    if (req.files == null || req.body.name == null || req.body.price == null
    ) {
    return res.redirect('/products/create')
    }
    next()
    };