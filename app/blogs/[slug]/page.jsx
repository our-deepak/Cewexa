// app/blogs/[slug]/page.jsx
import SAMPLE_POSTS from "../../data/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShareBar from "../../../components/ShareBar";
import { GrFormPreviousLink } from "react-icons/gr";
/** Pre-render all posts at build time (optional, keeps SEO fast) */
export async function generateStaticParams() {
  return SAMPLE_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  // params may be a promise in some dev setups; await to be safe
  const { slug } = await params;
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: post.img },
  };
}

/** Note: make this async and await params before using it */
export default async function PostPage({ params }) {
  const { slug } = await params; // <- important fix for Next 16
  const post = SAMPLE_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
         <div className="mb-6">
  <Link href="/blogs" className="flex dark:text-white sm:text-lg">
    <GrFormPreviousLink className="sm:size-8 size-6 dark:text-white mr-2  bg-amber-500"/>
  Go Back to Blogs</Link>
</div>
          <div className="text-sm text-[#fb923c] font-bold tracking-wider uppercase">{post.category}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-2 dark:text-white">{post.title}</h1>
          <div className="text-sm text-[#a8a29e] mt-2">By {post.author} • {new Date(post.date).toLocaleDateString()}</div>
        </div>

        <div className="rounded-lg overflow-hidden mb-8">
          <img src={post.img} alt={post.title} className="w-full object-cover rounded-lg" />
        </div>

        <article
  className="prose max-w-none mb-8 dark:text-white"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>

<ShareBar title={post.title} />


      </div>
    </div>
  );
}
