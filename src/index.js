import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import ListBooks from './ListBooks';
import AddBook from './AddBook';

class App extends React.Component{
  state = { books : []};

  componentDidMount(){
    this.setState({
      books : [
      new Book('A123', 'Titre 1', '2000-07-16', 100),
      new Book('B456', 'Livre 2', '2010-09-23', 50)
    ]});
  }

  onAdd(book){
    let booksList = this.state.books;
    booksList.push(book);
    this.setState({books : booksList});
  }



  render (){
    return(
      <div className="container">
        <ListBooks bookList={this.state.books} />
        <AddBook  onAddBook={(book) => this.onAdd(book)}/>
      </div>
    );
  }

};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
