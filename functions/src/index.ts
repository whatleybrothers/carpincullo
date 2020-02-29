const functions = require('firebase-functions');
const sgMail = require('@sendgrid/mail');
const cors = require("cors")({
    origin: true
});


const API_KEY = functions.config().sendgrid.key;
sgMail.setApiKey(API_KEY);

exports.emailMessage = functions.https.onRequest((req:any, res: any) => {
    return cors(req, res, async() => {
        await sendApplicationEmail(req.body);

        res.status(200).send({ status: 'success' });
    });
});

async function sendApplicationEmail(body: any) {

    const msg = {
        to: ['awhatleybrothers@gmail.com'],
        from: body.from,
        subject: body.subject,
        templateId: 'd-8dce53ecd4c747d8a6e0db754226b5bb',
        dynamic_template_data: body.content,
    };
    await sgMail.send(msg)
    console.log('Email was sent...');

    return null;
}
