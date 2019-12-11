import React, { Component } from 'react';
import '../css/App.css';

import AddAppointments from './AddAppointments';
import ListRepairs from './ListRepairs';
import SearchAppointments from './SearchAppointments';

import { without, findIndex } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myRepairs : [],
      formDisplay: false,
      orderBy : 'repairDate',
      orderDir : 'asc',
      queryText : '',
      lastIndex : 0
    }
    this.deleteRepair = this.deleteRepair.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addRepair = this.addRepair.bind(this);
    this.changeOrder = this.changeOrder.bind(this); 
    this.searchRepairs = this.searchRepairs.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
        .then(result => {
          const repairs = result.map(item => {
            item.repairId = this.state.lastIndex;
            this.setState({ lastIndex : this.state.lastIndex + 1 })
            return item;
          });
          this.setState({
            myRepairs : repairs
          });
        });
  }

  toggleForm() {
    this.setState({
      formDisplay : !this.state.formDisplay
    })
  }

  searchRepairs(query) {
    this.setState({ queryText : query })
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy : order,
      orderDir : dir
    })
  }

  updateInfo(name, value, id) {
    let tempRepairs = this.state.myRepairs;
    let repairIndex = findIndex(this.state.myRepairs, {
      repairId : id
    });
    tempRepairs[repairIndex][name] = value;
    this.setState({
      myRepairs : tempRepairs
    });
  }

  addRepair(repair) {
    let tempRepairs = this.state.myRepairs;
    repair.repairId = this.state.lastIndex;
    tempRepairs.unshift(repair);
    this.setState({
      myRepairs: tempRepairs,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteRepair(repair) {
    let tempRepairs = this.state.myRepairs;
    tempRepairs = without(tempRepairs, repair);

    this.setState({
      myRepairs: tempRepairs
    });
  }

  render() {
    
    let order;
    let filteredrepairs = this.state.myRepairs;
    
    if(this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredrepairs = filteredrepairs.sort((a, b) => {
      if(a[this.state.orderBy].toLowerCase() < b[this.state.orderBy].toLowerCase()) {
        return -1 * order;
      } else {
        return 1 * order;
      }
    }).filter(eachItem => {
      return(
        eachItem['customerName'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        eachItem['operatingSystem'].toLowerCase().includes(this.state.queryText.toLowerCase()) ||
        eachItem['repairNotes'].toLowerCase().includes(this.state.queryText.toLowerCase())
      );
    });

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments 
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addRepair={this.addRepair}
                />
                <SearchAppointments 
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchRepairs={this.searchRepairs}
                />
                <ListRepairs repairs={filteredrepairs}
                  deleteRepair={this.deleteRepair}
                  updateInfo={this.updateInfo}
                /> 
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
