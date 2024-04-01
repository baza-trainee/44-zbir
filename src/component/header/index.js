import { Fragment } from "react";

import "./index.css";
import logo from "./logo.png";

export default function Header({ list }) {
  return (
    <header className="header">
      <a href="www.test.com">
        <img src={logo} alt="Logo" height={84} />
      </a>

      <div className="header__menu">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>

      <button className="button">Допомога</button>
    </header>
  );
}

function Item({ name, link }) {
  return (
    <div className="header__menu--item">
      <a href={link} target="_blanck" className="header__menu--link">
        {name}
      </a>
    </div>
  );
}
