import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogService, BlogPost } from "@/services/blogService";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (slug) {
      const foundBlog = blogService.getBlogBySlug(slug);
      if (foundBlog) {
        setBlog(foundBlog);
      }
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-4 pt-24">
          <div className="text-center max-w-md w-full bg-card p-8 rounded-2xl shadow-lg border">
            <h1 className="text-2xl font-bold text-foreground mb-4">Blog Not Found</h1>
            <p className="text-muted-foreground mb-6">The article you are looking for might have been removed or does not exist.</p>
            <Button onClick={() => navigate('/blog')} variant="outline" className="w-full">
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate estimated read time (rough estimation: 200 words per minute)
  const wordCount = blog.content.trim().split(/\s+/).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-8 pb-16">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="text-muted-foreground hover:text-primary mb-8 pl-0 hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Button>

          <header className="mb-10 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-sm text-muted-foreground">
              <span className="flex items-center text-primary font-medium tracking-wide"><User className="w-4 h-4 mr-2" /> {blog.author}</span>
              <span className="flex items-center tracking-wide"><Calendar className="w-4 h-4 mr-2" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="flex items-center tracking-wide"><Clock className="w-4 h-4 mr-2" /> {readTime} min read</span>
            </div>
          </header>

          <div className="w-full h-[40vh] sm:h-[50vh] min-h-[350px] mb-12 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              src={blog.imageUrl} 
              alt={blog.title} 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.src = "/assets/brand/Thrayana.jpg"; }}
            />
          </div>
          
          <div className="prose prose-lg sm:prose-xl max-w-none text-slate-700 leading-relaxed whitespace-pre-wrap">
            <p className="text-xl sm:text-2xl font-medium text-slate-800 leading-snug mb-10 pb-8 border-b border-gray-100 italic">
              {blog.excerpt}
            </p>
            
            {blog.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-8">{paragraph}</p>
            ))}
          </div>
          
          <div className="mt-16 pt-10 border-t border-gray-100 flex justify-center">
             <Button onClick={() => navigate('/blog')} variant="outline" className="px-8 py-6 text-base font-medium rounded-full text-slate-600 hover:text-primary border-gray-200">
                ← Read More Articles
             </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
