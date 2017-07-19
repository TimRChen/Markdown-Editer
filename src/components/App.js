import React from 'react';
import {markdown} from 'markdown';
import '../../node_modules/bulma/css/bulma.css';


export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mdText: '',
            htmlText: ''
        };
    }

    mdParse(event) {
        let value = event.target.value;
        let htmlText = markdown.toHTML(value)
        this.setState({
            mdText: value,
            htmlText: htmlText
        });
    }

    render() {
        return (
            <div className="body">
                <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        Markdown paser
                    </h1>
                    <h2 className="subtitle">
                        author by timrchen.
                    </h2>
                    </div>
                </div>
                </section>
                <div className="columns">
                    <div className="column">
                        <textarea cols="30" rows="10" className="textarea is-dark" value={this.state.mdText} onChange={this.mdParse.bind(this)}></textarea>
                    </div>
                    <div className="column">
                        <div className="preview">
                            {this.state.htmlText}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
