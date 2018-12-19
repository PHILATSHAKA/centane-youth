import React from 'react';
import Link from 'gatsby-link';
import './index.css';

const Blog = ({data}) => {
    console.log(data)
      return(
          <div className="container">
            <h2 className="latest-news">Latest news</h2>
            {data.allMarkdownRemark.edges.map(post => (
                <div key ={post.node.id} className="article-box">
                    <h4 className="title">{post.node.frontmatter.title}</h4>
                    <hr/>
                    <small className="author">Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date} ...</small>
                    <br/>
                
                    <Link to={post.node.frontmatter.path} className="blog-news">Read more</Link>
                    <br/>
            </div>
        ))}
    </div>
      )
};
export default Blog;

export const pageQuery = graphql`    
        query BlogIndexQuery {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
                totalCount
                edges{
                    node{
                        id
                        frontmatter{
                            path
                            title
                            date
                            author
                        }
                        excerpt
                        timeToRead
                    }
                }
            }
        }`;


