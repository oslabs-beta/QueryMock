import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';
// import apollos_library from './apollos_library';
import apollos_library from './apollos_library';

import shareMessage from './writePages';


/** TRACKS gql query to retreive all tracks */
const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;





// myMocks = () =>{
//}
const myMock = {
  data: {
    tracksForHome: [{
      id: 'id_01',
      title: 'title_01',
      thumbnail: 'thumbnail01',
      length: 'length_01',
      modulesCount: 'modulesCount01',
      author: {
        name: 'name01',
        photo: 'photo01'
      }
    }, {
      id: 'id_01',
      title: 'title_01',
      thumbnail: 'thumbnail01',
      length: 'length_01',
      modulesCount: 'modulesCount01',
      author: {
        name: 'name01',
        photo: 'photo01'
      }
    }, {
      id: 'id_01',
      title: 'title_01',
      thumbnail: 'thumbnail01',
      length: 'length_01',
      modulesCount: 'modulesCount01',
      author: {
        name: 'name01',
        photo: 'photo01'
      }
    }]
  }
}

  // const mockQuery = () =>{
  //   return myMock;
  // }

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */


// tracksForHome = TRACKS.kind.definitions[0].selectionSet.selections[0].name.value


// iterate thru the array below
console.log('*****', TRACKS.definitions[0].selectionSet.selections[0].selectionSet.selections);

// function to convert the response data from GraphQL query request into a manipulatable object



const Tracks = () => {
  console.log('entered Tracks')
  console.log('tracks', TRACKS.definitions[0].selectionSet.selections[0].name.value);
  const { data } = apollos_library.mockQuery(TRACKS, 5, 'p')
  // const { data } = apollos_library.mockQuery(TRACKS, 10);
  // const { data } = useQuery(TRACKS);
  console.log('left Tracks', data);
  return (
    <Layout grid>
      <QueryResult data={data}>
        {data?.tracksForHome?.map((track, index) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};


export default Tracks;
