function ListItem({ contact }) {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>{contact.firstName}</td>
      <td>{contact.lastName}</td>
      <td>{contact.email}</td>
    </tr>
  );
}

export default ListItem;
