import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

// Menambahkan pesanan untuk pelanggan Alice dan Bob
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 }
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 }
]);

// Menampilkan orders secara detail menggunakan JSON.stringify untuk menampilkan objek secara lengkap
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

// Memperbarui status pesanan
updateOrderStatus(orders[0].id, 'Diproses');
updateOrderStatus(orders[1].id, 'Selesai');

// Menampilkan orders setelah update status
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

console.log(calculateTotalRevenue());
/**
 * Output yang diharapkan:
 * 25000
 */

// Menghapus pesanan dengan ID tertentu
deleteOrder(orders[0].id);

// Menampilkan orders setelah menghapus pesanan Alice
console.log(JSON.stringify(orders, null, 2));

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
