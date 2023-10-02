import * as React from "react";

interface Props {
  mainUrl: string;
  episodeNum: number;
  vodUrl: string;
  title: string;
}

export default function Video(props: Props) {
  const [showMainVod, setShowMainVod] = React.useState(true);
  return (
    <div className="grid justify-items-center">
      {showMainVod ? (
        <iframe
          width="280"
          height="158"
          src={props.mainUrl}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          width="280"
          height="158"
          src={props.vodUrl}
          title={props.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      <span className="text-center">
        Ep #{props.episodeNum}: {props.title}
      </span>
      <div className="grid justify-items-center">
        <span>
          <button
            disabled={!props.mainUrl}
            onClick={() => setShowMainVod(true)}
            className={`${
              !props.mainUrl ? `text-gray-600` : `text-inherit`
            } text-xs`}
          >
            edited
          </button>{" "}
          /{" "}
          <button
            disabled={!props.vodUrl}
            onClick={() => setShowMainVod(false)}
            className={`${
              !props.vodUrl ? `text-gray-600` : `text-inherit`
            } text-xs`}
          >
            full
          </button>
        </span>
      </div>
    </div>
  );
}
