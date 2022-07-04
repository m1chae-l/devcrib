import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// default imports
import styles from "../referencesgeneral.module.css"
import HtmlRefLSb from "./comps/HtmlRefLSb";
import RefFooter from "../RefFooter"
import htmltagref from "../../../jsons/htmltagref.json"
import { useState, useEffect } from "react";


const HtmlTagRef = () => {


    const [search, setsearch] = useState("")
    const [noRes, setnoRes] = useState('Tag Not Found')


    useEffect(() => {
        setsearch("")
    }, [htmltagref])


    return (
        <>

            <Head>
                <title>HTML Tag Reference | Dev Crib</title>
                <meta name="description" content="Dev Crib" />
            </Head>

            <div className={styles.genrefbackground}>

                <HtmlRefLSb />

                <div className={styles.pagecontent}>
                    <h1>HTML Tag Reference</h1>
                    <h2>HTML Tags Listed Alphabetically</h2>
                    {/* Search Bar */}
                    <form className={styles.search}>
                        <input
                            type="text"
                            placeholder="Search a Tag.."
                            onChange={(event) => setsearch(event.target.value)}

                        />
                    </form>
                    <div>
                        <table className={styles.reftable}>
                            <tr>
                                <th>Tag</th>
                                <th>Description</th>
                            </tr>
                            {htmltagref.filter((htmltag) => {
                                if (search === "") {
                                    return htmltag;
                                } else if (
                                    htmltag?.html_tag.toLowerCase().includes(search.toLowerCase())
                                ) {
                                    return htmltag;
                                } else if (
                                    htmltag?.html_tag.toLowerCase().includes(search.toLowerCase())
                                ) return setnoRes('No Results')
                            }).map(htmltag => (
                                <tr key={htmltag.id}>
                                    <td>{htmltag['html_tag']}</td>
                                    <td>{htmltag['tag_description']}</td>
                                </tr>
                            ))}
                        </table>
                    </div>


                    <RefFooter />
                </div>
            </div>

        </>
    );
}

export default HtmlTagRef;