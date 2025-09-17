export default function hitungTotal(harga) {
    let total = 0;
    harga.forEach(h => {total += h})
    return total
}

