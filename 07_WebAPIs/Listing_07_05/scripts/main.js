const persons = [
  {
    firstName: 'John',
    lastName: 'Doe',
    position: 'CTO'
  },
  {
    firstName: 'James',
    lastName: 'Doe',
    position: 'CEO'
  },
  {
    firstName: 'Peter',
    lastName: 'Doe',
    position: 'Software Developer'
  }
];
function createTable(persons) {
  // Select container element
  const container = document.getElementById('container');
  // Create table
  const table = document.createElement('table');// Create table heading
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>First Name</th><th>Last Name</th><th>Position</th > ';
  // Create table body
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
  // Add table heading to table
  table.appendChild(thead);
  // Add table body to table
  table.appendChild(tbody);
  // Add table to container
  container.appendChild(table);
}
// Registration of the event listener
document.addEventListener('DOMContentLoaded', (event) => {
  createTable(persons);
});