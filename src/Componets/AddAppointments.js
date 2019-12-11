import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa'

class AddAppointments extends Component {

    constructor() {
        super();
        this.state = {
            customerName : '',
            operatingSystem : '',
            repairDate : '',
            repairTime : '',
            repairNotes : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();
        let tempRepair = {
            customerName : this.state.customerName,
            operatingSystem : this.state.operatingSystem,
            repairDate : this.state.repairDate + ' ' + this.state.repairTime,
            repairNotes : this.state.repairNotes
        }

        this.props.addRepair(tempRepair);

        this.setState({
            customerName : '',
            operatingSystem : '',
            repairDate : '',
            repairTime : '',
            repairNotes : ''
        });

        this.props.toggleForm();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <div className={
                'card textcenter mt-3 ' +
                (this.props.formDisplay ? '' : 'add-repair')
            }>
                <div className="rpr-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}
                >
                   <FaPlus /> Add Repair
                </div>

                <div className="card-body">
                <form id="rprForm" noValidate onSubmit={this.handleAdd}>
                    <div className="form-group form-row">
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="customerName"
                        readOnly
                    >
                        Customer Name
                    </label>
                    <div className="col-md-10">
                        <input
                        type="text"
                        className="form-control"
                        name="customerName"
                        placeholder="Customer Name"
                        vale={this.state.customerName}
                        onChange={this.handleChange}
                        />
                    </div>
                    </div>
    
                    <div className="form-group form-row">
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="operatingSystem"
                    >
                        Operating System
                    </label>
                    <div className="col-md-10">
                        <input
                        type="text"
                        className="form-control"
                        name="operatingSystem"
                        placeholder="Operating System"
                        vale={this.state.operatingSystem}
                        onChange={this.handleChange}
                        />
                    </div>
                    </div>
    
                    <div className="form-group form-row">
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="repairDate"
                    >
                        Date
                    </label>
                    <div className="col-md-4">
                        <input
                        type="date"
                        className="form-control"
                        name="repairDate"
                        id="repairDate"
                        vale={this.state.repairDate}
                        onChange={this.handleChange}
                        />
                    </div>
                    <label
                        className="col-md-2 col-form-label text-md-right"
                        htmlFor="repairTime"
                    >
                        Time
                    </label>
                    <div className="col-md-4">
                        <input
                        type="time"
                        className="form-control"
                        name="repairTime"
                        id="repairTime"
                        vale={this.state.repairTime}
                        onChange={this.handleChange}
                        />
                    </div>
                    </div>
    
                    <div className="form-group form-row">
                    <label className="col-md-2 text-md-right" htmlFor="aptNotes">
                        Repair Notes
                    </label>
                    <div className="col-md-10">
                        <textarea
                        className="form-control"
                        rows="4"
                        cols="50"
                        name="repairNotes"
                        id="repairNotes"
                        placeholder="Repair Notes"
                        vale={this.state.repairNotes}
                        onChange={this.handleChange}
                        />
                    </div>
                    </div>
    
                    <div className="form-group form-row mb-0">
                    <div className="offset-md-2 col-md-10">
                        <button
                        type="submit"
                        className="btn btn-primary d-block ml-auto"
                        >
                        Add Repair
                        </button>
                    </div>
                    </div>
                </form>
                </div>
          </div>  
        );
    }
}

export default AddAppointments;