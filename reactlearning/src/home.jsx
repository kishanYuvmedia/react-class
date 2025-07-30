import { Link } from 'react-router-dom';
const Home=()=>{
  return (
    <div>
      <h1>Welcome to React Learning</h1>
      <ul style={{ listStyleType: 'none' }} className='list-disc'>
        <li><Link to={'./usestate'}>Use state example</Link></li>
         <li><Link to={'./useeffect'}>Use effect example</Link></li>
      </ul>
    </div>
  );
}
export default Home;