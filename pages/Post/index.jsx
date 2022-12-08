import s from "../../styles/styles.module.css"
import Image from 'next/image'
import Link from 'next/link'
const shortText = function (text) {
    var newText = text.substring(0, 30);
    newText = newText.charAt(0).toUpperCase() + newText.slice(1);

    if (text.length > 30) {
        return newText + "...";
    }
    return newText;
};
export default function Blog({ posts }) {
    return (
       

        <div className={s.contenedor}>
            {posts.results ? (
                posts.results && posts.results.map((item) => (
                    <div key={item.id} className={s.card}>
                        <Link href='/Post/[id]' as={`/Post/${item.id}`}>
                            <div className={s.image}>
                                    <Image src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Posts" width={100} height={100} object-fit="cover"/>
                            </div>
                            <div className={s.content}>
                                <p>{shortText(item.title)}</p>
                                <br />

                            </div>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No hay nada</p>
            )
            }

            {/* <p>Pagina Actual</p> */}
        </div >
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=03527e2f22454dfccfcedb5e1fbb4e00&language=en-US&page=1')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}