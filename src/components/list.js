import React from 'react';
import { Link } from "react-router-dom";
import Api from "../services/api";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeData: false,
            workers: []
        }
    }
    dataDelete = (id) => {
        fetch(Api + "?delete=" + id)
            .then(response => response.json())
            .then((data) => {
                this.dataCharge();
            })
            .catch(console.log);
    }
    dataCharge() {
        fetch(Api)
            .then(response => response.json())
            .then((data) => {
                this.setState({ chargeData: true, workers: data })
            })
            .catch(console.log);
    }
    componentDidMount() {
        this.dataCharge();
    }
    render() {
        const { chargeData, workers } = this.state;
        if (!chargeData) { return (<div>Loading...</div>) }
        else {
            return (

                <div className="card">
                    <div className="card-header">
                        <Link to={"/create"} className="btn btn-success">Create a new worker</Link>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">List of workers</h4>
                        <hr></hr>
                        <div className="table-responsive">
                            <table className="table">
                                <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        workers.map(
                                            (worker) => {
                                                if (worker.success!==0) {
                                                    console.log(worker);
                                                    return (
                                                        <tr key={worker.id}>
                                                            <td>{worker.id}</td>
                                                            <td>{worker.name}</td>
                                                            <td>{worker.email}</td>
                                                            <td>
                                                                <div className="btn-group" role="group" aria-label="">
                                                                    <Link to={"/Edit/" + worker.id} className="btn btn-warning">Edit</Link>
                                                                    <button onClick={() => this.dataDelete(worker.id)}
                                                                        className="btn btn-danger">Delete</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    );
                                                }
                                                else {
                                                    return (
                                                        <tr key={""} className="text-danger">
                                                            <td>No data</td>
                                                            <td>No data</td>
                                                            <td>No data</td>
                                                            <td>No data</td>
                                                        </tr>
                                                    )

                                                }
                                            }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
            );
        }
    }
}

export default List;