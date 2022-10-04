
 const { createCoreController } = require('@strapi/strapi').factories;

 module.exports = createCoreController('api::meta.meta',{

  send: async (ctx) => {
    let options = ctx.request.body;
    console.log(options)
    try {
      //Send email to the user
      await strapi.plugins['email'].services.email.send({
        to: options.to,
        from: 'contacto@gewwtech.com',
        subject: options.subject,
        html: options.html,

      });
      ctx.send({ok: true})
    } catch (err) {
      return ctx.badRequest(null, err);

    }

  }
});
