import { useRouter } from 'next/router'
import styles from '../../../styles/Details.module.css'

export default function Detail(props) {
    console.log(props)
    const router = useRouter()
    return (
        <div className={styles.contenedor}>
            <div className={styles.card}>
                <img src={`http://image.tmdb.org/t/p/w500/${props.posts.backdrop_path}`} alt="" />
                <div className={styles.info}>
                    <h2>{props.posts.title}</h2>
                    <p>{props.posts.overview}</p>
                </div>
                    <button className={styles.button} type="button" onClick={() => router.back()}>
                        Atras
                    </button>
            </div>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    // Call an external API endpoint to get posts

    const { id } = params
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US`)
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}