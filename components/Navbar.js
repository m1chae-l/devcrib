import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/navbar.module.css'
import { useContext, useState, useRef, useEffect } from 'react'
import NavTutHtml from './NavTut/NavTutHtml'
import NavTutCss from './NavTut/NavTutCss'
import NavTutJs from './NavTut/NavTutJs'
import NavRefJs from './NavRef/NavRefJs'
import NavRefCss from './NavRef/NavRefCss'
import NavRefHtml from './NavRef/NavRefHtml'
import NavExc from './NavEx/NavExc'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {

    const [openTutorial, setopenTutorial] = useState(false)
    const [openReferences, setopenReferences] = useState(false)
    const [openExercises, setopenExercises] = useState(false)
    const [openMenu, setopenMenu] = useState(false)
    const [mobileTutorial, setmobileTutorial] = useState(false)
    const [mobileReference, setmobileReference] = useState(false)
    const [mobileExercise, setmobileExercise] = useState(false)
    const [TutcaretChange, setTutcaretChange] = useState(false)
    const [RefcaretChange, setRefcaretChange] = useState(false)
    const [ExccaretChange, setExccaretChange] = useState(false)
    const [MenucaretChange, setMenucaretChange] = useState(false)
    const [mobileLogin, setmobileLogin] = useState(false)

    const tutorial = () => {
        setopenTutorial(!openTutorial)
        setopenExercises(false)
        setopenReferences(false)
        setTutcaretChange(!TutcaretChange)
        setExccaretChange(false)
        setRefcaretChange(false)
        // setopenMenu(false)
    }
    const references = () => {
        setopenReferences(!openReferences)
        setopenTutorial(false)
        setopenExercises(false)
        setRefcaretChange(!RefcaretChange)
        setExccaretChange(false)
        setTutcaretChange(false)
        // setopenMenu(false)
    }
    const exercises = () => {
        setopenExercises(!openExercises)
        setopenTutorial(false)
        setopenReferences(false)
        setExccaretChange(!ExccaretChange)
        setRefcaretChange(false)
        setTutcaretChange(false)
        // setopenMenu(false)
    }

    const closeButton = () => {
        setopenTutorial(false)
        setopenExercises(false)
        setopenReferences(false)
        setExccaretChange(false)
        setRefcaretChange(false)
        setTutcaretChange(false)
        // setopenMenu(false)
    }

    const mobilemenu = () => {
        setopenMenu(!openMenu)
        setMenucaretChange(!MenucaretChange)
    }

    const mobilemenuback = () => {
        setmobileTutorial(false)
        setmobileExercise(false)
        setmobileReference(false)
        setopenMenu(false)
        setExccaretChange(false)
        setRefcaretChange(false)
        setTutcaretChange(false)
        setMenucaretChange(false)
    }

    const mobtut = () => {
        setmobileTutorial(!mobileTutorial)
        setTutcaretChange(!TutcaretChange)
        setmobileExercise(false)
        setmobileReference(false)
        setExccaretChange(false)
        setRefcaretChange(false)
    }

    const mobref = () => {
        setmobileReference(!mobileReference)
        setRefcaretChange(!RefcaretChange)
        setmobileTutorial(false)
        setmobileExercise(false)
        setExccaretChange(false)
        setTutcaretChange(false)
    }

    const mobex = () => {
        setmobileExercise(!mobileExercise)
        setExccaretChange(!ExccaretChange)
        setmobileTutorial(false)
        setmobileReference(false)
        setRefcaretChange(false)
        setTutcaretChange(false)
    }

    const mobLogin = () => {
        setmobileLogin(!mobileLogin)
    }

    const { user } = useAuthContext()

    const { logout } = useLogout()
    const { authIsReady } = useAuthContext()

    const logoutClose = () => {
        logout();
        closeButton();
    }


    return (
        <nav className={styles.navbar}>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className={styles.leftnavstuff}>
                <div className={styles.leftnavstuffinner}>
                    <div id="backtotop">
                    </div>
                    <Link href="/">
                        <a onClick={closeButton}>
                            <Image src="/devcrib2.png" alt="site logo" width={128} height={77} />
                        </a>
                    </Link>

                    <p onClick={tutorial} >Tutorials {TutcaretChange ? (
                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                    </p>
                    <p onClick={references}>References {RefcaretChange ? (
                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                    </p>
                    <p onClick={exercises}>Exercises {ExccaretChange ? (
                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                    </p>


                </div>
                <div className={styles.leftnavstuffunder}>
                    {openTutorial ? (
                        <div className={styles.tutmodal}>
                            <button onClick={closeButton} className={styles.xbutton}><Image src="/x-square.svg" width={35} height={35} alt="Home" /></button>
                            <div className={styles.innertutm}>
                                <h1>Tutorials</h1>
                                <div className={styles.inouter}>
                                    <NavTutHtml tutorials={tutorial} />
                                    <NavTutCss tutorials={tutorial} />
                                    <NavTutJs tutorials={tutorial} />
                                </div>
                            </div>
                        </div>
                    ) : null
                    }
                    {openReferences ? (
                        <div className={styles.tutmodal}>
                            <button onClick={closeButton} className={styles.xbutton}><Image src="/x-square.svg" width={35} height={35} alt="Home" /></button>
                            <div className={styles.innertutm}>
                                <h1>References</h1>
                                <div className={styles.inouter}>
                                    <NavRefHtml references={references} />
                                    <NavRefCss references={references} />
                                    <NavRefJs references={references} />
                                </div>
                            </div>
                        </div>
                    ) : null
                    }
                    {openExercises ? (
                        <div className={styles.tutmodal}>
                            <button onClick={closeButton} className={styles.xbutton}><Image src="/x-square.svg" width={35} height={35} alt="Home" /></button>
                            <div className={styles.innertutm}>
                                <Link href="/exercises/">
                                    <h1 className={styles.excgrayback} onClick={exercises}>Exercises</h1>
                                </Link>
                                <div className={styles.inouter}>
                                    <NavExc exercises={exercises} />
                                </div>
                            </div>
                        </div>
                    ) : null
                    }
                </div>
            </div>


            <div className={styles.rightnavstuff}>
                {/* <button className={styles.serbtn}>
                    <Image
                        src="/whitesearch.png"
                        alt="Submit Search"
                        width={20}
                        height={19}
                    />
                </button> */}
                <Link href="https://ko-fi.com/michae_l#paypalModal">
                    <a target="_blank" className={styles.paidc}>Support The Dev 🙂☕</a>
                </Link>

                {authIsReady && (
                    <>
                        {!user && (
                            <>
                                <Link href="/login/">
                                    <a className={styles.login} onClick={closeButton}>Log In</a>
                                </Link>
                                <Link href="/signup/">
                                    <a className={styles.login} onClick={closeButton}>Sign Up</a>
                                </Link>
                            </>)}


                        {user && (
                            <>
                                <p>Hello, {user.displayName}</p>
                                <p className={styles.login} onClick={logoutClose}>Log Out</p>
                            </>
                        )}

                    </>)}
            </div>
            <div className={styles.mobilenavstuff}>
                <div className={styles.mobilenavstuffinner}>
                    <Link href="/">
                        <a>
                            <Image src="/devcrib2.png" alt="site logo" width={128} height={77} />
                        </a>
                    </Link>

                    <p onClick={mobilemenu} >Menu{MenucaretChange ? (
                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                    </p>

                    <Link href="https://ko-fi.com/michae_l#paypalModal">
                        <a target="_blank" className={styles.paidc}>🙂☕</a>
                    </Link>
                    <span className={styles.mobilelogin}><Image src="/user1-removebg-preview.png" width={65} height={45} alt="User" onClick={mobLogin} /></span>
                    {mobileLogin ? (
                        <>
                            {authIsReady && (
                                <>
                                    {!user && (
                                        <>
                                            <Link href="/login/">
                                                <a className={styles.login} onClick={closeButton}>Log In</a>
                                            </Link>
                                            <Link href="/signup/">
                                                <a className={styles.login} onClick={closeButton}>Sign Up</a>
                                            </Link>
                                        </>)}


                                    {user && (
                                        <>
                                            <p>Hello, {user.displayName}</p>
                                            <p className={styles.login} onClick={logoutClose}>Log Out</p>
                                        </>
                                    )}

                                </>)}
                        </>
                    ) : null


                    }

                </div>

                <div>
                    {openMenu ? (
                        <div className={styles.mobiletutmodal}>
                            <button onClick={mobilemenuback} className={styles.mobilexbutton}><Image src="/x-square.svg" width={35} height={35} alt="Home" /></button>
                            <div className={styles.mobileinnertutm}>
                                <h1>Menu</h1>
                                <div className={styles.mobileinouter}>
                                    <p onClick={mobtut} >Tutorials {TutcaretChange ? (
                                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                                    </p>
                                    {mobileTutorial ? (
                                        <div className={styles.tutdpnc}>
                                            <NavTutHtml />
                                            <NavTutCss />
                                            <NavTutJs />
                                        </div>
                                    ) : null}
                                    <p onClick={mobref}>References {RefcaretChange ? (
                                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                                    </p>
                                    {mobileReference ? (
                                        <div className={styles.tutdpnc}>
                                            <NavRefHtml />
                                            <NavRefCss />
                                            <NavRefJs />
                                        </div>
                                    ) : null}
                                    <p onClick={mobex}>Exercises {ExccaretChange ? (
                                        <Image src="/cup.png" width={25} height={25} alt="Close" />
                                    ) : <Image src="/cdown.png" width={25} height={25} alt="Open" />}
                                    </p>
                                    {mobileExercise ? (
                                        <div className={styles.tutdpnc}>
                                            <NavExc exercises={exercises} />
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    ) : null
                    }
                </div>
            </div>










        </nav>
    );
}

export default Navbar;