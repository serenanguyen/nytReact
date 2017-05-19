var React = require("react");

var Search = React.createClass({

    getInitialState: function(){
        return{topic:"",startDate:"",endDate:""};
    },

    handleChange: function(event){
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },

    handleSubmit: function(event){
        event.preventDefault();

        // set parent to have the search term
        this.props.setSearch({topic:this.state.topic, startYear:this.state.startYear, endYear:this.state.endYear});
    },

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
                                   value={this.state.topic}
                                   className="form-control"
                                   id="topic"
                                   onChange={this.handleChange}
                                   required
                            />

                            <h3>Start Year</h3>
                            <input type="number"
                                   value={this.state.startYear}
                                   className="form-control"
                                   id="startYear"
                                   onChange={this.handleChange}
                                   required
                            />

                            <h3>End Year</h3>
                            <input type="number"
                                   value={this.state.endYear}
                                   className="form-control"
                                   id="endYear"
                                   onChange={this.handleChange}
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
