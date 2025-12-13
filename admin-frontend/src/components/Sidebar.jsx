import React from "react";
import { Nav } from "react-bootstrap";
import { useSidebarCollapse } from "../contexts/SidebarCollapseContext.jsx";
import {
  FaTachometerAlt,
  FaStream,
  FaCube,
  FaCopyright,
  FaLeaf,
  FaPalette,
  FaPercentage,
  FaShoppingBasket,
  FaLuggageCart,
  FaTruck,
  FaUsers,
  FaUserTag,
  FaShieldAlt,
  FaQuestionCircle,
  FaComment,
} from "react-icons/fa";
import avatar from "../assets/images/avatar.svg";

export default function Sidebar() {
  const { collapsed } = useSidebarCollapse();

  return (
    <aside
      className={`sidebar d-flex flex-column p-3 ${
        collapsed ? "sidebar-collapsed" : ""
      }`}
    >
      {/* Header */}
      <div className="text-center mt-2 mb-4">
        <img
          src={avatar}
          alt="avatar"
          width={collapsed ? 40 : 72}
          height={collapsed ? 40 : 72}
          className="rounded-circle mb-2"
        />
        <h6 className={`fw-bold m-0 ${collapsed ? "text-hidden" : ""}`}>
          پنل مدیریت
        </h6>
      </div>

      <Nav className="flex-column">
        <Nav.Link href="/" className="sidebar-link">
          <FaTachometerAlt className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            داشبورد
          </span>
        </Nav.Link>

        {/* فروشگاه */}
        <div
          className={`sidebar-group-title text-center fw-bold mt-2 mb-4 ${
            collapsed ? "text-hidden" : ""
          }`}
        >
          <span>فروشگاه</span>
        </div>

        <Nav.Link href="/categories" className="sidebar-link">
          <FaStream className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت گروه محصول
          </span>
        </Nav.Link>

        <Nav.Link href="/products" className="sidebar-link">
          <FaCube className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت محصول
          </span>
        </Nav.Link>

        <Nav.Link href="/brands" className="sidebar-link">
          <FaCopyright className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت برندها
          </span>
        </Nav.Link>

        <Nav.Link href="/guaranties" className="sidebar-link">
          <FaLeaf className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت گارانتی‌ها
          </span>
        </Nav.Link>

        <Nav.Link href="/colors" className="sidebar-link">
          <FaPalette className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت رنگ‌ها
          </span>
        </Nav.Link>

        <Nav.Link href="/discounts" className="sidebar-link">
          <FaPercentage className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت تخفیف‌ها
          </span>
        </Nav.Link>

        {/* سفارشات */}
        <div
          className={`sidebar-group-title text-center fw-bold mt-2 mb-4 ${
            collapsed ? "text-hidden" : ""
          }`}
        >
          <span>سفارشات و سبد</span>
        </div>

        <Nav.Link href="/carts" className="sidebar-link">
          <FaShoppingBasket className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت سبدها
          </span>
        </Nav.Link>

        <Nav.Link href="/orders" className="sidebar-link">
          <FaLuggageCart className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت سفارشات
          </span>
        </Nav.Link>

        <Nav.Link href="/deliveries" className="sidebar-link">
          <FaTruck className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مدیریت نحوه ارسال
          </span>
        </Nav.Link>

        {/* کاربران */}
        <div
          className={`sidebar-group-title text-center fw-bold mt-2 mb-4 ${
            collapsed ? "text-hidden" : ""
          }`}
        >
          <span>کاربران و همکاران</span>
        </div>

        <Nav.Link href="/users" className="sidebar-link">
          <FaUsers className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مشاهده کاربران
          </span>
        </Nav.Link>

        <Nav.Link href="/roles" className="sidebar-link">
          <FaUserTag className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            نقش‌ها
          </span>
        </Nav.Link>

        <Nav.Link href="/permissions" className="sidebar-link">
          <FaShieldAlt className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            مجوزها
          </span>
        </Nav.Link>

        {/* ارتباطات */}
        <div
          className={`sidebar-group-title text-center fw-bold mt-2 mb-4 ${
            collapsed ? "text-hidden" : ""
          }`}
        >
          <span>ارتباطات</span>
        </div>

        <Nav.Link href="/questions" className="sidebar-link">
          <FaQuestionCircle className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            سوال‌ها
          </span>
        </Nav.Link>

        <Nav.Link href="/comments" className="sidebar-link">
          <FaComment className="sidebar-icon" />
          <span className={`sidebar-text ${collapsed ? "text-hidden" : ""}`}>
            نظرات
          </span>
        </Nav.Link>
      </Nav>

      <div className="mt-auto sidebar-footer" />
    </aside>
  );
}
