import React from 'react';
import { Link } from 'react-router-dom';
import Api from "../services/api";
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chargeData: false,
            worker: [],
            errors:[]
        }
    }
    verifyError(element) {
        return this.state.errors.indexOf(element) !== -1;
    }
    sendData = (e) => {
        const { id, name, email } = this.state.worker;
        e.preventDefault();
        var errors = [];
        var data = { id: id, nombre: name, correo: email }
        if (!name) errors.push("error_name");
        if (!email) errors.push("error_email");

        this.setState({ errors: errors });
        if (errors.length > 0) return false;
        fetch(Api + "?update=1", {
            method: "POST",
            body: JSON.stringify(data)
        }).then((data) => {
            this.props.history.push("/");
        })
            .catch(console.log);

    }
    changeValue = (e) => {
        const state = this.state.worker;
        state[e.target.name] = e.target.value;
        this.setState({ worker: state, errors: [] });
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        fetch(Api + "?read=" + id)
            .then(response => response.json())
            .then((data) => {
                this.setState({ chargeData: true, worker: data[0] })
            })
            .catch(console.log);
    }
    render() {
        const { chargeData, worker } = this.state;
        if (!chargeData) { return (<div>Loading...</div>) }
        else {
            return (
                <div className="card">
                    <div className="card-header">
                        Edit workers
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.sendData}>
                            <div className="form-group">
                                <label htmlFor="">Key:</label>
                                <input type="text" readOnly name="id" id="id" value={worker.id} onChange={this.changeValue} className="form-control" placeholder="" aria-describedby="helpId" />
                                <small id="helpId" className="text-muted">Worker's identification</small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">Name:</label>
                                <input type="text" name="name" id="name"
                                    onChange={this.changeValue}
                                    value={worker.name} className={((this.verifyError("error_name")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                                <small id="helpId" className="invalid-feedback">Write a name</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email:</label>
                                <input type="email" name="email" id="email"
                                    onChange={this.changeValue}
                                    value={worker.email} className={((this.verifyError("error_email")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                                <small id="helpId" className="invalid-feedback">Write a email</small>
                            </div>
                            <div className="btn-group" role="group" aria-label="">
                                <button type="submit" className="btn btn-success">Save</button>
                                <Link to={"/"} className="btn btn-primary">Cancel</Link>

                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-muted">

                    </div>
                </div>
            );
        }
    }
}

export default Edit;