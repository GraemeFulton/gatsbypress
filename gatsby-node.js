const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

const queries = require('./src/wp-queries/queries');

const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;


    return new Promise((resolve, reject) => {

        // Pages
        graphql(queries.pageQuery)
            .then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                const pageTemplate = path.resolve("./src/templates/page.js");
                const pages = result.data.allWordpressPage.edges;
                _.each(pages, edge => {
                    createPage({
                        path: `/${edge.node.slug}/`,
                        component: slash(pageTemplate),
                        context: {
                            id: edge.node.id,
                        },
                    });
                });
            })

            .then(() => {
                graphql(queries.postsQuery)
                    .then(result => {
                        if (result.errors) {
                            console.log(result.errors);
                            reject(result.errors);
                        }
                        
                        const postTemplate = path.resolve("./src/templates/post.js");
                        const posts = result.data.allWordpressPost.edges

                        createPaginatedPages({
                          edges: posts,
                          createPage: createPage,
                          pageTemplate: "src/templates/posts.js",
                          pageLength: 9,
                          pathPrefix: "posts"
                      })
                      createPaginatedPages({
                        edges: posts,
                        createPage: createPage,
                        pageTemplate: "src/templates/index.js",
                        pageLength: 6,
                        pathPrefix: ""
                    })
                        //for each post, also create the actual single post template
                        _.each(posts, edge => {
                            createPage({
                                path: `/post/${edge.node.slug}/`,
                                component: slash(postTemplate),
                                context: {
                                    id: edge.node.id,
                                },
                            });
                        });
                        resolve();
                    });
            });
        // ==== END POSTS ====
    });
};