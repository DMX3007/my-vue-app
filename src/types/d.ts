export type Phases = 'welcome' | 'playing' | 'hit' | 'again' | 'win'

export interface IHtmlMainButton {
  text: string,
  subText: string,
  buttonText: string,
}

export interface GameState {
  state: Phases,
  hitScore: number | null,
  textHtml: IHtmlMainButton
}


export interface MainBarColors {
  initial: {
    level7: string,
    level6: string,
    level5: string,
    level4: string,
    level3: string,
    level2: string,
    level1: string
  }
  target: {
    level7: string,
    level6: string,
    level5: string,
    level4: string,
    level3: string,
    level2: string,
    level1: string
  }
}