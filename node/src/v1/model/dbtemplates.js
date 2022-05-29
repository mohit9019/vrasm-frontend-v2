const { templates, likes, cart, transactions, feedbacks } = require("../library/db");
const mongoose = require("mongoose");
const lodash = require("lodash");
class dbtemplates{

    async upload(data, ip){
        data.created_date = new Date();
        data.created_ip = ip;
        data.updated_date = new Date();
        data.updated_ip = ip;
        data.creator_id = mongoose.Types.ObjectId(data.creator_id);
        
        let return_data = {
            error : false,
            message: 'success',
            data
        }
        let templateObj = new templates(data);
        return templateObj.save()
            .then(result=>{
                return_data.data = result._id;
                return return_data;
            })
            .catch(err=>{
                return_data.error = true;
                return_data.message = 'something_broken';
                return return_data;
            })
    }
    async templates(user_id='', template_id='',creator_id='', type='', category, technology, searchstring) {
        let return_data = {
            error: false,
            message: 'success',
            data: []
        }
        let data = {};
        let result;
        let filter = {};
        if(category && category.length > 0){
            filter['category'] = category;
        }
        if(technology && technology.length > 0){
            let regex = new RegExp(".*"+technology+".*", 'ig');
            filter['technology'] = regex;
        }
        if(searchstring && searchstring.length > 0){
            let regex = new RegExp(".*"+searchstring+".*", 'ig');
            filter['tags'] = regex;
        }
        if(creator_id && creator_id.length > 0){
            filter['creator_id'] = mongoose.Types.ObjectId(creator_id);
        }
        if(template_id && template_id.length > 0){
            result = await templates.find({_id:mongoose.Types.ObjectId(template_id)}).populate({
                path:'creator_id',
                select:'name'
            });
        }
        else if(type == 'like'){
            let template_ids = await likes.find({user_id: mongoose.Types.ObjectId(user_id)});
            template_ids = lodash.map(template_ids,"template_id");
            result = await templates.find({_id:{$in:template_ids}}).populate({
                path:'creator_id',
                select:'name'
            }); 
        }
        else {
            result = await templates.find(filter).populate({
                path:'creator_id',
                select:'name'
            });
        }
        data = [...result];
        for(let i = 0;i< data.length; i++){

            // for like
            if(user_id != ''){
                let is_liked = false;
                is_liked = await this.isLiked(data[i]._id, mongoose.Types.ObjectId(user_id));
                data[i]._doc.is_liked = is_liked;
            }

            // for feedback
            let feeds = [];
            feeds = await this.getFeedback(data[i]._id);
            data[i]._doc.feedbacks = feeds;

            // for images
            // let images = data[i]._doc.images;
            // if(images && images.length > 0){
            //     let imagesArr = images.split(',');
            //     data[i]._doc.images = [
            //         '/STORAGE/'+imagesArr[0], '/STORAGE/'+imagesArr[1]
            //     ]
            // }
            // else{
            //     data[i]._doc.images = ['/STORAGE/default.jpg','/STORAGE/default.jpg'];
            // }
        }
        return_data.data = data;
        return return_data;
    }

    async getFeedback(template_id){
        return feedbacks.find({template_id: mongoose.Types.ObjectId(template_id)}).populate({
            path:'buyer_id', 
            select:'_id name gender email'
        });
    }

    async isLiked(template_id, user_id){
        let result = await likes.findOne({user_id, template_id})
        return result == null ? false : true;
    }

    async getCart(user_id){
        let result = await cart.find({user_id:mongoose.Types.ObjectId(user_id)});
        let ids = lodash.map(result, 'template_id');
        
        let return_data = {
            error: false,
            status_message:'success',
            data:[]
        }
        return_data.data = await templates.find({'_id' : {$in : ids}})

        return return_data;
    }

    async buy(user_id, template_id, ip){
        user_id = mongoose.Types.ObjectId(user_id);
        template_id = mongoose.Types.ObjectId(template_id);

        let template = await templates.findById(template_id);
        let creator_id = template.creator_id;
        let amount = template.price;
        let date = new Date();
        let transaction = new transactions({user_id, creator_id, template_id, amount, status:'completed', created_date:date, updated_date: date, created_ip: ip, updated_ip: ip})
        let return_data = {
            error: false,
            message: 'success',
            data:{}
        }
        return transaction.save()
            .then(data=>{
                return_data.data['zip'] = template.zip;                        
                return return_data;
            })
            .catch(err=>{
                return_data.error=true;
                return_data.message='something_broken';
                console.log(err);
                return return_data;
            })
    }

    async like(user_id, template_id, action='like'){
        user_id = mongoose.Types.ObjectId(user_id);
        template_id = mongoose.Types.ObjectId(template_id);
        let like = new likes({user_id, template_id})
        if(action == 'like'){
            like.save()
                .then(data=>{
                })
                .catch(err=>{
                    console.log('error ', err);
                })
        }
        else if(action=='unlike'){
            let result = await likes.deleteMany({user_id, template_id});
            console.log(result);
        }
        return true;
    }

    async feedback(user_id, template_id, rating, message, ip){
        user_id = mongoose.Types.ObjectId(user_id);
        template_id = mongoose.Types.ObjectId(template_id);
        let feedback = new feedbacks({buyer_id:user_id, template_id, rating, message, created_ip:ip, created_date: new Date()})
        let result = await feedback.save();
        return true;
    }

    async addToCart(user_id, template_id, action='add', ip){
        user_id = mongoose.Types.ObjectId(user_id);
        template_id = mongoose.Types.ObjectId(template_id);
        let carts = new cart({user_id, template_id, created_date: new Date(),created_ip: ip });
        if(action == 'add'){
            carts.save()
                .then(data=>{
                })
                .catch(err=>{ 
                    console.log('error ', err);
                })
        }
        else if(action=='delete'){
            let result = await cart.deleteMany({user_id, template_id});
        }
        return true;
    }
    
}

module.exports = dbtemplates;