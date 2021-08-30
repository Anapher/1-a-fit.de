/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
   const { createPage } = actions;
   const voucherTemplate = path.resolve(`src/templates/Voucher.tsx`);
   const result = await graphql(`
      query {
         site {
            siteMetadata {
               vouchers {
                  file
                  id
                  image
                  title
               }
            }
         }
      }
   `);

   result.data.site.siteMetadata.vouchers.forEach((voucher) => {
      createPage({
         path: `gutschein-${voucher.id}`,
         component: voucherTemplate,
         context: {
            ...voucher,
         },
      });
   });
};
