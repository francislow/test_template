import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore"

function App() {
  let [name, setName] = useState(null)
  let [headline, setHeadline] = useState(null)

  useEffect(() => {
    const collectionRef = query(collection(db, "sites"), where("url", "==", window.location.hostname));
    onSnapshot(collectionRef, (snapshots) => {
      let { inputs } = snapshots.docs.map(doc => doc.data())[0]
      let { name, headline } = inputs
      setName(name)
      setHeadline(headline)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{name ? name : 'YOUR NAME'}</p>
        <p>{headline ? headline : "HEADLINE"}</p>
        <p>
          {window.location.hostname}
        </p>
      </header>
    </div>
  );
}

export default App;
