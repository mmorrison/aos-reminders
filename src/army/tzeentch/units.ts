import { TBattalions, TUnits } from 'types/army'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_SHOOTING_PHASE,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SHOOTING_PHASE,
} from 'types/phases'

// Unit Names
export const Units: TUnits = [
  {
    name: `Kairos Fateweaver`,
    effects: [
      {
        name: `Mastery of Magic`,
        desc: `When you make a casting or unbinding roll for Kairos Fateweaver, change the result of the lowest dice so that it matches the highest.`,
        when: [HERO_PHASE],
      },
      {
        name: `Oracle of Eternity`,
        desc: `Once per battle, you can change the result of a single dice roll to the result of your choosing. However, this ability may not be used to affect the roll to see who takes the first turn in a battle round.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Lord of Change`,
    effects: [
      {
        name: `Mastery of Magic`,
        desc: `When you make a casting or unbinding roll for a Lord of Change, change the result of the lowest dice so that it matches the highest.`,
        when: [HERO_PHASE],
      },
      {
        name: `Spell-thief`,
        desc: `If the result of an unbinding roll for a Lord of Change is 9 or more, it learns the spell that is being cast, and can cast it in subsequent turns.`,
        when: [HERO_PHASE],
      },
      {
        name: `Beacon of Sorcery`,
        desc: `If a Lord of Change uses this ability, then until your next hero phase you can add 1 to all casting and unbinding rolls made for friendly TZEENTCH DAEMON WIZARDSthat are within 18" of the Lord of Change.`,
        when: [HERO_PHASE],
        command: true,
      },
    ],
  },
  {
    name: `The Changeling`,
    effects: [
      {
        name: `Arch-deceiver`,
        desc: `After set-up is complete, you can remove the Changeling from the battlefield and set up it up again in your opponent's territory, more than 3" from any enemy units. Enemy units treat it as part of their own army – they can move within 3" of it but they cannot target it with spells or attacks, and so on. If it makes a charge move, attacks, casts or unbinds a spell, or is within 3" of an enemy Hero at the end of any phase, it is revealed and this ability no longer has an effect.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Puckish Misdirection`,
        desc: `Until the Changeling is revealed, you can pick one unit within 9" of it in each enemy hero phase. That unit halves its Move until your next hero phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Formless Horror`,
        desc: `In the combat phase, you can pick a melee weapon wielded by an enemy model within 3" of the Changeling, and use that weapon's Range, Attacks, To Hit, To Wound, Rend and Damage characteristics instead of those for the Trickster's Staff. If a weapon does not have a value for one or more of these characteristics (e.g. it is given as '*' or 'see below'), it cannot be picked.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Herald of Tzeentch`,
    effects: [
      {
        name: `Arcane Tome`,
        desc: `Once per battle, you can roll three dice instead of two for that casting attempt.`,
        when: [HERO_PHASE],
      },
      {
        name: `Fortune and Fate`,
        desc: `If you roll a 9+ for a Herald of Tzeentch's casting roll, it can attempt to cast one extra spell this hero phase (it must be a different spell).`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Herald of Tzeentch on Disc`,
    effects: [
      {
        name: `Arcane Tome`,
        desc: `Once per battle, you can roll three dice instead of two for that casting attempt.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Herald of Tzeentch on Burning Chariot`,
    effects: [
      {
        name: `Arcane Tome`,
        desc: `Once per battle, you can roll three dice instead of two for that casting attempt.`,
        when: [HERO_PHASE],
      },
      {
        name: `Sky-sharks`,
        desc: `The Screamers' Lamprey Bites attack inflicts D3 Damage if the target is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wake of Fire`,
        desc: `After a Burning Chariot of Tzeentch moves in the movement phase, you can pick an enemy unit that it moved across. Roll a dice; on a roll of 4 or more, the unit suffers D3 mortal wounds.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `The Blue Scribes`,
    effects: [
      {
        name: `Frantic Scribbling`,
        desc: `Roll a dice each time a WIZARD within 18" of the Blue Scribes successfully casts a spell (whether or not it is unbound); on a 4 or more the Scribes learn that spell and can attempt to cast it in subsequent turns.`,
        when: [HERO_PHASE],
      },
      {
        name: `Scrolls of Sorcery`,
        desc: `Once in each of your hero phases, the Blue Scribes can read from their Scrolls of Sorcery instead of making a casting attempt. If they do, roll a dice; on a 1, they can't decipher the scrawls and the casting attempt automatically fails, but on a 2+, that spell is successfully cast and can only be unbound on a roll of 9+.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Pink Horrors of Tzeentch`,
    effects: [
      {
        name: `Flickering Flames`,
        desc: `You can add 1 to hit rolls made for a Pink Horror's Magical Flames attack if its unit contains 20 or more models.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Locus of Conjuration`,
        desc: `You can add 1 to any casting rolls made for this unit if it is within 9" of any TZEENTCH DAEMON HEROESfrom your army.`,
        when: [HERO_PHASE],
      },
      {
        name: `Icon Bearer`,
        desc: `If the unmodified roll for a battleshock test for a unit that includes any Icon Bearers is 1, you can add D6 models to that unit, and no models from that unit will flee in that battleshock phase.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Hornblower`,
        desc: `Your opponent must re-roll battleshock tests of 1 for units that are within 6" of any Hornblowers.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  {
    name: `Blue Horrors of Tzeentch`,
    effects: [
      {
        name: `Split`,
        desc: `If a friendly Pink Horror model is slain, you can either take petty vengeance or receive 2 Blue Horror Points. If you take petty vengeance, pick an enemy unit within 9" of the slain Pink Horror and roll a dice. On a 6+ that enemy unit suffers 1 mortal wound. Any Blue Horror Points you receive can be used instead of or as well as Fate Points when you summon a Blue Horrors unit to the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Brimstone Horrors of Tzeentch`,
    effects: [
      {
        name: `Split Again`,
        desc: `If a friendly Blue Horror model is slain, you can either take petty vengeance or receive 1 Brimstone Horror Point. If you take petty vengeance, pick an enemy unit within 9" of the slain Blue Horror and roll a dice. On a 6+ that enemy unit suffers 1 mortal wound. Any Brimstone Horror Points you receive can be used instead of or as well as Fate Points when you summon a Brimstone Horrors unit to the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Exalted Flamers of Tzeentch`,
    effects: [
      {
        name: `Capricious Warpflame`,
        desc: `Roll a dice at the end of the shooting phase for each unit that suffered wounds from this model's Billowing Warpflame. On a 4 or more, that unit suffers an additional D3 mortal wounds as the mutating flames refuse to die. On a 1, Tzeentch's fickle nature reveals itself and one model in that unit heals D3 wounds instead.`,
        when: [END_OF_SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Flamers of Tzeentch`,
    effects: [
      {
        name: `Capricious Warpflame`,
        desc: `Roll a dice at the end of the shooting phase for each unit that suffered wounds from a Flamer's Warpflame. On a 4 or more, that unit suffers an additional D3 mortal wounds as the mutating flames refuse to die. On a 1, Tzeentch's fickle nature reveals itself and one model in that unit heals D3 wounds instead.`,
        when: [END_OF_SHOOTING_PHASE],
      },
      {
        name: `Locus of Transmogrification`,
        desc: `Roll a dice each time a model in this unit is slain within 9" of a Tzeentch Daemon Hero from your army; on a 6, add two Flamer models to this unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Screamers of Tzeentch`,
    effects: [
      {
        name: `Sky-sharks`,
        desc: `A Screamer's Lamprey Bites attack inflicts D3 Damage if the target is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Slashing Fins`,
        desc: `After a unit of Screamers moves in the movement phase, you can pick an enemy unit that it moved across. Roll a dice for each Screamer that passed across it; for each roll of 6, that unit suffers a mortal wound.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Locus of Change`,
        desc: `Subtract 1 from hit rolls for attacks that target this unit while this unit is wholly within 12" of a friendly Tzeentch Daemon Hero.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Burning Chariots of Tzeentch`,
    effects: [
      {
        name: `Sky-sharks`,
        desc: `The Screamers' Lamprey Bites attack inflicts D3 Damage if the target is a MONSTER.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Capricious Warpflame`,
        desc: `Roll a dice at the end of the shooting phase for each unit that suffered wounds from this model's Billowing Warpflame. On a 4 or more, that unit suffers an additional D3 mortal wounds as the mutating flames refuse to die. On a 1, Tzeentch's fickle nature reveals itself and one model in that unit heals D3 wounds instead.`,
        when: [END_OF_SHOOTING_PHASE],
      },
      {
        name: `Wake of Fire`,
        desc: `After a Burning Chariot moves in the movement phase, you can pick an enemy unit that it moved across. Roll a dice; on a roll of 4 or more, the unit suffers D3 mortal wounds.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  {
    name: `Tzaangor Shaman`,
    effects: [
      {
        name: `Sorcerous Elixir`,
        desc: `Once per battle, at the start of your hero phase, you can attempt to cast a second spell with the Tzaangor Shaman (this can even be the same spell), and can choose to re-roll one or both of the dice when making your casting rolls.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  {
    name: `Curseling, Eye of Tzeentch`,
    effects: [
      {
        name: `Vessel of Chaos`,
        desc: `Each time a Curseling successfully unbinds an enemy spell, he can immediately attempt to cast it himself even though it is your opponent's hero phase. If this spell is cast, your opponent cannot attempt to unbind it.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Magister`,
    effects: [
      {
        name: `Magic-touched`,
        desc: `If the result of a casting roll for this model is a double, whether or not the spell is successfullycast, it can attempt to cast another spell this turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Gaunt Summoner of Tzeentch`,
    effects: [
      {
        name: `Book of Profane Secrets`,
        desc: `Once per battle, at the end of your movement phase, if this model is within 9" of a Realmgate it can use its Book of Profane Secrets. If it does so, you can summon 1 unit from the list on the warscroll to the battlefield, and add it to your army. The summoned unit must be set up wholly within 9" of a this model and wholly within 9" of the Realmgate, and more than 9" from any enemy units.`,
        when: [END_OF_MOVEMENT_PHASE],
      },
      {
        name: `Warptongue Blade`,
        desc: `If a Warptongue Blade inflicts damage on an enemy unit, roll two dice. If the roll is higher than the enemy unit's Bravery, one model in the unit is slain. Otherwise, the blade inflicts 1 wound.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Fatemaster`,
    effects: [
      {
        name: `Soulbound Shield`,
        desc: `If this model suffers any wounds or mortal wounds as the result of a spell, roll a dice. If the result is 4 or more, the wounds are ignored.`,
        when: [HERO_PHASE],
      },
      {
        name: `Hovering Disc of Tzeentch`,
        desc: `Add 2 to the result of any save rolls for this model in the combat phase unless the attacker can fly.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Lord of Fate`,
        desc: `If a Fatemaster uses this ability, roll a dice. Until your next hero phase, any time you make a dice roll for this model or a TZEENTCHMORTAL unit within 9",and the result matches that on the dice you rolled in the hero phase, you can choose to re-roll it.`,
        when: [HERO_PHASE],
        command: true,
      },
    ],
  },
  {
    name: `Ogroid Thaumaturge`,
    effects: [
      {
        name: `Brutal Rage`,
        desc: `If this model has suffered 5 or more wounds, add 1 to all of its hit rolls but subtract 1 from all of its casting and unbinding rolls (healing wounds may mean the Thaumaturge ceases to be enraged).`,
        when: [HERO_PHASE, COMBAT_PHASE],
      },
      {
        name: `Mighty Bulk`,
        desc: `After this model completes a charge move, pick an enemy unit within 1";that unit suffers D3 mortal wounds.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Overwhelming Power`,
        desc: `This model heals 1 wound in each of its hero phases.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Tzaangors`,
    effects: [
      {
        name: `Icon Bearers`,
        desc: `If this unit includes one or more Icon Bearers, then at the start of each of your hero phases, take a dice for each WIZARD (friend or foe) within 9" of this unit. Then, pick an enemy unit within 18" and roll the dice; the unit suffers a mortal wound for each roll of 4 or more.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Brayhorns`,
        desc: `A unit that includes any Brayhorns can run and charge in the same turn.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Arcanite Shield`,
        desc: `Roll a dice before allocating a wound or mortal wound to a model that has an Arcanite Shield. On a roll of 6, the shield deflects the damage and the wound is ignored.`,
        when: [DURING_GAME],
      },
      {
        name: `Anarchy and Mayhem`,
        desc: `If this unit is within 9" of any friendly ARCANITE HEROESat the start of the combat phase, you can add 1 to any wound rolls made for the unit in that phase.`,
        when: [START_OF_COMBAT_PHASE],
      },
      {
        name: `Paired Savage Blades`,
        desc: `You can add 1 to any hit rolls made for models attacking with Paired Savage Blades.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Savagery Unleashed`,
        desc: `You can make one additional attack for each model in this unit with its Savage Blade, Two Savage Blades or Savage Greatblade for every 9 models in the unit (to a maximum of 3 additional attacks per model).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Kairic Acolytes`,
    effects: [
      {
        name: `Arcanite Shield`,
        desc: `Roll a dice before allocating a wound or mortal wound to a model that has an Arcanite Shield. On a roll of 6, the shield deflects the damage and the wound is ignored.`,
        when: [DURING_GAME],
      },
      {
        name: `Gestalt Sorcery`,
        desc: `You can add 1 to the hit rolls of this unit's Sorcerous Bolts if it is within 9" of at least one friendly TZEENTCH WIZARD.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Paired Cursed Blades`,
        desc: `You can add 1 to any hit rolls made for models attacking with Paired Cursed Blades.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scroll of Dark Arts`,
        desc: `If at least one model in the unit is equipped with a Scroll of Dark Arts, you can increase the range of the unit's Sorcerous Bolts to 18".`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Vulchare`,
        desc: `If at least one model in the unit is equipped with a Vulcharc, roll a dice each time an enemy WIZARD within 18" of the unit successfully casts a spell. On a roll of 5 or more, the wizard suffers one mortal wound as soon as the spell's effects have been resolved.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Tzaangor Enlightened`,
    effects: [
      {
        name: `Babbling Stream of Secrets`,
        desc: `If an enemy unit within 9" of any Tzaangor Enlightened models fails a battleshock test, one additional model flees.`,
        when: [BATTLESHOCK_PHASE],
      },
      {
        name: `Guided by the Past`,
        desc: `In the combat phase, you can re-roll all failed hit and wound rolls for a unit of Tzaangor Enlightened if there are any enemy units within 3" of them that have already attacked in that phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Preternatural Enhancement`,
        desc: `If this unit is within 9" of a Tzaangor Shaman at the start of the combat phase, add 1 to all hit rolls you make for their Tzeentchian Spear and Vicious Beak attacks.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Tzaangor Skyfires`,
    effects: [
      {
        name: `Guided by the Future`,
        desc: `In the combat phase, you can re-roll all failed hit and wound rolls for a unit of Tzaangor Skyfiresif no enemy units within 3" of them have attacked yet in that phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Judgement from Afar`,
        desc: `If the hit roll for a Greatbow's Arrow of Fate is a 6+, the attack sequence ends and the target immediately suffers D3 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Preternatural Enhancement`,
        desc: `If this unit is within 9" of a friendly Tzaangor Shaman at the start of the shooting phase, add 1 to any hit rolls made for their Greatbow's Arrow of Fate attacks.`,
        when: [START_OF_SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Tzeentch Chaos Spawn`,
    effects: [
      {
        name: `Writhing Tentacles`,
        desc: `If you roll a double when determining the number of attacks made by a Tzeentch Chaos Spawn's Freakish Mutations, resolve those attacks with a To Hit and To Wound characteristic of 3+ instead of 4+.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
]

// Battalions
export const Battalions: TBattalions = [
  {
    name: `Witchfyre Coven`,
    effects: [
      {
        name: `Mastery of Wyrdflame`,
        desc: `You can make a Sorcerous Bolt attack with each Kairic Acolyte model from a Witchfyre Coven in each of your hero phases.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Skyshoal Coven`,
    effects: [
      {
        name: `Scintillating Attack Run`,
        desc: `In each of your hero phases, you can move any units from a Skyshoal Coven up to 9" as if it were the movement phase (they cannot run as part of this move, and it does not stop them from moving normally later in the turn). After a unit moves in this manner, you can pick an enemy unit that it moved across.RolladiceforeachmodelintheSkyshoalCovenunit;foreachrollof6,the unit it moved across suffers a mortal wound.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Tzaangor Coven`,
    effects: [
      {
        name: `Aspirant Gor-kin`,
        desc: `If the unit of Tzaangors from a Tzaangor Coven is within 3" of an enemy unit and within 9" of the battalion's unit of Tzaangor Enlightened or Tzaangor Skyfires at the start of your hero phase, it can pile in and attack as if it were the combat phase.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Ferocious Fighters`,
        desc: `Vicious Beak attacks made by models from a Tzaangor Coven wound on a roll of 4+ instead of 5+.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  {
    name: `Cult of the Transient Form`,
    effects: [
      {
        name: `The Change-gift`,
        desc: `Roll a dice each time a Kairic Acolyte from the Cult of the Transient Form is slain. On a roll of 6, they are blessed with new life and are transmogrified into a Tzaangor. If there is already a friendly Tzaangor unit within 6" of the slain model's unit, add the Tzaangor to that unit, otherwise set it up as a new unit within 6" of the slain model's unit. In addition, roll a dice each time a HERO from the Cult of the Transient Form is slain. On a roll of 6 they are reborn as a horrific Tzeentch Chaos Spawn; set up a Tzeentch Chaos Spawn under your control anywhere within 6" of the slain HERO model just before removing it.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `The Profane Cult`,
    effects: [
      {
        name: `Arch-Pyromancers`,
        desc: `You can add 1 to the wound rolls of Sorcerous Bolt attacks made by Kairic Acolytes from the Pyrofane Cult for each other unit from the battalion that attacked the target unit with Sorcerous Bolts earlier in the same phase. For example, if two units of Kairic Acolytes from the Pyrofane Cult had already targeted a unit with Sorcerous Bolts, you could add 2 to the wound rolls of the third unit that did so.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `Alter-kin Coven`,
    effects: [
      {
        name: `Boon of Mutation`,
        desc: `In each of your hero phases, roll a dice for each enemy unit that is within 3" of a unit from an Alter-kin Coven. On a roll of a 6, the unit being rolled for suffers D3 mortal wounds. If any models are slain in this manner, they are blessed with mutation and transmogrified into a Tzaangor. If there is already a friendly Tzaangor unit within 6" of the slain model's unit, add the Tzaangor to that unit, otherwise set it up as a new unit within 6" of the slain model's unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Arcanite Cabal`,
    effects: [
      {
        name: `Master of the Cult`,
        desc: `Each time you use a Destiny Dice to predetermine a dice roll for the master of the cult, roll a dice; on a roll of 4, 5 or 6, you may roll another dice and immediately add it to your Destiny Dice pool.`,
        when: [DURING_GAME],
      },
      {
        name: `Cabal of Sorcerers`,
        desc: `Each Wizard from an Arcanite Cabal that is within 9" of at least two other Wizards from the same battalion in your hero phase can attempt to cast one additional spell.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Arcanite Cult`,
    effects: [
      {
        name: `Destiny Preordained`,
        desc: `When generating your Destiny Dice pool at the start of the battle, you can choose the results of 3 of the dice before rolling the remaining 6 dice as normal.`,
        when: [END_OF_SETUP],
      },
      {
        name: `Strength in Conviction`,
        desc: `Add 1 to the Bravery of all models in an Arcanite Cult.`,
        when: [BATTLESHOCK_PHASE],
      },
    ],
  },
  {
    name: `Aether-eater Host`,
    effects: [
      {
        name: `Feed of Magic`,
        desc: `If a unit from an Aether-eater Host successfully unbinds a spell cast by an enemy model, they immediately heal D3 wounds. Whilst an Aether-eater Host has 9 or more units, then any units of Screamers from the battalion can attempt to unbind one spell in each enemy hero phase in the same manner as a wizard (meaning they can also heal wounds as described above).`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Changehost`,
    effects: [
      {
        name: `Deceive and Dismay`,
        desc: `At the start of each of your hero phases, you may pick a pair of units from this battalion that are within 27" of the battalion's Lord of Change to swap places. To do so, take one model from each unit, and have them swap places on the battlefield. Then, remove all of the other models from the two units, and set them back up within 9" of the model from their unit that first swapped places. If a Changehost has 9 or more units at the start of your hero phase, you can pick two different pairs of units to swap places rather than only one. If the Changehost has 18 or more units, then you can pick three different pairs of units to swap places. Each unit can only move this way once in a hero phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Multitudinous Host`,
    effects: [
      {
        name: `Horrors Without Number`,
        desc: `In each of your hero phases, add D3 models to each unit of Pink Horrors and/or Blue Horrors, and add 1 model to each unit of Brimstone Horrors in this battalion.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Omniscient Oracles`,
    effects: [
      {
        name: `Knowledge of Past, Present and Future`,
        desc: `You can re-roll any hit, wound, save and run rolls of 1 – as well as any dice rolls of 1 in a charge roll –for models from this battalion.`,
        when: [DURING_GAME],
      },
    ],
  },
  {
    name: `Overseer's Fate-twisters`,
    effects: [
      {
        name: `The Will of Tzeentch`,
        desc: `At the start of each of your hero phases, add 1 dice to your Destiny Dice pool whilst at least one model from this battalion is on the battlefield. In addition, you can choose to substitute dice rolls that you have already made with Destiny Dice (rather than substituting them before rolling) whilst this battalion has 9 or more models.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Master of Fate`,
        desc: `If the Lord of Change from this battalion is on the battlefield, then in each of your hero phases you can choose to re-roll the result of one of the dice in your Destiny Dice pool.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `The Eternal Conflagration`,
    effects: [
      {
        name: `Pawns of the Radiant Lord`,
        desc: `When the Lord of Change that must be taken in this battalion successfully casts an Arcane Bolt or Mystic Shield spell, you can measure the range and visibility for the spell from a Flamer from this battalion instead of the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Coruscating Flames`,
        desc: `Your opponent must subtract 1 from any hit rolls that target units of Flamers and Exalted Flamers of Tzeentch from the Eternal Conflagration in the shooting phase.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  {
    name: `The Hosts Duplicitous`,
    effects: [
      {
        name: `Glamoursmiths`,
        desc: `When a WIZARD from this battalion rolls a 1 on any dice as part of a casting roll, count it as a 2instead.`,
        when: [HERO_PHASE],
      },
    ],
  },
  {
    name: `Warpflame Host`,
    effects: [
      {
        name: `Storm of Daemonic Fire`,
        desc: `In each of your hero phases, roll a dice for each enemy unit that is within 9" of a unit from a Warpflame Host. On a roll of a 6, the unit being rolled for suffers D3 mortal wounds.`,
        when: [HERO_PHASE],
      },
    ],
  },
]