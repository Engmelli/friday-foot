const playerNames = [
    "أحمد",
    "منذر",
    "كوريا",
    "تركي",
    "ملي",
    "براء",
    "رجب",
    "براء احمدي",
    "محمد",
    "باخريبة",
    "زياد بيما",
    "زياد",
    "هياف",
    "بالبيد",
    "منشي",
    "باشماخ",
    "عبديه",
    "سعود",
    "ولي",
    "غسان"
];
const playersDiv = document.getElementById('players');
let draggedElement = null;

playerNames.forEach(name => {
    const div = document.createElement('div');
    div.textContent = name;
    div.classList.add('player');
    div.setAttribute('draggable', true);
    div.setAttribute('id', name.replace(/\s+/g, '-').toLowerCase());
    div.addEventListener('dragstart', handleDragStart);
    playersDiv.appendChild(div);
});

const dropZones = document.querySelectorAll('.drop-zone');
dropZones.forEach(zone => {
    zone.addEventListener('dragover', handleDragOver);
    zone.addEventListener('dragleave', handleDragLeave);
    zone.addEventListener('drop', handleDrop);
});

function handleDragStart(e) {
    draggedElement = e.target;
    e.dataTransfer.setData('text/plain', draggedElement.id);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragLeave(e) {
    e.target.classList.remove('dragover');
}

function handleDrop(e) {
    e.preventDefault();
    const playerId = e.dataTransfer.getData('text/plain');
    const playerElement = document.getElementById(playerId);
    if (playerElement && e.target.classList.contains('drop-zone') && !e.target.hasChildNodes()) {
        const clone = playerElement.cloneNode(true);
        clone.setAttribute('draggable', false); 
        e.target.appendChild(clone);
        playerElement.style.display = 'none';
    }
}

function returnPlayerToList(playerId) {
    const playerElement = document.getElementById(playerId);
    if (playerElement) {
        playerElement.style.display = ''; 
    }
}
