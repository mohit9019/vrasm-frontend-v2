const schema = require('./schema');
var { connect, model, connection } = require('mongoose');

/* connecting to the database. */
connect(process.env.DBSTR, { useNewUrlParser: true });

connection.on('connected', () => console.log('Database connected!'));
connection.on('disconnected', () => console.log('Database disconnected!'));
connection.on('error', () => console.log('Error connecting to Database'))

/* models */
const users = model('users', schema.users);
const templates = model('templates', schema.templates);
const orders = model('orders', schema.orders);
const order_items = model('order_items', schema.order_items);
const transactions = model('transactions', schema.transactions);
const feedbacks = model('feedbacks', schema.feedbacks);
const cart = model('cart', schema.cart);
const likes = model('likes', schema.likes);


// async function deleteAll(){
//     try{
//         await templates.deleteMany();
//         await orders.deleteMany();
//         await transactions.deleteMany();
//         await feedbacks.deleteMany();
//         await cart.deleteMany();
//         await likes.deleteMany();
//         console.log('deleted successfully');
//     }
//     catch(e){
//         console.log(e);
//     }
// }
module.exports = { users, templates, orders, order_items, transactions, feedbacks, cart, likes }



