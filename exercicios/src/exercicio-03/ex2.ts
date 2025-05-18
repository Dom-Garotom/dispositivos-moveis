let somaPares: number = 0

for (let i = 0; i <= 20; i++) {
    i % 2 === 0 && (somaPares += i)
}

console.log(somaPares)