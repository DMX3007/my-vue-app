import { type Phases } from "../types/d";

class GameManager {
    public state
    constructor(state: Phases) {
        this.state = state
    }

    reset() {
        this.state = 'again'
    }

    getNextPhase(currentPhase: Phases, score?: number) {
        let isWin = score! >= 130
        switch (currentPhase) {
            case 'welcome':
                this.state = currentPhase;
                return 'playing'
            case 'playing':
                this.state = currentPhase;
                return 'hit';
            case 'hit':
                this.state = currentPhase;
                return isWin ? 'win' : 'again'
            case 'again':
                this.state = currentPhase;
                return isWin ? 'win' : 'playing'
            case 'win':
                this.state = currentPhase;
                return 'welcome'
            default:
                this.state = currentPhase;
                return 'welcome'
        }
    }

    getTargetColors() {
        return {
            level7: '#F65A5A',
            level6: '#FF784E',
            level5: '#FFAE4E',
            level4: '#FFDF35',
            level3: '#91E508',
            level2: '#00D355',
            level1: '#00B047'
        }
    }

    getInitialColors() {
        return {
            level7: "#D1DEFB",
            level6: "#B7C8ED",
            level5: "#94AADC",
            level4: "#7593D6",
            level3: "#5878BE",
            level2: "#3A5CA5",
            level1: "#254B9D"
        }
    }

    getNextText(currentPhase: Phases) {
        switch (currentPhase) {
            case 'welcome':
                this.state = currentPhase;
                return { text: "Привет!", subText: "проверим твою силу!", buttonText: "Новая Игра" }
            case 'hit':
                this.state = currentPhase;
                return { text: "Неплохо!", subText: "Попробуй ещё раз.", buttonText: "Новая Игра" }
            case 'again':
            case 'playing':
                this.state = currentPhase;
                return { text: "Жми на кнопку", subText: "в нужный момент!!", buttonText: "Удар" }
            case 'win':
                this.state = currentPhase;
                return { text: "ВОТ ЭТО СИЛА!", subText: "Ты выбил главный приз!", buttonText: "Новая Игра" }
            default:
                this.state = currentPhase;
                return { text: "Привет!", subText: "проверим твою силу!", buttonText: "Новая Игра" }
        }
    }
}

const gameManager = new GameManager('welcome')

export default gameManager