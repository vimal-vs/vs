"use client";

import Cursor from "../components/Cursor";
import Archive from "../components/Archive";

export default function App() {
  return (
  <>
    <div className="hidden md:block">
      <Cursor />
    </div>
    <Archive />
  </>
  )
}
