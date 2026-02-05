// ==================== AUDIO SYSTEM ====================
const sounds = {
    bgMusic: new Audio('terraria_theme.mp3'), 
    click: new Audio('click.mp3'),
    correct: new Audio('success.mp3'),
    wrong: new Audio('fail.mp3'),
    levelup: new Audio('levelup.mp3')
};

sounds.bgMusic.loop = true;
sounds.bgMusic.volume = 0.4; // 40% volume so it doesn't overwhelm the player

function playSound(name) {
    if (sounds[name]) {
        sounds[name].currentTime = 0; 
        sounds[name].play().catch(e => console.log("Audio waiting for user interaction."));
    }
}
function toggleMusic() {
    if (sounds.bgMusic.paused) {
        sounds.bgMusic.play();
    } else {
        sounds.bgMusic.pause();
    }
}

// ==================== GAME DATA ====================
const questions = {
    physics: [
        { question: "What is the SI unit of force?", options: ["Watt", "Newton", "Joule", "Pascal"], correct: 1, difficulty: "easy" },
        { question: "What is the speed of light in vacuum?", options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "1,000,000 km/s"], correct: 0, difficulty: "medium" },
        { question: "Which particle has no electric charge?", options: ["Proton", "Electron", "Neutron", "Positron"], correct: 2, difficulty: "easy" },
        { question: "What is the formula for kinetic energy?", options: ["E = mc²", "KE = ½mv²", "F = ma", "P = mv"], correct: 1, difficulty: "medium" },
        { question: "What phenomenon explains why the sky is blue?", options: ["Refraction", "Reflection", "Rayleigh scattering", "Diffraction"], correct: 2, difficulty: "hard" },
        { question: "What is the unit of electrical resistance?", options: ["Volt", "Ampere", "Ohm", "Watt"], correct: 2, difficulty: "easy" },
        { question: "Which law states that for every action there is an equal and opposite reaction?", options: ["1st Law", "2nd Law", "3rd Law", "Law of Gravity"], correct: 2, difficulty: "easy" },
        { question: "What device converts mechanical energy into electrical energy?", options: ["Motor", "Generator", "Transformer", "Capacitor"], correct: 1, difficulty: "medium" },
        { question: "What is the standard gravity on Earth?", options: ["8.9 m/s²", "10.5 m/s²", "9.8 m/s²", "7.4 m/s²"], correct: 2, difficulty: "easy" },
        { question: "Which color of light has the shortest wavelength?", options: ["Red", "Green", "Blue", "Violet"], correct: 3, difficulty: "medium" },
        { question: "What is the absolute zero temperature in Celsius?", options: ["0°C", "-100°C", "-273.15°C", "-32°C"], correct: 2, difficulty: "hard" },
        { question: "Sound waves cannot travel through which of these?", options: ["Water", "Steel", "Air", "Vacuum"], correct: 3, difficulty: "easy" },
        { question: "Who is known for the General Theory of Relativity?", options: ["Newton", "Einstein", "Tesla", "Bohr"], correct: 1, difficulty: "easy" },
        { question: "What is the unit of power?", options: ["Watt", "Joule", "Volt", "Ampere"], correct: 0, difficulty: "easy" },
        { question: "What type of lens is used to correct nearsightedness?", options: ["Convex", "Concave", "Cylindrical", "Bifocal"], correct: 1, difficulty: "hard" }
    ],
    chemistry: [
        { question: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2, difficulty: "easy" },
        { question: "What is the pH of pure water?", options: ["0", "7", "14", "1"], correct: 1, difficulty: "easy" },
        { question: "Which element has the atomic number 6?", options: ["Oxygen", "Nitrogen", "Carbon", "Helium"], correct: 2, difficulty: "medium" },
        { question: "What type of bond shares electrons?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correct: 1, difficulty: "medium" },
        { question: "Most abundant gas in Earth's atmosphere?", options: ["Oxygen", "CO2", "Nitrogen", "Argon"], correct: 2, difficulty: "easy" },
        { question: "What is Avogadro's number?", options: ["6.02 × 10²³", "3.14 × 10⁸", "9.81 × 10¹⁰", "1.38 × 10⁻²³"], correct: 0, difficulty: "hard" },
        { question: "Which element is a liquid at room temperature?", options: ["Iron", "Mercury", "Copper", "Gold"], correct: 1, difficulty: "easy" },
        { question: "What is the lightest element?", options: ["Helium", "Oxygen", "Hydrogen", "Lithium"], correct: 2, difficulty: "easy" },
        { question: "What is the chemical formula for Table Salt?", options: ["H2O", "CO2", "NaCl", "KCl"], correct: 2, difficulty: "easy" },
        { question: "A substance that speeds up a reaction without being consumed is a:", options: ["Reactant", "Product", "Catalyst", "Isotope"], correct: 2, difficulty: "medium" },
        { question: "Which acid is found in lemons?", options: ["Acetic", "Citric", "Hydrochloric", "Sulfuric"], correct: 1, difficulty: "easy" },
        { question: "What is the center of an atom called?", options: ["Electron", "Nucleus", "Proton", "Shell"], correct: 1, difficulty: "easy" },
        { question: "Diamond and Graphite are allotropes of which element?", options: ["Carbon", "Silicon", "Sulfur", "Phosphorus"], correct: 0, difficulty: "medium" },
        { question: "Which gas is known as Laughing Gas?", options: ["Nitrogen", "Nitrous Oxide", "Methane", "Helium"], correct: 1, difficulty: "hard" },
        { question: "What is the valence of an Oxygen atom?", options: ["1", "2", "3", "4"], correct: 1, difficulty: "hard" }
    ],
    biology: [
        { question: "What organelle is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correct: 2, difficulty: "easy" },
        { question: "What molecule carries genetic information?", options: ["RNA", "Protein", "DNA", "ATP"], correct: 2, difficulty: "easy" },
        { question: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], correct: 2, difficulty: "easy" },
        { question: "Largest organ in the human body?", options: ["Liver", "Brain", "Skin", "Lungs"], correct: 2, difficulty: "medium" },
        { question: "Process plants use to make food?", options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"], correct: 1, difficulty: "easy" },
        { question: "What is the basic unit of life?", options: ["Atom", "Molecule", "Cell", "Organ"], correct: 2, difficulty: "easy" },
        { question: "Which blood cells fight infections?", options: ["Red", "White", "Platelets", "Plasma"], correct: 1, difficulty: "easy" },
        { question: "Who proposed the theory of evolution?", options: ["Mendel", "Darwin", "Pasteur", "Hooke"], correct: 1, difficulty: "medium" },
        { question: "What is the longest bone in the human body?", options: ["Skull", "Spine", "Femur", "Humerus"], correct: 2, difficulty: "easy" },
        { question: "Which pigment gives plants their green color?", options: ["Carotene", "Hemoglobin", "Chlorophyll", "Melanin"], correct: 2, difficulty: "easy" },
        { question: "What part of the brain controls balance?", options: ["Cerebrum", "Cerebellum", "Medulla", "Thalamus"], correct: 1, difficulty: "hard" },
        { question: "How many chromosomes do humans typically have?", options: ["23", "44", "46", "48"], correct: 2, difficulty: "medium" },
        { question: "What is the control center of the cell?", options: ["Nucleus", "Cytoplasm", "Vacuole", "Wall"], correct: 0, difficulty: "easy" },
        { question: "Animals that eat only plants are called?", options: ["Carnivores", "Omnivores", "Herbivores", "Decomposers"], correct: 2, difficulty: "easy" },
        { question: "Which vitamin is produced when skin is exposed to sunlight?", options: ["Vit A", "Vit B", "Vit C", "Vit D"], correct: 3, difficulty: "medium" }
    ],
    astronomy: [
        { question: "What is the closest star to Earth?", options: ["Proxima Centauri", "The Sun", "Sirius", "Betelgeuse"], correct: 1, difficulty: "easy" },
        { question: "How many planets are in our solar system?", options: ["7", "8", "9", "10"], correct: 1, difficulty: "easy" },
        { question: "Largest planet in our solar system?", options: ["Saturn", "Neptune", "Jupiter", "Uranus"], correct: 2, difficulty: "easy" },
        { question: "What galaxy do we live in?", options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"], correct: 1, difficulty: "easy" },
        { question: "What causes a solar eclipse?", options: ["Earth blocks Sun", "Moon blocks Sun", "Sun blocks Moon", "Planets align"], correct: 1, difficulty: "medium" },
        { question: "What is a light-year?", options: ["Time unit", "Distance unit", "Speed unit", "Mass unit"], correct: 1, difficulty: "medium" },
        { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Saturn", "Mercury"], correct: 1, difficulty: "easy" },
        { question: "What is the hottest planet in our solar system?", options: ["Mars", "Mercury", "Venus", "Jupiter"], correct: 2, difficulty: "medium" },
        { question: "Who was the first human to walk on the moon?", options: ["Gagarin", "Aldrin", "Armstrong", "Glenn"], correct: 2, difficulty: "easy" },
        { question: "What force keeps planets in orbit?", options: ["Magnetism", "Gravity", "Friction", "Inertia"], correct: 1, difficulty: "easy" },
        { question: "Which planet has the most visible rings?", options: ["Jupiter", "Uranus", "Saturn", "Neptune"], correct: 2, difficulty: "easy" },
        { question: "What is at the center of the Milky Way?", options: ["A star", "A black hole", "A planet", "Nebula"], correct: 1, difficulty: "hard" },
        { question: "What is the smallest planet in our solar system?", options: ["Mars", "Mercury", "Venus", "Pluto"], correct: 1, difficulty: "easy" },
        { question: "How long does it take for Earth to orbit the Sun?", options: ["24 hours", "30 days", "365.25 days", "10 years"], correct: 2, difficulty: "easy" },
        { question: "What are comets mostly made of?", options: ["Rock", "Metal", "Ice and Dust", "Liquid Gas"], correct: 2, difficulty: "medium" }
    ]
};

const items = [
    { name: "Newton's Apple", icon: "🍎", rarity: "common", description: "A fruit that inspired gravity" },
    { name: "Test Tube", icon: "🧪", rarity: "common", description: "For chemical experiments" },
    { name: "Microscope", icon: "🔬", rarity: "uncommon", description: "See the tiny world" },
    { name: "Telescope", icon: "🔭", rarity: "uncommon", description: "Observe the stars" },
    { name: "DNA Helix", icon: "🧬", rarity: "rare", description: "The code of life" },
    { name: "Crystal Prism", icon: "💎", rarity: "rare", description: "Splits light beautifully" },
    { name: "Quantum Shard", icon: "⚛️", rarity: "epic", description: "Exists in superposition" },
    { name: "Philosopher's Stone", icon: "🔮", rarity: "legendary", description: "Legendary transmutation item" },
    { name: "Star Fragment", icon: "⭐", rarity: "epic", description: "Piece of a fallen star" },
    { name: "Ancient Fossil", icon: "🦴", rarity: "uncommon", description: "Millions of years old" }
];

// ==================== GAME STATE ====================
let gameState = {
    phase: 'menu',
    player: {
        name: "Explorer",
        level: 1,
        hp: 100,
        maxHp: 100,
        mana: 50,
        maxMana: 50,
        xp: 0,
        xpToLevel: 100,
        gold: 0
    },
    inventory: [],
    currentQuestion: null,
    correctAnswers: 0,
    streak: 0
};

// ==================== CHARACTER CREATION LOGIC ====================
const nameInput = document.getElementById('player-name-input');
const proceedBtn = document.getElementById('proceed-button');
const errorMsg = document.getElementById('name-error');

function startGame() {
    playSound('click');
    // Start Background Music on first interaction (Required by browsers)
    sounds.bgMusic.play().catch(() => console.log("Music play blocked."));

    document.getElementById('question-card').classList.add('hidden');
    document.getElementById('category-selector').classList.remove('hidden');
    
    nameInput.value = "";
    proceedBtn.disabled = true;
    errorMsg.innerText = "";
    
    showScreen('naming-screen');
}

nameInput.addEventListener('input', () => {
    const val = nameInput.value.trim();
    const onlyLetters = /^[A-Za-z\s]+$/;

    if (val.length === 0) {
        proceedBtn.disabled = true;
        errorMsg.innerText = "Name is required!";
    } else if (!onlyLetters.test(val)) {
        proceedBtn.disabled = true;
        errorMsg.innerText = "Letters only, please!";
    } else {
        proceedBtn.disabled = false;
        errorMsg.innerText = "";
    }
});

function showConfirmation() {
    playSound('click');
    const name = nameInput.value;
    document.getElementById('confirmation-text').innerText = `Are you ready for your adventure, ${name}?`;
    showScreen('confirmation-screen');
}

function backToNaming() {
    playSound('click');
    showScreen('naming-screen');
}

function finalizeStart() {
    playSound('click');
    gameState.player.name = nameInput.value;
    document.getElementById('display-player-name').innerText = gameState.player.name;
    
    gameState.player.level = 1;
    gameState.player.hp = 100;
    gameState.player.maxHp = 100;
    gameState.player.mana = 50;
    gameState.player.maxMana = 50;
    gameState.player.xp = 0;
    gameState.player.xpToLevel = 100;
    gameState.player.gold = 0;
    gameState.inventory = [];
    gameState.correctAnswers = 0;
    gameState.streak = 0;
    gameState.currentQuestion = null;

    showScreen('game-screen');
    updateHUD();
    generateInventorySlots();
}

// ==================== CORE GAME FUNCTIONS ====================
function showScreen(screenId) {
    const screens = ['main-menu', 'naming-screen', 'confirmation-screen', 'game-screen', 'gameover-screen'];
    screens.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
}

function goToMenu() {
    playSound('click');
    showScreen('main-menu');
}

function updateHUD() {
    const p = gameState.player;
    document.getElementById('player-level').textContent = p.level;
    document.getElementById('hp-current').textContent = p.hp;
    document.getElementById('hp-max').textContent = p.maxHp;
    document.getElementById('hp-bar').style.width = `${(p.hp / p.maxHp) * 100}%`;
    document.getElementById('mana-current').textContent = p.mana;
    document.getElementById('mana-max').textContent = p.maxMana;
    document.getElementById('mana-bar').style.width = `${(p.mana / p.maxMana) * 100}%`;
    document.getElementById('xp-current').textContent = p.xp;
    document.getElementById('xp-max').textContent = p.xpToLevel;
    document.getElementById('xp-bar').style.width = `${(p.xp / p.xpToLevel) * 100}%`;
    document.getElementById('gold-amount').textContent = p.gold;
}

function selectCategory(category) {
    playSound('click');
    const categoryQuestions = questions[category];
    const randomQ = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    gameState.currentQuestion = { ...randomQ, category };
    showQuestion();
}

function showQuestion() {
    document.getElementById('category-selector').classList.add('hidden');
    document.getElementById('question-card').classList.remove('hidden');
    
    const q = gameState.currentQuestion;
    document.getElementById('q-category').textContent = q.category.toUpperCase();
    document.getElementById('q-difficulty').textContent = q.difficulty.toUpperCase();
    document.getElementById('q-difficulty').className = `question-difficulty difficulty-${q.difficulty}`;
    document.getElementById('q-text').textContent = q.question;
    
    const optionsGrid = document.getElementById('options-grid');
    optionsGrid.innerHTML = '';
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-button';
        btn.textContent = option;
        btn.onclick = () => selectAnswer(index);
        optionsGrid.appendChild(btn);
    });
}

function selectAnswer(index) {
    const q = gameState.currentQuestion;
    const isCorrect = index === q.correct;
    const buttons = document.querySelectorAll('.option-button');
    
    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) btn.classList.add('correct');
        else if (i === index && !isCorrect) btn.classList.add('incorrect');
    });

    if (isCorrect) playSound('correct');
    else playSound('wrong');

    setTimeout(() => {
        if (isCorrect) handleCorrectAnswer();
        else handleWrongAnswer();
    }, 1000);
}

function handleCorrectAnswer() {
    gameState.correctAnswers++;
    gameState.streak++;
    
    const difficulty = gameState.currentQuestion.difficulty;
    const xpGain = difficulty === 'easy' ? 15 : difficulty === 'medium' ? 25 : 40;
    const goldGain = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 10 : 20;
    
    const streakBonus = Math.floor(gameState.streak / 3);
    gameState.player.xp += xpGain + (streakBonus * 5);
    gameState.player.gold += goldGain + (streakBonus * 2);
    gameState.player.mana = Math.min(gameState.player.mana + 5, gameState.player.maxMana);
    
    while (gameState.player.xp >= gameState.player.xpToLevel) {
        playSound('levelup');
        gameState.player.xp -= gameState.player.xpToLevel;
        gameState.player.level++;
        gameState.player.xpToLevel = Math.floor(gameState.player.xpToLevel * 1.5);
        gameState.player.maxHp += 10;
        gameState.player.hp = gameState.player.maxHp;
    }
    
    let itemFound = null;
    if (Math.random() < 0.4) {
        itemFound = getRandomItem();
        if (gameState.inventory.length < 20) gameState.inventory.push(itemFound);
    }
    
    updateHUD();
    generateInventorySlots();
    showFeedback(true, `+${xpGain} XP, +${goldGain} Gold${streakBonus > 0 ? ` (${gameState.streak} streak!)` : ''}`, itemFound);
}

function handleWrongAnswer() {
    gameState.streak = 0;
    const damage = 15 + (gameState.player.level * 2);
    gameState.player.hp = Math.max(0, gameState.player.hp - damage);
    updateHUD();
    
    if (gameState.player.hp <= 0) {
        showFeedback(false, 'You have been defeated!', null, true);
    } else {
        showFeedback(false, `Lost ${damage} HP. Careful!`, null);
    }
}

function getRandomItem() {
    const roll = Math.random();
    let rarity = roll < 0.5 ? 'common' : roll < 0.75 ? 'uncommon' : roll < 0.9 ? 'rare' : roll < 0.98 ? 'epic' : 'legendary';
    const filtered = items.filter(i => i.rarity === rarity);
    return filtered[Math.floor(Math.random() * filtered.length)];
}

function generateInventorySlots() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';
    for (let i = 0; i < 20; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot empty';
        if (gameState.inventory[i]) {
            const item = gameState.inventory[i];
            slot.className = `inventory-slot rarity-${item.rarity}`;
            slot.innerHTML = `${item.icon}<div class="slot-tooltip">${item.name}</div>`;
        }
        grid.appendChild(slot);
    }
    document.getElementById('inventory-count').textContent = gameState.inventory.length;
}

function toggleInventory() {
    playSound('click');
    document.getElementById('inventory-panel').classList.toggle('hidden');
}

function showFeedback(isSuccess, message, item, isGameOver = false) {
    const modal = document.getElementById('feedback-modal');
    document.getElementById('modal-icon').textContent = isSuccess ? '✅' : '❌';
    const title = document.getElementById('modal-title');
    title.textContent = isSuccess ? 'Correct!' : 'Wrong!';
    title.className = `modal-title ${isSuccess ? 'success' : 'failure'}`;
    document.getElementById('modal-message').textContent = message;
    
    const itemDiv = document.getElementById('modal-item');
    if (item) {
        itemDiv.classList.remove('hidden');
        document.getElementById('item-icon').textContent = item.icon;
        document.getElementById('item-name').textContent = `Found: ${item.name}!`;
    } else {
        itemDiv.classList.add('hidden');
    }
    
    modal.classList.remove('hidden');
    modal.dataset.gameover = isGameOver;
}

function closeFeedback() {
    playSound('click');
    const modal = document.getElementById('feedback-modal');
    const isGameOver = modal.dataset.gameover === 'true';
    modal.classList.add('hidden');
    
    if (isGameOver) {
        showGameOver();
    } else {
        gameState.currentQuestion = null;
        document.getElementById('question-card').classList.add('hidden');
        document.getElementById('category-selector').classList.remove('hidden');
    }
}

function showGameOver() {
    document.getElementById('final-level').textContent = gameState.player.level;
    document.getElementById('final-gold').textContent = gameState.player.gold;
    document.getElementById('correct-answers').textContent = gameState.correctAnswers;
    document.getElementById('items-collected').textContent = gameState.inventory.length;
    showScreen('gameover-screen');
}