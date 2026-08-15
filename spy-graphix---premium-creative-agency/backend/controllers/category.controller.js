let categoriesStore = [
  {
    id: "cat-1",
    name: "Branding ramji Identity",
    slug: "branding-and-identity",
    type: "Service",
    description: "Luxury brand architectures and visual identities.",
  },
  {
    id: "cat-2",
    name: "Packaging Design",
    slug: "packaging-design",
    type: "Service",
    description: "3D structural packaging and physical print.",
  },
  {
    id: "cat-3",
    name: "Website & UI",
    slug: "website-and-ui",
    type: "Service",
    description: "WebGL 3D canvas and high-converting web apps.",
  },
  {
    id: "cat-4",
    name: "AI Creative",
    slug: "ai-creative",
    type: "Portfolio",
    description: "Generative AI asset design and concept direction.",
  },
  {
    id: "cat-5",
    name: "Design Insights",
    slug: "design-insights",
    type: "Blog",
    description: "Editorial trends in digital craftsmanship.",
  },
];

export const getCategories = (req, res) => {
  const { type } = req.query;
  if (type) {
    return res.json(
      categoriesStore.filter(
        (c) => c.type.toLowerCase() === type.toString().toLowerCase(),
      ),
    );
  }
  res.json(categoriesStore);
};

export const createCategory = (req, res) => {
  const { name, type, description } = req.body;
  if (!name)
    return res.status(400).json({ error: "Category name is required" });

  const newCat = {
    id: `cat-${Date.now()}`,
    name,
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    type: type || "General",
    description: description || "",
  };
  categoriesStore.push(newCat);
  res.status(201).json(newCat);
};

export const updateCategory = (req, res) => {
  const index = categoriesStore.findIndex((c) => c.id === req.params.id);
  if (index === -1)
    return res.status(404).json({ error: "Category not found" });
  categoriesStore[index] = { ...categoriesStore[index], ...req.body };
  res.json(categoriesStore[index]);
};

export const deleteCategory = (req, res) => {
  categoriesStore = categoriesStore.filter((c) => c.id !== req.params.id);
  res.json({ success: true, message: "Category deleted successfully" });
};
