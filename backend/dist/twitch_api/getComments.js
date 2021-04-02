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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSimpleComments = exports.getCommentsJson = void 0;
const axios_1 = __importDefault(require("axios"));
const getVodInfo_1 = __importDefault(require("./getVodInfo"));
const config = { headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" } };
// This is used to get the first few comments based on time
const getFirstComments = (videoId, startInSeconds) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.twitch.tv/v5/videos/${videoId}/comments?content_offset_seconds=${startInSeconds}`;
    const { data } = yield axios_1.default.get(url, config);
    console.log(`loaded chat from ${data.comments[0].content_offset_seconds}s to ${data.comments[data.comments.length - 1].content_offset_seconds}s`);
    return data;
});
// This is used to get the next comments based on the link from the previous comment
const getNext = (videoId, cursor) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.twitch.tv/v5/videos/${videoId}/comments?cursor=${cursor}`;
    try {
        const { data } = yield axios_1.default.get(url, config);
        console.log(`loaded chat from ${data.comments[0].content_offset_seconds}s to ${data.comments[data.comments.length - 1].content_offset_seconds}s`);
        return data;
    }
    catch (err) {
        throw new Error("Bad Id");
    }
});
const getCommentsJsonHelper = (videoId, startInSeconds, endInSeconds) => __awaiter(void 0, void 0, void 0, function* () {
    const delta = endInSeconds - startInSeconds;
    if (delta < 1000) {
        let comments = [];
        let data;
        try {
            data = yield getFirstComments(videoId, startInSeconds);
            comments = comments.concat(data.comments);
        }
        catch (err) {
            throw new Error("ERROR: Failed to get the first few comments");
        }
        if (!comments.length || endInSeconds < startInSeconds) {
            console.log("WARNING: Start time has no comments");
            return [];
        }
        while (comments[comments.length - 1].content_offset_seconds < endInSeconds &&
            data._next) {
            try {
                data = yield getNext(videoId, data._next);
            }
            catch (err) {
                throw new Error("ERROR: Failed to get the next comments");
            }
            comments = comments.concat(data.comments);
        }
        return comments;
    }
    else {
        const comments1 = getCommentsJsonHelper(videoId, startInSeconds, startInSeconds + delta / 2);
        const comments2 = getCommentsJsonHelper(videoId, startInSeconds + delta / 2, endInSeconds);
        return Promise.all([comments1, comments2]).then((comments) => {
            if (comments[0].length === 0 || comments[1].length === 0)
                return comments[0].concat(comments[1]);
            const earliest = comments[1][0].content_offset_seconds;
            let currIndex = comments[0].length - 1;
            while (currIndex >= 0 &&
                comments[0][currIndex].content_offset_seconds >= earliest) {
                currIndex--;
            }
            return comments[0].slice(0, currIndex + 1).concat(comments[1]);
        });
    }
});
const getCommentsJson = (videoId, startInSeconds = 0, endInSeconds = 1000000000) => __awaiter(void 0, void 0, void 0, function* () {
    const length = (yield getVodInfo_1.default(videoId)).length;
    const comments = yield getCommentsJsonHelper(videoId, startInSeconds, endInSeconds > length ? length : endInSeconds);
    console.log("Finished loading comments JSON");
    return comments;
});
exports.getCommentsJson = getCommentsJson;
// Only includes display name, the message, and the time
const getSimpleComments = (videoId, startInSeconds = 0, endInSeconds = 1000000000) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield exports.getCommentsJson(videoId, startInSeconds, endInSeconds);
    return comments.map((item) => ({
        name: item.commenter.display_name,
        message: item.message.body.trim(),
        offset_seconds: item.content_offset_seconds,
    }));
});
exports.getSimpleComments = getSimpleComments;
//# sourceMappingURL=getComments.js.map