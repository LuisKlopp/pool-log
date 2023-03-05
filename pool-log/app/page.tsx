import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const Home = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post}></PostPreview>
  ));
  return <div>{postPreviews}</div>;
};
export default Home;
