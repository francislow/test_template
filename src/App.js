import { useEffect, useState } from 'react';
import db from './firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore"
import Landing from './sections/Landing';

function App() {
  let [name, setName] = useState(null)
  let [headline, setHeadline] = useState(null)

  // Init input and start listening for input changes
  useEffect(() => {
    const collectionRef = query(collection(db, "sites"), where("url", "==", window.location.hostname));
    onSnapshot(collectionRef, (snapshots) => {
      let { field_inputs } = snapshots.docs.map(doc => doc.data())[0]
      let { name, headline } = field_inputs
      setName(name)
      setHeadline(headline)
    })
  }, [])
  
  return (
    <div>
      <Landing name={name} headline={headline} />
      <p>
        {window.location.hostname}
      </p>
    </div>
  );
}

export default App;
