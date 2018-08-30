import React from 'react'
import Link from 'gatsby-link'

const Blog = ({data}) => (
    <div>
        <h2>Latest Updates</h2>
        {data.allMarkdownRemark.edges.map(post => (
            <div key ={post.node.id}>
                <h4>{post.node.frontmatter.title}</h4>
                <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
                <br/>
                <br/>
                <Link to={post.node.frontmatter.path} style={{fontStyle: 'italic', color: '#3CB371'}}>Read more</Link>
                <br/>
                <br/>
                <hr/>
            </div>
        ))}
    </div>
);
export const pageQuery = graphql`    
        query BlogIndexQuery {
            allMarkdownRemark {
                edges{
                    node{
                        id
                        frontmatter{
                            path
                            title
                            date
                            author
                        }
                    }
                }
            }
        }`;

export default Blog;
