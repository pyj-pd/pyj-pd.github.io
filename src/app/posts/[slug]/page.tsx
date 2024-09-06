export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <span>{params.slug}</span>
}
