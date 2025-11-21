'use client';

import Link from 'next/link';
import React from 'react';

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: 'primary' | 'ghost';
};

export const CTAButton: React.FC<CTAButtonProps> = ({ href, label, variant = 'primary' }) => {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const styles =
    variant === 'ghost'
      ? 'border border-brand-primary text-brand-primary bg-white hover:bg-brand-secondary focus-visible:outline-brand-primary'
      : 'bg-brand-primary text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-brand-dark';
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
};
