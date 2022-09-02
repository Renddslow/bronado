const twilio = require("twilio");

const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

exports.handler = async (event, context) => {
  const { firstName, lastName, email } = JSON.parse(event.body);

  await client.messages.create({
    body: `${firstName} ${lastName} (${email}) is planning to come nut-tap Mitchell.`,
    from: "+14023789202",
    to: process.env.PHONE_NUMBER,
  });

  return {
    statusCode: 200,
  };
};
