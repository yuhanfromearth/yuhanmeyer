interface BlogPostProps {
  title: string;
  content: string;
}

const BlogPost = ({ title, content }: BlogPostProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
