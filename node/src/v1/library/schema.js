
var {Schema} = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var schema = {}         // Schema Object.

/* users schema */
schema.users = Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: "{VALUE} is not a type of gender"
        },
        required: true,
    },
    dob: {
        type: Date
    },
    introduction: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    pincode: {
        type: Number
    },
    profile_image: {
        type: String,
    },
    proof_image: {
        type: String,
    },
    college: {
        type: String
    },
    course: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'User email is required'],
        unique: true
    },
    phoneno: {
        type: String,
    },
    otp: {
        type: Number
    },
    password: {
        type: String,
    },
    is_creator: {
        type: Number,
        required: true
    },
    is_verified: {
        type: Boolean,
        required: true
    },
    created_date:{
        type: Date,
        required:true
    }
});
/* templates schema. */
schema.templates = Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        required: true
    },
    created_ip: {
        type: String
    },
    updated_ip: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    zip: {
        type: String
    },
    technology: {
        type: String
    },
    images: {
        type: Array
    },
    tags : {
        type: String
    }
});
/* template_images schema*/
schema.template_images = Schema({
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    },
    image: {
        type: String,
        unique: true,
        required: true
    }
})
/* template_technologies schema */
schema.template_technologies = Schema({
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    },
    technology: {
        type: String,
        required: true
    }
})
/* orders schema */
schema.orders = Schema({
    buyer_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    total: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        required: true,
    },
    created_date: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        required: true
    },
    created_ip: {
        type: String,
        required: true
    },
    updated_ip: {
        type: String,
        required: true
    }
})
/* order_items schema */
schema.order_items = Schema({
    order_id: {
        type: Schema.Types.ObjectId,
        ref: 'orders',
        required: true
    },
    creator_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    buyer_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    service_charge: {
        type: Number
    },
    created_date: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        required: true
    },
    created_ip: {
        type: Date,
        required: true
    },
    updated_ip: {
        type: Date,
        required: true
    }
})
/* transactions schema*/
schema.transactions = Schema({
    user_id:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    creator_id:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        required: true
    },
    // request: {
    //     type: String
    // },
    // response: {
    //     type: String
    // },
    created_date: {
        type: Date,
        required: true
    },
    updated_date: {
        type: Date,
        required: true
    },
    created_ip: {
        type: String,
        required: true
    },
    updated_ip: {
        type: String,
        required: true
    }
})
/* feedbacks schema*/
schema.feedbacks = Schema({
    buyer_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    template_id: {
        type: Schema.Types.ObjectId,
        ref:'templates',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
    created_date: {
        type: Date,
        required: true
    },
    created_ip: {
        type: String,
        required: true
    }
})
/* cart schema */
schema.cart = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    created_ip: {
        type: String,
        required: true
    }
})
/* tags schema */
schema.tags = Schema({
    tagname: {
        type: String,
        required: true
    },
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    }
})
/* likes schema */
schema.likes = Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    template_id: {
        type: Schema.Types.ObjectId,
        ref: 'templates',
        required: true
    }
})

/* unique validations */
schema.users.plugin(uniqueValidator);           // validator for unique email
schema.template_images.plugin(uniqueValidator); // validator for unique images name

module.exports = schema;