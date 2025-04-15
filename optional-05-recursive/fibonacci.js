function fibonacci(n) {
    // Syarat dasar: jika n <= 0, kembalikan [0], jika n == 1, kembalikan [0, 1]
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    }
  
    // Panggilan rekursif: dapatkan deret Fibonacci sebelumnya
    const fib = fibonacci(n - 1);
    // Tambahkan angka Fibonacci berikutnya
    fib.push(fib[n - 1] + fib[n - 2]);
    return fib;
  }
  
  export default fibonacci;
  