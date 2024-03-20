function main(input) {
    const strs = input.split("\n");
    const cards = strs[1].split(" ").map((card) => parseInt(card), 0);
    const sortedCards = cards.sort((a, b) => (a > b ? -1 : 1));

    let alice = 0;
    let bob = 0;

    for (let i = 0; i < cards.length; i++) {
        // alice
        if (i % 2 === 0) {
            alice = alice + sortedCards[i];
        } else {
            bob = bob + sortedCards[i];
        }
    }

    console.log(alice - bob);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
