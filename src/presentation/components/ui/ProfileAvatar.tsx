"use client";

import { useState } from 'react';

export const ProfileAvatar = ({ src, name }: { src: string; name: string }) => {
  const [hasError, setHasError] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2);

  return (
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl bg-surface flex items-center justify-center">
      {!hasError ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full bg-slate-200 dark:bg-slate-800">
          <span className="text-4xl font-bold text-primary tracking-tighter">
            {initials}
          </span>
        </div>
      )}
    </div>
  );
};