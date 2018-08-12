(function() {
    const arenaSize = [900, 700];
    const playerInitialPosition = [450, 620];

    airplaneGame.AirplaneGame = class {
        constructor() {
            this._enemiesPosition = {};
            this._playerPosition = playerInitialPosition;
        }

        addEnemy(name, left, top) {
            this._enemiesPosition[name] = [left, top];
        }

        getPositionOf(name) {
            if (name === 'player') {
                return this._playerPosition;
            } else {
                return this._enemiesPosition[name];
            }
        }

        getEnemies() {
            let enemies = [];
            Object.keys(this._enemiesPosition).forEach((enemy) => {
                let enemyObj = {};
                enemyObj.name = enemy;
                enemyObj.left = this._enemiesPosition[enemy][0];
                enemyObj.top = this._enemiesPosition[enemy][1];
                enemies.push(enemyObj);
            });

            return enemies;
        }

        movePlane(name, left, top) {
           if (name === 'player' && left >= 10 && left <= 830 && top >= 470) {
               this._playerPosition = [left, top];
           } else if (name !== 'player') {
               this._enemiesPosition[name] = [left, top];
           }
        }

        static getArenaSize() {
           return arenaSize;
        }
    }
})();