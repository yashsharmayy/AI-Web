export const INITIAL_PRICING = {
  monthlyPlans: [
    {
      id: "basic",
      name: "Starter",
      price: "₹9,999",
      period: "/month",
      description: "Perfect for small businesses & startups.",
      suitableFor: [
        "Local Businesses",
        "Restaurants",
        "Salons",
        "Clinics",
        "Small Brands",
      ],
      features: [
        "12 Social Media Posts",
        "2 Story Designs",
        "1 Banner (Web/Facebook)",
        "Basic Photo Editing",
        "Basic AI Image Enhancement",
        "2 Design Revisions",
        "Delivery within 24–48 Hours",
      ],
      popular: false,
    },

    {
      id: "growth",
      name: "Professional",
      price: "₹19,999",
      period: "/month",
      description: "Perfect for growing businesses.",
      suitableFor: ["Growing Brands", "Startups", "Marketing Teams"],
      features: [
        "20 Social Media Posts",
        "6 Story Designs",
        "2 Carousel Posts",
        "2 Promotional Posters",
        "1 Flyer/Brochure",
        "2 AI Creative Visuals",
        "2 Basic Motion Graphics",
        "1 Reel Editing",
        "Premium Photo Editing",
        "Unlimited Minor Revisions",
      ],
      popular: true,
    },

    {
      id: "premium",
      name: "Premium",
      price: "₹34,999",
      period: "/month",
      description: "Best for brands requiring regular marketing creatives.",
      suitableFor: [
        "Medium Businesses",
        "Growing Brands",
        "Established Brands",
      ],
      features: [
        "30 Social Media Posts",
        "10 Story Designs",
        "4 Carousel Posts",
        "4 Posters",
        "2 Brochures/Flyers",
        "2 Banner Designs",
        "4 Motion Graphics",
        "4 Reel Editing",
        "AI Product Mockups",
        "AI Image Generation",
        "Product Retouching",
        "Priority Support",
        "Unlimited Revisions",
      ],
      popular: false,
    },

    {
      id: "complete-brand",
      name: "Complete Brand",
      price: "₹59,999",
      period: "one-time",
      description:
        "Complete visual identity package for businesses building a strong brand.",
      suitableFor: ["New Businesses", "Startups", "Growing Brands"],
      features: [
        "Logo Design — 3 Concepts",
        "Brand Identity",
        "Brand Guidelines",
        "Business Card",
        "Letterhead",
        "Envelope",
        "ID Card",
        "Company Profile — 12–16 Pages",
        "Social Media Kit",
        "Cover Photos",
        "Email Signature",
        "AI Creative Assets",
      ],
      popular: false,
    },
  ],

  website: [
    {
      id: "landing-page",
      name: "Landing Page",
      price: "₹12,000 – ₹20,000",
      features: ["UI Design", "Mobile Responsive Layout", "Up to 5 Sections"],
    },
    {
      id: "business-website",
      name: "Business Website",
      price: "₹25,000 – ₹45,000",
      features: [
        "5–10 Pages",
        "UI Design",
        "Basic SEO Structure",
        "Contact Form",
        "Mobile Responsive",
      ],
    },
    {
      id: "ecommerce-website",
      name: "E-commerce Website",
      price: "₹45,000 – ₹90,000+",
      features: [
        "Product Pages",
        "Shopping Cart",
        "Payment Gateway",
        "Admin Panel",
        "Mobile Responsive",
      ],
    },
  ],

  videoEditing: [
    {
      id: "basic-video",
      name: "Basic",
      price: "₹1,500 – ₹3,000",
      unit: "per video",
      features: ["Reels", "Shorts", "Instagram Videos"],
    },
    {
      id: "professional-video",
      name: "Professional",
      price: "₹4,000 – ₹8,000",
      unit: "per video",
      features: [
        "Motion Graphics",
        "Text Animation",
        "Color Correction",
        "Sound Design",
      ],
    },
    {
      id: "premium-video",
      name: "Premium",
      price: "₹10,000 – ₹30,000+",
      unit: "per video",
      features: ["Corporate Videos", "Promotional Videos", "Commercial Ads"],
    },
  ],

  socialMedia: [
    {
      service: "Single Post",
      price: "₹500 – ₹1,500",
    },
    {
      service: "Carousel (5 Slides)",
      price: "₹2,000 – ₹4,000",
    },
    {
      service: "Story Design",
      price: "₹300 – ₹800",
    },
    {
      service: "Thumbnail",
      price: "₹500 – ₹1,200",
    },
    {
      service: "Banner",
      price: "₹1,000 – ₹3,500",
    },
    {
      service: "Flyer",
      price: "₹1,500 – ₹4,000",
    },
    {
      service: "Brochure (Bi-fold)",
      price: "₹3,000 – ₹7,000",
    },
    {
      service: "Catalogue (Per Page)",
      price: "₹500 – ₹1,200",
    },
  ],

  packaging: [
    {
      service: "Label Design",
      price: "₹2,000 – ₹5,000",
    },
    {
      service: "Pouch Design",
      price: "₹4,000 – ₹8,000",
    },
    {
      service: "Box Design",
      price: "₹5,000 – ₹12,000",
    },
    {
      service: "Bottle Label",
      price: "₹3,000 – ₹7,000",
    },
    {
      service: "Hang Tag",
      price: "₹1,000 – ₹2,500",
    },
  ],

  ecommerce: [
    {
      service: "Amazon Listing Images",
      price: "₹4,000 – ₹10,000",
    },
    {
      service: "Product Infographics",
      price: "₹800 – ₹2,000",
      unit: "each",
    },
    {
      service: "A+ Content",
      price: "₹8,000 – ₹20,000",
    },
    {
      service: "Product Mockup",
      price: "₹500 – ₹2,000",
    },
  ],

  corporate: [
    {
      service: "PPT Design",
      price: "₹300 – ₹800",
      unit: "per slide",
    },
    {
      service: "Annual Report",
      price: "₹20,000 – ₹60,000",
    },
    {
      service: "Proposal Design",
      price: "₹5,000 – ₹15,000",
    },
    {
      service: "Infographics",
      price: "₹2,000 – ₹8,000",
    },
  ],

  eventMarketing: [
    {
      service: "Hoarding",
      price: "₹3,000 – ₹8,000",
    },
    {
      service: "Billboard",
      price: "₹4,000 – ₹10,000",
    },
    {
      service: "Standee",
      price: "₹1,500 – ₹4,000",
    },
    {
      service: "Roll-up Banner",
      price: "₹1,500 – ₹3,500",
    },
    {
      service: "Vehicle Branding",
      price: "₹5,000 – ₹20,000",
    },
    {
      service: "Exhibition Stall Graphics",
      price: "₹15,000 – ₹80,000",
    },
  ],

  aiCreative: [
    {
      service: "AI Image Generation",
      price: "₹1,000 – ₹5,000",
    },
    {
      service: "AI Product Mockup",
      price: "₹2,000 – ₹6,000",
    },
    {
      service: "AI Character Design",
      price: "₹2,500 – ₹8,000",
    },
    {
      service: "AI Background Creation",
      price: "₹800 – ₹3,000",
    },
    {
      service: "AI Image Upscaling",
      price: "₹500 – ₹2,000",
    },
    {
      service: "AI Photo Manipulation",
      price: "₹2,000 – ₹10,000",
    },
  ],
};
export const PRICING_NOTES = [
  "Prices are for design services only unless otherwise specified.",
  "Printing, stock assets, premium fonts, paid plugins, travel, and advertising spend are billed separately.",
  "Two to three revision rounds are typically included; additional revisions may incur extra charges.",
  "Expedited delivery with 24-hour turnaround may incur an additional 25–50% charge.",
];
