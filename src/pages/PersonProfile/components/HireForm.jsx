import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm(props) {
  const { person, setHiredPeople, hiredPeople } = props
  const [wage, setWage] = useState( person.wage || 0 ) 
  const navigate = useNavigate();

  function handleSubmit(event) {
    
    person.wage = wage
    if (!hiredPeople.includes(person)) {
      setHiredPeople([...hiredPeople, person])
      navigate('/')
    } else {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">{!person.wage ? "Hire" : "Edit" }</button>
    </form>
  )
}

export default HireForm
