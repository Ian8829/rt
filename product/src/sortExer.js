// const items = ['Chane', 'Bally', 'Assac'];
// const items = [10, 30, 20, 2];
//
// items.sort((a, b) => a - b);
//
// console.log(items);

const lessons = [
  {
    title: 'JS concat',
    views: 1000
  },
  {
    title: 'JS slice',
    views: 1001
  },
  {
    title: 'JS john',
    views: 1010
  }
];

const list = lessons
  .sort((a, b) => b.views - a.views)
  .map(x => `  <li>${x.title} (${x.views})</li>`)
  .join('\n');

const output = `<ul>\n${list}\n</ul>`;

console.log(output);
