import axios from "axios";
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8000";
export interface Speed {
  time: number;
  speed: number;
}
export const getSpeeds = async (id: number | string): Promise<Speed[]> => {
  try {
    const res = await axios.get(`${baseUrl}/api/search/speed/${id}`);
    const speeds: number[] = res.data.speeds;
    const output: Speed[] = [];
    const increment = res.data.increment;
    let time = 0;
    speeds.forEach((item) => {
      if (item >= 0) {
        output.push({ time: time, speed: item });
        time += increment;
      } else {
        for (let i = 0; i < Math.abs(item); i++) {
          output.push({ time: time, speed: 0 });
          time += increment;
        }
      }
    });
    return output;
  } catch (err) {
    throw new Error(err.message);
  }
};
