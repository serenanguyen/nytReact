var React = require("react");
var helpers = require("../utils/helpers");

var Saved = React.createClass({

    getInitialState: function(){
        return {
            savedArticles: []
        }
    },

    componentDidUpdate: function(){
        // helpers.getSaved()
        //     .then(function(articleData){
        //         if(articleData !== this.state.savedArticles){
        //             this.setState({
        //                 savedArticles: articleData.data
        //             });
        //         }
        //     }.bind(this));
        console.log("change in save")
    },


    deleteArticle: function(article){
        helpers.deleteArticle(article.title)
            .then(function(data){
                helpers.getSaved()
                    .then(function(articleData){
                        this.setState({
                            savedAticles: articleData.data
                        });
                    }.bind(this))
            }.bind(this))
    },

    render: function(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved Articles</h3>
                </div>
                <div className="panel-body text-center">
                    {this.props.saved.map(function(search, i){
                        return (
                            <div key={i}>
                                <p>{search.title}</p>
                                <span><button className="btn btn-primary btn-lg"
                                    type="button"
                                    onClick={this.deleteArticle.bind(this, search)}
                                    >
                                    Delete
                                </button></span>
                            </div>
                            );
                    }.bind(this))}
                </div>
            </div>
        )
    }
});

module.exports = Saved;