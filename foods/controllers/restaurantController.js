
const Ddaa = require('../models/restaurantModel');
exports.getAllRestaurants =async(req,res) => {
    try {
        const ddaas = await Ddaa.find();
        res.status(200).json({
            status:'success',
            results: ddaas.length,
            data: {ddaas}
            });
        }catch (err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
    }
       
            };

exports.getRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const foods = await Foods.findOne({id: (restaurantId)});
        if(foods){
        res.status(200).json({
        status:'success',
        data: {foods}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status:'fail',
        message: err
        });
        
        }
};
exports.createRestaurant = async(req,res) => {
   try{
   /*  const newRestaurant = await Restaurant.create(req.body);
    res.status(201).json({
    status:'success',
    data: {restaurant: newRestaurant}
    });*/
    let currentRestaurantId = await Foods.find({}).sort({id: -1}).limit(1).then((lastRestaurant) => {
        return lastRestaurant[0].id

    });
    currentRestaurantId += 1;
const creatRestaurant = {
id: currentRestaurantId,
...req.body
};
const newRestaurant = await Foods.create(creatRestaurant);
res.status(201).json({
status:'success',
data: {foods: newRestaurant}
});
    }catch(err){
    res.status(400).json({
    status:'fail',
    message: err
    });
    
    }
    };
exports.updateRestaurant = async(req,res) => {
    try{
        const restaurantId = parseInt(req.params.id);
        const foods = await Foods.findOneAndUpdate({id: restaurantId},req.body,{
        new: true,
        runValidators: true
        });
        if(foods){
        res.status(200).json({
        status:'success',
        data: {foods}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        }
};
exports.deleteRestaurant = async(req,res) => {
    try{
        const restaurantsId = parseInt(req.params.id);
        const foods = await Foods.findOneAndDelete({id: parseInt(restaurantsId)});
        if(foods){
        res.status(200).json({
        status:'success',
        data: null
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'FA'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        
        }
};