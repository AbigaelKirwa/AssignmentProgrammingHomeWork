import React, {useState} from 'react'

const ReactingToInput = () => {
    const [cityAnswer, setCityAnswer] = useState('');
    const [populationAnswer, setPopulationAnswer] = useState(0)
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
  
    if (status === 'success') {
      return <h1>That's right!</h1>
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      setStatus('submitting');
      try {
        await submitForm(cityAnswer, populationAnswer);
        setStatus('success');
      } catch (err) {
        setStatus('typing');
        setError(err);
      }
    }
  
    return (
      <>
        <h2>African City quiz</h2>
        <p>
          1 Which is the only city in the world with a national park?
        </p>
        <p>
          2 What is the population of Tallin?
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
            value={cityAnswer}
            onChange={(e)=>setCityAnswer(e.target.value)}
            disabled={status === 'submitting'}
          />
          <br/>
          <input
            type='number'
            value={populationAnswer}
            onChange={(e)=>setPopulationAnswer(e.target.value)}
            disabled = {status === "submitting"}
          />
          <br />
          <button disabled={
            cityAnswer.length === 0 || populationAnswer === 0 ||
            status === 'submitting'
          }>
            Submit
          </button>
          {error !== null &&
            <p className="Error">
              {error.message}
            </p>
          }
        </form>
      </>
    );
  }
  
  function submitForm(cityAnswer, populationAnswer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = cityAnswer.toLowerCase() !== 'nairobi'
        let shouldPopulationError = parseInt(populationAnswer) !== 1500000
        if (shouldError || shouldPopulationError) {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          resolve();
        }
      }, 1500);
    });
}

export default ReactingToInput