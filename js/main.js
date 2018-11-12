
var testPrompts =  [
        "Girl with balloon",
        "Firebreathing dragon",
        "Horse fighting lion/monster",
        "Warrior queen on throne",
        "Boy with pet monkey",
        "High school cheerleader",
        "Bird in tree",

    ];

var prompts = []
var promptObj1 = {
    text: "Girl with balloon",
    difficulty: "easy",
    Categories: [ "Character", "Fine Art"],
    ExpectedTime: "UnderOne",
    Digital: false,
}
var promptObj2 = {
    text: "Firebreathing dragon",
    difficulty: "easy",
    Categories: ["Creature"],
    ExpectedTime: "UnderOne",
    Digital: false,
}
prompts.push(promptObj1);
prompts.push(promptObj2);



testPrompts.push("Pushed Manually");



    // todo: save this as json file
var mediums = [
    "Oils",
    "Acrylics",
    "Watercolor",
    "Mixed Media",
    "Digital",
    "Pencil",
    "Ink Wash",
    "Pen & Ink",
    "Gouache",
    "Colored Pencil",
    "Marker",
]

var completedPrompts = []
var currentPrompt = null;


function getRandomPrompt() {
    // first, pull the last prompt and mark it complete if desired
    if (document.getElementById("mark-complete-button").checked) {
        completedPrompts.push(currentPrompt);
        document.getElementById("mark-complete-button").checked = false;
    }

    var randno = Math.round(Math.random() * (prompts.length - 1));
    currentPrompt = prompts[randno]
    return currentPrompt.text;
}
function generatePrompt() {
    document.getElementById('mark-complete-button-div').classList.remove("invisible");
    document.getElementById('prompt-display').innerHTML = "<strong>" + getRandomPrompt() + "</strong>";
}

function getRandomMedium() {
    return mediums[Math.round(Math.random() * (mediums.length - 1))];
}
function generateMedium() {
    document.getElementById('medium-display').innerHTML = getRandomMedium();
}

