'use strict'

const axios = require('axios')

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterUpdate: async (entry) => {
      axios.post(process.env.REBUILD_UI_URL).catch(() => {
        // Ignore
      })
    },
  },
}
