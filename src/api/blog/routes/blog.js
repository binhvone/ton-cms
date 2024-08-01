'use strict';

/**
 * blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog.blog',  {
    config: {
      find: {
        middlewares: ["api::blog.populate-blog"],
      },
      findOne: {
        middlewares: ["api::blog.populate-blog"],
      },
    },
  });
