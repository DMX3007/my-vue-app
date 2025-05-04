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