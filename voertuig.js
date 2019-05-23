
"use strict"

class Voertuig {
    constructor (model, kleur, aantalwielen) {
        this.model = model;
        this.aantalwielen = aantalwielen;
    }
}

class BrandstofAuto extends Voertuig {
    constructor (model, kleur, aantalwielen, brandstoftype, tankinhoud) {
        super (model, kleur, aantalwielen);
        brandstoftype = brandstoftype;
        this.tankinhoud = tankinhoud;
    }
}

class ElektrischeAuto extends Voertuig {
    constructor (model, kleur, aantalwielen, accucapaciteit) {
        super (model, kleur, aantalwielen);
        this.accucapaciteit = accucapaciteit;
    }
}

class VoertuigFactory {
    produceerVoertuig = (type, eigenschappen) => {
        if (type == "BrandstofAuto") {
            return new BrandstofAuto (eigenschappen.model, eigenschappen.kleur, eigenschappen.aantalwielen, eigenschappen.brandstoftype, eigenschappen.tankinhoud);
        } else if (type == "ElektrischeAuto") {
            return new ElektrischeAuto (eigenschappen.model, eigenschappen.kleur, eigenschappen.aantalwielen, eigenschappen.accucapaciteit);
        }
    }
}

const mijnAutofabriek = new VoertuigFactory();

const mijnBenzineAuto = mijnAutofabriek.produceerVoertuig("BrandstofAuto", {
    model: "Opel Corsa",
    kleur: "kanariegeel",
    aantalwielen: 3,
    brandstoftype: "benzine",
    tankinhoud: 40
});

const mijnElektrischeAuto = mijnAutofabriek.produceerVoertuig("ElektrischeAuto", {
    model: "Tesla Model S",
    kleur: "donkerwit",
    aantalwielen: 4,
    accucapaciteit: 100
});

console.log(mijnBenzineAuto);
console.log(mijnElektrischeAuto);