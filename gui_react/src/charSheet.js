import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';

class CharacterSheetForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = { race : ""};
  }

  dynamicSubraces() {
    this.setState({race: document.getElementById('race').value});
  }


    render() {

        let subrace = <select className="custom-select" id="subrace"></select>;
        if (this.state.race === "Halfling") {
          subrace = <select className="custom-select" id="subrace"><option selected></option><option>Lightfoot</option><option>Stout</option></select>      
        }

        return (
        <div>
            <div className="form-group text-center row">
                <div className="col-sm-12"><h3>Passphrase</h3></div>
            </div>
        <div className="form-group text-left row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Username:</label></div>
          <div className="col-sm-5"><input type="text" className="form-control" id="username"></input></div>
          <div className="col-sm-4"></div>
        </div>
        <div className="form-group text-left row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Password:</label></div>
          <div className="col-sm-5"><input type="password" className="form-control" id="password"></input></div>
          <div className="col-sm-3"></div>
        </div>
        <div className="form-group text-left row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Confirm Password:</label></div>
          <div className="col-sm-5"><input type="password" className="form-control" id="confirmPassword"></input></div>
          <div className="col-sm-3"></div>
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
          <div className="col-sm-2">
            <select className="custom-select" id="class">
              <option selected></option>
              <option>Barbarian</option>
              <option>Bard</option>
              <option>Cleric</option>
              <option>Druid</option>
              <option>Fighter</option>
              <option>Monk</option>
              <option>Paladin</option>
              <option>Ranger</option>
              <option>Rogue</option>
              <option>Sorcerer</option>
              <option>Warlock</option>
              <option>Wizard</option>
            </select>
          </div>
          <div className="col-sm-1 text-right"><label>Age:</label></div>
          <div className="col-sm-2"><input type="text" className="form-control" id="age"></input></div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Race:</label></div>
          <div className="col-sm-3">
            <select className="custom-select" id="race" onChange={() => this.dynamicSubraces()}>
              <option selected></option>
              <option>Dragonborn</option>
              <option>Dwarf</option>
              <option>Elf</option>
              <option>Gnome</option>
              <option>Half-Elf</option>
              <option>Halfling</option>
              <option>Half-Orc</option>
              <option>Human</option>
              <option>Tiefling</option>
              <option>Sorcerer</option>
              <option>Warlock</option>
              <option>Wizard</option>
            </select>
          </div>
          <div className="col-sm-2 text-right"><label>Subrace:</label></div>
          <div className="col-sm-3">            
              {subrace}
          </div>
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
          <div className="col-sm-3">
            <select className="custom-select" id="background">
              <option selected></option>
              <option>Acolyte</option>
              <option>Charlatan</option>
              <option>Criminal / Spy</option>
              <option>Entertainer</option>
              <option>Folk Hero</option>
              <option>Gladiator</option>
              <option>Guild Artisan / Guild Merchant</option>
              <option>Hermit</option>
              <option>Knight</option>
              <option>Noble</option>
              <option>Outlander</option>
              <option>Pirate</option>
              <option>Sage</option>
              <option>Sailor</option>
              <option>Soldier</option>
              <option>Urchin</option>
            </select>
          </div>
          <div className="col-sm-2 text-right"><label>Alignment:</label></div>
          <div className="col-sm-3">
            <select className="custom-select" id="alignment">
              <option selected></option>
              <option>Lawful Good</option>
              <option>Neutral Good</option>
              <option>Chaotic Good</option>
              <option>Lawful Neutral</option>
              <option>Neutral</option>
              <option>Chaotic Neutral</option>
              <option>Lawful Evil</option>
              <option>Neutral Evil</option>
              <option>Chaotic Evil</option>
            </select>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="form-group text-center row">
          <div className="col-sm-1"></div>
          <div className="col-sm-2 text-right"><label>Max Hit Points:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="maxHP"></input></div>
          <div className="col-sm-2 text-right"><label>Armor Class:</label></div>
          <div className="col-sm-3"><input type="text" className="form-control" id="armorClass"></input></div>
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
}

export default CharacterSheetForm;
 