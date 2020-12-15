import React from 'react';

const ListBooks = (props) => {


  return (
    <div>
    <h1>Liste des livres</h1>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">IBAN</th>
          <th scope="col">Title</th>
          <th scope="col">Date de publication</th>
          <th scope="col">Prix</th>
        </tr>
      </thead>
      <tbody>

      {
        props.bookList.map(
        (book) => {
          return (
            <tr key={book.iban}>
              <th scope="row">{book.iban}</th>
              <td>{book.title}</td>
              <td>{book.date_publication}</td>
              <td>{book.prix}</td>
            </tr>
          )
        })
      }

      </tbody>
    </table>
    </div>
  );
  ///return <div>Hello</div>;
};

export default ListBooks;
