function createTable(persons) {
  // Container-Element selektieren
  const container = document.getElementById('container');
  // Tabelle erstellen
  const table = document.createElement('table');
  // Tabellenüberschrfit erstellen
  const thead = document.createElement('thead');
  thead.innerHTML = '<tr><th>Vorname</th><th>Nachname</th><th>Position</th>';

  // Tabellenkörper erstellen
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

  // Tabellenüberschrift zu Tabelle hinzufügen
  table.appendChild(thead);
  // Tabellenkörper zu Tabelle hinzufügen
  table.appendChild(tbody);
  // Tabelle zu Container hinzufügen
  container.appendChild(table);
}

// Registrierung des Eventlisteners
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

