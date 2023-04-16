'use strict';

/**
 * featurecard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featurecard.featurecard');
