// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.1.0'].dms.create({
  recipient_id: "<ID>", // required
  content: [
    `Thanks <@<ID>>! for testing this implementation`,
    `You may now proceed to the next stage of the tutorial`
  ].join('\n'),
});

/**
* An HTTP endpoint that acts as a webhook for HTTP(S) request event
* @returns {object} result Your return value
*/