import bcrypt from 'bcryptjs';
import newregister from '../models/register_model.js';

// posting data
export const registernew = async ( r, res ) => {

    //console.log(r.body);
    const { name, email, password } = r.body;


    const hashpassword = await bcrypt.hash( password, 8 );

    //console.log(hashpassword);

    const regsiter_user = await newregister.create( {
        name, email, password: hashpassword
    } );

    res.status( 201 ).json( { message: "User Data Succussfully done" } );

};


// Getting Data
export const getregisternew = async ( req, res ) => {

    try {

        const userdata = await newregister.find();

        res.status( 200 ).json( userdata );


    } catch ( error ) {
        console.log( error );

    }







};





// export const getregistersingleuser = async(req,res)=>{

// try{

// //console.log(req.params);

// const {id} = req.params;

// const userdata_single = await newregister.findById(id);
// // console.log(userdata_single);
// res.status(200).json(userdata_single)

// }catch(error){
// console.log(error);

// }
// }



export const update_data = async ( req, res ) => {

    //console.log(req.body);
    //console.log(req.params);

    const { id } = req.params;

    const { name, email, password } = req.body;

    const updatedatas = { name, email };

    await newregister.findByIdAndUpdate( id, updatedatas, { new: true } );

    res.status( 200 ).json( { message: "Updated sufully" } );




};

export const delete_data = async ( req, res ) => {

    const { id } = req.params;
    const deleted = await newregister.findByIdAndDelete( id );
    if ( deleted ) {
        res.status( 200 ).json( { message: "Deleted Succussfully!!!" } );
    } else {
        res.status( 404 ).json( { message: "Not Found!!!" } );
    }
};