export const total = (a, b, c, d, e) => a + b + c + d + e;
export const pajak = (total) => total * 0.02;
export const diskon = (total) => (total > 100000 ? total * 0.1 : 0);
export const sisa = (bayar, total) => bayar - total;
