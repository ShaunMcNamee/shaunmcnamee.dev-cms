'use strict'

const axios = require('axios')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    afterUpdate: async (entry) => {
      if (entry.published_at !== undefined && entry.published_at !== null) {
        await axios.post(process.env.REBUILD_UI_URL).catch(() => {
          // Ignore
        })
        axios
          .post(process.env.NEW_BLOG_POST_HOOK_URL, { ...entry })
          .catch(() => {
            // Ignore
          })
      }
    },
  },
}
