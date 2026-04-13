import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    // Disable the upload plugin so Strapi can start on stateless deployments
    // (e.g. Railway free tier) where /app/public/uploads does not exist and
    // no persistent volume is attached.
    // To re-enable, remove this block and configure a cloud provider
    // (e.g. @strapi/provider-upload-aws-s3 or provider-upload-cloudinary).
    enabled: false,
  },
});

export default config;
