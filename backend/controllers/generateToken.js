import jwt from 'jsonwebtoken';


export const generateToken = (req,res)=>{


    try{
        const {email,password} = req.body;

        if(email!=="test@gmail.com" && password !=="123456"){
            return res.status(401).json({message:"Invalid users"})
        }


        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES
});

      res.status(200).json({message:"login succfully done",token})



    }
    catch(error){


        console.log("Soemthing erro",error);
        

    }

}