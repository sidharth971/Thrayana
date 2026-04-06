export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  author: string;
  slug: string;
}

export const generateSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

const STORAGE_KEY = 'thrayana_blogs';

// Initial dummy data to populate the blog if it's empty
const defaultBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'The Health Benefits of A2 Gir Cow Ghee',
    excerpt: 'Discover why a2 gir cow ghee is considered a superfood in Ayurveda and how it can improve your daily health.',
    content: 'A2 Gir Cow Ghee is known for its rich flavor, golden color, and traditional Ayurvedic benefits. Our ghee is produced using the traditional bilona method that preserves all natural nutrients. Regular consumption of A2 ghee supports digestive health, boosts immunity, and is rich in fat-soluble vitamins. It has anti-inflammatory properties and is highly stable for cooking at high temperatures.',
    imageUrl: '/assets/products/a2-gir-cow-ghee/Cow Ghee_3.png',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    author: 'Thrayana Experts',
    slug: 'the-health-benefits-of-a2-gir-cow-ghee'
  },
  {
    id: '2',
    title: 'Why Choose Wild Forest Honey?',
    excerpt: 'Learn about the difference between regular honey and wild forest honey sourced from the pristine forests of India.',
    content: 'Pure wild forest honey collected from natural beehives in pristine forest areas represents nature at its finest. Unlike commercially processed honey, our wild forest honey is raw, unfiltered, and unprocessed to preserve all natural nutrients and medicinal properties. It is rich in antioxidants, flavonoids, and natural antibacterial properties. The natural crystallization process is a testament to its purity.',
    imageUrl: '/assets/products/wild-forest-honey/honey_4.png',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    author: 'Thrayana Experts',
    slug: 'why-choose-wild-forest-honey'
  }
];

export const blogService = {
  getBlogs: (): BlogPost[] => {
    try {
      const blogsJson = localStorage.getItem(STORAGE_KEY);
      if (blogsJson) {
        const parsed = JSON.parse(blogsJson) as BlogPost[];
        return parsed.map(blog => ({
          ...blog,
          slug: blog.slug || generateSlug(blog.title)
        }));
      }
      
      // Initialize with default blogs if empty
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultBlogs));
      return defaultBlogs;
    } catch (error) {
      console.error('Error reading blogs from localStorage:', error);
      return [];
    }
  },

  getBlogById: (id: string): BlogPost | undefined => {
    const blogs = blogService.getBlogs();
    return blogs.find(blog => blog.id === id);
  },

  getBlogBySlug: (slug: string): BlogPost | undefined => {
    const blogs = blogService.getBlogs();
    return blogs.find(blog => blog.slug === slug || blog.id === slug);
  },

  createBlog: (blogData: Omit<BlogPost, 'id' | 'createdAt' | 'slug'>): BlogPost => {
    const blogs = blogService.getBlogs();
    
    const newBlog: BlogPost = {
      ...blogData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      slug: generateSlug(blogData.title),
    };
    
    const updatedBlogs = [newBlog, ...blogs];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
    
    return newBlog;
  },

  deleteBlog: (id: string): void => {
    const blogs = blogService.getBlogs();
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  }
};
