import React from 'react';
import Link from 'gatsby-link';
import './blog.css';

export default function Template({ data }) {
    const post = data.markdownRemark;

    return(
        <div className="container">
          <h2 className="latest-news">Meeting news</h2>
            <div className="meeting-article-box">
                <Link to="/news" className="goback-link">Go back to news</Link>
         
                <h6 className="meeting-title">{post.frontmatter.title}</h6>
                <hr/>
                <small className="meeting-author">Posted by {post.frontmatter.author} on {post.frontmatter.date}</small>
                <p className="excerpt">{post.frontmatter.excerpt}</p>
                <div className="content" dangerouslySetInnerHTML = {{ __html: post.html }}/>
            </div>
        </div>
    )
}
export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: {eq: $path}}){
            html
            frontmatter{
                path
                title
                date
                author
            }
            timeToRead
            excerpt
        }
    }`;
