/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si tu repo en GitHub no es el principal (username.github.io), 
  // añade el nombre del repo aquí:
  // basePath: '/portfolio-drusystem', 
};

export default nextConfig;