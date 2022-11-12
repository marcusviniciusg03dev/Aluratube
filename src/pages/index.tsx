import React from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";

import config from "../../config.json";
import Head from "next/head";

export default function HomePage() {
  const [filterValue, setFilterValue] = React.useState<string>('');

  return (
  <>
  <Head>
    <title>Aluratube</title>
  </Head>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}
      >
        <Menu filterValue={filterValue} setFilterValue={setFilterValue} />

        <Header
          github={config.github}
          name={config.name}
          job={config.job}
          bg={config.bg}
        />

        <Timeline searchValue={filterValue} playlists={config.playlists} />
      </div>
      </>
  );
}