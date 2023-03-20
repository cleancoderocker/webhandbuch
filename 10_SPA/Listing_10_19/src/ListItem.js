function ListItem({ contact, onDelete }) {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
      <td>
        <button onClick={() => onDelete(contact)}>löschen</button>
      </td>
    </tr>
  );
}

export default ListItem;
