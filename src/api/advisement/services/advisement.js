'use strict';

/**
 * advisement service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::advisement.advisement');
