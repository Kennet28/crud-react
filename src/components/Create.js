import React from 'react';
import { Link } from 'react-router-dom';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "" }
    }
    sendData = (e) => {
        const { name, email } = this.state;
        e.preventDefault();
        var data = {nombre:name, correo:email}
        fetch("https://workersapi.000webhostapp.com/?create=1", {
            method:"POST",
            body:JSON.stringify(data)
        }).then((data) => {
          this.props.history.push("/");
        })
        .catch(console.log);

    }
    changeValue = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState({ state });
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
                                value={name} className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write a name</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <input type="text" name="email" id="email"
                                onChange={this.changeValue}
                                value={email} className="form-control" placeholder="" aria-describedby="helpId" />
                            <small id="helpId" className="text-muted">Write a email</small>
                        </div>
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