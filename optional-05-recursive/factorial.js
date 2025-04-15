function factorial(n) {
    // Syarat dasar: jika n <= 1, kembalikan 1
    if (n <= 1) {
      return 1;
    }
    // Panggilan rekursif
    return n * factorial(n - 1);
  }
  
  export default factorial;
  