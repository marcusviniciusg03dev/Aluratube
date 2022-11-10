import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ResetCSS from "../components/ResetCSS";
import Timeline from "../components/Timeline";

import config from "../../config.json";

export default function HomePage() {
  const [filterValue, setFilterValue] = React.useState<string>('');

  return (
      <div>
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />

        <Header
          github={config.github}
          name={config.name}
          job={config.job}
          bg={config.bg}
        />

        <Timeline searchValue={filterValue} playlists={config.playlists} />
      </div>
  );
}