export type OnUpdate = (progress: number, completed: boolean) => void;
class Observable {
  private progress: number;
  private onUpdate: OnUpdate | null;

  constructor(onUpdate: OnUpdate | null) {
    this.progress = 0;
    this.onUpdate = onUpdate;
  }
  updateProgress(decrementAmount: number) {
    this.progress += Math.abs(decrementAmount);
    if (this.onUpdate) this.onUpdate(this.progress, false);
  }
  finish() {
    if (this.onUpdate) this.onUpdate(this.progress, true);
  }
}
export default Observable;
