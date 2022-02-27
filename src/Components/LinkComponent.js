import React from 'react';
import { Link } from 'react-router-dom';
/**
 *Generate HTML a Tag
 * @param { object } props Component props
 * @param { destination } props Href for a tag
 * @param { className } props CSS class for a tag
 * @param { description } props Name of the link
 * @returns { JSX.Element } Component template
 */
export default function LinkComponent({ destination, className, description }) {
  return (
    <Link to={destination} className={className}>
      {description}
    </Link>
  );
}
