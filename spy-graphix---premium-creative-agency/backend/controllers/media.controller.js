import { uploadToCloudinaryMock } from '../config/cloudinary.js';

let mediaStore = [
  {
    id: 'm-1',
    name: 'Luxury Perfume Packaging Cover',
    url: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    public_id: 'spygraphix_1',
    size: 245000,
    mimeType: 'image/jpeg',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'm-2',
    name: 'Aetheria Brand Architecture',
    url: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    public_id: 'spygraphix_2',
    size: 512000,
    mimeType: 'image/jpeg',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'm-3',
    name: 'WebGL 3D Interactive Canvas Hero',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    public_id: 'spygraphix_3',
    size: 820000,
    mimeType: 'image/jpeg',
    createdAt: new Date().toISOString(),
  },
];

export const getMedia = (req, res) => {
  res.json(mediaStore);
};

export const uploadMedia = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No media file attached' });
    }
    const uploaded = await uploadToCloudinaryMock(req.file.buffer, req.file.originalname);

    const newItem = {
      id: `m-${Date.now()}`,
      name: req.file.originalname,
      url: uploaded.secure_url,
      public_id: uploaded.public_id,
      size: req.file.size || 350000,
      mimeType: req.file.mimetype || 'image/jpeg',
      createdAt: new Date().toISOString(),
    };

    mediaStore.unshift(newItem);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message || 'Media upload failed' });
  }
};

export const updateMedia = (req, res) => {
  const index = mediaStore.findIndex((m) => m.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Media not found' });
  mediaStore[index] = { ...mediaStore[index], ...req.body };
  res.json(mediaStore[index]);
};

export const deleteMedia = (req, res) => {
  mediaStore = mediaStore.filter((m) => m.id !== req.params.id);
  res.json({ success: true, message: 'Media file deleted' });
};
