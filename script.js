const playerNames = ["أحمد", "منذر", "كوريا", "تركي", "ملي", "براء", "محمد", "بيما", "زياد", "هياف", "بالبيد", "منشي", "باشماخ", "عبديه", "سعود", "ولي", "غسان"];
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
    if (selectedPlayer && !e.currentTarget.hasChildNodes()) {
        // Move selected player to the clicked position
        e.currentTarget.textContent = selectedPlayer.textContent;
        selectedPlayer.style.display = 'none'; // Hide the player from the list
        selectedPlayer.classList.remove('selected');
        selectedPlayer = null; // Deselect player
    }
}

