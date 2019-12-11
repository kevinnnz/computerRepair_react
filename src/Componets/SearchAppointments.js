import React, { Component } from 'react';

class SearchAppointments extends Component {
    render() {
        return (
            <div className="search-appointments row justify-content-center my-4">
                <div className="col-md-6">
                    <div className="input-group">
                        <input
                        id="SearchRepairs"
                        type="text"
                        className="form-control"
                        aria-label="Search Repairs"
                        onChange={(e) => this.props.searchRepairs(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                type="button"
                                className="btn btn-primary dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Sort by: <span className="caret" />
                            </button>
            
                            <div className="sort-menu dropdown-menu dropdown-menu-right">
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'repairDate' ? 'active' : '')
                                } 
                                onClick={(e) => this.props.changeOrder('repairDate', this.props.orderDir)}
                                href="#">
                                Date
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'customerName' ? 'active' : '')
                                } 
                                onClick={(e) => this.props.changeOrder('customerName', this.props.orderDir)}
                                href="#">
                                Customer Name
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderBy === 'operatingSystem' ? 'active' : '')
                                }
                                onClick={(e) => this.props.changeOrder('operatingSystem', this.props.orderDir)}
                                href="#">
                                Operating System
                                </button>
                                <div role="separator" className="dropdown-divider" />
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'asc' ? 'active' : '')
                                } 
                                onClick={(e) => this.props.changeOrder(this.props.orderBy, 'asc')}
                                href="#">
                                Asc
                                </button>
                                <button className={
                                    'sort-by dropdown-item ' +
                                    (this.props.orderDir === 'desc' ? 'active' : '')
                                }
                                onClick={(e) => this.props.changeOrder(this.props.orderBy, 'desc')}
                                href="#">
                                Desc
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>    
        );
    }
}

export default SearchAppointments;