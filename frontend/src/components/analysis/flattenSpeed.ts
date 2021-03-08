import { SpeedPoint } from "./../../services/speeds";
export const flattenSpeed = (speeds: SpeedPoint[], flattenAmt: number) => {
  const output: SpeedPoint[] = [];
  let i = 0;
  while (i < speeds.length) {
    let tmp: SpeedPoint = { time: 0, speed: 0 };
    for (let j = 0; j < flattenAmt; j++) {
      if (i === speeds.length) {
        output.push(tmp);
        break;
      } else if (j === 0) {
        tmp = speeds[i];
        tmp.speed /= flattenAmt;
      } else {
        tmp.speed += speeds[i].speed / flattenAmt;
      }
      i++;
    }
    output.push(tmp);
  }
  return output;
};
