import React, { Component } from 'react'

export class NewsItem extends Component {
 
  render() {
    let {title, description, imageurl, newsUrl} = this.props;
    return (
    
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imageurl?"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDgvZGNkNDFmZjEtZmFiZS00MjYzLWJkOGEtZjcwZDllZmFmNjdkLmpwZw==.jpg":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )                                                                             
  }
}

export default NewsItem
