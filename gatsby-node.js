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

   const basicMdxPage = path.resolve(`./src/templates/BasicMdxPage.tsx`);

   const { data } = await graphql(`
      {
         allMdx(filter: { internal: { contentFilePath: { regex: "/offers|fitnessinfo/" } } }) {
            nodes {
               id
               frontmatter {
                  slug
               }
               internal {
                  contentFilePath
               }
            }
         }
      }
   `);

   data.allMdx.nodes.forEach((node) => {
      actions.createPage({
         path: `pages/${node.frontmatter.slug}`,
         component: `${basicMdxPage}?__contentFilePath=${node.internal.contentFilePath}`,
         context: {
            id: node.id,
         },
      });
   });
};
