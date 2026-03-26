import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogService, BlogPost } from "@/services/blogService";
import toast from "react-hot-toast";

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    setBlogs(blogService.getBlogs());
  }, []);

  const handleCreateBlog = () => {
    const email = window.prompt("To create a blog, please enter the admin email address:");
    if (email === "office@thrayana.com") {
      navigate('/blog/create');
    } else if (email !== null) { // User didn't click Cancel
      toast.error("Unauthorized. Only administrators can create blogs.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-8 sm:mb-12 mt-4 sm:mt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Our Blog</h1>
            <p className="text-muted-foreground mt-2">Latest insights, health tips, and product stories.</p>
          </div>

          {blogs.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl shadow-sm border">
              <h3 className="text-xl font-medium text-muted-foreground">No blogs published yet.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogs.map((blog, index) => (
                <article 
                  key={blog.id} 
                  className="group bg-card rounded-2xl shadow-lg border hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col animate-in fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => navigate(`/blog/${blog.id}`)}
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.src = "/assets/brand/Thrayana.jpg"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
                      <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center"><span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>{blog.author}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                      {blog.excerpt}
                    </p>
                    
                    <div className="pt-4 border-t border-border mt-auto">
                      <span className="text-primary font-semibold text-sm group-hover:underline">
                        Read full article →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <Button onClick={handleCreateBlog} variant="outline" className="text-muted-foreground hover:text-foreground">
              Create New Blog
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
