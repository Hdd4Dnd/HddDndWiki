var npcs = [];

function add_npc(name,position, age, race, traits, alignment, family, friends, foes, gRelation, bRelation, location,foto, description){
    var npc = {
        Name: name,
        Position: position,
        Age: age,
        Race: race,
        Traits: traits,
        Alignment: alignment,
        
        Family: family,
        Friends: friends,
        Foes: foes,
        GoodRelation: gRelation,
        BadRelation: bRelation,

        Location: location,
        Foto: foto,
        Description: description 

    }
    npcs.push(npc);
}


add_npc(
    // NAME
    "Michael Snevet",
    // ROLE
    "King",
    // AGE
    "42", 
    // RACE
    "Human",
    // TRAITS 
    "Very smart, reasonable, compassionate", 
    //ALIGNEMNT
    "Lawful good",
    // FAMILY
    "Cientia Snevet", 
    // FRIENDS
    "Ezun Ritsek", 
    // FOES
    "",
    // GOOD RELATIONS WITH
    "Smart people with good intentions", 
    // BAD RELATIONS WITH
    "Lizzard people",
    // LOCATION
    "Heferin Kingdom", 
    // FOTO URL
    "URL", 
    // DESCRIPTION
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAa AAAAAAAAAAAAAAAAAAAAAAAa"
);

add_npc(
    // NAME
    "Cientia Snevet",
    // ROLE
    "Princess",
    // AGE
    "21", 
    // RACE
    "Human",
    // TRAITS 
    "Brave, impulsive, hot-headed", 
    //ALIGNEMNT
    "Chaotic good",
    // FAMILY
    "Michael Snevet", 
    // FRIENDS
    "Margery Svann", 
    // FOES
    "",
    // GOOD RELATIONS WITH
    "Brave people willing to die for kingdom.", 
    // BAD RELATIONS WITH
    "Ezun Ritsek",
    // LOCATION
    "Heferin Kingdom", 
    // FOTO URL
    "URL", 
    // DESCRIPTION
    "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAa AAAAAAAAAAAAAAAAAAAAAAAa"
);
