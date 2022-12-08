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
    console.log(posts)
    return (
        // <div className={styles.card}>
        //     {posts?.results.map((item, key) => (
        //         <>
        //             <div className={styles.cardimg} key={key}>
        //                 <img
        //                 src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        //                 width={200}
        //                 height={200}
        //                 alt=""
        //                 />

        //             </div>
        //             <div className={styles.cardinfo}>
        //                 <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
        //                 <p className={styles.texttitle}>{item.title}</p>
        //                 <p className={styles.textbody}>{item.overview.slice(0,5)}</p>
        //             </div>
        //         </>

        //     ))}
        // </div>

        <div className={s.contenedor}>
            {posts.results ? (
                posts.results && posts.results.map((item) => (
                    <div key={item.id} className={s.card}>
                            <Link href='/Post/[id]' as={`/Post/${item.id}`}>
                            <div className={s.image}>
                                <img src={`http://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Posts"/>
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