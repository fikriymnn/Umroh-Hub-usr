export const formatDate = (dateStr: string | Date) => {
    if (dateStr === null) return "Tanggal tidak valid";
    
    // Ambil hanya bagian tanggal tanpa geser timezone
    const [year, month, day] = dateStr.toString().slice(0, 10).split("-");
    return `${day}/${month}/${year}`;
};
