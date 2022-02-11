
import port from "../port";

/**
 * Get file's media type
 * @param {string} contentType html5 content type
 * @returns {string} file type
 */
export const getMediaType = (contentType: any) => {
  let mediaType = contentType;
  if (contentType) {
    if (contentType.includes("image/")) {
      mediaType = "image";
    } else if (contentType.includes("video/")) {
      mediaType = "video";
    } else if (contentType.includes("text/html")) {
      mediaType = "iframe";
    }
  }
  return mediaType;
};

export const triggerPort = (nftId: any[]) => {
  port.propagatePoRT(nftId);
};

