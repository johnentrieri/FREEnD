import React, {Component} from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';
import CharacterEditor from '../../Components/CharacterEditor/CharacterEditor';
import CharacterMain from '../../Components/CharacterMain/CharacterMain';

const API_URL = "http://localhost:5000";

class FREEnD extends Component {
    state = {
        id : 12345,
        currentPage : "main",
        data : {}
    }

    componentDidMount() {
        axios.get(API_URL + '/characters/' + this.state.id)
        .then( (response) => {
            const charData = response.data;
            this.setState({ data : charData });
        })
    }

    componentDidUpdate(prevProps, prevState) {}

    mainClickedHandler = () => {
        this.setState( {currentPage : "main"} );
    }

    editClickedHandler = () => {
        this.setState( {currentPage : "edit"} );
    }

    applyClickedHandler = () => {
        let bodyFormData = new FormData();
        const inputs = document.getElementsByTagName('input');
        
        for (let input of inputs) {
            if (input.value !== "") {
                bodyFormData.set(input.id,input.value);
            }
        }

        axios({
            method: 'post',
            url: API_URL + '/modifyCharacterInfo/' + this.state.id,
            data: bodyFormData,
            headers: {'Content-Type': 'multipart/form-data' }
        })
        .then( (response) => {
            console.log(response.status);
        })
        .then(
            axios.get(API_URL + '/characters/' + this.state.id)
            .then( (response) => {
                const charData = response.data;
                this.setState({ data : charData , currentPage : "main" });
            })
        )
    }

    render() {

        const pages = [
            { name : "Character", handler: this.mainClickedHandler },
            { name : "Edit Character", handler: this.editClickedHandler },
        ]

        let page = null;

        switch(this.state.currentPage) {
            case "main":
                page = <CharacterMain data={this.state.data}/>
                break;
            case "edit":
                page = <CharacterEditor data={this.state.data} applyHandler={this.applyClickedHandler}/>
                break;
            default:
                page = <CharacterMain data={this.state.data}/>
                break;
        }

        return (
            <div>
                <NavBar pageData={pages}/>
                <h1>FREEnD</h1>
                {page}
            </div>
        )
    }
};

export default FREEnD;