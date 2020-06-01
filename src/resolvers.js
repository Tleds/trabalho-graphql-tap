const Order= require('./Order.js');

module.exports = {
  Query:{
    orders: () => Order.find(),
    order: (_, { id })=> Order.findById(id),
  },
  Mutation:{
    createOrder: (_,{produto, quantidade, preco})=>Order.create({ 
      produto,
      quantidade,
      preco,
    }),
    updateOrder: (_,{id,produto, quantidade, preco})=>Order.findOneAndUpdate({
      _id: id,
    },
    {
      produto,
      quantidade,
      preco,
    }),
    deleteOrder: (_, { id })=>Order.findByIdAndDelete(id),
  }
}