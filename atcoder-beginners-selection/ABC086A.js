function main(input) {
    const args = input.split(" ");
    const a = args[0];
    const b = args[1];

    return (a * b) % 2 === 1 ? console.log("Odd") : console.log("Even");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
