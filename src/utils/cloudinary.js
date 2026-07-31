import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: "zmps07rt",
  api_key: "989169521344535",
  api_secret: "<your_api_secret>", // Click 'View API Keys' above to copy your API secret
});

// Upload an image

const uploadOnCloudinary = async (imagePath) => {
  try {
    if (!imagePath) {
      throw new Error("Image path is required");
    }
    const result = await cloudinary.uploader.upload(imagePath, {
      resource_type: "image",
    });
    // file has been uploaded successfully
    console.log("File uploaded successfully:", result.url);
    return result;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(imagePath); // Remove the locally saved temporary file as the upload failed
    return null;
  }
};

export { uploadOnCloudinary };
