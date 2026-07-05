import React from 'react';

// Shared card primitive — soft shadow, rounded corners, optional hover
// elevation + optional glass surface. `Card.Media` wraps an image/background
// so it can zoom on hover via the `.card__media` / `.card__media-bg` hook
// in index.css, without every section re-implementing the same transition.
export default function Card({
  interactive = true,
  glass = false,
  className = '',
  style,
  children,
  ...rest
}) {
  const classes = [
    'card',
    interactive && 'card--interactive',
    glass && 'card--glass',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} style={style} {...rest}>
      {children}
    </div>
  );
}

Card.Media = function CardMedia({ children, style, className = '', ...rest }) {
  return (
    <div className={`card__media ${className}`.trim()} style={style} {...rest}>
      {children}
    </div>
  );
};
