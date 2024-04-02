import { useState } from 'react';

const contacts = [
    { name: 'Taylor', email: 'taylor@mail.com' },
    { name: 'Alice', email: 'alice@mail.com' },
    { name: 'Bob', email: 'bob@mail.com' }
];

function Chat({contact}){
    const [text, setText] = useState('');
    return (
        <section>
        <textarea
            value={text}
            placeholder={'Chat to ' + contact.name}
            onChange={e => setText(e.target.value)}
        />
        <br />
        <button>Send to {contact.email}</button>
        </section>
    );
}

function ContactList({contacts, onSelect}){
    return (
        <section className="contact-list">
          <ul style={{listStyle:"none"}}>
            {contacts.map(contact =>
              <li key={contact.email}>
                <button onClick={() => {
                  onSelect(contact);
                }}>
                  {contact.name}
                </button>
              </li>
            )}
          </ul>
        </section>
    );
}
  

function PreservingState() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  )
}

export default PreservingState;
