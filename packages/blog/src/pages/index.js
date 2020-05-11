import React from "react";

import {ItemCard, ItemCardWrapper} from "@gatsby-monorepo/shared";

const IndexPage = ({ data }) => {
    const edges = data.allBlogJson.edges

    return (
        <div>
            <h1>Blog Page</h1>
            <ItemCardWrapper>
                {edges && edges.map(edge => <ItemCard key={edge.node.id} data={edge.node} slug="post" />)}
            </ItemCardWrapper>
            <a href={process.env.SHOP_URL}>Go back to the shop</a>
        </div>
    )
}

export default IndexPage

export const query = graphql`
    query BlogPostsQuery {
        allBlogJson {
            edges {
                node {
                    id
                    title
                }
            }
        }
    }
`
