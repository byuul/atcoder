function main(inputs) {
    const tmps = inputs.split("\n");
    const a = parseInt(tmps[0], 10);
    const b = parseInt(tmps[1], 10);
    const c = parseInt(tmps[2], 10);
    const total = parseInt(tmps[3], 10);

    let count = 0;

    for (let i = 0; i <= a; i++) {
        for (let j = 0; j <= b; j++) {
            for (let k = 0; k <= c; k++) {
                if (500 * i + 100 * j + 50 * k === total) {
                    count++;
                }
            }
        }
    }

    console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
