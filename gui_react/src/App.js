import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';

var defaults = require('./defaults');
var calculateStats = require('./calc');

class App extends React.Component {

  constructor(props) {
    super(props);
      var tempStats = defaults;
      this.state = calculateStats(tempStats);
  }

  plusString(val){if(val>=0){return("+"+val)}else{return(val)}}

  renderAbility(item) {
    return( <p><b>{item.label + ": "}</b>{item.base + " [" + this.plusString(item.modifier) + "]"}</p> );
  }

  renderAbilityCheck(item) {
    return( <p><b>{item.label + ": "}</b>{this.plusString(item.checkModifier)}</p> );
  }

  renderSavingThrow(item) {
    return( <p><b>{item.label + ": "}</b>{this.plusString(item.saveModifier)}</p> );
  }

  renderSkill(item) {
    return( <p><b>{item.label + ": "}</b>{this.plusString(item.modifier)}</p> );
  }

  renderNavBar() {
    let characterLink, backpackLink, combatLink, personalLink, campaignLink

    characterLink = <a className={this.state.currentPage === 'character' ? "nav-link active" : "nav-link"} href="#" onClick={() => this.setState({currentPage:'character'})}>Character</a>
    backpackLink = <a className={this.state.currentPage === 'backpack' ? "nav-link active" : "nav-link"} href="#" onClick={() => this.setState({currentPage:'backpack'})}>Backpack</a>
    combatLink = <a className={this.state.currentPage === 'combat' ? "nav-link active" : "nav-link"} href="#" onClick={() => this.setState({currentPage:'combat'})}>Combat</a>
    personalLink = <a className={this.state.currentPage === 'personal' ? "nav-link active" : "nav-link"} href="#" onClick={() => this.setState({currentPage:'personal'})}>Personal</a>
    campaignLink = <a className={this.state.currentPage === 'campaign' ? "nav-link active" : "nav-link"} href="#" onClick={() => this.setState({currentPage:'campaign'})}>Campaign</a>

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">FREEnD</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">{characterLink}</li><li className="nav-item">{backpackLink}</li><li className="nav-item">{combatLink}</li><li className="nav-item">{personalLink}</li><li className="nav-item">{campaignLink}</li>
            </ul>
          </div>
        </nav>
    );
  }

  renderCharacterPanel() {
    return (
      <div className="text-left pt-3">
        <img className="rounded-circle mb-3" width="140" height="140" alt="" src={this.state.character.art}></img>
        <h2>{this.state.character.firstName + " " + this.state.character.lastName}</h2>
        <p><b>Level: </b>{this.state.character.level}</p>
        <p><b>Class: </b>{this.state.character.class}</p>
        <p><b>Race: </b>{this.state.character.subrace + " " + this.state.character.race}</p>
        <p><b>Age: </b>{this.state.character.age}</p>
        <p><b>Height: </b>{this.state.character.height}</p>
        <p><b>Weight: </b>{this.state.character.weight}</p>
        <p><b>Background: </b>{this.state.character.background}</p>
        <p><b>Alignment: </b>{this.state.character.alignment}</p>
        <p><b>Languages: </b>{this.state.character.languages.map( (s) =>  s +"; ")}</p>
      </div>
    );
  }

  renderAbilitiesPanel() {
    return (
      <div className="text-left pt-3">
        <h3>Abilities</h3>
        {this.renderAbility(this.state.character.abilities.strength)}
        {this.renderAbility(this.state.character.abilities.dexterity)}
        {this.renderAbility(this.state.character.abilities.constitution)}
        {this.renderAbility(this.state.character.abilities.intelligence)}
        {this.renderAbility(this.state.character.abilities.wisdom)}
        {this.renderAbility(this.state.character.abilities.charisma)}
      </div>
    );
  }

  renderAbilityCheckPanel() {
    return (
      <div className="text-left pt-3">
        <h3>Ability Checks</h3>
        {this.renderAbilityCheck(this.state.character.abilities.strength)}
        {this.renderAbilityCheck(this.state.character.abilities.dexterity)}
        {this.renderAbilityCheck(this.state.character.abilities.constitution)}
        {this.renderAbilityCheck(this.state.character.abilities.intelligence)}
        {this.renderAbilityCheck(this.state.character.abilities.wisdom)}
        {this.renderAbilityCheck(this.state.character.abilities.charisma)}
      </div>
    );
  }

  renderSavingThrowPanel() {
    return (
      <div className="text-left pt-3">
        <h3>Saving Throws</h3>
        {this.renderSavingThrow(this.state.character.abilities.strength)}
        {this.renderSavingThrow(this.state.character.abilities.dexterity)}
        {this.renderSavingThrow(this.state.character.abilities.constitution)}
        {this.renderSavingThrow(this.state.character.abilities.intelligence)}
        {this.renderSavingThrow(this.state.character.abilities.wisdom)}
        {this.renderSavingThrow(this.state.character.abilities.charisma)}
      </div>
    );
  }

  renderSkillsPanel() {
    return (
      <div className="text-left pt-3">
        <h3>Skills</h3>
        {this.renderSkill(this.state.character.skills.acrobatics)}
        {this.renderSkill(this.state.character.skills.animal)}
        {this.renderSkill(this.state.character.skills.arcana)}
        {this.renderSkill(this.state.character.skills.athletics)}
        {this.renderSkill(this.state.character.skills.deception)}
        {this.renderSkill(this.state.character.skills.history)}
        {this.renderSkill(this.state.character.skills.insight)}
        {this.renderSkill(this.state.character.skills.intimidation)}
        {this.renderSkill(this.state.character.skills.investigation)}
        {this.renderSkill(this.state.character.skills.medicine)}
        {this.renderSkill(this.state.character.skills.nature)}
        {this.renderSkill(this.state.character.skills.perception)}
        {this.renderSkill(this.state.character.skills.performance)}
        {this.renderSkill(this.state.character.skills.persuasion)}
        {this.renderSkill(this.state.character.skills.religion)}
        {this.renderSkill(this.state.character.skills.sleight)}
        {this.renderSkill(this.state.character.skills.stealth)}
        {this.renderSkill(this.state.character.skills.survival)}

      </div>
    );
  }
  
  renderStatsPanel() {
    return (
      <div className="text-left pt-3">
          <h3>Statistics</h3>
          <p><b>Health Points: </b>{this.state.character.stats.hp + " / " + this.state.character.stats.maxHP}</p>
          <p><b>Hit Die: </b>{this.state.character.stats.hitDie + " / " + this.state.character.stats.maxHitDie + " [" + this.state.character.stats.hitDieType + "]"}</p>
          <p><b>Armor Class: </b>{this.state.character.stats.ac}</p>
          <p><b>Proficiency Bonus: </b>{this.plusString(this.state.character.stats.profBonus)}</p>
          <p><b>Speed: </b>{this.state.character.stats.speed}</p>
          <p><b>Passive Perception: </b>{this.state.character.stats.passPerception}</p>
          <p><b>Initiative Bonus: </b>{this.plusString(this.state.character.stats.initBonus)}</p>
          <p><b>Spell Attack Bonus: </b>{this.plusString(this.state.character.stats.spellAtkBonus)}</p>
          <p><b>Spell Save DC: </b>{this.state.character.stats.spellSaveDC}</p>
      </div>
    );
  }
  
  renderCharacterPage() {
    let characterPanel = this.renderCharacterPanel();
    let abilitiesPanel = this.renderAbilitiesPanel();
    let statsPanel = this.renderStatsPanel();
    let skillsPanel = this.renderSkillsPanel();
    let abilityCheckPanel = this.renderAbilityCheckPanel();
    let savingThrowPanel = this.renderSavingThrowPanel();
    return (
      <main role="main" className="container pt-5">
        <div className="row mt-4">
          <div className="col-lg-3">
            {characterPanel}
            {abilitiesPanel}
          </div>
          <div className="col-lg-3">
            {statsPanel}
          </div>
          <div className="col-lg-3">
            {skillsPanel}
          </div>
          <div className="col-lg-3">
            {abilityCheckPanel}
            {savingThrowPanel}
          </div>
        </div>
      </main>
    );
  }

  renderCharacterSheetForm() {
    return (
      <div>
        <div className="form-group text-center row">
          <div className="col-sm-12"><h3>Passphrase</h3></div>
        </div>
        <div className="form-group text-left row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2 text-right"><label>Passphrase:</label></div>
          <div className="col-sm-2"><input type="password" className="form-control" id="passphrase"></input></div>
          <div className="col-sm-6"></div>
        </div>
        <div className="form-group text-left row">
          <div className="col-sm-2"></div>
          <div className="col-sm-2 text-right"><label>Confirm Passphrase:</label></div>
          <div className="col-sm-2"><input type="password" className="form-control" id="confirmPassphrase"></input></div>
          <div className="col-sm-6"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-12 pt-3"><h3>Character Info</h3></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>First Name:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="firstName"></input></div>
          <div className="col-sm-2 text-right"><label>Last Name:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="lastName"></input></div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-left row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Level:</label></div>
          <div className="col-sm-2"><input type="text" className="form-control" id="level"></input></div>
          <div className="col-sm-1 text-right"><label>Class:</label></div>
          <div className="col-sm-2"><input type="text" className="form-control" id="class"></input></div>
          <div className="col-sm-1 text-right"><label>Age:</label></div>
          <div className="col-sm-2"><input type="text" className="form-control" id="age"></input></div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Race:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="race"></input></div>
          <div className="col-sm-2 text-right"><label>Subrace:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="subrace"></input></div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Height:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="height"></input></div>
          <div className="col-sm-2 text-right"><label>Weight:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="weight"></input></div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Background:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="background"></input></div>
          <div className="col-sm-2 text-right"><label>Alignment:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="alignment"></input></div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-12 pt-3"><h3>Abilities</h3></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-3"></div>
          <div className="col-sm-3"><label>Score</label></div>
          <div className="col-sm-2"><label>Check Proficiency</label></div>
          <div className="col-sm-2"><label>Save Proficiency</label></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Strength:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="strength"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="strProf"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="strSaveProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Dexterity:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="dexterity"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="dexProf"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="dexSaveProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Constitution:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="constitution"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="conProf"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="conSaveProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Intelligence:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="intelligence"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="intProf"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="intSaveProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Wisdom:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="wisdom"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="wisProf"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="wisSaveProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Charisma:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="charisma"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="charProf"></input></div>
          <div className="col-sm-2"><input type="checkbox" id="charSaveProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-12 pt-3"><h3>Skill Proficiencies</h3></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Acrobatics:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="acrobaticsProf"></input></div>
          <div className="col-sm-2 text-right"><label>Animal Handling:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="animalProf"></input></div>
          <div className="col-sm-2 text-right"><label>Arcana:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="arcanaProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Athletics:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="athleticsProf"></input></div>
          <div className="col-sm-2 text-right"><label>Deception:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="deceptionProf"></input></div>
          <div className="col-sm-2 text-right"><label>History:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="historyProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Insight:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="insightProf"></input></div>
          <div className="col-sm-2 text-right"><label>Intimidation:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="intimidationProf"></input></div>
          <div className="col-sm-2 text-right"><label>Investigation:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="investigationProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Medicine:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="medicineProf"></input></div>
          <div className="col-sm-2 text-right"><label>Nature:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="NatureProf"></input></div>
          <div className="col-sm-2 text-right"><label>Perception:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="perceptionProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Performance:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="performanceProf"></input></div>
          <div className="col-sm-2 text-right"><label>Persuasion:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="PersuasionProf"></input></div>
          <div className="col-sm-2 text-right"><label>Religion:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="religionProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Slight of Hand:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="sleightProf"></input></div>
          <div className="col-sm-2 text-right"><label>Stealth:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="stealthProf"></input></div>
          <div className="col-sm-2 text-right"><label>Survival:</label></div>
          <div className="col-sm-1"><input type="checkbox" id="survivalProf"></input></div>
          <div className="col-sm-2"></div>
        </div>
      </div>
    );
  }

  checkPassphrase() {
    //TODO - Password Logic
    this.setState({loggedIn : true});
  }

  renderLoginPage() {
    let characterCreationForm = this.renderCharacterSheetForm();

    return (
      <main role="main" className="container pt-5 text-center">
        <div className="row mt-4 pt-5">
          <div className="col-lg-4"></div>
          <div className="col-lg-4">
          <label>Enter Passphrase:</label>
            <input type="password" className="form-control" id="passInput" placeholder="Passphrase..."></input>
            <button className="btn btn-primary mt-2 mb-5" onClick={() => this.checkPassphrase()}>Submit</button>
            <p>OR</p>
            <button className="btn btn-primary mt-5"data-toggle="modal" data-target="#createCharModal">Create Character</button>
          </div>
          <div className="col-lg-4"></div>
        </div>
        <div className="modal fade" id="createCharModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a New Character</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {characterCreationForm}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Create Character</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>                
              </div>
            </div>
          </div>
        </div>    
      </main>
    );
  }

  render() {
    let navbar = this.renderNavBar();
    let body;
    if (!this.state.loggedIn) {
      body = this.renderLoginPage();
    } 
    
    else {
      if (this.state.currentPage === 'character') {
        body = this.renderCharacterPage();
      }
    }

    return (
      <div>
        {navbar}
        {body}
      </div>      
    );
  }
}

export default App;
