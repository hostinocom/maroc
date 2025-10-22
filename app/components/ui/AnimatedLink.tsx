'use client';

import Link from 'next/link';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

export default function AnimatedLink({ 
  href, 
  children, 
  className = '',
  borderColor = 'currentColor'
}: AnimatedLinkProps) {
  return (
    <>
      <Link 
        href={href}
        className={`animated-link ${className}`}
      >
        {children}
      </Link>

      <style jsx>{`
        .animated-link {
          position: relative;
        }

        .animated-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background-color: ${borderColor};
          transition: width 0.4s ease;
        }

        .animated-link:hover::after {
          width: 100%;
        }

        .animated-link:not(:hover)::after {
          left: auto;
          right: 0;
          width: 0;
        }
      `}</style>
    </>
  );
}

// Example usage component
export function AnimatedLinkExample() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 gap-8">
      <nav className="flex gap-8 text-xl">
        <AnimatedLink href="/" className="text-gray-800 hover:text-blue-600 transition-colors">
          Home
        </AnimatedLink>
        <AnimatedLink href="/about" className="text-gray-800 hover:text-blue-600 transition-colors" borderColor="#3b82f6">
          About Us
        </AnimatedLink>
        <AnimatedLink href="/services" className="text-gray-800 hover:text-green-600 transition-colors" borderColor="#16a34a">
          Services
        </AnimatedLink>
        <AnimatedLink href="/contact" className="text-gray-800 hover:text-purple-600 transition-colors" borderColor="#9333ea">
          Contact
        </AnimatedLink>
      </nav>
    </div>
  );
}