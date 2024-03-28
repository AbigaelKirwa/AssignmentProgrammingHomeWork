import {useState} from 'react'

const FavoriteSubjects = () => {
    const [favoriteSubjects, setFavoriteSubjects] = useState<string[]>([""])

    const addFavoriteSubject = ()=>{
        const newSubject = prompt("Add a new subject")
        if(newSubject){
            setFavoriteSubjects([...favoriteSubjects, newSubject])
        }
    }

  return (
    <div>
        <h3>Choose your favorite subject</h3>
        {favoriteSubjects.map((subject, index)=>(
            <li style={{listStyle:'none'}} key={index}>{subject}</li>
        ))}
        <button onClick={addFavoriteSubject}>Add a favorite subject</button>
    </div>
  )
}

export default FavoriteSubjects