function main(input) {
    let tmp = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "1") {
            tmp++;
        }
    }

    console.log(tmp);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
