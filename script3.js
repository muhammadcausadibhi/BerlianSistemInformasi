function findTopCustomers(data) {
    // Membagi data menjadi array transaksi
    const transactions = data.split('\n').slice(1); // Skip baris pertama (header)
  
    // Membuat objek untuk menyimpan jumlah transaksi per pelanggan
    const customerCounts = {};
  
    // Menghitung jumlah transaksi untuk setiap pelanggan
    transactions.forEach(transaction => {
      const [_, customerId] = transaction.split(',');
      customerCounts[customerId] = (customerCounts[customerId] || 0) + 1;
    });
  
    // Mengubah objek menjadi array untuk memudahkan pengurutan
    const customerData = Object.entries(customerCounts).map(([customerId, count]) => ({ customerId, count }));
  
    // Mengurutkan berdasarkan jumlah transaksi (descending) dan ID pelanggan (ascending)
    customerData.sort((a, b) => {
      if (b.count !== a.count) {
        return b.count - a.count;
      } else {
        return a.customerId - b.customerId;
      }
    });
  
    // Mengambil data pelanggan dengan jumlah transaksi terbanyak
    const topCustomers = customerData.slice(0, 1);
  
    // Memformat output
    const output = topCustomers.map(({ customerId, count }) => `Customer_ID(${customerId}) Total Penjualan(${count})`).join('\n');
  
    return output;
  }
  
  // Contoh penggunaan
  const inputData = `InputID(Int),Customer_ID(Varchar(Max)),Transaction_Date(Date)
  1,217/30/2019
  2,157/21/2019
  3,167/18/2019
  4,207/22/2019
  5,157/15/2019
  6,207/12/2019
  7,157/21/2019
  8,207/12/2019`;
  
  const result = findTopCustomers(inputData);
  console.log(result);