import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { shuffle, sample } from 'underscore';
import AddAuthorForm from './AddAuthorForm';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl:'images/authors/marktwain.jpg',
    imageSource:'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
    },
    {
    name: 'Joseph Conrad',
    imageUrl:'images/authors/josephconrad.jpg',
    imageSource:'Wikimedia Commons',
    books: ['Heart of darkness']
    },
    {
    name: 'J K Rowling',
    imageUrl:'images/authors/jkrowling.jpg',
    imageSource:'Wikimedia Commons',
    imageAttribution:'Daniel Ogren',
    books: ['Harry Porter and sorcerers stone']
    },
    {
    name: 'Stephen King',
    imageUrl:'images/authors/stephenking.jpeg',
    imageSource:'Wikimedia Commons',
    imageAttribution:'Pingiun',
    books: ['The shining', 'IT']
    },
    {
    name: 'Charlse Dickens',
    imageUrl:'images/authors/charlsedickens.jpg',
    imageSource:'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
    name: 'William Shakespear',
    imageUrl:'images/authors/williamshakespear.jpg',
    imageSource:'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Remeo and Juliet']
    }
];

function getTurnData(authors){
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0,4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => author.books.some((title) => title === answer))
  }
}

let state = resetState();

function resetState(){
  return {
    turnData: getTurnData(authors),
    highlight: ''
  }
}

function App(){
  return(
    <AuthorQuiz {...state} onAnswerSelected={onAnswerSelected}
    onContinue={() => {
      state = resetState();
      render();
    }} />
  )
}

function onAnswerSelected(answer){
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render();
}

const AuthorWrapper = withRouter(
  ({ history }) => <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
  }} />)


function render(){
  ReactDOM.render(<BrowserRouter>
  <React.Fragment>
   <Route exact path="/" component={App} />
   <Route path="/add" component={AuthorWrapper} />
   </React.Fragment>
  </BrowserRouter>, document.getElementById('root') );
}

render();
reportWebVitals();
