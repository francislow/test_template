import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore"

function App() {
  let [title, setTitle] = useState(null)

  useEffect(() => {
    const collectionRef = query(collection(db, "sites"), where("url", "==", window.location.hostname));
    onSnapshot(collectionRef, (snapshots) => {
      let { title } = snapshots.docs.map(doc => doc.data())[0]
      setTitle(title)

    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <p>{title}</p>
        <p>
          {window.location.hostname}
        </p>
      </header>
    </div>
  );
}

export default App;
