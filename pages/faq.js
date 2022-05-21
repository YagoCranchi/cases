import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

export async function getStaticProps() {
    const FAQ_API_URL = 'https://gist.githubusercontent.com/YagoCranchi/52c359f272ff5f3c0963ac68d00984b1/raw/ab5dae3dd0b4213a85ca4ce3844754fca6bd8cec/ASQ';
    const faq = await fetch(FAQ_API_URL)
        .then((serverResponse) => {
            return serverResponse.json();
        })
        .then((response) => {
            return response;
        });

    return {
      props: {
          faq,
      },
    };
}