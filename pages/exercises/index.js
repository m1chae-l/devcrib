import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../exercises/exercisesgen.module.css"
import ExLSb from "./ExLSb";
import PageContentFooter from "../../components/PageContentFooter";
// default imports


// &#123; Left Curly Bracket
// &#125; right Curly Bracket


// <	&lt;	&#60;	&#x3C;	less than
// >	&gt;	&#62;	&#x3E;	greater than


const ExercisesHome = () => {
    return (
        <>
            <Head>
                <title>DevCrib Exercises | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>


            <div className={styles.genexcbackground}>
                <ExLSb />

                <div className={styles.exhomepagecontent}>
                    <h1>DevCrib Exercises</h1>
                    <h2>Test Your Skills!</h2>
                    <div className={styles.extraborder}>
                        <h3>Exercises</h3>
                        <p>There a variety of exercises (with answers) for each tutorial. <br />
                            Try to solve an exercise by editing some code.After Submitting, you can show the answer to see what you&apos;ve done wrong.</p>
                    </div>

                    <div className={styles.htmlex}>
                        <h1>HTML</h1>

                        <Link href="/exercises/html/">
                            <a><h3>Start Exercise</h3>
                            </a>
                        </Link>

                    </div>
                    <div className={styles.cssex}>
                        <h1>CSS</h1>

                        <Link href="/exercises/css/">
                            <a><h3>Start Exercise</h3>
                            </a>
                        </Link>

                    </div>
                    <div className={styles.jsex}>
                        <h1>JavaScript</h1>

                        <Link href="/exercises/javascript/">
                            <a><h3>Start Exercise</h3>
                            </a>
                        </Link>

                    </div>

                    <PageContentFooter />
                </div>
            </div>
        </>
    );
}

export default ExercisesHome;