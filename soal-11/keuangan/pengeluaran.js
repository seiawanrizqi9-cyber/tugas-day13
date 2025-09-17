export const pengeluaran = [500000, 1700000, 1400000, 2700000]

export const totalPengeluaran = () => pengeluaran.reduce((total, k) => total + k, 0)