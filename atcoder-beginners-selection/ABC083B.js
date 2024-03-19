function main(input) {
    const temp = input.split(" ");
    const total = parseInt(temp[0], 10);
    const min = parseInt(temp[1], 10);
    const max = parseInt(temp[2], 10);

    const result = [];

    for (let i = 1; i <= total; i++) {
        const sum = i
            .toString()
            .split("")
            .reduce((acc, curr) => acc + parseInt(curr), 0);

        if (sum >= min && sum <= max) {
            result.push(i);
        }
    }

    console.log(result.reduce((prev, acc) => prev + acc, 0));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
