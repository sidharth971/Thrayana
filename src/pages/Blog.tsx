import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogService, BlogPost } from "@/services/blogService";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

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
      const password = window.prompt("Please enter the admin password:");
      if (password === "Thrayana@12345") {
        navigate('/blog/create');
      } else if (password !== null) {
        toast.error("Incorrect password. Unauthorized.");
      }
    } else if (email !== null) { // User didn't click Cancel
      toast.error("Unauthorized. Only administrators can create blogs.");
    }
  };

  const handleDeleteBlog = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const email = window.prompt("To delete a blog, please enter the admin email address:");
    if (email === "office@thrayana.com") {
      const password = window.prompt("Please enter the admin password:");
      if (password === "Thrayana@12345") {
        if (window.confirm("Are you sure you want to delete this blog post?")) {
           blogService.deleteBlog(id);
           setBlogs(blogService.getBlogs());
           toast.success("Blog deleted successfully!");
        }
      } else if (password !== null) {
        toast.error("Incorrect password. Unauthorized.");
      }
    } else if (email !== null) { 
      toast.error("Unauthorized. Only administrators can delete blogs.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          


          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 pb-8 mt-8 lg:mt-12">
            {/* Left Column - Main Content */}
            <div className="lg:w-2/3 xl:w-8/12">
              {blogs.length === 0 ? (
                <div className="text-center py-20 bg-white border border-gray-100">
                  <h3 className="text-xl font-medium text-muted-foreground">No blogs published yet.</h3>
                </div>
              ) : (
                <div className="space-y-10">
                  {blogs.map((blog, index) => (
                    <article 
                      key={blog.id} 
                      className="group bg-white border border-gray-100 flex flex-col md:flex-row overflow-hidden animate-in fade-in transition-all duration-300 hover:shadow-lg"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Image */}
                      <div className="md:w-5/12 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => navigate(`/blog/${blog.slug || blog.id}`)}>
                        <img 
                          src={blog.imageUrl} 
                          alt={blog.title} 
                          className="w-full h-full min-h-[240px] md:min-h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { e.currentTarget.src = "/assets/brand/Thrayana.jpg"; }}
                        />
                      </div>
                      
                      {/* Text Content */}
                      <div className="p-6 md:p-8 md:w-7/12 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors cursor-pointer leading-snug" onClick={() => navigate(`/blog/${blog.slug || blog.id}`)}>
                          {blog.title} 
                        </h2>
                        
                        <div className="text-[13px] text-muted-foreground mb-4 font-medium tracking-wide">
                          By <span className="text-primary">{blog.author}</span> in <span className="text-slate-800">Health & Ayurveda</span> on {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}
                        </div>
                        
                        <p className="text-slate-600 text-sm line-clamp-3 leading-loose mb-5">
                          {blog.excerpt}
                        </p>

                        <div className="pt-2 flex justify-between items-center">
                           <button onClick={() => navigate(`/blog/${blog.slug || blog.id}`)} className="text-primary font-semibold text-sm hover:underline flex items-center group-hover:text-amber-500 transition-colors">
                             Read more <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                           </button>

                           <button 
                             onClick={(e) => handleDeleteBlog(e, blog.id)}
                             className="text-gray-400 hover:text-red-500 transition-colors p-1.5 rounded hover:bg-red-50"
                             title="Delete Blog"
                           >
                             <Trash2 className="w-4 h-4" />
                           </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
              
              <div className="mt-12 flex justify-start">
                <Button onClick={handleCreateBlog} variant="outline" className="text-muted-foreground hover:text-foreground">
                  Create New Blog
                </Button>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:w-1/3 xl:w-4/12 space-y-12 lg:pl-4">
              {/* Search */}
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full border border-gray-200 py-3 px-4 pr-10 focus:outline-none focus:border-primary text-sm bg-white placeholder-slate-400"
                />
                <Button variant="ghost" size="icon" className="absolute right-1 top-1 h-10 w-10 text-slate-400 hover:text-primary hover:bg-transparent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </Button>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-[18px] font-bold mb-6 text-slate-900 border-b border-gray-100 pb-3">Categories</h3>
                <ul className="space-y-4">
                  {['Indian Spices', 'Health & Ayurveda', 'Organic Foods', 'Traditional Handicrafts'].map(category => (
                    <li key={category} className="text-slate-500 hover:text-primary cursor-pointer text-[14px] font-medium transition-colors">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-[18px] font-bold mb-6 text-slate-900 border-b border-gray-100 pb-3">Recent Posts</h3>
                <div className="space-y-6">
                  {blogs.slice(0, 3).map(post => (
                    <div key={post.id} className="flex gap-4 cursor-pointer group" onClick={() => navigate(`/blog/${post.slug || post.id}`)}>
                      <div className="w-24 h-16 overflow-hidden flex-shrink-0 bg-gray-100">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => { e.currentTarget.src = "/assets/brand/Thrayana.jpg"; }}
                        />
                      </div>
                      <div className="flex flex-col justify-center w-full">
                        <div className="text-[11px] text-primary mb-1 tracking-wide font-medium">
                          {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} by {post.author.split(' ')[0]}
                        </div>
                        <h4 className="text-[14px] font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-[18px] font-bold mb-6 text-slate-900 border-b border-gray-100 pb-3">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['Spices', 'A2 Ghee', 'Turmeric', 'Export', 'Wild Honey', 'Ayurveda'].map(tag => (
                    <span key={tag} className="bg-[#f9f9f9] border border-gray-100 text-slate-500 px-4 py-2 text-[12px] font-medium hover:bg-primary hover:text-white hover:border-primary cursor-pointer transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
