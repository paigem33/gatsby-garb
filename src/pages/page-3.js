import React from 'react'
import { graphql, StaticQuery, Link } from "gatsby"

import Layout from "../components/layout"

const getImageData = graphql`{
    allFile {
      edges {
        node {
          relativePath, 
          size,
          extension,
          birthTime
        }
      }
    }
  }`

export default () => (
    <Layout>
        <h1>Page three</h1>
        <StaticQuery
        query={getImageData}
        render={data => (
            <table>
                <thead>
                    <tr>
                        <th>Relative Path</th>
                        <th>Size of Image</th>
                        <th>Extention</th>
                        <th>Birthtime</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({ node }, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.size}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
        />
        <Link to="/">Go home</Link>
        <Link to="../page-2/">Go to page 2</Link>
    </Layout>
)