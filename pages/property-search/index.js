import client from "../../Components/client";

const Property = (props) => {
    console.log(props)
  return (
    <article>
      <h1>{props?.title}</h1>
    </article>
  );
};

Property.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  return (
    (await client.fetch(
      `
    *[_type == "product"]
  `,
    )) 
  );
};

export default Property;
