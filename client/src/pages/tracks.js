import React from 'react';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';
import apollos_library from './apollos_library';

import shareMessage from './writePages';

console.log(apollos_library.cache);

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


console.log('this is where well start');


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
function gqlToCache (gql) {
  // finding the array of objects with all the Graph QL query
  const arr = gql.definitions[0].selectionSet.selections[0].selectionSet.selections;
  // declaring a empty object to use later
  const cache = {};
  function loopSelection (arr) {
    // another function to loop thru the array and populate cache
    for (let i = 0; i < arr.length; i++) {
      // if one of the object has a selectionSet which means it has its own properties, then recursively invoke loopSelection  
      if (arr[i].selectionSet) {
          loopSelection(arr[i].selectionSet);
        }
      cache[arr[i].name.value] = `${arr[i].name.value}_01`;
    }
    return cache;
  }
  loopSelection(arr);
  return cache;
}


const Tracks = () => {
  console.log('tracks', TRACKS.definitions[0].selectionSet.selections[0].name.value);
  console.log(TRACKS);
  // const { data } = apollos_library.mockQuery(TRACKS, 'p');
  const { data } = apollos_library.mockQuery(TRACKS);
  // const { data } = useQuery(TRACKS);
  console.log('here data', data);
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
