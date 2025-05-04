import { type Phases } from "../types/d";

class GameManager {
    public state
    constructor(state: Phases) {
        this.state = state
    }

    getNextPhase(currentPhase: Phases, event?: string) {
        switch (currentPhase) {
            case 'welcome':
                return 'playing'
            case 'playing':
                return 'hit';
            case 'hit':
                return 'again'
            case 'win':
                return 'welcome'
            default:
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
        switch(currentPhase){
            case 'welcome':
                return {text: "Привет!", subText: "проверим твою силу!", buttonText: "Новая Игра"}
            case 'playing':
                return {text: "Жми на кнопку", subText: "в нужный момент!!", buttonText: "Удар"}
            case 'hit':
                return {text: "Неплохо!", subText: "Попробуй ещё раз.", buttonText: "Новая Игра"}
            case 'win':
                return {text: "ВОТ ЭТО СИЛА!", subText: "Ты выбил главный приз!", buttonText: "Новая Игра"}
            default:
                return {text: "Жми на кнопку", subText: "в нужный момент!!", buttonText: "Удар"}
        }
    }
}

const gameManager = new GameManager('welcome')

export default gameManager