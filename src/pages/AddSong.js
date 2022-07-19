import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Popform from '../components/Popform';


export class AddSong extends Component {

  state = {
    artwork: '',
    song_name: '',
    date_released: '',
    artists: '',
    contacts: []
  }

  componentDidMount() {
    const url = 'http://localhost/api/add_song.php'
    axios.get(url).then(response => response.data)
      .then((data) => {
        this.setState({ contacts: data })
        console.log(this.state.contacts)
      })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append('artwork', this.state.artwork)
    formData.append('song_name', this.state.song_name)
    formData.append('date_released', this.state.date_released)
    formData.append('artists', this.state.artists)


    axios({
      method: 'post',
      url: 'http://localhost/api/add_song.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
      .then(function (response) {
        //handle success
        console.log(response)
        // alert('New Contact Successfully Added.');

      })
      .catch(function (response) {
        //handle error
        console.log(response)
      });

  }

  
  render() {
    return (
      <>

        <div>AddSong</div>
        <div className='container'>
          <Form encType="multipart/form-data">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Song Name
              </Form.Label>
              <Col sm="6">
                <Form.Control type="text" placeholder="" value={this.state.artwork} onChange={e => this.setState({ artwork: e.target.value })}  />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
              Date Released
              </Form.Label>
              <Col sm="6">
                <Form.Control type="date" placeholder="" value={this.state.song_name} onChange={e => this.setState({ song_name: e.target.value })}  />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Artwork
              </Form.Label>
              <Col sm="6">
                <Form.Control type="file" placeholder="" value={this.state.date_released} onChange={e => this.setState({ date_released: e.target.value })}  />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Artists
              </Form.Label>
              <Col sm="6">
                <Form.Select id="disabledSelect" value={this.state.artists} onChange={e => this.setState({ artists: e.target.value })}  >
                  <option>Disabled select0</option>
                  <option>Disabled select1</option>
                </Form.Select>
              </Col>
              <Col sm="2">
                {/* <Button>+ Add Artists</Button> */}
                <Popform />
              </Col>
            </Form.Group>



            <Button type="submit" name="submit" onClick={e => this.handleFormSubmit(e)} >Submit</Button>

          </Form>
        </div>
      </>
    )
  }
}

export default AddSong