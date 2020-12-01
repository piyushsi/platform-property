import {
  getClient,
  usePreviewSubscription,
  urlFor,
} from "../../Components/client";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import Error from "next/error";
import Link from "next/link";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;
const Property = (props) => {
  const { productsData, preview } = props;
  const router = useRouter();
  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: property } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });
  return (
    <article>
      {console.log(property)}
      <nav class="main-nav">
        <Link href="/">
          <img
            style={{ cursor: "pointer" }}
            src="https://platformproperty.co.uk/wp-content/themes/platform-property/images/logo.png"
            alt="Platform-Property"
            class="logo"
          />
        </Link>

        <ul class="main-menu">
          <li>
            <Link href="/property-search" as="/property-search">
              <a style={{ borderBottom: "1px solid white" }}>property search</a>
            </Link>
          </li>
          <li>
            <a href="#">sell my house</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">platform partners</a>
          </li>
          <li>
            <a href="#">testimonials</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>

        <ul class="right-menu">
          <li>
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </nav>
      <section class="home-cards">
        {property.map((el) => {
          return (
            <div>
              <img
                src={urlFor(el.defaultProductVariant.images[0])
                  .auto("format")
                  .width(2000)
                  .url()}
                alt=""
              />
              <h3>{el.title}</h3>
              <p>{el.defaultProductVariant.price}</p>
              <Link href={`/property-for-sale/${el.slug.current}`}>
                <a>
                  View full details <i class="fas fa-chevron-right"></i>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export async function getServerSideProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      productsData,
    },
  };
}

export default Property;
