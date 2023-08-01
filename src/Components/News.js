import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps={
    country:"in",
    category:"general"
  }
 static propTypes={
  country:PropTypes.string,
  category:PropTypes.string,
 }
  constructor(){
    super();//must
    this.state = {
      articles : [],
      loading : true,
      page : 1,
      mode: 'light',
     
    }
  }
 async componentDidMount(){
  
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=266c2441daac40ce9ce78309b98bec1a&pageSize=20`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalArticals: parsedData.totalResults,loading:false})
  }
  handleNextClick= async ()=>{
    
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))){
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=266c2441daac40ce9ce78309b98bec1a&page=${this.state.page+1}&pageSize=20`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page : this.state.page + 1,
      articles : parsedData.articles,
    loading:false})

      }
    }

  handlePreviousClick= async ()=>{
    console.log("Previous");
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=266c2441daac40ce9ce78309b98bec1a&page=${this.state.page-1}&pageSize=20`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
   
    this.setState({
      page : this.state.page - 1,
      articles : parsedData.articles,
    loading:false})


      }
    
  


  render() {
    console.log("Render");
    return (
    <div className='container my-5'>
      <div className={`text-center ${this.state.mode} bg-${this.state.mode}`}>
        <h1>NewsPulse - Top Headlines</h1>
        {this.state.loading && <Spinner/>}
      </div> 
        <div className='row my-4 mx-4'>
        {!this.state.loading && this.state.articles.map((element)=>{
              return <div className='col-md-4' key={element.url}>
             <NewsItem title={element.title?element.title.slice(0,44):" "} description={element.description?element.description.slice(0,88):" "} imageurl={element.urlToImage} newsUrl={element.url}/>
              </div>
            })}
    
       </div>
       <div className='container d-flex justify-content-between'>
       <button disabled= {this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
       <button disabled= {this.state.page+1 > this.state.totalResults/20} type="button" className="btn btn-dark" onClick={this.handleNextClick}>&rarr; Next</button>
       </div>
    </div>
    )
  }
}

export default News
