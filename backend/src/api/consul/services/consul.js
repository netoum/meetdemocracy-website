'use strict';

/**
 * consul service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consul.consul');
