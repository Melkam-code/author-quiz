import React, { Component } from 'react';

function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by the author shown</p>
      </div>
    </div>
  )
}

function Turn(){
 return (<div className="row turn" style={{backgroundColor: "white"}}>
    <div className="col-4 offset-1">
      <img src={AuthorQuiz.imageUrl} className="authorimage" alt="Author" />
    </div>
    <div className="col-6">
      {books.map((title) => <p>{title}</p>)}
    </div>
 </div>)
}

function Continued(){
  return <div></div>
}

function Footer(){
  return (
    <div id="footer" className="row">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from <a href="https://en.wikipedia.org/wiki/Wikipedia:Wikimedia_Commons">wikimedia commons</a>
        </p>
      </div>
    </div>
  )
}

class AuthorQuiz extends Component {
  render(){
  return (
    <div className="container-fluid">
      <Hero />
      <Turn />
      <Continued />
      <Footer />
    </div>
  );}
}

export default AuthorQuiz;
