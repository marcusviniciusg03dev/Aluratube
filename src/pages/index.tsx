import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ResetCSS from "../components/ResetCSS";
import Timeline from "../components/Timeline";

import config from "../../config.json";

export default function HomePage() {
  return (
    <>
      <ResetCSS />
      <div>
        <Menu />

        <Header
          github={config.github}
          name={config.name}
          job={config.job}
        />

        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}