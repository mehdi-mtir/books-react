import React from 'react';
import Book from '../models/Book';

class EditBook extends React.Component{
  state = {book : this.props.bookToEdit};

  onEdit = (event) => {
    event.preventDefault();
    //code d'edition du book
    /*const book = new Book(
      document.getElementById('iban').value,
      document.getElementById('title').value,
      document.getElementById('date_publication').value,
      document.getElementById('prix').value
    );*/
    this.props.onEditBook(this.state.book);
  }

  onChangeIban = (e) =>{
    let book = this.state.book;
    book.iban = e.target.value;
    this.setState({book : book});
  }

  onChangeTitle = (e) =>{
    let book = this.state.book;
    book.title = e.target.value;
    this.setState({book : book});
  }

  onChangeDate_publication = (e) =>{
    let book = this.state.book;
    book.date_publication = e.target.value;
    this.setState({book : book});
  }

  onChangePrix = (e) =>{
    let book = this.state.book;
    book.prix = e.target.value;
    this.setState({book : book});
  }

  render(){
    return (
      <div>
        <h1>Editer un livre</h1>
        <form onSubmit={this.onEdit}>
          <div className="mb-3">
            <label htmlFor="iban">Iban</label>
            <input type="text" name="iban" id="iban" className="form-control"  value={this.state.book.iban} onChange={this.onChangeIban} />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" className="form-control" value={this.state.book.title} onChange={this.onChangeTitle} />
          </div>
          <div className="mb-3">
            <label htmlFor="date_publication">Date de publication</label>
            <input type="date" name="date_publication" id="date_publication"  className="form-control" value={this.state.book.date_publication} onChange={this.onChangeDate_publication} />
          </div>
          <div className="mb-3">
            <label htmlFor="prix">Prix</label>
            <input type="number" name="prix" id="prix" className="form-control" value={this.state.book.prix} onChange={this.onChangePrix} />
          </div>
          <div>
            <input type="submit" className="btn btn-primary" value="Editer" />
          </div>

        </form>
      </div>
    );
  }
}

export default EditBook;
