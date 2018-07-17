import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, ImagePicker} from 'antd-mobile';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import {getCsrfToken, upload} from './components/Axios';

@observer
class App extends Component {

    @observable
    a = null;

    @observable
    csrfToken = null;

    state = {
        files: [],
    };

    componentDidMount() {
        this.a = 'this is mobX Decorators';
        this._getCsrfToken();
    }

    _getCsrfToken = async () => {
        try {
            const result = await getCsrfToken();
            if (result.success) {
                console.log('result.csrf', result);
                this.csrfToken = result.csrf;
            }
        } catch (e) {
            console.log('e', e);
        }
    };


    onChange = (files = [], type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    };


    onUploadProgress = (e) => {
        console.log('e', e);
    };

    onSubmitImage = async () => {
        const {files} = this.state;
        if (files.length === 0) {
            return;
        }
        try {
            let params = new FormData();
            files.forEach(item => {
                const {file, url} = item;
                params.append(file.name, url);
            });
            params.append('a', 'a');
            params.append('b', 'b');
            const config = {
                headers: {'Content-Type': 'multipart/form-data'},
                onUploadProgress: this.onUploadProgress
            };

            const result = await upload(params, config);
            console.log('result', result);
        } catch (e) {
            console.log('e', e);
        }

    };

    render() {
        const {files} = this.state;
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                    {this.a}
                </p>
                <Button
                    onClick={this.onSubmitImage}
                >
                    上传图片
                </Button>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 5}
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                />
            </div>
        );
    }
}

export default App;
