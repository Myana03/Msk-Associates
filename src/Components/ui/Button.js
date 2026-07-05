import React from 'react';

const VARIANT_CLASS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  text: 'btn-text',
};

// Shared button primitive — five variants (primary/secondary/outline/ghost/text),
// all hover/focus/active states live in index.css as real CSS pseudo-classes
// (not JS mouse handlers), so keyboard focus-visible works for free.
export default function Button({
  variant = 'primary',
  as,
  href,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn ${VARIANT_CLASS[variant] || VARIANT_CLASS.primary} ${className}`.trim();
  const Tag = as || (href ? 'a' : 'button');

  if (Tag === 'a') {
    return (
      <a href={href} className={classes} aria-disabled={disabled || undefined} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}
