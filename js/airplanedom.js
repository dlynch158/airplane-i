window.airplaneGame = {};

(function() {
    window.addEventListener("load", main);

    airplaneGame.AirplaneDOM = class {
        constructor(ap) {
           this.ap = ap;
           this._addPlayer();
           this._addEnemies();
           this._drawEnemies();
           this._addPlayerControls();
        }

        _addPlayer() {
            let player = document.createElement('div');
            player.classList.add('player');
            let [left, top] = this.ap.getPositionOf('player');
            player.style.setProperty('left', left + 'px');
            player.style.setProperty('top', top + 'px');
            document.getElementById('players').appendChild(player);
        }

        _addEnemies() {
            let enemies = [
                {left: 350, top: 200},
                {left: 450, top: 250},
                {left: 550, top: 150},
                {left: 250, top: 350},
                {left: 150, top: 350},
                {left: 350, top: 350},
                {left: 600, top: 400},
                {left: 600, top: 350},
            ]

            for (let i = 0; i < enemies.length; i++) {
                this.ap.addEnemy(`enemy${i}`, enemies[i].left, enemies[i].top);
            }

        }

        _drawEnemies() {
            let enemies = this.ap.getEnemies();
            for (let i = 0; i < enemies.length; i++) {
                let enemy = document.createElement('div');
                enemy.classList.add('enemy');
                let [left, top] = [enemies[i].left, enemies[i].top];
                enemy.style.setProperty('left', left + 'px');
                enemy.style.setProperty('top', top + 'px');
                document.getElementById('enemies').appendChild(enemy);
            }
        }

        _drawPlayer() {
            let [left, top] = this.ap.getPositionOf('player');
            let player = document.querySelector('.player');
            player.style.setProperty('left', left + 'px');
            player.style.setProperty('top', top + 'px');
        }

        _addPlayerControls() {
            var that = this;
            document.documentElement.addEventListener('keydown', function(event) {
                let posLeft, posTop;
                if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
                    [posLeft, posTop] = that.ap.getPositionOf('player');
                }
                switch (event.key) {
                    case "ArrowUp":
                        posTop -= 10;
                        break;
                    case "ArrowDown":
                        posTop += 10;
                        break;
                    case "ArrowLeft":
                        posLeft -= 10;
                        break;
                    case "ArrowRight":
                        posLeft += 10;
                        break;
                }

                that.ap.movePlane('player', posLeft, posTop);
                that._drawPlayer();
            })
        }
    };


    function main() {
        let ap = new airplaneGame.AirplaneGame();
        new airplaneGame.AirplaneDOM(ap);
    }
})();