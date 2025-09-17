export const pendapatan = [800000, 1000000, 2500000, 3100000]

export const totalPendapatan = () => pendapatan.reduce((total, p) => total + p, 0)