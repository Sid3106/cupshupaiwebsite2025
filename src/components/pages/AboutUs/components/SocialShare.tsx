import React from 'react';
import { Share2, Linkedin, Twitter, Facebook } from 'lucide-react';

export function SocialShare() {
  const shareUrl = window.location.href;
  const title = "CupShup AI - Empowering Businesses with Intelligent Solutions";

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
        <Share2 className="h-5 w-5 text-gray-400" />
        <a 
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0077B5] transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a 
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a 
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#4267B2] transition-colors"
        >
          <Facebook className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}