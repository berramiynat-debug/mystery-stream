window.gerritsenGames = [
    {
        id: 'gerritsen_1',
        title: "The Surgeon",
        thumbnail: "assets/autopsy_thumb.png",
        isReady: true,
        scenes: {
            'start': {
                text: "You stand over the stainless steel table. The victim's chest features precise, surgical incisions. Detective Frost stands in the corner, looking green. 'Does it match the Surgeon's M.O., Doc?' he asks.",
                choices: [
                    { text: "Examine the chest incision closely.", nextScene: 's2_chest' },
                    { text: "Order an immediate X-Ray before cutting.", nextScene: 's2_xray' }
                ]
            },
            's2_chest': {
                text: "You lean in. The scalpel work is flawless. 'Yes,' you reply. 'But the Surgeon is dead. This is a copycat.' But as you separate the ribs, you find a small, sealed plastic bag resting directly over the heart.",
                choices: [
                    { text: "Open the bag immediately.", nextScene: 's3_open' },
                    { text: "Call for the hazmat team to check for traps.", nextScene: 's3_hazmat' }
                ]
            },
            's2_xray': {
                text: "You run the portable X-ray. The image pops up on the screen, showing a complex metallic box lodged in the victim's stomach.",
                choices: [
                    { text: "Extract the box surgically.", nextScene: 's3_extract' },
                    { text: "Leave it alone and autopsy the head first.", nextScene: 'death_bomb' }
                ]
            },
            's3_open': {
                text: "Inside the bag is a polaroid photo. It's a picture of you, sleeping in your bed last night. The copycat knows exactly who you are.",
                choices: [
                    { text: "Show the photo to Detective Frost.", nextScene: 's4_show' },
                    { text: "Slip the photo into your pocket.", nextScene: 'death_hide' }
                ]
            },
            's3_hazmat': {
                text: "Good instinct. Hazmat arrives and discovers the bag is rigged with a microscopic vial of sarin gas.",
                choices: [
                    { text: "Analyze the vial's origin.", nextScene: 's4_vial' },
                    { text: "Destroy the vial immediately.", nextScene: 'death_evidence' }
                ]
            },
            's3_extract': {
                text: "You extract the box. It has a timer ticking down from 10:00 minutes.",
                choices: [
                    { text: "Run the box out of the hospital.", nextScene: 's4_run' },
                    { text: "Lock it in the lead-lined radiation room.", nextScene: 's4_lead' }
                ]
            },
            's4_show': { text: "Frost pales. 'We need to put you in protective custody immediately.' He grabs his radio.", choices: [{text: "Agree and follow him.", nextScene: 's5_custody'}, {text: "Refuse. You have to finish the autopsy.", nextScene: 's5_autopsy'}] },
            's4_vial': { text: "The glass bears a mark: 'St. Jude's Medical Hub'. A defunct facility.", choices: [{text: "Go to St. Jude's alone.", nextScene: 'death_alone'}, {text: "Bring Frost with you to St. Jude's.", nextScene: 's5_stjude'}] },
            's4_run': { text: "You sprint outside and throw it in the river. It explodes, sending up a massive plume of water. You are safe. For now.", choices: [{text: "Return to the morgue.", nextScene: 's5_morgue'}, {text: "Go home to rest.", nextScene: 'death_home'}] },
            's4_lead': { text: "The lead room contains the blast. The hospital is unbreached.", choices: [{text: "Check the victim's liver next.", nextScene: 's5_liver'}, {text: "Check the victim's eyes.", nextScene: 's5_eyes'}] },

            's5_custody': { text: "You are put in a safehouse. But the safehouse guard is drinking heavily.", choices: [{text: "Disarm the guard.", nextScene: 's6'}, {text: "Lock yourself in the bathroom.", nextScene: 's6'}] },
            's5_autopsy': { text: "You keep cutting. You find a deeply embedded tracking chip in the lung.", choices: [{text: "Smash the chip.", nextScene: 's6'}, {text: "Put the chip on a stray dog.", nextScene: 's6_dog'}] },
            's5_stjude': { text: "At St. Jude's, it's pitched black. You hear surgical saws spinning up.", choices: [{text: "Draw your weapon.", nextScene: 's6'}, {text: "Use Frost as bait.", nextScene: 'death_frost'}] },
            's5_morgue': { text: "Back in the morgue, the body is gone.", choices: [{text: "Check the security cameras.", nextScene: 's6'}, {text: "Lock the morgue doors.", nextScene: 's6'}] },
            's5_liver': { text: "The liver shows signs of massive heavy metal poisoning prior to death.", choices: [{text: "Test for arsenic.", nextScene: 's6'}, {text: "Test for thallium.", nextScene: 's6'}] },
            's5_eyes': { text: "The victim's retinas have been detached surgically while alive.", choices: [{text: "Log the findings.", nextScene: 's6'}, {text: "Check for fingerprints on the eyelids.", nextScene: 's6'}] },
            's6_dog': { text: "You throw it on a dog. Thirty minutes later, a drone strikes the dog.", choices: [{text: "Examine the drone debris.", nextScene: 's7'}, {text: "Run for cover.", nextScene: 's7'}] },

            // Convergence into deep narrative
            's6': { text: "Stage 6: The killer is incredibly advanced. The power grid to your sector suddenly shuts down.", choices: [{text: "Activate emergency generator.", nextScene: 's7'}, {text: "Hide under the table.", nextScene: 'death_hide_dark'}] },
            's7': { text: "Stage 7: A voicemail is left on your secure line. The automated voice says, 'I saved the best organs for you, Doctor.'", choices: [{text: "Trace the call.", nextScene: 's8'}, {text: "Delete the voicemail.", nextScene: 'death_delete'}] },
            's8': { text: "Stage 8: The trace bounces to a cell tower... directly above your current building.", choices: [{text: "Go to the roof.", nextScene: 's9'}, {text: "Call SWAT to handle the roof.", nextScene: 's9'}] },
            's9': { text: "Stage 9: SWAT breaches the roof. They find an empty rig and a laptop streaming a feed... from inside your apartment.", choices: [{text: "Rush to your apartment.", nextScene: 's10'}, {text: "Look closer at the feed.", nextScene: 's10'}] },
            's10': { text: "Stage 10: Looking at the feed, you see a familiar jacket hanging in your closet. It belongs to the Chief Forensic Officer.", choices: [{text: "Confront the Chief.", nextScene: 's11'}, {text: "Wait and gather more evidence.", nextScene: 'death_wait'}] },
            's11': { text: "Stage 11: The Chief smiles coldly when you confront him. 'You were always too smart for your own good, Maura.'", choices: [{text: "Stab him with a scalpel.", nextScene: 'death_scalpel'}, {text: "Stall him by asking why.", nextScene: 's12'}] },
            's12': { text: "Stage 12: 'Because their anatomy was flawed. Yours is perfect,' he says, slipping on surgical gloves.", choices: [{text: "Throw a tray of instruments at him.", nextScene: 's13'}, {text: "Scream for Frost.", nextScene: 's13'}] },
            's13': { text: "Stage 13: You throw the tray. He blocks it, but it gives you time to bolt down the medical corridor.", choices: [{text: "Run to the stairwell.", nextScene: 's14'}, {text: "Run into the MRI room.", nextScene: 's14'}] },
            's14': { text: "Stage 14: You enter the MRI room. He is walking slowly down the hall behind you, holding a bone saw.", choices: [{text: "Hide behind the MRI machine.", nextScene: 's15'}, {text: "Turn the MRI machine ON.", nextScene: 's15'}] },
            's15': { text: "Stage 15: You turn the giant magnet on. The bone saw violently rips out of his hand and slams into the machine.", choices: [{text: "Tackle him while he is disarmed.", nextScene: 'death_tackle'}, {text: "Run past him while he is shocked.", nextScene: 's16'}] },
            's16': { text: "Stage 16: You sprint into the parking garage. Your car won't start. The wires are cut.", choices: [{text: "Steal an ambulance.", nextScene: 's17'}, {text: "Hide in the trunk.", nextScene: 'death_trunk'}] },
            's17': { text: "Stage 17: You hotwire the ambulance. He steps out of the elevator, holding a fire axe.", choices: [{text: "Ram him with the ambulance.", nextScene: 's18'}, {text: "Reverse out of the garage.", nextScene: 's18'}] },
            's18': { text: "Stage 18: You smash through the toll gate and hit the highway. But the brakes are completely unresponsive.", choices: [{text: "Use the emergency brake.", nextScene: 's19'}, {text: "Downshift to slow the engine.", nextScene: 's19'}] },
            's19': { text: "Stage 19: You manage to crash the ambulance safely into a guardrail. You crawl out, bleeding.", choices: [{text: "Hitchhike.", nextScene: 'death_hitch'}, {text: "Run into the industrial park.", nextScene: 's20'}] },
            's20': { text: "Stage 20: You hide in a meat packing warehouse. The temperature is dropping rapidly. You see a figure enter.", choices: [{text: "Hide in a meat locker.", nextScene: 's21'}, {text: "Climb the catwalk.", nextScene: 's21'}] },
            's21': { text: "Stage 21: You climb the catwalk. The Chief is below, tracking your blood drops.", choices: [{text: "Drop a meat hook on him.", nextScene: 's22'}, {text: "Keep climbing to the roof.", nextScene: 's22'}] },
            's22': { text: "Stage 22: The meat hook grazes his arm. He looks up and shoots the catwalk supports.", choices: [{text: "Jump to the next catwalk.", nextScene: 's23'}, {text: "Hold on tight.", nextScene: 'death_fall2'}] },
            's23': { text: "Stage 23: You jump. Your footing slips, but you catch the edge. He is climbing the ladder now.", choices: [{text: "Kick him in the face.", nextScene: 's24'}, {text: "Pull yourself up.", nextScene: 's24'}] },
            's24': { text: "Stage 24: You pull yourself up and run into the foreman's office. There is a flare gun on the desk.", choices: [{text: "Load the flare gun.", nextScene: 's25'}, {text: "Lock the heavy door.", nextScene: 's25'}] },
            's25': { text: "Stage 25: You lock the door. He starts smashing through the glass window with his axe.", choices: [{text: "Shoot him with the flare.", nextScene: 's26'}, {text: "Wait until he breaks through.", nextScene: 's26'}] },
            's26': { text: "Stage 26: You wait. The moment his upper body bursts through the broken glass, you fire the flare directly into his chest.", choices: [{text: "Watch him burn.", nextScene: 'death_burn'}, {text: "Push him backwards out the window.", nextScene: 's27'}] },
            's27': { text: "Stage 27: He falls backward onto the warehouse floor, severely burned. You run down the stairs.", choices: [{text: "Check his pulse.", nextScene: 'death_pulse'}, {text: "Zip-tie his hands immediately.", nextScene: 's28'}] },
            's28': { text: "Stage 28: You restrain him. He laughs weakly. 'You didn't check the basement of the morgue...'", choices: [{text: "Ignore him and call Frost.", nextScene: 's29'}, {text: "Ask him what he means.", nextScene: 's29'}] },
            's29': { text: "Stage 29: Frost arrives with the cavalry. They raid the morgue basement and rescue three other women he had caged.", choices: [{text: "Resign from your job.", nextScene: 's30'}, {text: "Go back to the autopsy table.", nextScene: 's30'}] },
            's30': { text: "Stage 30: You stand over the table the next day. The serial killer is in custody. You survived the true horror of his surgical obsession.", choices: [{text: "Finish the story.", nextScene: 'win'}] },
            
            'win': { isWin: true, text: "You survived Tess Gerritsen's intense medical thriller. You caught the surgeon.", choices: [{text: "Return to Menu", nextScene: 'exit'}] },

            // Deaths
            'death_bomb': { isDeath: true, text: "The box was a timed explosive. Removing the head triggered a secondary sensor. You are vaporized.", choices: [] },
            'death_hide': { isDeath: true, text: "The photo was laced with contact poison. Your respiratory system shuts down.", choices: [] },
            'death_evidence': { isDeath: true, text: "Destroying it ruins the only lead. The killer strikes again, and this time, it's you.", choices: [] },
            'death_alone': { isDeath: true, text: "You go alone. It's a trap. You are paralyzed and placed on the table.", choices: [] },
            'death_frost': { isDeath: true, text: "Frost is killed instantly. The killer then easily outmaneuvers you.", choices: [] },
            'death_home': { isDeath: true, text: "The killer was waiting in your living room.", choices: [] },
            'death_hide_dark': { isDeath: true, text: "He has night vision goggles. He finds you instantly.", choices: [] },
            'death_delete': { isDeath: true, text: "Deleting the message triggers a remote failsafe, locking you inside the morgue with the gas.", choices: [] },
            'death_wait': { isDeath: true, text: "You wait too long. He finishes setting up the cameras and comes for you.", choices: [] },
            'death_scalpel': { isDeath: true, text: "He is wearing Kevlar under his scrubs. He snaps your wrist.", choices: [] },
            'death_tackle': { isDeath: true, text: "He pulls a secondary concealed knife and guts you.", choices: [] },
            'death_trunk': { isDeath: true, text: "He drives the car to a swamp and sinks it with you inside.", choices: [] },
            'death_hitch': { isDeath: true, text: "The truck driver who picks you up is his accomplice.", choices: [] },
            'death_fall2': { isDeath: true, text: "The entire catwalk collapses. You fall 40 feet to your death.", choices: [] },
            'death_burn': { isDeath: true, text: "He grabs you while he is burning, taking you down with him.", choices: [] },
            'death_pulse': { isDeath: true, text: "He was faking. He grabs your neck and snaps it.", choices: [] }
        }
    },
    {
        id: 'gerritsen_2', title: "The Apprentice", thumbnail: "assets/autopsy_thumb.png", isReady: true,
        scenes: {
            'start': { text: "The Surgeon is locked away. But a copycat is killing people perfectly in tandem with his original designs. You sweep the prison logs.", choices: [{text:"Look at visitor logs.", nextScene:'s2_visit'}, {text:"Look at encoded letters.", nextScene:'s2_letter'}] },
            's2_visit': { text: "No visitors logged besides his lawyer.", choices: [{text:"Interview the lawyer.", nextScene:'s3_lawyer'}, {text:"Check the encoded letters.", nextScene:'s2_letter'}] },
            's2_letter': { text: "You decrypt a sequence in an old letter. It points to a medical supply company.", choices: [{text:"Raid the company.", nextScene:'s3_raid'}, {text:"Call the CEO.", nextScene:'death_tipoff'}] },
            's3_lawyer': { text: "The lawyer is nervous. He admits he passed notes to someone.", choices: [{text:"Demand a name.", nextScene:'s4_name'}, {text:"Arrest him.", nextScene:'death_bureaucracy'}] },
            's3_raid': { text: "You raid the supply warehouse. It's empty, but a perfectly sterile surgical suite is set up in the basement.", choices: [{text:"Dust for prints.", nextScene:'s4_prints'}, {text:"Check the medical waste.", nextScene:'s4_waste'}] },
            's4_name': { text: "He gives you a name: Richard. An expelled medical student.", choices: [{text:"Run a background check.", nextScene:'s5'}, {text:"Go to Richard's house.", nextScene:'s5'}] },
            's4_prints': { text: "The place is wiped completely clean with bleach.", choices: [{text:"Check the waste.", nextScene:'s4_waste'}] },
            's4_waste': { text: "In the waste bin, you find human hair and bloody gauze.", choices: [{text:"Send for DNA testing.", nextScene:'s5'}, {text:"Bag it yourself.", nextScene:'s5'}] },
            's5': { text: "Stage 5: You get a call. The copycat has taken your partner hostage.", choices: [{text:"Go to the drop site alone.", nextScene:'s6'}, {text:"Tell SWAT.", nextScene:'s6'}] },
            's6': { text: "Stage 6: At the drop site, you find a walkie-talkie.", choices: [{text:"Answer it.", nextScene:'s7'}, {text:"Smash it.", nextScene:'death_partner'}] },
            's7': { text: "Stage 7: He tells you to walk into the sewer tunnels.", choices: [{text:"Walk in.", nextScene:'s8'}, {text:"Wait.", nextScene:'death_partner'}] },
            ...Array.from({length: 22}, (_, i) => ({ [`s${8+i}`]: {text:`Stage ${8+i}: Navigating the Surgeon's horrific labyrinth underground...`, choices:[{text:'Keep going', nextScene:`s${9+i}`}]} })).reduce((acc, val) => Object.assign(acc, val), {}),
            's30': { text: "Stage 30: You find the Apprentice. He tries to stab you with a chemically-laced scalpel, but you shoot the blade out of his hand, saving your partner.", choices: [{text:"Finish the story.", nextScene:'win'}] },
            'win': { isWin: true, text: "You apprehended the copycat.", choices: [{text:"Return to Menu", nextScene:'exit'}] },
            'death_tipoff': { isDeath: true, text: "The CEO tipped him off. He vanished forever." },
            'death_bureaucracy': { isDeath: true, text: "He lawyers up. The copycat strikes again." },
            'death_partner': { isDeath: true, text: "The copycat executes your partner." }
        }
    },
    {
        id: 'gerritsen_3', title: "The Sinner", thumbnail: "assets/autopsy_thumb.png", isReady: true,
        scenes: {
            'start': { text: "You autopsy a nun murdered in her snowbound convent. You discover she recently gave birth.", choices: [{text:"Request DNA of the infant.", nextScene:'s2_dna'}, {text:"Ignore the pregnancy.", nextScene:'death_ignore2'}] },
            's2_dna': { text: "The infant's DNA shows a genetic mutation shared only by a wealthy local family.", choices: [{text:"Visit the family.", nextScene:'s3_fam'}, {text:"Search the convent.", nextScene:'s3_convent'}] },
            's3_fam': { text: "The patriarch of the family denies knowing the nun.", choices: [{text:"Press him.", nextScene:'s4'}, {text:"Leave and spy on his car.", nextScene:'s4'}] },
            's3_convent': { text: "In the convent basement, you find a hidden room with infant supplies.", choices: [{text:"Wait in the room.", nextScene:'s4'}, {text:"Take the supplies for testing.", nextScene:'s4'}] },
            ...Array.from({length: 26}, (_, i) => ({ [`s${4+i}`]: {text:`Stage ${4+i}: Unraveling the deep religious conspiracy...`, choices:[{text:'Keep going', nextScene:`s${5+i}`}]} })).reduce((acc, val) => Object.assign(acc, val), {}),
            's30': { text: "Stage 30: You break into the family's secret compound and recover the stolen child. The murderer is brought to justice.", choices: [{text:"Finish the story.", nextScene:'win'}] },
            'win': { isWin: true, text: "You survived The Sinner.", choices: [{text:"Return to Menu", nextScene:'exit'}] },
            'death_ignore2': { isDeath: true, text: "The case goes fatally cold without that vital clue." }
        }
    },
    {
        id: 'gerritsen_4', title: "Body Double", thumbnail: "assets/autopsy_thumb.png", isReady: true,
        scenes: {
            'start': { text: "You look at the dead woman on your table. She is an identical genetic match to you. You are dissecting your own twin.", choices: [{text:"Audit her adoption records.", nextScene:'s2'}, {text:"Recuse yourself.", nextScene:'death_recuse'}] },
            's2': { text: "Her records point to a shadowy agency in Maine.", choices: [{text:"Drive to Maine.", nextScene:'s3'}, {text:"Call the FBI.", nextScene:'s3'}] },
            ...Array.from({length: 27}, (_, i) => ({ [`s${3+i}`]: {text:`Stage ${3+i}: Hunting your twin's killer in the wild...`, choices:[{text:'Keep going', nextScene:`s${4+i}`}]} })).reduce((acc, val) => Object.assign(acc, val), {}),
            's30': { text: "Stage 30: The killer thought you were her. He attacks you in the morgue, but you know your own anatomy too well. You inject him with a paralytic.", choices: [{text:"Finish the story.", nextScene:'win'}] },
            'win': { isWin: true, text: "You survived Body Double.", choices: [{text:"Return to Menu", nextScene:'exit'}] },
            'death_recuse': { isDeath: true, text: "You walk away. The killer realizes he got the wrong twin, and hunts you down at home." }
        }
    },
    {
        id: 'gerritsen_5', title: "Vanish", thumbnail: "assets/autopsy_thumb.png", isReady: true,
        scenes: {
             'start': { text: "A Jane Doe wakes up on your autopsy table as you hold the scalpel over her. She takes the morgue hostage.", choices: [{text:"De-escalate.", nextScene:'s2_calm'}, {text:"Try to disarm her.", nextScene:'death_disarm3'}] },
             's2_calm': { text: "She lowers the gun slightly. 'There is a bomb in my chest,' she whispers.", choices: [{text:"X-Ray her chest.", nextScene:'s3'}, {text:"Assume she is hallucinating.", nextScene:'s3'}] },
             ...Array.from({length: 27}, (_, i) => ({ [`s${3+i}`]: {text:`Stage ${3+i}: Managing the explosive hostage situation...`, choices:[{text:'Keep going', nextScene:`s${4+i}`}]} })).reduce((acc, val) => Object.assign(acc, val), {}),
             's30': { text: "Stage 30: You perform emergency surgery under gunpoint to safely remove the C4 charge from her sternum just seconds before detonation.", choices: [{text:"Finish the story.", nextScene:'win'}] },
             'win': { isWin: true, text: "You vanished the threat.", choices: [{text:"Return to Menu", nextScene:'exit'}] },
             'death_disarm3': { isDeath: true, text: "She is a trained operative. She neutralizes you instantly." }
        }
    }
];
