import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';


class ListRepairs extends Component {
    render() {
        return (
            <div className="repair-list item-list mb-3">
                {this.props.repairs.map(item => (
                    <div className="customer-item col media py-3" key={item.repairId}>
                        <div className="mr-3">
                            <button className="customer-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteRepair(item)}>
                                <FaTimes />
                            </button>
                        </div>
            
                        <div className="customer-info media-body">
                            <div className="customer-head d-flex">
                            <span className="customer-name"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur = {
                                (e) => this.props.updateInfo('customerName', e.target.innerText, item.repairId)
                            }
                            >{item.customerName}</span>
                            <span className="repair-date ml-auto">
                                <Moment
                                    date={ item.repairDate }
                                    parse="YYYY-MM-DD hh:mm"
                                    format="MMM D YYYY @ h:mma"
                                />
                            </span>
                            </div>
            
                            <div className="owner-name"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur = {
                                (e) => this.props.updateInfo('operatingSystem', e.target.innerText, item.repairId)
                            }>
                            <span className="label-item" contentEditable={false}>OS: </span>
                            <span>{item.operatingSystem}</span>
                            </div>
                            <div className="repair-notes"
                            contentEditable
                            suppressContentEditableWarning
                            onBlur = {
                                (e) => this.props.updateInfo('repairNotes', e.target.innerText, item.repairId)
                            }>{item.repairNotes}</div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListRepairs;