'use strict';

/**
 * selfhosted-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::selfhosted-plan.selfhosted-plan');
