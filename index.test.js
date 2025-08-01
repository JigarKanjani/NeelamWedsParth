const fs = require('fs');

test('index.html contains DOCTYPE declaration', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  expect(html).toMatch(/<!DOCTYPE html>/i);
});
