'use strict';

/**
 * hosted-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hosted-table.hosted-table');
