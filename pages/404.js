import Link from "../src/components/Link";

function Page404() {
    return (
        <>
            <h1>ERROR 404 <br /> The page you entered was not found.</h1>
            <Link href="/">
                Back to Home Page
            </Link>
        </>
    );
}

export default Page404