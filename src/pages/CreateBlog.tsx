import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { blogService } from "@/services/blogService";
import toast from "react-hot-toast";
import { ArrowLeft, Save } from "lucide-react";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    imageUrl: "",
    excerpt: "",
    content: "",
    author: "Thrayana Admin"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      blogService.createBlog(formData);
      toast.success("Blog published successfully!", {
        style: { background: '#10B981', color: '#fff', fontWeight: '500' }
      });
      navigate('/blog');
    } catch (error) {
      toast.error("Failed to publish blog.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <Button 
            variant="ghost" 
            onClick={() => navigate('/blog')}
            className="mb-6 pl-0 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </Button>

          <div className="bg-card rounded-2xl shadow-xl border overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 sm:p-8 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Create New Blog Post</h1>
              <p className="text-gray-400 text-sm sm:text-base">Use the template below to draft and publish new content.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 sm:space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="title" className="text-sm font-semibold text-foreground">Blog Title <span className="text-red-500">*</span></Label>
                  <Input 
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter an engaging title..."
                    className="h-12 bg-white/50 focus:bg-white text-base transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="imageUrl" className="text-sm font-semibold text-foreground">Cover Image URL <span className="text-red-500">*</span></Label>
                  <Input 
                    id="imageUrl"
                    name="imageUrl"
                    required
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="e.g. /assets/products/honey_1.png or https://..."
                    className="bg-white/50 focus:bg-white transition-colors"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Provide a high-quality image link for the cover.</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author" className="text-sm font-semibold text-foreground">Author Name</Label>
                  <Input 
                    id="author"
                    name="author"
                    required
                    value={formData.author}
                    onChange={handleChange}
                    className="bg-white/50 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="excerpt" className="text-sm font-semibold text-foreground">Short Excerpt / Summary <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="excerpt"
                  name="excerpt"
                  required
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Write a 1-2 sentence hook to attract readers..."
                  className="resize-none h-20 bg-white/50 focus:bg-white transition-colors"
                  maxLength={200}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-sm font-semibold text-foreground">Full Content <span className="text-red-500">*</span></Label>
                <Textarea 
                  id="content"
                  name="content"
                  required
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Write your full article here. Paragraphs separated by double lines will format correctly."
                  className="min-h-[300px] bg-white/50 focus:bg-white transition-colors p-4 leading-relaxed"
                />
              </div>

              <div className="pt-6 border-t flex justify-end gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/blog')}
                  disabled={isSubmitting}
                  className="px-6"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary px-8"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Publishing..." : "Publish Blog"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateBlog;
