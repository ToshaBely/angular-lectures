interface ITask {
  text: string;
  isDone: boolean;
}

class Task implements ITask {
  public text: string;
  public isDone: boolean;

  private additionalInfo: string = 'It`s a secret';

  constructor(text: string, isDone: boolean) {
    this.text = text;
    this.isDone = isDone;
  }
}
