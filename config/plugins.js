module.exports = ({ env }) => ({

  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: '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',
    },
    settings: {
      defaultFrom: "contacto@gewwtech.com",
      defaultReplyTo: "contacto@gewwtech.com",
      testAddress: 'contacto@gewwtech.com',
    },
  },

});
