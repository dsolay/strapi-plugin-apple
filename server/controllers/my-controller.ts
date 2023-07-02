import { Strapi } from '@strapi/strapi'

export default ({ strapi }: { strapi: Strapi }) => ({
  index(context) {
    context.body = strapi
      .plugin('strapi-provider-apple')
      .service('myService')
      .getWelcomeMessage()
  },
})
