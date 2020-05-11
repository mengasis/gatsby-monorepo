import {PrimaryLayout} from "@gatsby-monorepo/shared";
import React from "react";

const Layout = ({ children, data }) => (
    <PrimaryLayout children={children} data={data} />
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout
