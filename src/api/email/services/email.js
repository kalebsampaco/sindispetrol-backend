
 const { createCoreService } = require('@strapi/strapi').factories;

 module.exports = createCoreService('api::meta.meta',{
  sendEmail: async (to, subject, html, attachments) => {
  strapi.log.info("services.email.sendEmail Sending email")
  strapi.plugins['email'].services.email.send({
  to,
  from: 'contacto@gewwtech.com',
  replyTo: 'contacto@gewwtech.com',
  subject,
  text,
  html
  });
  strapi.log.info("services.email.sendEmail Email sent")
  return {message: 'Email Sent'}  }});

