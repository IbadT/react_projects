import React from "react";
import s from "./SideBar.module.css";
import { NavLink } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return (
      <nav className={s.container}>
        <div className={s.textWrapper}>
          <div>
            <NavLink
              className={(item) =>
                item.isActive ? `${s.active}` : `${s.item}`
              }
              to="/profile"
            >
              Profile
            </NavLink>
          </div>
          <div>
            <NavLink
              className={(item) =>
                item.isActive ? `${s.active}` : `${s.item}`
              }
              to="/message"
            >
              Message
            </NavLink>
          </div>
          <div>
            <NavLink
              className={(item) =>
                item.isActive ? `${s.active}` : `${s.item}`
              }
              to="/news"
            >
              News
            </NavLink>
          </div>
          <div>
            <NavLink
              className={(item) =>
                item.isActive ? `${s.active}` : `${s.item}`
              }
              to="/music"
            >
              Music
            </NavLink>
          </div>
          <div>
            <NavLink
              className={(item) =>
                item.isActive ? `${s.active}` : `${s.item}`
              }
              to="/settings"
            >
              Settings
            </NavLink>
          </div>

          <div>
            <div>Friends</div>
            <div className={s.forImg}>

              <div>
                <img alt="#" src="https://html5css.ru/w3images/avatar2.png" />
                <div>Andrew</div>
              </div>

              <div>
                <img alt="#" src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-businessman-avatar-icon-flat-style-png-image_1917273.jpg" />
                <div>Sasha</div>
              </div>

              <div >
                <img alt="#" className={s.lastImg} src="https://html5css.ru/w3images/avatar6.png" />
                <div>Sveta</div>
              </div>

            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SideBar;
