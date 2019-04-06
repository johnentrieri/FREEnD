const defaults = {
    loggedIn : false,
    currentPage : "character",
    character : {
      art: "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==",
      firstName: "First",
      lastName: "Last",
      level: -9999,
      class: "NULL",
      race: "NULL",
      subrace: "NULL",
      age: -9999,
      height: "NULL",
      weight: "NULL",
      background: "NULL",
      alignment: "NULL",
      languages: [],
      abilities: {
        strength: {
          label: "Strength",
          base: -9999,
          modifier: -9999,
          checkModifier: -9999,
          saveModifier: -9999,
          checkProf: false,
          saveProf: false,
          mods: []
        },
        dexterity: {
          label: "Dexterity",
          base: -9999,
          modifier: -9999,
          checkModifier: -9999,
          saveModifier: -9999,
          checkProf: false,
          saveProf: false,
          mods: []
        },
        constitution: {
          label: "Constitution",
          base: -9999,
          modifier: -9999,
          checkModifier: -9999,
          saveModifier: -9999,
          checkProf: false,
          saveProf: false,
          mods: []
        },
        intelligence: {
          label: "Intelligence",
          base: -9999,
          modifier: -9999,
          checkModifier: -9999,
          saveModifier: -9999,
          checkProf: false,
          saveProf: false,
          mods: []
        },
        wisdom: {
          label: "Wisdom",
          base: -9999,
          modifier: -9999,
          checkModifier: -9999,
          saveModifier: -9999,
          checkProf: false,
          saveProf: false,
          mods: []
        },
        charisma: {
          label: "Charisma",
          base: -9999,
          modifier: -9999,
          checkModifier: -9999,
          saveModifier: -9999,
          checkProf: false,
          saveProf: false,
          mods: []
        }
      },
      stats: {
        hp: -9999,
        maxHP: -9999,
        hitDieType: "NULL",
        hitDie: -9999,
        maxHitDie: -9999,
        ac: -9999,
        profBonus: -9999,
        speed: -9999,
        passPerception: -9999,
        initBonus: -9999,
        spellAtkBonus: -9999,
        spellSaveDC: -9999
      },
      skills: {
        acrobatics: {
          label: "Acrobatics",
          primary: "Dexterity",
          proficiency: false,
          modifier: -9999,
          mods: []
        },
        sleight: {
          label: "Sleight of Hand",
          primary: "Dexterity",
          proficiency: false,
          modifier: -9999,
          mods: []
        },
        stealth: {
          label: "Stealth",
          primary: "Dexterity",
          proficiency: false,
          modifier: -9999,
          mods: []
        },
        athletics: {
          label: "Athletics",
          primary: "Strength",
          proficiency: false,
          modifier: -9999,
          mods: []
        },
        arcana: {
            label: "Arcana",
            primary: "Intelligence",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        history: {
            label: "History",
            primary: "Intelligence",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        investigation: {
            label: "Investigation",
            primary: "Intelligence",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        nature: {
            label: "Nature",
            primary: "Intelligence",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        religion: {
            label: "Religion",
            primary: "Intelligence",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        animal: {
            label: "Animal Handling",
            primary: "Wisdom",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        insight: {
            label: "Insight",
            primary: "Wisdom",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        medicine: {
            label: "Medicine",
            primary: "Wisdom",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        perception: {
            label: "Perception",
            primary: "Wisdom",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        survival: {
            label: "Survival",
            primary: "Wisdom",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        deception: {
            label: "Deception",
            primary: "Charisma",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        intimidation: {
            label: "Intimidation",
            primary: "Charisma",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        performance: {
            label: "Performance",
            primary: "Charisma",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
        persuasion: {
            label: "Persuasion",
            primary: "Charisma",
            proficiency: false,
            modifier: -9999,
            mods: []
        },
      }
    }
}

module.exports = defaults;