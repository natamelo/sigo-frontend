import React, { Component } from "react";
import Table from './table'
import api from "../../services/api";
import { withRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class Companies extends Component {
  state = {
    companies: []
  }

  async componentDidMount() {
    const response = await api.get("/companies");
    this.setState({ companies: response.data });
  }

  render() {
    const columns = [
      {
        label: 'Código',
        field: 'code',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Descrição',
        field: 'description',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Especialidade',
        field: 'speciality',
        sort: 'asc',
        width: 150
      }]

    return (
      <Table columns={columns} companies={this.state.companies} />

    )
  }
}

export default withRouter(Companies);