import React from 'react';
import {markdown} from 'markdown';
import './App.css';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mdText: '',
            htmlText: '',
            // isExpanded: false
        };
    }

    makeFontBroad() {
        let fontBroad = '**';
        this.setState({
            mdText: `${this.state.mdText}${fontBroad}加粗${fontBroad}`
        });
    }

    makeFontSize() {
        // this.setState({
        //     isExpanded: true
        // });
        // let fontBroad = '#';
        // this.setState({
        //     mdText: `${this.state.mdText}${fontBroad}${fontBroad}`
        // });
    }

    makeFontItalic() {
        let fontItalic = '*';
        this.setState({
            mdText: `${this.state.mdText}${fontItalic}替换斜体${fontItalic}`
        });
    }

    addLink() {
        let fontLink = '[链接名称](链接URL)';
        this.setState({
            mdText: `${this.state.mdText}${fontLink}`
        });
    }

    mdParse(event) {
        let value = event.target.value;
        let htmlText = markdown.toHTML(value);
        this.setState({
            mdText: value,
            htmlText: htmlText
        });
    }

    render() {
        return (
            <div className="body">

                <div className="slogan">
                    <h3>一个不怎么好用的Markdown编辑器</h3>
                </div>

                <div className="header container">
                    <div className="btn-group">
                        <a className="btn" role="button" onClick={this.makeFontBroad.bind(this)}>
                            <i className="fa fa-bold"></i>
                        </a>
                        <a className="btn" role="button" onClick={this.makeFontItalic.bind(this)}>
                            <i className="fa fa-italic"></i>
                        </a>
                        <a className="btn" role="button" onClick={this.addLink.bind(this)}>
                            <i className="fa fa-link"></i>
                        </a>
                    </div>
                    <div className="btn-group">
                        <a className="btn dropdown-toggle"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="fa fa-header"></i>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a role="button"><h1>abcdefg</h1></a></li>
                            <li><a role="button"><h2>abcdefg</h2></a></li>
                            <li><a role="button"><h3>abcdefg</h3></a></li>
                        </ul>
                    </div>
                </div>

                <div className="content">
                    <div className="text-input">
                        <textarea cols="60" className="text-danger" rows="12" wrap="hard" value={this.state.mdText} onInput={this.mdParse.bind(this)} placeholder="** 在此处输入Markdown文档 **"></textarea>
                    </div>
                    <div className="text-preview">
                        <div dangerouslySetInnerHTML={{__html: this.state.htmlText}}></div>
                    </div>
                </div>

            </div>
        );
    }
}
