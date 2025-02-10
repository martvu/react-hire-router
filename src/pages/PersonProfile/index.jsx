import { useState, useEffect } from "react";
import HireForm from "./components/HireForm";
import { useParams } from "react-router-dom";

function PersonProfile(props) {
  const { people, setHiredPeople, hiredPeople } = props;
  const [person, setPerson] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const person = people.find(person => person.id.value === id);
    setPerson(person);
 
  }, [people, id]);

  if (!person) return <p>Loading...</p>;

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setHiredPeople={setHiredPeople} hiredPeople={hiredPeople}/>
    </article>
  );
}

export default PersonProfile;
