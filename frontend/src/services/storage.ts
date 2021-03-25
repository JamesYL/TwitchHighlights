import { Speed } from "./speeds";

const STORAGE_KEY = "vods";

export interface SingleVodInfo {
  speeds: Speed;
}
export const getGenericSingleVodInfo = (): SingleVodInfo => {
  return {
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
  } catch (e) {
    return e.name;
  }
  return "";
};
export const removeVod = (vodID: string | number) => {
  const vodsObj = getVodsObject();
  if (vodID in vodsObj) {
    delete vodsObj[vodID];
  }
};
export const addOrUpdateVod = (
  vodID: string | number,
  vodInfo: SingleVodInfo
) => {
  const vodObj = getVodsObject();
  vodObj[vodID] = vodInfo;
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
