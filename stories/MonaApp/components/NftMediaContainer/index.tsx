import React from 'react';
import { getMediaType, triggerPort } from "../../services/utils";

interface Props {
  nft: Record<string, any>;
}

export const NftMediaContainer = ({ nft }: Props) => {
  const contentType = getMediaType(nft?.contentType);
  const arweaveUrl = `https://arweave.net/${nft?.id}`;

  const IframeContainer = () => <iframe className="monalisa_slide" src={arweaveUrl} onLoad={() => triggerPort(nft?.id)}/>;
  const ImageContainer = () => <img className="monalisa_slide" src={arweaveUrl} alt="blinds_by_vinciis" onLoad={() => triggerPort(nft?.id)}/>;
  const VideoContainer = () => (
    <video className="monalisa_slide" controls muted onLoadedData={() => triggerPort(nft?.id)}>
      <source src={arweaveUrl} />
    </video>
  );

  const renderContainer = () => {
    switch (contentType) {
      case "image":
        return <ImageContainer  />;
      case "video":
        return <VideoContainer />;
      case "iframe":
        return <IframeContainer />;
      default:
        return <></>;
    }
  };
  return <>{renderContainer()}</>
};
