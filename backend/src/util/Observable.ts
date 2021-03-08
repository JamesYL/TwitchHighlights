export type OnUpdate = (progress: number) => void;
class Observable {
  private progress: number;
  private onUpdate: OnUpdate;

  constructor(onUpdate: OnUpdate) {
    this.progress = 0;
    this.onUpdate = onUpdate;
  }
  updateProgress(decrementAmount: number) {
    this.progress += Math.abs(decrementAmount);
    this.onUpdate(this.progress);
  }
}
export default Observable;
