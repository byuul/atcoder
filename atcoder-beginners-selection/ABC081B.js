function main(inputs) {
    let tmp = inputs
        .split("\n")[1]
        .split(" ")
        .map((n) => parseInt(n, 10));
    let count = 0;

    while (tmp.every((n) => n % 2 === 0)) {
        count++;
        tmp = tmp.map((n) => n / 2);
    }

    console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
