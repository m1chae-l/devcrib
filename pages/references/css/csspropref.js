import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "../referencesgeneral.module.css"
import CssRefLSb from "./comps/CssRefLSb";
// default imports
import csspropref from "../../../jsons/cssref/CssProp.json"
import { useState, useEffect } from "react";
import PageContentFooter from "../../../components/PageContentFooter";
import { useAuthContext } from "../../../hooks/useAuthContext"


const CssPropRef = () => {

    const { user } = useAuthContext()

    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState('Tag Not Found')


    useEffect(() => {
        setsearch("")
    }, [])

    return (
        <>

            <Head>
                <title>CSS Property Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <CssRefLSb />
                {user ? (

                    <div className={styles.pagecontent}>
                        <h1>CSS Property Reference</h1>
                        <h2>CSS Properties Listed Alphabetically</h2>
                        {/* Search Bar */}
                        <form className={styles.search}>
                            <input
                                type="text"
                                placeholder="Search a Property.."
                                onChange={(event) => setsearch(event.target.value)}

                            />
                        </form>
                        <div>
                            <table className={styles.reftable}>
                                <tbody>
                                    <tr>
                                        <th>Property</th>
                                        <th>Description</th>
                                    </tr>
                                    {csspropref.filter((cssprop) => {
                                        if (search === "") {
                                            return cssprop;
                                        } else if (
                                            cssprop?.Property.toLowerCase().includes(search.toLowerCase())
                                        ) {
                                            return cssprop;
                                        } else if (
                                            cssprop?.Property.toLowerCase().includes(search.toLowerCase())
                                        ) return setnoRes('No Results')
                                    }).map(cssprop => (
                                        <tr key={cssprop.id}>
                                            <td>{cssprop['Property']}</td>
                                            <td>{cssprop['Description']}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>


                        <PageContentFooter />
                    </div>) : <div className="loginmessage">
                    <h2>
                        <Link href="/login/"><a>Log In</a></Link>
                        to See References</h2 >
                </div>}

            </div>

        </>
    );
}

export default CssPropRef;