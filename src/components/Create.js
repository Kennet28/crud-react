import React from 'react';
import { Link } from 'react-router-dom';
import Api from "../services/api";
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            errors: []
        }
    }

    verifyError(element) {
        return this.state.errors.indexOf(element) !== -1;
    }

    sendData = (e) => {
        const { name, email } = this.state;
        e.preventDefault();
        var data = { nombre: name, correo: email }
        var errors = [];
        if (!name) errors.push("error_name");
        if (!email) errors.push("error_email");

        this.setState({ errors: errors });
        if (errors.length > 0) return false;

        fetch(Api + "?create=1", {
            method: "POST",
            body: JSON.stringify(data)
        }).then((data) => {
            this.props.history.push("/");
        })
            .catch(console.log);

    }
    changeValue = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state, errors: [] });
    }
    render() {
        const { name, email } = this.state;
        return (
            <div className="card">
                <div className="card-header">
                    Workers
                </div>
                <div className="card-body">
                    <form onSubmit={this.sendData}>
                        <div className="form-group">
                            <label htmlFor="">Name:</label>
                            <input type="text" name="name" id="name"
                                onChange={this.changeValue}
                                value={name}
                                className={((this.verifyError("error_name")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="invalid-feedback">Write a name</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <input type="email" name="email" id="email"
                                onChange={this.changeValue}
                                value={email} className={((this.verifyError("error_email")) ? "is-invalid" : "") + " form-control"} placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="invalid-feedback">Write a email</small>
                        </div>
                        <br></br>
                        <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">Add new worker</button>
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

export default Create;