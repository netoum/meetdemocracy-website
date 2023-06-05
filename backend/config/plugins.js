module.exports = ({ env }) => ({
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
          pass: env('SMTP_PASS', 'pass'),
        },
      },
      settings: {
        defaultFrom: 'contact@meetdemocracy.com',
        defaultReplyTo: 'contact@meetdemocracy.com',
      },
    }
  }
});
