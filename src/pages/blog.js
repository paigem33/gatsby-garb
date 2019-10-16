import React from 'react'

import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const getMarkdownPosts = graphql`{
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter{
            title
            date
          }
          excerpt
        }
      }
    }
  }`

export default () => (
    <Layout>
        <h1 style={{ display: 'inlineBlock', borderBottom: '1px solid black'}}>Gatsby Garb Blog</h1>
        <StaticQuery 
            query={getMarkdownPosts}
            render={data => (
                <>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({node}) => (
                   <div key={node.id}>
                       <h3>{node.frontmatter.title}</h3> 
                       <span style={{ color: '#bbb'}}>- {node.frontmatter.date}</span>
                       <p>{node.excerpt}</p>
                   </div>
                ))}
                </>
            )}
        />
    </Layout>
)