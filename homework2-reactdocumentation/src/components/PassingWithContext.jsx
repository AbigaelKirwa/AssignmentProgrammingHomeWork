import {createContext, useContext} from 'react'

const LevelContext = createContext(0);

function Heading({children}){
    const level = useContext(LevelContext)
    switch (level){
        case 0: throw Error('Heading should be inside section')
        case 1: return <h1>{children}</h1>
        case 2: return <h3>{children}</h3>
        case 3: return <h5>{children}</h5>
        default: throw Error('Unknown level: ' + level);
    }
}

function Section({children}){
    const level = useContext(LevelContext)
    return(
        <section className='section'>
            <LevelContext.Provider value={level+1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}

const PassingWithContext = () => {
  return (
    <div>
        <Section>
            <Heading>Teacher: Mr Atona</Heading>
            <Section>
                <Heading>Subject: Mathematics</Heading>
                <Section>
                    <Heading>Students: 20</Heading>
                </Section>
            </Section>
        </Section>
    </div>
  )
}

export default PassingWithContext