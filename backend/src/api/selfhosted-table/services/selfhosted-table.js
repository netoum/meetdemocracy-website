'use strict';

/**
 * selfhosted-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::selfhosted-table.selfhosted-table');
