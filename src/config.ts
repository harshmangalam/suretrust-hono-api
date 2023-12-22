import invariant from "tiny-invariant";

const ORIGIN = process.env.ORIGIN!;
const PORT = process.env.PORT!;
const MONGODB_URI = process.env.MONGODB_URI!;
const NODE_ENV = process.env.NODE_ENV!;
const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY!;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET!;

invariant(ORIGIN, "ORIGIN env is missing");
invariant(PORT, "PORT env is missing");
invariant(MONGODB_URI, "MONGODB_URI env is missing");
invariant(NODE_ENV, "NODE_ENV env is missing");
invariant(CLOUDINARY_CLOUD_NAME, "CLOUDINARY_CLOUD_NAME env is missing");
invariant(CLOUDINARY_API_KEY, "CLOUDINARY_API_KEY env is missing");
invariant(CLOUDINARY_API_SECRET, "CLOUDINARY_API_SECRET env is missing");

export {
  ORIGIN,
  PORT,
  MONGODB_URI,
  NODE_ENV,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
};
