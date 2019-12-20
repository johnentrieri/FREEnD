import React, {Component} from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';
import CharacterEditor from '../../Components/CharacterEditor/CharacterEditor';
import CharacterMain from '../../Components/CharacterMain/CharacterMain';
import SpellBrowser from '../../Components/SpellBrowser/SpellBrowser';
import ItemBrowser from '../../Components/ItemBrowser/ItemBrowser';

const API_URL = "http://192.168.1.30:5000";

class FREEnD extends Component {
    state = {
        id : 12345,
        currentPage : "main",
        characterData : {},
        spells : [],
        items : [],
        currentSpell : {},
        currentItem : {}
    }

    componentDidMount() {
        axios.get(API_URL + '/characters/' + this.state.id)
        .then( (response) => {
            const charData = response.data;
            this.setState({ characterData : charData });
        })

        axios.get(API_URL + '/spells/')
        .then( (response) => {
            const spellsData = response.data.spells;
            this.setState({ spells : spellsData });
        })

        axios.get(API_URL + '/items/')
        .then( (response) => {
            const itemData = response.data.items;
            this.setState({ items : itemData });
        })



    }

    componentDidUpdate(prevProps, prevState) {}

    mainClickedHandler = () => {
        this.setState( {currentPage : "main"} );
    }

    editClickedHandler = () => {
        this.setState( {currentPage : "edit"} );
    }

    spellBrowserClickedHandler = () => {
        this.setState( {currentPage : "spells"} );
    }

    itemBrowserClickedHandler = () => {
        this.setState( {currentPage : "items"} );
    }

    spellClickedHandler = (spellName) => {
        let tempSpell = {};
        for(let spell of this.state.spells) {
            if(spellName === spell.spell) {
                tempSpell = spell;
            }
        }
        this.setState( {currentSpell : tempSpell } );
    }

    itemClickedHandler = (itemName) => {
        let tempItem = {};

        for(let item of this.state.items) {
            if(itemName === item.item) {
                tempItem = item;
            }
        }

        for(let item of this.state.characterData.inventory.items) {
            if(itemName === item.item) {
                tempItem = item;
            }
        }

        this.setState( {currentItem : tempItem } );
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
                this.setState({ characterData : charData , currentPage : "main" });
            })
        )
    }

    render() {

        const pages = [
            { name : "Character", handler: this.mainClickedHandler },
            { name : "Edit Character", handler: this.editClickedHandler },
            { name : "Spell Browser", handler: this.spellBrowserClickedHandler },
            { name : "ItemBrowser", handler: this.itemBrowserClickedHandler },
        ]

        let page = null;

        switch(this.state.currentPage) {
            case "main":
                page = <CharacterMain data={this.state.characterData} />
                break;
            case "edit":
                page = <CharacterEditor data={this.state.characterData} applyHandler={this.applyClickedHandler} />
                break;
            case "items":
                page = <ItemBrowser 
                    data={this.state.characterData}
                    itemData={this.state.items}
                    currItem={this.state.currentItem}
                    itemHandler = {this.itemClickedHandler}
                />
                break;
            case "spells":
                page = <SpellBrowser 
                    data={this.state.characterData}
                    spellData={this.state.spells}
                    currSpell={this.state.currentSpell}
                    spellHandler = {this.spellClickedHandler}
                />
                break;
            default:
                page = <CharacterMain data={this.state.characterData} />
                break;
        }

        return (
            <div>
                <NavBar pageData={pages}/>
                <h1 className="my-2">FREEnD</h1>
                {page}
            </div>
        )
    }
};

export default FREEnD;