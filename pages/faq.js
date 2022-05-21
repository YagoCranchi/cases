import Head from 'next/head'
import Link from "../src/components/Link";

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/YagoCranchi/52c359f272ff5f3c0963ac68d00984b1/raw/ab5dae3dd0b4213a85ca4ce3844754fca6bd8cec/ASQ';
    const faq = await fetch(FAQ_API_URL).then((serverResponse) => {
        return serverResponse.json();
    }).then((response) => {
        return response;
    });

    return {
        props: {
            faq
        }
    }
}

function FAQPage({
    faq
}) {
    return (
        <>
            <Head>
                <title>Penguins FAQ</title>
            </Head>
            <div>
                <h1>Penguins - Page of Penguins FAQ</h1>
                <Link href="/">
                    Go to home
                </Link>
                <ul>
                    {faq.map(({ answer, question }) => (
                        <li key={question}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default FAQPage;
