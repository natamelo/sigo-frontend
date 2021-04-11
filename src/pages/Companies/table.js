import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact';


class Table extends Component {
  render() {
    const { columns, companies: rows } = this.props
    const data = { columns, rows }

    return (
      <MDBDataTable
        infoLabel={["Mostrando", "a", "de", "itens"]}
        searchLabel="Buscar"
        paginationLabel={["Anterior", "Próximo"]}
        entriesLabel="Página"
        noRecordsFoundLabel="Nenhum registro encontrado"
        striped
        bordered
        small
        data={data}
      />
    )
  }
}

export default Table