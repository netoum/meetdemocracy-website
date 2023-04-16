module.exports = ({
  'drag-drop-content-types': {
    enabled: true
  },

  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'mail.privateemail.com',
        port: 465,
        auth: {
          user: 'contact@meetdemocracy.com',
          pass: '%Ri*Z4O@wPW2s*Oo'
        },
      },
      settings: {
        defaultFrom: 'contact@meetdemocracy.com',
        defaultReplyTo: 'contact@meetdemocracy.com',
      },
    }
  }
});
