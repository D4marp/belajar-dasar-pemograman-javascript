// index.test.js
import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js'; // Import fungsi sum

// Uji jumlah dua angka positif
test('sum of 1 and 2 should be 3', () => {
  assert.strictEqual(sum(1, 2), 3);
});

// Uji jumlah angka positif dan negatif
test('sum of -1 and 2 should be 1', () => {
  assert.strictEqual(sum(-1, 2), 1);
});

// Uji jumlah dengan 0
test('sum of 0 and 0 should be 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Uji jumlah dua angka negatif
test('sum of -1 and -2 should be -3', () => {
  assert.strictEqual(sum(-1, -2), -3);
});
