import { useState, useEffect } from "react";
import {
  Shield,
  Layout,
  Box,
  Award,
  Users,
  BookOpen,
  MessageSquare,
  Mail,
  Plus,
  Trash2,
  LogOut,
  Lock,
  DollarSign,
  HelpCircle,
  FolderTree,
  Upload,
  Settings,
  Image as ImageIcon,
  Search,
  Download,
  Eye,
  Edit,
  Check,
  Copy,
  Send,
  Star,
  RefreshCw,
  CheckCircle2,
  X
} from "lucide-react";
import { authService } from "../services/auth.service";
import { serviceService } from "../services/service.service";
import { portfolioService } from "../services/portfolio.service";
import { teamService } from "../services/team.service";
import { blogService } from "../services/blog.service";
import { contactService } from "../services/contact.service";
import { newsletterService } from "../services/newsletter.service";
import { analyticsService } from "../services/analytics.service";
import { pricingService } from "../services/pricing.service";
import { faqService } from "../services/faq.service";
import { testimonialService } from "../services/testimonial.service";
import { userService } from "../services/user.service";
import { categoryService } from "../services/category.service";
import { mediaService } from "../services/media.service";
export function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem("spygraphix_token"));
  const [email, setEmail] = useState("admin@spygraphix.com");
  const [password, setPassword] = useState("admin123");
  const [authError, setAuthError] = useState(null);
  const [activeTab, setActiveTab] = useState("analytics");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3e3);
  };
  const [analytics, setAnalytics] = useState(null);
  const [services, setServices] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [team, setTeam] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [leads, setLeads] = useState([]);
  const [newsletter, setNewsletter] = useState([]);
  const [pricings, setPricings] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [newCatName, setNewCatName] = useState("");
  const [newCatType, setNewCatType] = useState("Service");
  const [newCatDesc, setNewCatDesc] = useState("");
  const [showUserModal, setShowUserModal] = useState(false);
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("Client");
  const [showReplyModal, setShowReplyModal] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [previewMediaUrl, setPreviewMediaUrl] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [svcTitle, setSvcTitle] = useState("");
  const [svcCategory, setSvcCategory] = useState("Branding & Identity");
  const [svcPrice, setSvcPrice] = useState("$3,500");
  const [svcDesc, setSvcDesc] = useState("");
  const [svcHeroImg, setSvcHeroImg] = useState("");
  const [projTitle, setProjTitle] = useState("");
  const [projClient, setProjClient] = useState("");
  const [projCategory, setProjCategory] = useState("Packaging Design");
  const [projYear, setProjYear] = useState("2026");
  const [projThumbnail, setProjThumbnail] = useState("");
  const [projSummary, setProjSummary] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogCategory, setBlogCategory] = useState("Design Insights");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError(null);
    try {
      const data = await authService.login({ email, password });

      if (data.accessToken) {
        localStorage.setItem("spygraphix_token", data.accessToken);

        // Save user information
        if (data.user) {
          localStorage.setItem("spygraphix_user", JSON.stringify(data.user));
        }

        setToken(data.accessToken);

        showToast("Authenticated successfully.");
      } else {
        setAuthError(data.error || "Authentication failed.");
      }
    } catch (err) {
      setAuthError(err.response?.data?.error || "Failed to authenticate.");
    }
  };
  const handleLogout = async () => {
    await authService.logout();
    setToken(null);
  };
  const loadAllData = () => {
    if (!token) return;
    setLoading(true);
    Promise.all([
      analyticsService.get().then(setAnalytics).catch(() => {
      }),
      serviceService.getAll().then(setServices).catch(() => {
      }),
      portfolioService.getAll().then(setPortfolio).catch(() => {
      }),
      teamService.getAll().then(setTeam).catch(() => {
      }),
      blogService.getAll().then(setBlogs).catch(() => {
      }),
      categoryService.getAll().then(setCategories).catch(() => {
      }),
      userService.getUsers().then(setUsersList).catch(() => {
      }),
      contactService.getAll().then(setLeads).catch(() => {
      }),
      newsletterService.getAll().then(setNewsletter).catch(() => {
      }),
      pricingService.getAll().then(setPricings).catch(() => {
      }),
      faqService.getAll().then(setFaqs).catch(() => {
      }),
      testimonialService.getAll().then(setTestimonials).catch(() => {
      }),
      mediaService.getAll().then(setMediaList).catch(() => {
      })
    ]).finally(() => setLoading(false));
  };
  useEffect(() => {
    loadAllData();
  }, [token, activeTab]);
  const handleFileUpload = async (e, targetSetter) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadingImage(true);
    try {
      const newMedia = await mediaService.upload(file);
      if (newMedia.url) {
        if (targetSetter) targetSetter(newMedia.url);
        setMediaList([newMedia, ...mediaList]);
        showToast("Image uploaded to Cloudinary library!");
      }
    } catch (err) {
      alert("Upload failed.");
    } finally {
      setUploadingImage(false);
    }
  };
  const handleSaveService = async (e) => {
    e.preventDefault();
    if (!svcTitle) return;
    try {
      const payload = {
        title: svcTitle,
        category: svcCategory,
        shortDesc: svcDesc || "High-end design solution.",
        fullDesc: svcDesc || "Bespoke creative design solution engineered to perfection.",
        iconName: "Box",
        subServices: ["Brand Audit", "Digital Architecture", "4K Assets"],
        benefits: ["Market positioning", "Luxury appeal"],
        workflow: [{ step: "01", title: "Audit", desc: "Market analysis" }],
        pricing: [{ tier: "Standard", price: svcPrice || "$3,500", features: ["All Deliverables"] }],
        deliverables: ["Vector Logos", "Styleguide"],
        heroImage: svcHeroImg || "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
      };
      if (editingService) {
        const updated = await serviceService.update(editingService.id, payload);
        setServices(services.map((s) => s.id === editingService.id ? updated : s));
        showToast("Service updated successfully.");
      } else {
        const created = await serviceService.create(payload);
        setServices([created, ...services]);
        showToast("Service created successfully.");
      }
      setShowServiceModal(false);
      setEditingService(null);
    } catch (err) {
      alert("Error saving service.");
    }
  };
  const handleDeleteService = async (id) => {
    if (!confirm("Are you sure you want to delete this service?")) return;
    await serviceService.delete(id);
    setServices(services.filter((s) => s.id !== id));
    showToast("Service deleted.");
  };
  const handleSaveProject = async (e) => {
    e.preventDefault();
    if (!projTitle) return;
    try {
      const payload = {
        title: projTitle,
        client: projClient || "Global Client",
        category: projCategory,
        year: projYear || "2026",
        thumbnail: projThumbnail || "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        heroImage: projThumbnail || "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        gallery: [projThumbnail],
        summary: projSummary || "Brand architecture transformation.",
        challenge: "Elevating brand aesthetic to luxury standards.",
        solution: "WebGL 3D canvas and bespoke typography.",
        impactMetrics: [{ label: "Conversions", value: "+150%" }]
      };
      if (editingProject) {
        const updated = await portfolioService.update(editingProject.id, payload);
        setPortfolio(portfolio.map((p) => p.id === editingProject.id ? updated : p));
        showToast("Case study updated.");
      } else {
        const created = await portfolioService.create(payload);
        setPortfolio([created, ...portfolio]);
        showToast("Case study created.");
      }
      setShowProjectModal(false);
      setEditingProject(null);
    } catch (err) {
      alert("Error saving project.");
    }
  };
  const handleDeleteProject = async (id) => {
    if (!confirm("Delete this case study?")) return;
    await portfolioService.delete(id);
    setPortfolio(portfolio.filter((p) => p.id !== id));
    showToast("Case study deleted.");
  };
  const handleSaveBlog = async (e) => {
    e.preventDefault();
    if (!blogTitle) return;
    try {
      const payload = {
        title: blogTitle,
        category: blogCategory,
        excerpt: blogContent.substring(0, 120) || "Design insights from SPY GRAPHIX creative team.",
        content: blogContent || "Deep dive into 3D WebGL trends and brand architecture.",
        readTime: "4 min read",
        image: blogImage || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
        author: {
          name: "Executive Creative Director",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
          role: "Lead Strategist"
        },
        tags: ["3D Design", "Brand Architecture", "MERN Stack"]
      };
      if (editingBlog) {
        const updated = await blogService.update(editingBlog.id, payload);
        setBlogs(blogs.map((b) => b.id === editingBlog.id ? updated : b));
        showToast("Article updated.");
      } else {
        const created = await blogService.create(payload);
        setBlogs([created, ...blogs]);
        showToast("Article published.");
      }
      setShowBlogModal(false);
      setEditingBlog(null);
    } catch (err) {
      alert("Error saving blog.");
    }
  };
  const handleDeleteBlog = async (id) => {
    if (!confirm("Delete this journal article?")) return;
    await blogService.delete(id);
    setBlogs(blogs.filter((b) => b.id !== id));
    showToast("Article deleted.");
  };
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (!newCatName) return;
    try {
      const newCat = await categoryService.create({
        name: newCatName,
        type: newCatType,
        description: newCatDesc
      });
      setCategories([...categories, newCat]);
      setShowCategoryModal(false);
      setNewCatName("");
      setNewCatDesc("");
      showToast("Category created.");
    } catch (err) {
      alert("Failed to create category.");
    }
  };
  const handleDeleteCategory = async (id) => {
    if (!confirm("Delete category?")) return;
    await categoryService.delete(id);
    setCategories(categories.filter((c) => c.id !== id));
    showToast("Category removed.");
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    if (!newUserName || !newUserEmail) return;
    try {
      const data = await userService.createUser({
        name: newUserName,
        email: newUserEmail,
        role: newUserRole
      });
      setUsersList([...usersList, data]);
      setShowUserModal(false);
      setNewUserName("");
      setNewUserEmail("");
      showToast("User account created.");
    } catch (err) {
      alert("Failed to create user.");
    }
  };
  const handleDeleteUser = async (id) => {
    if (!confirm("Delete user account?")) return;
    await userService.deleteUser(id);
    setUsersList(usersList.filter((u) => u.id !== id));
    showToast("User account deleted.");
  };
  const handleSendReply = async (e) => {
    e.preventDefault();
    if (!showReplyModal || !replyText) return;
    try {
      await contactService.reply(showReplyModal.id, replyText);
      setLeads(leads.map((l) => l.id === showReplyModal.id ? { ...l, status: "Replied" } : l));
      setShowReplyModal(null);
      setReplyText("");
      showToast("Reply notification sent!");
    } catch (err) {
      alert("Failed to send reply.");
    }
  };
  const handleDeleteLead = async (id) => {
    if (!confirm("Delete lead message?")) return;
    await contactService.delete(id);
    setLeads(leads.filter((l) => l.id !== id));
    showToast("Message deleted.");
  };
  const handleExportCSV = () => {
    newsletterService.exportCSV();
    showToast("Downloading CSV subscribers list...");
  };
  const handleDeleteSubscriber = async (id) => {
    if (!confirm("Unsubscribe user?")) return;
    await newsletterService.delete(id);
    setNewsletter(newsletter.filter((n) => n.id !== id));
    showToast("Subscriber removed.");
  };
  const handleDeleteMedia = async (id) => {
    if (!confirm("Delete media file?")) return;
    await mediaService.delete(id);
    setMediaList(mediaList.filter((m) => m.id !== id));
    showToast("Media file deleted.");
  };
  if (!token) {
    return <div className="min-h-screen pt-28 pb-20 flex items-center justify-center px-6">
      <div className="bg-[#FFFFFF] rounded-4xl p-8 md:p-12 border border-black/8 shadow-2xl max-w-md w-full space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-full bg-[#111111] text-[#FF3B30] flex items-center justify-center mx-auto">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold font-syne text-[#111111]">
            SPY GRAPHIX Admin Portal
          </h1>
          <p className="text-xs text-[#777777]">
            MERN Stack MongoDB & Express JWT Dashboard
          </p>
        </div>

        {authError && <div className="bg-red-50 border border-red-200 text-red-700 text-xs p-3.5 rounded-xl text-center font-medium">
          {authError}
        </div>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 text-xs text-[#111111] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#777777] block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#F6F6F6] border border-black/8 rounded-xl p-3.5 text-xs text-[#111111] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#111111] hover:bg-[#FF3B30] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
          >
            <Lock className="w-4 h-4" /> Authenticate Session
          </button>
        </form>


      </div>
    </div>;
  }
  return <div className="pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 space-y-8">

    {
      /* Toast Notification */
    }
    {toastMessage && <div className="fixed bottom-6 right-6 z-[100000] bg-[#111111] text-white px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold flex items-center gap-2 border border-white/10 animate-bounce">
      <CheckCircle2 className="w-4 h-4 text-[#FF3B30]" />
      <span>{toastMessage}</span>
    </div>}

    {
      /* Admin Header */
    }
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-black/8 pb-6">
      <div>
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF3B30] flex items-center gap-1.5">
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> MongoDB Atlas Live Database
        </span>
        <h1 className="text-3xl font-bold font-syne text-[#111111]">
          Executive CMS & Control Studio
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-[#777777] bg-[#F6F6F6] px-3.5 py-1.5 rounded-full border border-black/5">
          Role: <strong className="text-[#111111]">Executive Director (Full CRUD)</strong>
        </span>
        <button
          onClick={loadAllData}
          className="p-2.5 bg-[#F6F6F6] hover:bg-black/5 rounded-full transition-colors text-[#111111]"
          title="Refresh Data"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
        <button
          onClick={handleLogout}
          className="bg-[#F6F6F6] hover:bg-red-50 hover:text-red-600 text-[#111111] p-2.5 rounded-full transition-colors"
          title="Log Out"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </div>

    {
      /* Search & Filter Bar */
    }
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-black/8 shadow-soft">
      <div className="relative w-full sm:w-80">
        <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#999999]" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search records across MongoDB..."
          className="w-full bg-[#F6F6F6] border border-black/5 rounded-xl p-2.5 pl-10 text-xs text-[#111111] focus:outline-none"
        />
      </div>
      <div className="flex items-center gap-2 text-xs text-[#777777]">
        <span>Database Status:</span>
        <span className="px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-bold uppercase text-[10px]">
          Connected
        </span>
      </div>
    </div>

    {
      /* Admin Navigation Tabs */
    }
    <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-black/8 shadow-soft">
      {[
        { id: "analytics", label: "Analytics", icon: Layout },
        { id: "services", label: `Services (${services.length})`, icon: Box },
        { id: "portfolio", label: `Portfolio (${portfolio.length})`, icon: Award },
        { id: "blogs", label: `Blogs (${blogs.length})`, icon: BookOpen },
        { id: "categories", label: `Categories (${categories.length})`, icon: FolderTree },
        { id: "pricing", label: `Pricing (${pricings.length})`, icon: DollarSign },
        { id: "faqs", label: `FAQs (${faqs.length})`, icon: HelpCircle },
        { id: "testimonials", label: `Testimonials (${testimonials.length})`, icon: Star },
        { id: "team", label: `Team (${team.length})`, icon: Users },
        { id: "leads", label: `Leads (${leads.length})`, icon: MessageSquare },
        { id: "newsletter", label: `Subscribers (${newsletter.length})`, icon: Mail },
        { id: "media", label: `Media (${mediaList.length})`, icon: ImageIcon },
        { id: "users", label: `Users (${usersList.length})`, icon: Users },
        { id: "settings", label: "Settings", icon: Settings }
      ].map((tab) => {
        const Icon = tab.icon;
        return <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-3 py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all ${activeTab === tab.id ? "bg-[#111111] text-white shadow-md" : "text-[#777777] hover:bg-[#F6F6F6] hover:text-[#111111]"}`}
        >
          <Icon className="w-3.5 h-3.5" />
          <span>{tab.label}</span>
        </button>;
      })}
    </div>

    {
      /* TAB 1: Analytics */
    }
    {activeTab === "analytics" && analytics && <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-black/8 shadow-soft space-y-1">
          <span className="text-xs text-[#777777] font-semibold uppercase">Total Client Leads</span>
          <p className="text-3xl font-extrabold font-syne text-[#FF3B30]">{analytics.totalLeads}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/8 shadow-soft space-y-1">
          <span className="text-xs text-[#777777] font-semibold uppercase">Published Projects</span>
          <p className="text-3xl font-extrabold font-syne text-[#111111]">{analytics.activeProjects}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/8 shadow-soft space-y-1">
          <span className="text-xs text-[#777777] font-semibold uppercase">Core Services</span>
          <p className="text-3xl font-extrabold font-syne text-[#111111]">{analytics.totalServices}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-black/8 shadow-soft space-y-1">
          <span className="text-xs text-[#777777] font-semibold uppercase">Journal Articles</span>
          <p className="text-3xl font-extrabold font-syne text-[#111111]">{analytics.publishedBlogs}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-black/8 shadow-soft space-y-4">
        <h3 className="text-lg font-bold font-syne">Monthly Conversion Growth</h3>
        <div className="h-40 flex items-end justify-between gap-3 pt-6 border-b border-black/8">
          {[45, 62, 58, 84, 91, 110, 135].map((val, idx) => <div key={idx} className="flex-1 flex flex-col items-center gap-2">
            <div
              style={{ height: `${val / 150 * 100}%` }}
              className="w-full bg-[#111111] hover:bg-[#FF3B30] transition-all rounded-t-xl"
            />
            <span className="text-[10px] text-[#777777] font-bold">Month {idx + 1}</span>
          </div>)}
        </div>
      </div>
    </div>}

    {
      /* TAB 2: Services */
    }
    {activeTab === "services" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Services CMS</h3>
        <button
          onClick={() => {
            setEditingService(null);
            setSvcTitle("");
            setSvcDesc("");
            setSvcPrice("$3,500");
            setShowServiceModal(true);
          }}
          className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/8 shadow-soft overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F6F6F6] text-[11px] font-bold text-[#777777] uppercase border-b border-black/8">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/6 text-xs text-[#111111]">
            {services.filter((s) => s.title.toLowerCase().includes(searchTerm.toLowerCase())).map((s) => <tr key={s.id} className="hover:bg-[#FAFAFA]">
              <td className="p-4 font-bold">{s.title}</td>
              <td className="p-4 text-[#777777]">{s.category}</td>
              <td className="p-4 font-bold text-[#FF3B30]">{s.pricing?.[0]?.price || "$3,500"}</td>
              <td className="p-4 text-right space-x-2">
                <button
                  onClick={() => {
                    setEditingService(s);
                    setSvcTitle(s.title);
                    setSvcCategory(s.category);
                    setSvcDesc(s.shortDesc);
                    setSvcHeroImg(s.heroImage);
                    setShowServiceModal(true);
                  }}
                  className="text-blue-600 hover:text-blue-800 p-1.5"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDeleteService(s.id)} className="text-red-600 hover:text-red-800 p-1.5">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>}

    {
      /* TAB 3: Portfolio */
    }
    {activeTab === "portfolio" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Portfolio CMS</h3>
        <button
          onClick={() => {
            setEditingProject(null);
            setProjTitle("");
            setProjClient("");
            setProjSummary("");
            setShowProjectModal(true);
          }}
          className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add Case Study
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/8 shadow-soft overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F6F6F6] text-[11px] font-bold text-[#777777] uppercase border-b border-black/8">
              <th className="p-4">Title</th>
              <th className="p-4">Client</th>
              <th className="p-4">Category</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/6 text-xs text-[#111111]">
            {portfolio.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase())).map((p) => <tr key={p.id} className="hover:bg-[#FAFAFA]">
              <td className="p-4 font-bold">{p.title}</td>
              <td className="p-4 text-[#777777]">{p.client}</td>
              <td className="p-4">{p.category}</td>
              <td className="p-4 text-right space-x-2">
                <button
                  onClick={() => {
                    setEditingProject(p);
                    setProjTitle(p.title);
                    setProjClient(p.client);
                    setProjCategory(p.category);
                    setProjSummary(p.summary);
                    setProjThumbnail(p.thumbnail);
                    setShowProjectModal(true);
                  }}
                  className="text-blue-600 hover:text-blue-800 p-1.5"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDeleteProject(p.id)} className="text-red-600 hover:text-red-800 p-1.5">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>}

    {
      /* TAB 4: Blogs */
    }
    {activeTab === "blogs" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Creative Journal CMS</h3>
        <button
          onClick={() => {
            setEditingBlog(null);
            setBlogTitle("");
            setBlogContent("");
            setShowBlogModal(true);
          }}
          className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Write Article
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/8 shadow-soft overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F6F6F6] text-[11px] font-bold text-[#777777] uppercase border-b border-black/8">
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Date</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/6 text-xs text-[#111111]">
            {blogs.filter((b) => b.title.toLowerCase().includes(searchTerm.toLowerCase())).map((b) => <tr key={b.id} className="hover:bg-[#FAFAFA]">
              <td className="p-4 font-bold">{b.title}</td>
              <td className="p-4 text-[#777777]">{b.category}</td>
              <td className="p-4 text-[#777777]">{b.date}</td>
              <td className="p-4 text-right space-x-2">
                <button
                  onClick={() => {
                    setEditingBlog(b);
                    setBlogTitle(b.title);
                    setBlogCategory(b.category);
                    setBlogContent(b.content);
                    setBlogImage(b.image);
                    setShowBlogModal(true);
                  }}
                  className="text-blue-600 hover:text-blue-800 p-1.5"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button onClick={() => handleDeleteBlog(b.id)} className="text-red-600 hover:text-red-800 p-1.5">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>}

    {
      /* TAB 5: Categories */
    }
    {activeTab === "categories" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Category Taxonomy</h3>
        <button
          onClick={() => setShowCategoryModal(true)}
          className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/8 shadow-soft overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F6F6F6] text-[11px] font-bold text-[#777777] uppercase border-b border-black/8">
              <th className="p-4">Name</th>
              <th className="p-4">Slug</th>
              <th className="p-4">Type</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/6 text-xs text-[#111111]">
            {categories.map((c) => <tr key={c.id} className="hover:bg-[#FAFAFA]">
              <td className="p-4 font-bold">{c.name}</td>
              <td className="p-4 font-mono text-[#777777]">{c.slug}</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#FF3B30]/10 text-[#FF3B30]">
                  {c.type}
                </span>
              </td>
              <td className="p-4 text-right">
                <button onClick={() => handleDeleteCategory(c.id)} className="text-red-600 hover:text-red-800 p-1.5">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>}

    {
      /* TAB 6: Pricing Plans */
    }
    {activeTab === "pricing" && <div className="space-y-6">
      <h3 className="text-xl font-bold font-syne">Pricing Tiers</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricings.map((p) => <div key={p.id} className="bg-white rounded-3xl p-6 border border-black/8 shadow-soft space-y-4">
          <div className="flex justify-between items-center">
            <h4 className="font-bold text-lg">{p.name}</h4>
            {p.popular && <span className="bg-[#FF3B30] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">Popular</span>}
          </div>
          <p className="text-2xl font-extrabold font-syne text-[#111111]">{p.price}</p>
          <p className="text-xs text-[#777777]">{p.description}</p>
          <ul className="space-y-2 text-xs text-[#333333]">
            {p.features?.map((f, i) => <li key={i} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-[#FF3B30]" /> {f}
            </li>)}
          </ul>
        </div>)}
      </div>
    </div>}

    {
      /* TAB 7: FAQs */
    }
    {activeTab === "faqs" && <div className="space-y-6">
      <h3 className="text-xl font-bold font-syne">Frequently Asked Questions</h3>
      <div className="bg-white rounded-3xl border border-black/8 shadow-soft p-6 divide-y divide-black/6">
        {faqs.map((faq) => <div key={faq.id} className="py-4 space-y-2">
          <h4 className="font-bold text-sm text-[#111111] flex items-center justify-between">
            <span>{faq.question}</span>
            <span className="text-[10px] bg-[#F6F6F6] text-[#777777] px-2.5 py-1 rounded-full uppercase">{faq.category}</span>
          </h4>
          <p className="text-xs text-[#666666]">{faq.answer}</p>
        </div>)}
      </div>
    </div>}

    {
      /* TAB 8: Testimonials */
    }
    {activeTab === "testimonials" && <div className="space-y-6">
      <h3 className="text-xl font-bold font-syne">Client Endorsements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => <div key={t.id} className="bg-white p-6 rounded-3xl border border-black/8 shadow-soft space-y-3">
          <div className="flex items-center gap-3">
            <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
            <div>
              <h4 className="font-bold text-sm text-[#111111]">{t.name}</h4>
              <p className="text-xs text-[#777777]">{t.role}, {t.company}</p>
            </div>
          </div>
          <p className="text-xs text-[#333333] italic">"{t.quote}"</p>
          <div className="flex text-[#FF3B30]">
            {[...Array(t.rating || 5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
          </div>
        </div>)}
      </div>
    </div>}

    {
      /* TAB 9: Team */
    }
    {activeTab === "team" && <div className="space-y-6">
      <h3 className="text-xl font-bold font-syne">Agency Leadership</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((m) => <div key={m.id} className="bg-white p-6 rounded-3xl border border-black/8 shadow-soft text-center space-y-3">
          <img src={m.avatar} alt={m.name} className="w-20 h-20 rounded-full object-cover mx-auto" />
          <div>
            <h4 className="font-bold text-sm text-[#111111]">{m.name}</h4>
            <p className="text-xs text-[#FF3B30] font-semibold">{m.role}</p>
          </div>
          <p className="text-[11px] text-[#777777] line-clamp-2">{m.bio}</p>
        </div>)}
      </div>
    </div>}

    {
      /* TAB 10: Leads */
    }
    {activeTab === "leads" && <div className="space-y-6">
      <h3 className="text-xl font-bold font-syne">Inbound Client Proposals</h3>
      <div className="bg-white rounded-3xl border border-black/8 shadow-soft overflow-hidden divide-y divide-black/6">
        {leads.map((lead) => <div key={lead.id} className="p-6 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-[#111111] text-sm">{lead.name} ({lead.email})</span>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase ${lead.status === "Replied" ? "bg-green-100 text-green-700" : "bg-[#FF3B30]/10 text-[#FF3B30]"}`}>
                {lead.status}
              </span>
              <button
                onClick={() => {
                  setShowReplyModal(lead);
                  setReplyText("");
                }}
                className="bg-[#111111] text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase flex items-center gap-1"
              >
                <Send className="w-3 h-3" /> Reply
              </button>
              <button onClick={() => handleDeleteLead(lead.id)} className="text-red-600 hover:text-red-800 p-1">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-xs text-[#777777] font-medium">
            Company: <strong>{lead.company || "N/A"}</strong> | Service: <strong>{lead.service}</strong> | Budget: <strong>{lead.budget}</strong>
          </p>
          <p className="text-xs text-[#333333] bg-[#F6F6F6] p-3.5 rounded-xl font-serif italic">
            "{lead.message}"
          </p>
          {lead.reply && <p className="text-xs text-green-800 bg-green-50 p-3 rounded-xl border border-green-200">
            <strong>SPY GRAPHIX Reply:</strong> {lead.reply}
          </p>}
        </div>)}
      </div>
    </div>}

    {
      /* TAB 11: Newsletter Subscribers */
    }
    {activeTab === "newsletter" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Journal Subscribers</h3>
        <button
          onClick={handleExportCSV}
          className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-md"
        >
          <Download className="w-4 h-4" /> Export CSV File
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/8 shadow-soft p-6">
        <ul className="divide-y divide-black/6 text-xs text-[#111111]">
          {newsletter.map((sub) => <li key={sub.id} className="py-3 flex items-center justify-between">
            <span className="font-semibold">{sub.email}</span>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-[#777777]">{new Date(sub.subscribedAt).toLocaleDateString()}</span>
              <button onClick={() => handleDeleteSubscriber(sub.id)} className="text-red-600 hover:text-red-800 p-1">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </li>)}
        </ul>
      </div>
    </div>}

    {
      /* TAB 12: Media Asset Manager */
    }
    {activeTab === "media" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Cloudinary Asset Manager</h3>
        <label className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2 shadow-md">
          <Upload className="w-4 h-4" /> Upload Media
          <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e)} className="hidden" />
        </label>
      </div>

      {uploadingImage && <p className="text-xs text-[#FF3B30] animate-pulse">Uploading asset to Cloudinary...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mediaList.map((m) => <div key={m.id} className="bg-white rounded-2xl border border-black/8 overflow-hidden shadow-soft group relative">
          <img src={m.url} alt={m.name} className="w-full h-36 object-cover" />
          <div className="p-3 space-y-1">
            <p className="text-xs font-bold text-[#111111] truncate">{m.name}</p>
            <p className="text-[10px] text-[#777777]">{(m.size / 1024).toFixed(1)} KB</p>
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(m.url);
                showToast("Image URL copied!");
              }}
              className="p-2 bg-white rounded-full text-black hover:bg-[#FF3B30] hover:text-white"
              title="Copy URL"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPreviewMediaUrl(m.url)}
              className="p-2 bg-white rounded-full text-black hover:bg-[#FF3B30] hover:text-white"
              title="Preview"
            >
              <Eye className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDeleteMedia(m.id)}
              className="p-2 bg-red-600 rounded-full text-white hover:bg-red-800"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>)}
      </div>
    </div>}

    {
      /* TAB 13: Users */
    }
    {activeTab === "users" && <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold font-syne">Role-Based Accounts</h3>
        <button
          onClick={() => setShowUserModal(true)}
          className="bg-[#111111] hover:bg-[#FF3B30] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Add User
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-black/8 shadow-soft overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F6F6F6] text-[11px] font-bold text-[#777777] uppercase border-b border-black/8">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-black/6 text-xs text-[#111111]">
            {usersList.map((u) => <tr key={u.id} className="hover:bg-[#FAFAFA]">
              <td className="p-4 font-bold">{u.name}</td>
              <td className="p-4 text-[#777777]">{u.email}</td>
              <td className="p-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase bg-[#FF3B30]/10 text-[#FF3B30]">
                  {u.role}
                </span>
              </td>
              <td className="p-4 text-right">
                <button onClick={() => handleDeleteUser(u.id)} className="text-red-600 hover:text-red-800 p-1.5">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>}

    {
      /* TAB 14: Settings */
    }
    {activeTab === "settings" && <div className="bg-white rounded-3xl border border-black/8 shadow-soft p-8 space-y-6">
      <h3 className="text-xl font-bold font-syne">System Diagnostics & Configuration</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#111111]">
        <div className="p-4 bg-[#F6F6F6] rounded-2xl space-y-2">
          <h4 className="font-bold uppercase text-[#777777]">MERN Stack Runtime</h4>
          <p>Node.js Version: <strong>v22.x</strong></p>
          <p>Express Version: <strong>4.21.2</strong></p>
          <p>MongoDB Driver: <strong>Mongoose 9.9.1</strong></p>
        </div>
        <div className="p-4 bg-[#F6F6F6] rounded-2xl space-y-2">
          <h4 className="font-bold uppercase text-[#777777]">Security Credentials</h4>
          <p>JWT Auth Protection: <strong>Enabled (256-bit)</strong></p>
          <p>Cloudinary Storage Engine: <strong>Active</strong></p>
          <p>Gemini AI Strategy API: <strong>Active</strong></p>
        </div>
      </div>
    </div>}

    {
      /* MODAL: Service */
    }
    {showServiceModal && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-black/10 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold font-syne">{editingService ? "Edit Service" : "Add Service"}</h3>
        <form onSubmit={handleSaveService} className="space-y-4">
          <input
            type="text"
            required
            value={svcTitle}
            onChange={(e) => setSvcTitle(e.target.value)}
            placeholder="Service Title"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <input
            type="text"
            value={svcPrice}
            onChange={(e) => setSvcPrice(e.target.value)}
            placeholder="Price (e.g. $3,500)"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <textarea
            rows={3}
            value={svcDesc}
            onChange={(e) => setSvcDesc(e.target.value)}
            placeholder="Description..."
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none resize-none"
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#FF3B30] text-white py-3 rounded-xl text-xs font-bold uppercase">
              Save Service
            </button>
            <button type="button" onClick={() => setShowServiceModal(false)} className="px-4 bg-[#F6F6F6] text-xs font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>}

    {
      /* MODAL: Project */
    }
    {showProjectModal && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-black/10 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold font-syne">{editingProject ? "Edit Case Study" : "Add Case Study"}</h3>
        <form onSubmit={handleSaveProject} className="space-y-4">
          <input
            type="text"
            required
            value={projTitle}
            onChange={(e) => setProjTitle(e.target.value)}
            placeholder="Project Title"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <input
            type="text"
            value={projClient}
            onChange={(e) => setProjClient(e.target.value)}
            placeholder="Client Name"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <textarea
            rows={3}
            value={projSummary}
            onChange={(e) => setProjSummary(e.target.value)}
            placeholder="Summary..."
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none resize-none"
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#FF3B30] text-white py-3 rounded-xl text-xs font-bold uppercase">
              Save Case Study
            </button>
            <button type="button" onClick={() => setShowProjectModal(false)} className="px-4 bg-[#F6F6F6] text-xs font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>}

    {
      /* MODAL: Blog */
    }
    {showBlogModal && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-lg w-full border border-black/10 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold font-syne">{editingBlog ? "Edit Article" : "Write Journal Article"}</h3>
        <form onSubmit={handleSaveBlog} className="space-y-4">
          <input
            type="text"
            required
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            placeholder="Article Title"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <textarea
            rows={6}
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            placeholder="Markdown / Editorial Content..."
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#FF3B30] text-white py-3 rounded-xl text-xs font-bold uppercase">
              Publish Article
            </button>
            <button type="button" onClick={() => setShowBlogModal(false)} className="px-4 bg-[#F6F6F6] text-xs font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>}

    {
      /* MODAL: Category */
    }
    {showCategoryModal && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-black/10 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold font-syne">Add Category</h3>
        <form onSubmit={handleCreateCategory} className="space-y-4">
          <input
            type="text"
            required
            value={newCatName}
            onChange={(e) => setNewCatName(e.target.value)}
            placeholder="Category Name"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <select
            value={newCatType}
            onChange={(e) => setNewCatType(e.target.value)}
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          >
            <option value="Service">Service Category</option>
            <option value="Portfolio">Portfolio Category</option>
            <option value="Blog">Blog Category</option>
          </select>
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#FF3B30] text-white py-3 rounded-xl text-xs font-bold uppercase">
              Save Category
            </button>
            <button type="button" onClick={() => setShowCategoryModal(false)} className="px-4 bg-[#F6F6F6] text-xs font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>}

    {
      /* MODAL: User */
    }
    {showUserModal && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-black/10 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold font-syne">Add User</h3>
        <form onSubmit={handleCreateUser} className="space-y-4">
          <input
            type="text"
            required
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Full Name"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <input
            type="email"
            required
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          />
          <select
            value={newUserRole}
            onChange={(e) => setNewUserRole(e.target.value)}
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none"
          >
            <option value="Admin">Admin</option>
            <option value="Team Member">Team Member</option>
            <option value="Client">Client</option>
          </select>
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#FF3B30] text-white py-3 rounded-xl text-xs font-bold uppercase">
              Save User
            </button>
            <button type="button" onClick={() => setShowUserModal(false)} className="px-4 bg-[#F6F6F6] text-xs font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>}

    {
      /* MODAL: Reply Lead */
    }
    {showReplyModal && <div className="fixed inset-0 z-10000 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full border border-black/10 shadow-2xl space-y-4">
        <h3 className="text-lg font-bold font-syne">Reply to {showReplyModal.name}</h3>
        <form onSubmit={handleSendReply} className="space-y-4">
          <textarea
            rows={4}
            required
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write executive reply message..."
            className="w-full bg-[#F6F6F6] p-3 text-xs rounded-xl focus:outline-none resize-none"
          />
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-[#111111] hover:bg-[#FF3B30] text-white py-3 rounded-xl text-xs font-bold uppercase">
              Send Email Reply
            </button>
            <button type="button" onClick={() => setShowReplyModal(null)} className="px-4 bg-[#F6F6F6] text-xs font-bold rounded-xl">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>}

    {
      /* MODAL: Media Preview */
    }
    {previewMediaUrl && <div className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative max-w-3xl w-full">
        <button
          onClick={() => setPreviewMediaUrl(null)}
          className="absolute -top-12 right-0 p-2 bg-white text-black rounded-full"
        >
          <X className="w-5 h-5" />
        </button>
        <img src={previewMediaUrl} alt="Preview" className="w-full max-h-[80vh] object-contain rounded-3xl" />
      </div>
    </div>}

  </div>;
}
