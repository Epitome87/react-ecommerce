const express = require('express');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Create Stripe object, which will be used for processing payments
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, (err) => {
  if (err) throw err;

  console.log('Server running on port ' + port);
});

app.post('/payment', (req, res) => {
  console.log('A payment is being processed...');
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      console.log('...The payment was successfully processed!');
      res.status(200).send({ success: stripeRes });
    }
  });
});
