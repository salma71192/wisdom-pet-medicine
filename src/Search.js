import React, { Component } from 'react';

class Search extends Component {

  handleSort = (e) => {
    e.preventDefault();
    this.props.reOrder(e.target.id, this.props.orderDir);
  }

  handleOrder = (e) => {
    e.preventDefault();
    this.props.reOrder(this.props.orderBy, e.target.id);
  }

  handleSearch = (e) => {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchApts" placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" onChange={this.handleSearch} />
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span></button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#petName" id="petName" onClick={this.handleSort}>Pet Name {(this.props.orderBy === 'petName') ? <span className="glyphicon glyphicon-ok pull-right"></span> : null }</a></li>
                  <li><a href="#aptDate" id="aptDate" onClick={this.handleSort}>Date {(this.props.orderBy === 'aptDate') ? <span className="glyphicon glyphicon-ok pull-right"></span> : null }</a></li>
                  <li><a href="#ownerName" id="ownerName" onClick={this.handleSort}>Owner {(this.props.orderBy === 'ownerName') ? <span className="glyphicon glyphicon-ok pull-right"></span> : null }</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#asc" id="asc" onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok pull-right"></span> : null }</a></li>
                  <li><a href="#desc" id="desc" onClick={this.handleOrder}>Desc {(this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok pull-right"></span> : null }</a></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    ) // return
  } // render
} // Appointment className

export default Search;
