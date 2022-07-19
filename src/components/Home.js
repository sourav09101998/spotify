import React, { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


import Star from "./Star";

function Home() {

  const [category, setCategory] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const getcategory = async () => {
      const res = await fetch("http://localhost/spotify/Artists.php");
      const getdata = await res.json();
      setCategory(getdata);
      // console.log(getdata);
    };

    getcategory();
  }, []);

  useEffect(() => {
    const getsongs = async () => {
      const res = await fetch("http://localhost/spotify/AddSong.php");
      const getdatas = await res.json();
      setSongs(getdatas);
      // console.log(getdata);
    };

    getsongs();
  }, []);

  const navigate = useNavigate();

  const addSong = () => {
    navigate("/AddSong")
  }

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 0.5fr' }}>
        <h1>Top 10 Songs</h1>
        <h1> </h1>
        <Button className="btn btn-success"
          onClick={addSong}>+ Add Songs
        </Button>
      </div>


      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ArtWork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((getcates) => (
            <tr key={getcates.id}>

              <td>{getcates.artwork}</td>
              <td>{getcates.song_name}</td>
              <td>{getcates.date_released}</td>
              <td>{getcates.artists}</td>
              <td style={{ display: 'flex', justifyContent: "center" }}>{<Star />}</td>
            </tr>
          ))}
        </tbody>
      </Table>


      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr 0.5fr' }}>
        <h1>Top 10 Artists</h1></div>


      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
          </tr>
        </thead>
        <tbody>

          {category.map((getcate) => (
            <tr key={getcate.id}>

              <td>{getcate.aritst_name}</td>
              <td>{getcate.DOB}</td>
              <td>{getcate.bio}</td>
            </tr>
          ))}

        </tbody>
      </Table>

    </>

  )
}

export default Home