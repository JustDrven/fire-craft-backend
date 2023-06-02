import Head from "next/head";

function Page404() {
    return (
        <>
        <Head>
            <title>Fire-Craft.eu | 404</title>
        </Head>
        <div className="page-404-main">
            <div className="container" style={{
                color: "#1e1d1d",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "9rem 0rem"
            }}>
                <h3>404 | This page not exist!</h3>
            </div>
        </div>
        </>
        
    )
}

export default Page404;