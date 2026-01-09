import CardPost from '../../../components/CardPost/CardPost'
import CreatePost from '../../../components/CreatePost/CreatePost'
import styles from './styles.module.css'

const Home = () => {
  return (
    <main className={styles.container}>
      <CreatePost type={0} />
      <CardPost type={0} img='https://images.unsplash.com/photo-1609155035300-15e1ffa95f12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <CardPost type={0} img='https://images.unsplash.com/photo-1676302447092-14a103558511?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <CardPost type={0} />
      <CardPost type={0} img='https://images.unsplash.com/photo-1758685848095-249ad965f4f3?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <CardPost type={0} img='https://images.unsplash.com/photo-1648201188793-418f2b9b4b32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </main>
  )
}

export default Home