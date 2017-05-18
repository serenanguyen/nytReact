var React = require("react");

var Search = React.createClass({
        render: function(){
            return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title text-center">Search</h3>
                    </div>
                    <div className="panel-body text-center">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <h3>Topic</h3>
                                <input type="text"
                                       // value={this.state.text}
                                       className="form-control"
                                       id="topic"
                                       // onChange={this.handleChange}
                                       required
                                />

                                <h3>Start Date</h3>
                                <input type="date"
                                       // value={this.state.startYear}
                                       className="form-control"
                                       id="startYear"
                                       // onChange={this.handleChange}
                                       required
                                />

                                <h3>End Date</h3>
                                <input type="date"
                                       // value={this.state.endYear}
                                       className="form-control"
                                       id="endYear"
                                       // onChange={this.handleChange}
                                       required
                                />
                                <button className="btn btn-primary"
                                        type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
    });

module.exports = Search;
