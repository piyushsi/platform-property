import Error from "next/error";
import { groq } from "next-sanity";
import { useRouter } from "next/router";
import {
  getClient,
  usePreviewSubscription,
  urlFor,
  PortableText,
} from "../../Components/client";
import Link from "next/link";
const query = groq`*[_type == "product" && slug.current == $slug][0]`;

function ProductPageContainer({ productData, preview }) {
  const router = useRouter();
  if (!router.isFallback && !productData?.slug) {
    return <Error statusCode={404} />;
  }

  const { data: property = {} } = usePreviewSubscription(query, {
    params: { slug: productData?.slug?.current },
    initialData: productData,
    enabled: preview || router.query.preview !== null,
  });

  return (
    <>
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
      <section
        class="xbox"
        style={{
          background: `url(${urlFor(property.defaultProductVariant?.images[0])
            .auto("format")
            .width(2000)
            .url()}) no-repeat 
    center left`,
        }}
      >
        <div class="content">
          <h2>{property.title}</h2>
          <p>
            <PortableText
              blocks={property.body?.en}
              className="text-gray-600"
            />
          </p>
          <a href="#" class="btn">
            Arrange a viewing <i class="fas fa-chevron-right"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params, preview = false }) {
  const productData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  return {
    props: { preview, productData },
  };
}

// export async function getStaticPaths() {
//   const paths = await getClient().fetch(
//     `*[_type == "product" && defined(slug.current)][].slug.current`
//   );

//   return {
//     paths: paths.map((slug) => ({ params: { slug } })),
//     fallback: true,
//   };
// }

export default ProductPageContainer;
