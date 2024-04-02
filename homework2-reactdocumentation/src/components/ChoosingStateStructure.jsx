import { useEffect, useState } from 'react';

function ChoosingStateStructure() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(()=>{
    setFullName(firstName + ' ' + lastName)
  },[firstName, lastName])

  

  return (
    <>
      <h2>Let us check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={(e)=>setFirstName(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={(e)=>setLastName(e.target.value)}
        />
      </label>
      <p>
        The ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

export default ChoosingStateStructure