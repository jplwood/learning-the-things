import Link from "next/link";
import Layout from "../components/PageLayout";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="More Beans!" />
    </ul>
  </Layout>
);

export default Index;
