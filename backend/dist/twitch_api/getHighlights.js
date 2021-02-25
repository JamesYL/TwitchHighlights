"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChatSpeed = void 0;
const getComments_1 = require("./getComments");
// Get chat speed in messages/second
const getChatSpeed = (id, timeInterval = 4) => __awaiter(void 0, void 0, void 0, function* () {
    const simpleComments = yield getComments_1.getSimpleComments(id);
    if (timeInterval <= 0)
        timeInterval = 4;
    timeInterval = Math.ceil(timeInterval);
    const times = simpleComments.map(({ offset_seconds }) => offset_seconds);
    if (times.length < 50)
        return {};
    let speeds = [];
    let timeIndex = 0;
    let topSpeeds = Array(50)
        .fill(0)
        .map(() => ({
        speed: 0,
        time: 0,
    }));
    const START_TIME = times[0] - (times[0] % timeInterval);
    const END_TIME = times[times.length - 1] -
        (times[times.length - 1] % timeInterval) +
        timeInterval;
    for (let seconds = START_TIME; seconds < END_TIME; seconds += timeInterval) {
        let timesInInterval = 0;
        while (seconds <= times[timeIndex] &&
            times[timeIndex] <= seconds + timeInterval &&
            timeIndex !== times.length) {
            timesInInterval++;
            timeIndex++;
        }
        let speed = timesInInterval / timeInterval;
        for (let i = 0; i < topSpeeds.length; i++) {
            const defendingSpeed = topSpeeds[i].speed;
            if (speed > defendingSpeed) {
                for (let j = topSpeeds.length - 1; j > i; j--) {
                    topSpeeds[j] = topSpeeds[j - 1];
                }
                topSpeeds[i] = { speed, time: seconds };
                break;
            }
        }
        speeds.push(speed);
    }
    topSpeeds.sort((a, b) => (a.time <= b.time ? -1 : 1));
    let filteredTopSpeeds = [];
    let lastTime = -100;
    const TIME_INTERVAL_TO_FILTER = 20;
    for (let i = 0; i < topSpeeds.length; i++) {
        const entry = topSpeeds[i];
        if (Math.abs(entry.time - lastTime) > TIME_INTERVAL_TO_FILTER) {
            filteredTopSpeeds.push(entry);
            lastTime = entry.time;
        }
        else if (entry.speed > filteredTopSpeeds[filteredTopSpeeds.length - 1].speed) {
            filteredTopSpeeds[filteredTopSpeeds.length - 1].speed = entry.speed;
        }
    }
    filteredTopSpeeds.sort((a, b) => (a.speed <= b.speed ? 1 : -1));
    filteredTopSpeeds = filteredTopSpeeds
        .slice(0, 15)
        .filter(({ speed }) => speed !== 0);
    if (filteredTopSpeeds.length) {
        const median = filteredTopSpeeds[Math.floor(filteredTopSpeeds.length / 2)].speed;
        filteredTopSpeeds = filteredTopSpeeds.filter(({ speed }) => speed >= median);
    }
    filteredTopSpeeds.sort((a, b) => (a.time <= b.time ? -1 : 1));
    return {
        speeds,
        timeInterval,
        start: START_TIME,
        end: END_TIME,
        topSpeeds: filteredTopSpeeds,
    };
});
exports.getChatSpeed = getChatSpeed;
//# sourceMappingURL=getHighlights.js.map