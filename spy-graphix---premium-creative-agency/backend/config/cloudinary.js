export const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'spygraphix-agency',
  api_key: process.env.CLOUDINARY_API_KEY || '1234567890',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'secret-key-placeholder',
};

export const uploadToCloudinaryMock = async (fileBuffer, filename) => {
  // Generates accessible local asset URL or base64 data URI for instant presentation
  const base64 = fileBuffer.toString('base64');
  return {
    public_id: `spygraphix_${Date.now()}_${filename.replace(/\s+/g, '_')}`,
    secure_url: `data:image/jpeg;base64,${base64}`,
    url: `data:image/jpeg;base64,${base64}`
  };
};
