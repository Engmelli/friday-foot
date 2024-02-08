const playerNames = ["أحمد", "منذر", "كوريا", "تركي", "ملي", "احمدي", "محمد", "بيما", "زياد", "هياف", "بالبيد", "منشي", "رجب", "باخ", "براء", "باشماخ", "عبديه", "سعود", "ولي", "غسان"];
const playersDiv = document.getElementById('players');
let selectedPlayer = null;

playerNames.forEach(name => {
    const div = document.createElement('div');
    div.textContent = name;
    div.classList.add('player');
    div.addEventListener('click', selectPlayer);
    playersDiv.appendChild(div);
});

const dropZones = document.querySelectorAll('.drop-zone');
dropZones.forEach(zone => {
    zone.addEventListener('click', placePlayer);
});

function selectPlayer(e) {
    if (selectedPlayer) {
        selectedPlayer.classList.remove('selected');
    }
    selectedPlayer = e.target;
    selectedPlayer.classList.add('selected');
}

function placePlayer(e) {
    const targetZone = e.currentTarget;

    if (selectedPlayer && !targetZone.hasChildNodes()) {
        targetZone.appendChild(selectedPlayer);
        selectedPlayer.classList.remove('selected');
        selectedPlayer.classList.add('placed');
        selectedPlayer = null;
    }
}
