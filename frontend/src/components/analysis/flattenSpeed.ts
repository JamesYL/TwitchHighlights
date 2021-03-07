import { Speed } from "./../../services/speeds";
export const flattenSpeed = (speeds: Speed[], flattenAmt: number) => {
  const output: Speed[] = [];
  let i = 0;
  while (i < speeds.length) {
    let tmp: Speed = { time: 0, speed: 0 };
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
