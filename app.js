// V3 Graph Engine 
// Collect games from data files
const feeneyGames = window.feeneyGames || [];
const mcfaddenGames = window.mcfaddenGames || [];
const gerritsenGames = window.gerritsenGames || [];

// Master Game DB
const gamesDB = {};
[...feeneyGames, ...mcfaddenGames, ...gerritsenGames].forEach(game => {
    gamesDB[game.id] = game;
});

const rows = [
    { id: 'feeney-row', games: feeneyGames },
    { id: 'mcfadden-row', games: mcfaddenGames },
    { id: 'gerritsen-row', games: gerritsenGames }
];

class MysteryStreamApp {
    constructor() {
        this.currentGame = null;
        this.currentSceneId = null;
        this.stageCount = 1;
        this.myList = JSON.parse(localStorage.getItem('mysteryStreamList')) || [];
        this.init();
    }

    init() {
        this.navbarScroll();
        this.populateRows();
        this.populateMyListRow();
        this.setupNavigation();
    }

    toggleLike(event, gameId) {
        event.stopPropagation(); // prevent opening the game
        if (this.myList.includes(gameId)) {
            this.myList = this.myList.filter(id => id !== gameId);
        } else {
            this.myList.push(gameId);
        }
        localStorage.setItem('mysteryStreamList', JSON.stringify(this.myList));
        this.populateRows(); // re-render rows to update heart colors
        this.populateMyListRow();
        if(window.lucide) window.lucide.createIcons();
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                const text = e.target.textContent;
                e.target.classList.add('active');
                
                const fSec = document.getElementById('feeney-section');
                const mSec = document.getElementById('mcfadden-section');
                const gSec = document.getElementById('gerritsen-section');
                const mySec = document.getElementById('mylist-section');
                const hero = document.querySelector('.hero');

                if(text === 'Home') {
                    fSec.style.display = 'block';
                    mSec.style.display = 'block';
                    gSec.style.display = 'block';
                    mySec.style.display = 'none';
                    hero.style.display = 'block';
                } else if(text === 'Psychological Thrillers') {
                    fSec.style.display = 'block';
                    mSec.style.display = 'block';
                    gSec.style.display = 'none';
                    mySec.style.display = 'none';
                    hero.style.display = 'none';
                } else if(text === 'Medical Mysteries') {
                    fSec.style.display = 'none';
                    mSec.style.display = 'none';
                    gSec.style.display = 'block';
                    mySec.style.display = 'none';
                    hero.style.display = 'none';
                } else if(text === 'My List') {
                    fSec.style.display = 'none';
                    mSec.style.display = 'none';
                    gSec.style.display = 'none';
                    mySec.style.display = 'block';
                    hero.style.display = 'none';
                }
            });
        });
    }

    navbarScroll() {
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    createGameCardHTML(game) {
        const readyText = game.isReady ? '<div style="position:absolute; top:10px; left:10px; background:rgba(229,9,20,0.8); padding:2px 6px; border-radius:3px; font-size:0.8rem; font-weight:bold; z-index:5;">PLAY NOW</div>' : '<div style="position:absolute; top:10px; left:10px; background:rgba(100,100,100,0.8); padding:2px 6px; border-radius:3px; font-size:0.8rem; font-weight:bold; z-index:5;">COMING SOON</div>';
        const isLiked = this.myList.includes(game.id);
        const heartColor = isLiked ? 'red' : 'none';
        const heartStroke = isLiked ? 'red' : 'white';
        
        return `
            ${readyText}
            <div class="like-btn" onclick="window.app.toggleLike(event, '${game.id}')" style="position:absolute; top:10px; right:10px; z-index:5; cursor:pointer; background:rgba(0,0,0,0.5); border-radius:50%; padding:5px; transition:transform 0.2s;">
                <i data-lucide="heart" fill="${heartColor}" color="${heartStroke}" size="16"></i>
            </div>
            <img src="${game.thumbnail}" alt="${game.title}" style="display:block; width:100%; height:100%; object-fit:cover;">
            <div style="position:absolute; bottom:0; left:0; right:0; background:linear-gradient(transparent, rgba(0,0,0,0.9)); padding:10px; z-index:4;">
                <h3 style="margin:0; font-size:1.1rem; color:white; text-shadow:1px 1px 3px black;">${game.title}</h3>
            </div>
        `;
    }

    populateRows() {
        rows.forEach(row => {
            const container = document.getElementById(row.id);
            if (!container) return;
            container.innerHTML = ''; // clear before repopulating

            row.games.forEach(game => {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.addEventListener('click', () => {
                    this.playGame(game.id);
                });
                
                card.innerHTML = this.createGameCardHTML(game);
                container.appendChild(card);
            });
        });
        if(window.lucide) window.lucide.createIcons();
    }

    populateMyListRow() {
        const container = document.getElementById('mylist-row');
        if (!container) return;
        container.innerHTML = '';

        if(this.myList.length === 0) {
            container.innerHTML = '<p style="color:gray; padding-left:20px;">Your list is empty. Add some games!</p>';
            return;
        }

        this.myList.forEach(gameId => {
            const game = gamesDB[gameId];
            if(game) {
                const card = document.createElement('div');
                card.className = 'game-card';
                card.addEventListener('click', () => {
                    this.playGame(game.id);
                });
                
                card.innerHTML = this.createGameCardHTML(game);
                container.appendChild(card);
            }
        });
        if(window.lucide) window.lucide.createIcons();
    }

    playGame(gameId) {
        this.currentGame = gamesDB[gameId];
        
        if (!this.currentGame.isReady) {
            alert(`"${this.currentGame.title}" is currently rendering its massive outcome tree. Please try The Guest House, The Housemaid, or The Surgeon!`);
            return;
        }

        this.currentSceneId = 'start';
        this.stageCount = 1;
        
        document.getElementById('catalog-view').style.display = 'none';
        document.getElementById('navbar').style.display = 'none';
        
        const overlay = document.getElementById('game-view');
        overlay.classList.remove('hidden');
        
        this.renderScene();
    }

    closeGame() {
        this.currentGame = null;
        this.currentSceneId = null;
        
        document.getElementById('catalog-view').style.display = 'block';
        document.getElementById('navbar').style.display = 'flex';
        
        const overlay = document.getElementById('game-view');
        overlay.classList.add('hidden');
    }

    renderScene() {
        if (!this.currentGame || !this.currentSceneId) return;

        if (this.currentSceneId === 'exit') {
            this.closeGame();
            return;
        }

        const scene = this.currentGame.scenes[this.currentSceneId];
        if (!scene) {
            console.error("Missing scene ID: ", this.currentSceneId);
            return;
        }

        // Force reflow
        const textContainer = document.getElementById('game-text');
        const choicesContainer = document.getElementById('game-choices');
        const stageTracker = document.getElementById('stage-tracker');
        
        textContainer.innerHTML = '';
        choicesContainer.innerHTML = '';
        
        // Track the depth dynamically
        stageTracker.innerText = scene.isDeath ? 'Status: CRITICAL FAILURE' : (scene.isWin ? 'Status: SURVIVED' : `Stage Depth: ${this.stageCount}`);

        setTimeout(() => {
            document.getElementById('game-image').src = scene.image || this.currentGame.thumbnail;
            
            if(scene.isDeath) {
                 textContainer.innerHTML = `<p style="color:red; font-size:1.8rem; font-weight:bold; margin-bottom:10px;">FATAL MISTAKE</p><p>${scene.text}</p>`;
            } else if (scene.isWin) {
                 textContainer.innerHTML = `<p style="color:#46d369; font-size:1.8rem; font-weight:bold; margin-bottom:10px;">CONGRATULATIONS</p><p>${scene.text}</p>`;
            } else {
                 textContainer.innerHTML = `<p>${scene.text}</p>`;
            }

            // Shuffle array logic for buttons so they aren't always top/bottom
            let choices = [...(scene.choices || [])];
            if(!scene.isDeath && !scene.isWin && choices.length > 0) {
                 choices = choices.sort(() => Math.random() - 0.5);
            }

            choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = choice.text;
                btn.onclick = () => {
                    if (choice.nextScene === 'start') {
                        this.stageCount = 1; // reset
                    } else if (choice.nextScene !== 'exit' && !scene.isDeath && !scene.isWin) {
                        this.stageCount++; // going deeper
                    }
                    this.currentSceneId = choice.nextScene;
                    this.renderScene();
                };
                choicesContainer.appendChild(btn);
            });
        }, 50);
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MysteryStreamApp();
});
