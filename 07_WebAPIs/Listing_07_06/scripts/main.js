function createTable(persons) {
  const container = document.getElementById('container');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>First Name</th><th>Last Name</th><th>Position</th>';
  const tbody = document.createElement('tbody');
  for (let i = 0; i < persons.length; i++) {
    const person = persons[i];
    const tr = document.createElement('tr');
    tr.innerHTML = `
<td>
${person.firstName}
</td>
<td>
${person.lastName}
</td>
<td>
${person.position}
</td>
`;
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
}
document.addEventListener('DOMContentLoaded', (event) => {
  const request = new XMLHttpRequest();
  request.open('GET', 'data/persons.json', true);
  request.responseType = 'json';
  request.setRequestHeader('Accept', 'application/json');
  request.addEventListener('load', () => {
    if (request.status === 200) {
      let persons;
      if (request.responseType === 'json') {
        persons = request.response;
      } else {
        persons = JSON.parse(request.responseText);
      }
      createTable(persons);
    }
  });
  request.send();
});