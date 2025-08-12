

export const validateLogin = async(req,res,next)=>{


//console.log(req);

const {name,email,password} = req.body;

if(!name||!email || !password){
    return res.status(400).json({meeage:"Email and password are requiers"})
}

next();

}



