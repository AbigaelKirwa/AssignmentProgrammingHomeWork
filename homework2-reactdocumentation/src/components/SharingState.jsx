import { useState } from 'react';

export default function SharingState() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Facts about Computer Science</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        Computer Science is the study of solving problems using software. It grew as a separate field from Mathematics.
      </Panel>
      <Panel
        title="Fields"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        Computer Science has grown to have numerous fields, mainly, software development, machine learning, and networking.
      </Panel>
      <Panel
        title="Salary"
        isActive={activeIndex === 2}
        onShow={()=>setActiveIndex(2)}
      >
        The average salary ranges between $70,0000 and $150,000 for a beginner depending on the field.
      </Panel>
    </>
  );
}

function Panel({title, children, isActive, onShow}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}
