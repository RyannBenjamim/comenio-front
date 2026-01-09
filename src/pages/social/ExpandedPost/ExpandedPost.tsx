import CardPost from '../../../components/CardPost/CardPost'
import CreatePost from '../../../components/CreatePost/CreatePost'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

const ExpandedPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.return_box}>
        <i className="fa-solid fa-arrow-left"></i>
        <p>Comentários do post de <Link className={styles.author_name} to="">@theryanbenjamim</Link></p>
      </div>

      <CardPost type={1} img='https://images.unsplash.com/photo-1609155035300-15e1ffa95f12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />

      <CreatePost author='theryanbenjamim' type={1} />

      <div className={styles.comments}>
        <CardPost type={0} link='/theryanbenjamim/posts/01/comments/01' />
        <CardPost type={0} img='https://images.unsplash.com/photo-1710776531873-fa1c10b7a68f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
        <CardPost type={0} />
        <CardPost type={0} />
      </div>
    </div>
  )
}

export default ExpandedPost