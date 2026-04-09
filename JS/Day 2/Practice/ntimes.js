let n = parseInt(prompt("Enter a number:"));

if (n < 8) {
    for (let i = 1; i <= n; i++) {
        document.write(n);
    }
} else {
    for (let i = 1; i <= n * n; i++) {
        document.write(n);
    }
}