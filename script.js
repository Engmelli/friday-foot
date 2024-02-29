const playerNames = [
  "بسام",
  "تركي",
  "ولي",
  "منذر",
  "محمد",
  "احمد",
  "كوري",
  "ملي",
  "رجب",
  "ماجد",
  "بالبيد",
  "راموس",
  "يوسف",
  "دريهم",
  "بيما",
  "باشماخ",
  "احمدي",
  "هياف",
  "عبدية",
  "غسان"
];

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
    const targetPlayer = e.target;

    if (selectedPlayer) {
        if (selectedPlayer === targetPlayer) {
            selectedPlayer.classList.remove('selected');
            selectedPlayer = null;
        } else {
            const targetParent = targetPlayer.parentNode;
            const selectedParent = selectedPlayer.parentNode;
            
            if (selectedPlayer.classList.contains('placed') && !targetPlayer.classList.contains('placed')) {
                selectedPlayer.classList.remove('placed');
                targetPlayer.classList.add('placed');
            }
            else if (!selectedPlayer.classList.contains('placed') && targetPlayer.classList.contains('placed')) {
                selectedPlayer.classList.add('placed');
                targetPlayer.classList.remove('placed');
            }

            targetParent.appendChild(selectedPlayer);
            selectedParent.appendChild(targetPlayer);
            
            selectedPlayer.classList.remove('selected');
            selectedPlayer = null;
        }
    } else {
        selectedPlayer = targetPlayer;
        selectedPlayer.classList.add('selected');
    }
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
