'use strict';

/**
 * blog controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async find(ctx) {
    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    const query = strapi.db.query('api::blog.blog');

    await Promise.all(
      data.map(async (item, index) => {
        const blog = await query.findOne({
          where: {
            id: item.id,
          },
          populate: ['createdBy'],
        });
        
        data[index].attributes.createdBy = {
          id: blog.createdBy.id,
          firstname: blog.createdBy.firstname,
          lastname: blog.createdBy.lastname,
        };
      })
    );

    return { data, meta };
  },
}));