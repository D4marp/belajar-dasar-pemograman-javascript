// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Menyimpan data pesanan
let orders = [];

// Fungsi untuk menambahkan pesanan baru
function addOrder(customerName, items) {
  const order = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: items.reduce((total, item) => total + item.price, 0),
    status: 'Menunggu'
  };
  orders.push(order);
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = status;
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang sudah selesai
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai')
    .reduce((total, order) => total + order.totalPrice, 0);
}

// Fungsi untuk menghapus pesanan berdasarkan ID
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id);
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
