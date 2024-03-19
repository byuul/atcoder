function main(input) {
    const args = input.split(/\n/);
    const nums = args[1].split(/\s/);
    const num1 = parseInt(args[0], 10);
    const num2 = parseInt(nums[0], 10);
    const num3 = parseInt(nums[1], 10);
    const text = args[2];

    console.log(`${num1 + num2 + num3} ${text}`);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
