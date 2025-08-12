
import ProductModle from '../models/productModel.js'

export const createproduct = async(req,res)=>{


    //console.log(req.body);
  

try{
    const {name,price,category} = req.body

const newproduct = await ProductModle.create({
    
    name,
    price,
    category


})

res.status(201).json({message:"Value Added Succssfully"})


}
catch(error){
res.status(500).json({message:"This is happening error",error});

}
    

}



export const getProductbyid = async(req,res)=>{


try{


// console.log("what is come",req);

//const {id} = req.params;
const iddata = req.params.id
const getproduct = await  ProductModle.findById(iddata)


if(!getproduct){
    res.status(404).json({message:"Not Found",error});
}

res.status(200).json({message:"Data Succfully come",data:getproduct});


}catch(error){
res.status(404).json({message:"This is happening error",error});

}




}



export const getproductbyfilters = async(req,res)=>{

try{

    // console.log(req);
    
     const {category,limit,skip,sortby} = req.query
     
     const filter = {}

    if(category) {
        
        filter.category = category
        // console.log( filter.category);
        
    
    }

    const query = ProductModle.find(filter)
     console.log('shadkjhkd',query);
     
   
    if(sortby){
const sortOrder = sortby === "asc" ?-1:1;
        //console.log(sortOrder);
        

        query = query.sort({[sortby]:sortOrder})
    }

        if(skip) query = query.skip(Number(skip))

        if(limit) query = query.limit(Number(limit))


            const filterdata = await query;

            console.log(filterdata);
            

            res.json(filterdata);


    


}
catch(error){
res.status(500).json({message:"This is happening error",error});

}

}

