import { useEffect, useState } from 'react';
import db from './firebase'
import { collection, query, where, onSnapshot } from "firebase/firestore"
import Landing from './sections/Landing';
import Footer from './sections/Footer';

function App() {
  let [name, setName] = useState(null)
  let [headline, setHeadline] = useState(null)
  let [email, setEmail] = useState(null)
  let [instaUrl, setInstaUrl] = useState(null)
  let [githubUrl, setGithubUrl] = useState(null)
  let [linkedinUrl, setLinkedinUrl] = useState(null)

  // Init input and start listening for input changes
  useEffect(() => {
    const collectionRef = query(collection(db, "sites"), where("url", "==", window.location.hostname));
    onSnapshot(collectionRef, (snapshots) => {
      let { field_inputs } = snapshots.docs.map(doc => doc.data())[0]
      let { name, headline, email, insta_url, github_url, linkedin_url } = field_inputs
      setName(name)
      setHeadline(headline)
      setEmail(email)
      setInstaUrl(insta_url)
      setGithubUrl(github_url)
      setLinkedinUrl(linkedin_url)

      // Set web title
      document.title = name;
    })
  }, [])
  
  return (
    <div>
      <Landing name={name} headline={headline} />
      <Footer instaUrl={instaUrl} githubUrl={githubUrl} linkedinUrl={linkedinUrl} email={email} />
    </div>
  );
}

export default App;
