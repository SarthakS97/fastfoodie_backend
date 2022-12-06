const { response } = require('express');
const express = require('express')

const app = express()

app.use(express.json())

app.post('/', async (req, res) => {

const makeRequest = require('./utilities').makeRequest;

  const amount = req.body.amount
   {
    try {
      const body = {
        amount: amount,
        complete_checkout_url: 'http://example.com/complete',
        country: 'IN',
        currency: 'INR',
      }
      const result = await makeRequest('POST', '/v1/checkout', body);
      res.send(result);
    } catch (error) {
      res.send('Error completing request', error);
    }
  }})

// function intro(req, res, next){
//   console.log('Server is running. Please run the app')
//   next()
// }
// function getter(req, res, next){
//     app.get('/', (req,res) => {
//       console.log(req.body.amount)
//     })
//     next()
// }
  

app.listen(3000, function(){
  console.log("Server is running. Please follow steps to run the app")
})


// const makeRequest = require('./utilities').makeRequest;

// async function main() {
//   try {
//     const result = await makeRequest(
//       'GET',
//       '/v1/payouts/supported_types?category=bank&beneficiary_country=PH&payout_currency=PHP'
// );
//     res.send(result);
//   } catch (error) {
//     res.send('Error completing request', error);
//   }
// }

// try {
//   const body = {
//     amount: 100,
//     complete_checkout_url: 'http://example.com/complete',
//     country: ‘SG’,
//     currency: 'SGD',
//     requested_currency: ‘USD’,
//     merchant_reference_id: '950ae8c6-76',
//     payment_method_types_include: [‘sg_credit_mastercard_card’, ‘sg_credit_visa_card’]
//   };
//   const result = await makeRequest('POST', '/v1/checkout', body);