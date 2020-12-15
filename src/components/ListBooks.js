import React from 'react';


class ListBooks extends React.Component {

  onDelete = (event) => {
    //console.log(event);
    //const indice = event.target.dataset.indice;
    this.props.onDeleteBook(event.target.dataset.indice);
  }

  onShowEdit = (event) => {
    this.props.onShowEdit(event.target.dataset.indice);
  }

  onShowAdd = () => {
    this.props.onShowAdd();
  }

  render(){

    return (
      <div>
      <h1>Liste des livres</h1>
      <input type="button" className="btn btn-success" value="Ajouter" onClick={this.onShowAdd} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">IBAN</th>
            <th scope="col">Title</th>
            <th scope="col">Date de publication</th>
            <th scope="col">Prix</th>
            <th scope="col">Editer</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>

        {
          this.props.bookList.map(
          (book, index) => {
            return (
              <tr key={index}>
                <th scope="row">{book.iban}</th>
                <td>{book.title}</td>
                <td>{book.date_publication}</td>
                <td>{book.prix}</td>
                <td><input type="button" className="btn btn-info" value="Editer" data-indice={index} onClick={this.onShowEdit} /></td>
                <td><input type="button" className="btn btn-danger" value="Supprimer" data-indice={index} onClick={this.onDelete}/></td>
              </tr>
            )
          })
        }

        </tbody>
      </table>
      </div>
    );

  }
  ///return <div>Hello</div>;
};

export default ListBooks;
