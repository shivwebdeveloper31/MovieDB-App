import React from 'react';
import { Card, Button } from 'react-bootstrap';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const Castlist = ({name, original_name, profile_path, character}) => {
  return (
    <div>
      <Card bg='dark' style={{height: '380px'}}>
        <Card.Img style={{width: '185px', height: '230px'}} variant="top" src={API_IMG + profile_path} />
        <Card.Body>
          <Card.Title>{original_name}</Card.Title>
          <Card.Title>Character: {character}</Card.Title>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Castlist;
