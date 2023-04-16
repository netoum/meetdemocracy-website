'use strict';

/**
 * consul controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::consul.consul');
