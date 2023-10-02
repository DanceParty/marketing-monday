import * as React from "react";
import type { MetaFunction } from "@remix-run/node";
import Title from "../components/title";
import Video from "../components/video";
import * as videos from "../../data.json";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const initialVideosState = videos.data
  .map((video, index) => {
    return { ...video, id: index + 1 };
  })
  .reverse();

export default function Index() {
  const [filteredVideos, setFilteredVideos] =
    React.useState(initialVideosState);

  const onSearch = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setFilteredVideos(initialVideosState);
    } else {
      setFilteredVideos(
        filteredVideos.filter((video) => {
          return (
            video.name.includes(e.currentTarget.value) ||
            video.description.includes(e.currentTarget.value)
          );
        })
      );
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <Title>Marketing Monday Archive</Title>
      </div>
      <div className="container mx-auto grid justify-items-center p-4">
        <input
          type="search"
          onChange={onSearch}
          placeholder="search"
          className="border rounded-md border-gray-600 p-2"
        />
      </div>
      <div className="container mx-auto px-4 grid grid-cols-3 gap-12">
        {filteredVideos.map((video) => {
          return (
            <Video
              key={video.id}
              title={video.name}
              episodeNum={video.id}
              mainUrl={video.mainUrl}
              vodUrl={video.vodUrl}
            />
          );
        })}
      </div>
    </>
  );
}
