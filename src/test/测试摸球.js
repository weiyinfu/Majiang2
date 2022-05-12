import { FetchBall } from "../majiang/ai/judger/MyJudger";
var a = [2, 3, 3, 4];
var target = [[2, 0, 1, 0], [1, 1, 2, 1], [0, 2, 2, 0]];
var res = FetchBall.accurate(a, target);
var monte = FetchBall.montecarlo(a, target, 2000);
console.log("accurate " + res + "\nmotecarlo " + monte + "\natMost:" + FetchBall.atMost(a, target) + "\natLeast:" + FetchBall.atLeast(a, target) + "\n");
//# sourceMappingURL=%E6%B5%8B%E8%AF%95%E6%91%B8%E7%90%83.js.map