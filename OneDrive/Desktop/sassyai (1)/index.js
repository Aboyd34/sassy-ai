const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Webhook endpoint for Dialogflow
app.post('/webhook', (req, res) => {
  const intent = req.body.queryResult.intent.displayName;
  let responseText = 'Sorry, I didn’t understand that.';

  if (intent === 'AffiliateMarketingInfo') {
    responseText = 'Affiliate marketing is a way to earn money by promoting other people’s products.';
  } else if (intent === 'SendToTelegram') {
    responseText = 'Sending this info to your Telegram bot now...';
  } else if (intent === 'ProductAlert') {
    responseText = 'Okay, I’ll alert you when that product is restocked!';
  }

  res.json({
    fulfillmentText: responseText
  });
});

app.get('/', (req, res) => {
  res.send('SASSyAI webhook running');
});

app.listen(port, () => {
  console.log(`SASSyAI webhook running on port ${port}`);
});
