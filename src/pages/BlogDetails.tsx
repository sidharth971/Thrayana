import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { blogService, BlogPost } from "@/services/blogService";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const foundBlog = blogService.getBlogById(id);
      if (foundBlog) {
        setBlog(foundBlog);
      }
    }
  }, [id]);

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
        {/* Hero Section */}
        <section className="relative w-full h-[40vh] min-h-[300px] max-h-[500px]">
          <img 
            src={blog.imageUrl} 
            alt={blog.title} 
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = "/assets/brand/Thrayana.jpg"; }}
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col justify-end">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 text-center lg:text-left shadow-md">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="text-white hover:text-[#F5A812] hover:bg-white/10 mb-6 p-0 h-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
              </Button>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto lg:mx-0">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-sm sm:text-base text-gray-300">
                <span className="flex items-center bg-black/30 px-3 py-1 rounded-full"><User className="w-4 h-4 mr-2 text-[#F5A812]" /> {blog.author}</span>
                <span className="flex items-center bg-black/30 px-3 py-1 rounded-full"><Calendar className="w-4 h-4 mr-2 text-[#F5A812]" /> {new Date(blog.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                <span className="flex items-center bg-black/30 px-3 py-1 rounded-full"><Clock className="w-4 h-4 mr-2 text-[#F5A812]" /> {readTime} min read</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
          <article className="max-w-4xl mx-auto bg-card rounded-2xl shadow-xl border -mt-20 sm:-mt-24 lg:-mt-28 relative z-10 p-6 sm:p-8 lg:p-12 mb-12">
            
            <div className="prose prose-sm sm:prose-base xl:prose-lg max-w-none text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {/* If HTML formatting is saved, one could use dangerouslySetInnerHTML. Sticking to safer pre-wrap for pure text */}
              <p className="text-xl sm:text-2xl font-medium text-foreground leading-snug mb-8 pb-8 border-b italic">
                {blog.excerpt}
              </p>
              
              {blog.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="mb-6">{paragraph}</p>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t flex justify-center">
               <Button onClick={() => navigate('/blog')} variant="outline" className="px-8 border-2">
                  View More Articles
               </Button>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetails;
