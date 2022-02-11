import React from 'react';
import {useNft} from '../../hooks/useNft';
import { NftMediaContainer } from "../NftMediaContainer";


export const MonaApp = ({screen, monaName}: any) => {
  const screenId = screen
  const [index, setIndex] = React.useState<any>(0);
  const delay = 2000;
  const timeoutRef = React.useRef<any>(null);
  const [videos, setVideos] = React.useState<any[]>([]);
  const [txId, setTxId] = React.useState<any>('');
  const {data: nft, isLoading, isError} = useNft({id: txId})
  // console.log({nft})
  function resetTimeout() {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  React.useEffect(() => {
    const fetch = async () => {
      try {
        const response  = await window.fetch(`https://vblinds.herokuapp.com/api/screens/${screenId}/screenVideos`)
        const data = await response.json();
        setVideos(data)
        console.log(data)
        data.map((d: any) => d.thumbnail).map((i: any) => i.split("https://arweave.net/")[1]).map((txId: any) => setTxId(txId))
        // console.log(data.map(d => d.video).map(i => i.split("https://arweave.net/")[1]))
        resetTimeout()
        timeoutRef.current = setTimeout(() => {
          setIndex((prevIndex: any) => (prevIndex === (videos.length - 1 || videos.length) ? 0 : prevIndex + 1))
        }, delay)
      } catch (r) {
        console.error(r)
      }
    }
    fetch()
  }, [index, videos.length, screenId])
  return (
    <div className={monaName}>
      <div className="monalisa_slideshowSlider " style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
          {isLoading && <>Loading</>}
          {isError && <>{isError}</>}
          {nft && videos.map((video) => (
            <a key={video._id} aria-label="Blinds by Vinciis" href={`https://vblinds.herokuapp.com/video/${video._id}`} target="_blank" rel="noopener noreferrer">
              <NftMediaContainer
                key={txId} 
                nft={nft} 
                />
            </a>
          ))}
      </div>
    </div>
  )
}
