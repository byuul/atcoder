function main(input) {
    const temp = input.split(" ");
    const total = parseInt(temp[0], 10);
    const min = parseInt(temp[1], 10);
    const max = parseInt(temp[2], 10);

    const sums = Array.from(new Array(total), (x, i) => ++i).filter((i) => {
        let n = i
            .toString()
            .split("")
            .reduce((acc, curr) => acc + parseInt(curr), 0);

        return n >= min && n <= max;
    });

    console.log(sums.reduce((acc, curr) => acc + curr, 0));
}

main("10 1 2");
main(require("fs").readFileSync("/dev/stdin", "utf8"));
