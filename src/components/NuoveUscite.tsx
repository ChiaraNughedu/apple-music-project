import { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Track } from '../types/Track';

const NuoveUscite: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica');
        const data = await response.json();
        setTracks(data.data.slice(0, 10)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="text-light mb-4">Nuove Uscite</h3>
      <hr className="text-light" />
      <Row className="justify-content-center justify-content-md-start">
        {tracks.map((track) => (
          <Col xs={4} sm={3} md={3} style={{ width: "12rem" }} className="mb-4 mx-2 px-0 d-flex justify-content-center justify-content-md-end"  key={track.id}>
            <Card className="bg-dark text-light border-0" >
              <Card.Img variant="top" src={track.album.cover_medium} alt={track.title} className="mb-0 p-0  rounded-3"/>
              <Card.Body>
                <Card.Title>{track.title}</Card.Title>
                <Card.Text>{track.artist.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NuoveUscite;