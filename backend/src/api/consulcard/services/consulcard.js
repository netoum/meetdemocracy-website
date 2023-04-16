'use strict';

/**
 * consulcard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::consulcard.consulcard');
