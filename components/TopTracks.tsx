import useSWR from 'swr';

import fetcher from '../lib/fetcher';
import Track from './Track';
import {TrackType} from "../types";



export default function TopTracks() {
  const { data } = useSWR('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return data.tracks.map((track:TrackType, index:number) => {
    return(
    <Track ranking={index + 1} key={track.songUrl} {...track} />
  )});
}
