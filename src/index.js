import React from 'react';
import ReactDOM from 'react-dom';
import Book from './models/Book';
import ListBooks from './components/ListBooks';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

class App extends React.Component{
  state = { books : [], activeBook : null, action : '', activeIndice : null };

  componentDidMount(){
    this.setState({
      books : [
      new Book('A123', 'Titre 1', '2000-07-16', 100),
      new Book('B456', 'Livre 2', '2010-09-23', 50)
    ]});
  }

  onAdd = (book) => {
    let bookList = this.state.books;
    bookList.push(book);
    this.setState({books : bookList});
    this.setState({action : ''});
  }

  onDelete = (indice) => {
    let bookList = this.state.books;
    bookList.splice(indice, 1);
    this.setState({books : bookList});
  }

  onEdit = (book) => {
    let bookList = this.state.books;
    bookList[this.state.activeIndice] = book;
    this.setState({books : bookList});
    this.setState({action : ''});
  }

  onShowEdit = (indice) => {
    let book = this.state.books[indice];
    this.setState({activeBook : book, action : 'edit', activeIndice : indice});
  }

  onShowAdd = () => {
    this.setState({action : 'add'});
  }

  render (){
    let actionForm = '';
    if(this.state.action === 'add')
     actionForm = (<AddBook  onAddBook={this.onAdd}/>);

    if(this.state.action === 'edit')
      actionForm = (<EditBook bookToEdit={this.state.activeBook} onEditBook={this.onEdit} />);



//

    return(
      <div className="container">
        <ListBooks
          bookList={this.state.books}
          onDeleteBook={this.onDelete}
          onShowEdit={this.onShowEdit}
          onShowAdd={this.onShowAdd}
          />
        {actionForm}
      </div>
    );
  }

};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
