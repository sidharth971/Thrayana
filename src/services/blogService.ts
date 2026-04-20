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

const defaultBlogs: BlogPost[] = [
  {
    id: '1',
    title: 'Moringa Powder Export from India: Comprehensive Guide for Bulk Buyers',
    excerpt: 'Detailed guide on how to facilitate Moringa Powder Export from India. Covering quality standards, HSN codes (1211.90.92), bulk sourcing, and shipping logistics.',
    content: 'Importing Moringa powder from India requires a clear understanding of quality certifications and export logistics. As a leading bulk supplier, Thrayana Pvt Ltd ensures each batch meets international standards (FSSAI, ISO 22000). The process begins with sourcing from certified farms in Tamil Nadu, followed by shade-drying and fine grinding to preserve nutritional integrity. Key export details include HSN Code 1211.90.92, standard packaging in 25kg vacuum-sealed bags, and logistics through major ports like Chennai or Mundra. This guide covers documentation including certificate of origin, phytosanitary certificates, and lab test reports essential for smooth global trade.',
    imageUrl: '/assets/products/moringa-powder/moringa-leaves-harvest.jpg',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    author: 'Thrayana Export Team',
    slug: 'how-to-import-moringa-powder-from-india'
  },
  {
    id: '2',
    title: 'Wholesale Market Analysis: Ashwagandha Root Powder Trends 2026',
    excerpt: 'Analyze the rising global demand for Indian Ashwagandha, HSN code classifications, and wholesale market pricing drivers for 2026.',
    content: 'The global demand for Indian Ashwagandha (Withania somnifera) is reaching unprecedented levels as manufacturers in the USA and Europe integrate this adaptogen into functional foods and supplements. At Thrayana, we monitor market trends to provide our wholesale partners with competitive pricing and steady supply chains. Classified under HSN 1211.90.19, Ashwagandha powder is priced based on Withanolide concentration (typically 2.5% to 5%). Strategic sourcing from Rajasthan allows us to offer premium organic root powder that complies with GMP and organic standards. This report explores why bulk buyers are shifting towards direct farm-to-warehouse partnerships for consistent quality assurance.',
    imageUrl: '/assets/products/ashwagandha/ashwagandha_main.png',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    author: 'Thrayana Market Strategy',
    slug: 'ashwagandha-root-powder-export-trends-2026'
  },
  {
    id: '3',
    title: 'The Rise of Sustainable Tableware: Importing Bagasse Cutlery from India',
    excerpt: 'Explore the shift towards biodegradable sugarcane bagasse cutlery in the global hospitality sector and how to source wholesale from India.',
    content: 'With the global crackdown on single-use plastics, Sugarcane Bagasse Cutlery has emerged as the premier sustainable alternative for the catering and hospitality industries. Manufactured from 100% renewable sugarcane fiber, this compostable tableware is oil-resistant, microwave-safe, and leaves zero toxic footprint. Thrayana Pvt Ltd specializes in the bulk export of reinforced bagasse spoons, forks, and knives that meet stringent EU and FDA food safety standards. Our manufacturing process uses high-heat compression molding, resulting in extra-sturdy products suitable for both hot and cold food. For global distributors, we provide customized bulk packaging and full documentation for seamless customs clearance. This article outlines the cost-benefit analysis of switching to bagasse and the logistical advantages of sourcing directly from South India\'s manufacturing hubs.',
    imageUrl: '/assets/products/bagasse-cutlery/bagasse-main.png',
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    author: 'Thrayana Eco-Solutions',
    slug: 'importing-sustainable-bagasse-cutlery-from-india'
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
  },

  updateBlog: (id: string, blogData: Partial<BlogPost>): BlogPost | undefined => {
    const blogs = blogService.getBlogs();
    const index = blogs.findIndex(blog => blog.id === id);
    
    if (index === -1) return undefined;
    
    const updatedBlog = {
      ...blogs[index],
      ...blogData,
      slug: blogData.title ? generateSlug(blogData.title) : blogs[index].slug
    };
    
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = updatedBlog;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
    
    return updatedBlog;
  }
};
