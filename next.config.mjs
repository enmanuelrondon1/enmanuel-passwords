/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"utfs.io",
        port:"",
        pathname:"/**"
      }
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
},
/* ...Your other config rules */

};


export default nextConfig;
