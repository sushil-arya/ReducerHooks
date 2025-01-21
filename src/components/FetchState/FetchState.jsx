import {React,useState} from 'react'
import styles from './FetchState.module.css'


//loading
//Post
//Error

const FetchState = () => {
  const[loading,setLoading] = useState(false);
  const[posts,setPosts] = useState([]);
  const[error,setError] = useState(false);

  function handleFetch(){
    setLoading(true);
    setError(false);
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data => {
      console.log(data)
      setPosts(data);
      setLoading(false);
    }))
    .catch((err) => {
      setError(true)
      setLoading(false)
      }
    )
  }

  console.log(styles);
  return (
    <div className={styles.container}>
      <button className={styles.fetch_button} onClick={handleFetch}>{loading?'Loading...':'Fetch Posts'}</button>
      {error && <span className={styles.error_message}>Something went wrong</span>}
      <div className={styles.card_container}>
        {posts.map((post)=>(
          <div className={styles.card}>
          <div className={styles.card_image}>
            <img src={post.image} alt={post.title} />
          </div>
          <div className={styles.card_content}>
            <h3 className={styles.card_title}>{post.title}</h3>
            <p className={styles.card_price}>{post.price}/-</p>
          </div>
          <div className={styles.card_actions}>
            <button className={styles.card_btn}>Buy Now</button>
          </div>

        </div>
      ))}
      </div>
    </div>
  )
}

export default FetchState