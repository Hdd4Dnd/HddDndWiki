var magic_items = [];

function add_magic_item(name, rarity, attunement,foto, description){
    var item = {
        Name: name,
        Rarity: rarity,
        Attunement: attunement,
        Foto:foto,
        Description: description
    }
    magic_items.push(item);
}
add_magic_item("Nuntius Bug","Rare","False","drakon.png","A small golden centipede with a strong thelepathic powers. When you find this creature it hides inside your ear. Once per day you can use a Nuntius Bug to send a short message of twenty-five words or less to another Nuntuis Bug with which the bug is familiar. Both of the bugs must be on the same plain of existence. The recieving Nuntius bug hears the message in its mind, and whispers the message into your ear. The reciever Bug recognizes you as the sender, and the host can use his Nuntuis Bug to answer in a like manner immediately with one short message. To make two Nuntius bugs familiar, you need to let them touch each other by putting your ears close together. A Nuntious Bug cannot be removed by non magical means.");
add_magic_item("Ring of Kehidupan","Artefact","True","drakon.png","The legends speak about a selfless cleric that sacrificed his life to care about the less fortunate. He healed people without ever asking for somting in return. Once when there was a patient beyond help, the cleric prayed for seven days to Kehidupan for help. The prayers were answered with this ring. Some say that the Lord still observes the ring. Wearing this ring, you can cast a 1st level spell Healing Word. The spell does not scale with character level wearing it. You can use the power of the ring only once per long rest.  ");
add_magic_item("Screw-Socket Eye","Artefact","True","drakon.png","This mechanic eye infused in arcana will grant you darkvision. To use the Screw-Socket Eye you need to screw it into your eyesocket and you will take 1d6 piercing damage. You will also get the same damage if you remove the eye. The mechanic eye is not build for combat and rapid eye movements will damage your skull. You take 1d4 damage at the begining of every your turn.");
add_magic_item("Loyds talisman","Rare","False","drakon.png","A small spherical neck pendant filled with a arcane liquid. If you throw this pendant at a object, it will break and release the liquid. The arcane liquid will evaporate and create a thick fong that will reveal any creature disguised as that object. The creature will not know that the disguise is compromised.");
add_magic_item("Drakon armor","Rare","True","drakon.png","The legends say that this studded leather armor was created by an legendary craftsman. The craftsman created this armor for an traveller that risked his life to retrieve something that was very dear to the craftsman. The armor was so flexible and light, because it was tailor made for an Wizzard.");
