export type OnUpdate = (progress: number, total: number) => void;
export type OnComplete = () => void;
class Observable {
  private total: number;
  private progress: number;
  private onUpdate: OnUpdate;
  private onComplete: OnComplete;

  constructor(total: number, onUpdate: OnUpdate, onComplete: OnComplete) {
    this.total = Math.abs(total);
    this.progress = 0;
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
  }
  updateProgress(decrementAmount: number) {
    this.progress += Math.abs(decrementAmount);
    if (this.progress >= this.total) this.onComplete();
    else this.onUpdate(this.progress, this.total);
  }
}
export default Observable;
