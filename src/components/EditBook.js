import React from 'react';
import Book from '../models/Book';

class EditBook extends React.Component{

  onEdit = (event) => {
    event.preventDefault();
    //code d'edition du book
    const book = new Book(
      document.getElementById('iban').value,
      document.getElementById('title').value,
      document.getElementById('date_publication').value,
      document.getElementById('prix').value
    );
    this.props.onEditBook(book);
  }

  render(){
    return (
      <div>
        <h1>Editer un livre</h1>
        <form onSubmit={this.onEdit}>
          <div className="mb-3">
            <label htmlFor="iban">Iban</label>
            <input type="text" name="iban" id="iban" defaultValue={this.props.bookToEdit?this.props.bookToEdit.iban:''} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="title">Titre</label>
            <input type="text" name="title" id="title" defaultValue={this.props.bookToEdit?this.props.bookToEdit.title:''} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="date_publication">Date de publication</label>
            <input type="date" name="date_publication" id="date_publication" defaultValue={this.props.bookToEdit?this.props.bookToEdit.date_publication:''} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="prix">Prix</label>
            <input type="number" name="prix" id="prix" defaultValue={this.props.bookToEdit?this.props.bookToEdit.prix:''} className="form-control" />
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
