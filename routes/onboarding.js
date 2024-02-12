const express = require('express');
const router = express.Router();
const path = require('path');
const finishSignup = require('./../controllers/onboardingFunc');

router.get('^/$|/onboarding(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'onboarding.html'));
})

router.put('^/$|/onboarding(.html)?', finishSignup);    //change to post if running into erros when creating an account - not sure why this happens lol

module.exports = router;