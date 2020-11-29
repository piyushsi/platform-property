import client from "../../Components/client";

const Property = (props) => {
  return (
    <article>
      <h1>{props.title}</h1>
    </article>
  );
};

Property.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return (
    (await client.fetch(
      `
    *[_type == "product" && slug.current == $slug][0]
  `,
      { slug }
    )) || { title: "Slug not Found" }
  );
};

export default Property;
