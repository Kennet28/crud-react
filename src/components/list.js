import React from 'react';
import { Link } from "react-router-dom";
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeData: false,
            workers: []
        }
    }
    dataDelete = (id) => {
        fetch("https://workersapi.000webhostapp.com/?delete=" + id)
            .then(response => response.json())
            .then((data) => {
                this.dataCharge();
            })
            .catch(console.log);
    }
    dataCharge() {
        fetch("https://workersapi.000webhostapp.com/")
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
                        <table className="table">
                            <thead>
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
                                        (worker) => (
                                            <tr key={worker.id}>
                                                <td>{worker.id}</td>
                                                <td>{worker.name}</td>
                                                <td>{worker.email}</td>
                                                <td>
                                                    <div className="btn-group" role="group" aria-label="">
                                                        <Link to={"/Edit"} className="btn btn-warning">Edit</Link>
                                                        <button onClick={() => this.dataDelete(worker.id)}
                                                            className="btn btn-danger">Delete</button>
                                                    </div>

                                                </td>
                                            </tr>
                                        )
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
            );
        }
    }
}

export default List;