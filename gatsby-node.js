exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const results = await graphql(`
        {
            allServiceGroupsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
            allServicesJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)

    results.data.allServiceGroupsJson.edges.forEach( edge => {
        const slug = edge.node.slug

        createPage({
            path: `/serviceGroup/${slug}`,
            component: require.resolve("./src/templates/serviceGroup.js"),
            context: {
                slug: slug,
            },
        })
    })

    results.data.allServicesJson.edges.forEach( edge => {
        const slug = edge.node.slug

        createPage({
            path: `/service/${slug}`,
            component: require.resolve("./src/templates/service.js"),
            context: {
                slug: slug,
            },
        })
    })
}