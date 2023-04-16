'use strict';

/**
 * consul router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::consul.consul');
