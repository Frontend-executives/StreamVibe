import { makeAutoObservable } from 'mobx'

export class QuestionStore {
  isOpen: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  onOpen = (): void => {
    this.isOpen = true
  }

  onClose = (): void => {
    this.isOpen = false
  }
}
