import React from 'react';
import { Link } from 'react-router-dom';
/**
 *Generate HTML a Tag
 * @param { object } props Component props
 * @returns { JSX.Element } Component template
 */
export default function LinkComponent(props) {
  return (
    <Link to={props.destination} className={props.className} key={props.key}>
      {props.description}
    </Link>
  );
}
