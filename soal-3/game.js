export const POIN_maksimal = 1000;
export const POIN_BONUS = 50;

export default function hitungTotalPoin(poin){
    const total = poin.reduce((acc, nilai) => {
        return acc + nilai
    }, 0)
    return total
} 

