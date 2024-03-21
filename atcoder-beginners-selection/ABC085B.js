// @see https://atcoder.jp/contests/abs/tasks/abc085_b

function Main(input) {
    const temps = input.split("\n").map((value) => parseInt(value, 10));
    const length = temps[0];

    const arr = Array.from(new Set(temps.slice(1, length + 1)));

    console.log(arr.length);
}

Main("3\n10\n9\n8\n8");
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
