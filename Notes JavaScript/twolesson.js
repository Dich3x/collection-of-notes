outer: for (let i = 0; i < 3; i++) {
    for (let i = 0; i < 3; i++) {
        console.log(i);
        if (i === 1) break outer;
    }
}