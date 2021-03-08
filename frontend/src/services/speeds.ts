import axios from "axios";
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8000";

export interface SpeedPoint {
  time: number;
  speed: number;
}
export interface Speed {
  loading: boolean;
  numCommentsLoaded: number;
  speeds: SpeedPoint[];
}
interface SpeedData {
  loading: boolean;
  progress: number;
  vodID: string;
  increment: number;
  speeds: number[];
}
export const getSpeeds = async (id: number | string): Promise<Speed> => {
  const res = await axios.get(`${baseUrl}/api/search/speed/${id}`);
  const { loading, progress, increment, speeds } = res.data as SpeedData;
  const output: SpeedPoint[] = [];
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

  return { loading, numCommentsLoaded: progress, speeds: output };
};
