import { Speed } from "./speeds";
const STORAGE_KEY = "vods";

export interface SingleVodInfo {
  vodID: string | number;
  speeds: Speed;
}
export const getGenericSingleVodInfo = (): SingleVodInfo => {
  return {
    vodID: -1,
    speeds: {
      increment: 1,
      speeds: [],
    },
  };
};
interface StoredVodsInfo {
  [vodID: string]: SingleVodInfo;
}
const getVodsObject = (): StoredVodsInfo => {
  const jsonStr = window.localStorage.getItem(STORAGE_KEY);
  if (!jsonStr) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
    return {};
  }
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return {};
  }
};
const saveVods = (vod: StoredVodsInfo): string => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(vod));
    return "";
  } catch (e) {
    console.log("test");
    return e.name;
  }
};
export const removeVod = (vodID: string | number) => {
  const vodsObj = getVodsObject();
  if (vodID in vodsObj) {
    delete vodsObj[vodID];
  }
  saveVods(vodsObj);
};
/**
 * @returns DOMException name, or empty string for success
 */
export const addOrUpdateVod = (vodInfo: SingleVodInfo) => {
  const vodObj = getVodsObject();
  vodObj[vodInfo.vodID] = vodInfo;
  return saveVods(vodObj);
};
export const clearVods = () => {
  window.localStorage.removeItem(STORAGE_KEY);
};
export const getSingleVodInfo = (
  vodID: string | number
): SingleVodInfo | undefined => {
  const vodObj = getVodsObject();
  if (vodID in vodObj) return vodObj[vodID];
};
export const getAllVods = (): SingleVodInfo[] => {
  const vods: SingleVodInfo[] = [];
  const vodObj = getVodsObject();
  for (const key in vodObj) {
    vods.push(vodObj[key]);
  }
  return vods;
};
export const getNumVods = () => {
  return Object.keys(getVodsObject()).length;
};
