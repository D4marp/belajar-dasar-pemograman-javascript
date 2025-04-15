import sum from './index.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('Menambahkan dua bilangan positif', () => {
  const result = sum(2, 3);
  assert.equal(result, 5);  // 2 + 3 = 5
});

test('Menambahkan dua bilangan negatif', () => {
  const result = sum(-2, -3);
  assert.equal(result, 0);  // Harus mengembalikan 0 karena bilangan negatif
});

test('Menambahkan bilangan pertama negatif dan yang kedua positif', () => {
  const result = sum(-2, 3);
  assert.equal(result, 0);  // Harus mengembalikan 0 karena salah satu bilangan negatif
});

test('Menambahkan bilangan dengan tipe data yang salah', () => {
  const result = sum('a', 3);
  assert.equal(result, 0);  // Harus mengembalikan 0 karena 'a' bukan angka
});

test('Menambahkan dua bilangan dengan nilai 0', () => {
  const result = sum(0, 0);
  assert.equal(result, 0);  // 0 + 0 = 0
});

test('Menambahkan bilangan pertama angka dan yang kedua string', () => {
  const result = sum(3, '5');
  assert.equal(result, 0);  // Harus mengembalikan 0 karena '5' adalah string
});

test('Menambahkan dua angka dengan nilai yang sangat besar', () => {
  const result = sum(1e6, 1e6);
  assert.equal(result, 2e6);  // 1e6 + 1e6 = 2e6
});

test('Menambahkan angka dengan nilai float', () => {
  const result = sum(2.5, 3.5);
  assert.equal(result, 6);  // 2.5 + 3.5 = 6
});
