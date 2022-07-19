import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export class AddArt extends Component {
    state = {
        aritst_name: '',
        DOB: '',
        bio: '',
        contacts: []
    }

    componentDidMount() {
        const url = 'http://localhost/api/add_artists.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ contacts: data })
                console.log(this.state.contacts)
            })
    }

    handleFormSubmit(event) {
        event.preventDefault();

        let formData = new FormData();
        formData.append('aritst_name', this.state.aritst_name)
        formData.append('DOB', this.state.DOB)
        formData.append('bio', this.state.bio)
        

        axios({
            method: 'post',
            url: 'http://localhost/api/add_artists.php',
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
                <div>AddArt</div>
                <div className='container'>
                    <Form >
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Artists Name
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder="Song Name" name="aritst_name" value={this.state.aritst_name} onChange={e => this.setState({ aritst_name: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Date of Birth
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control type="date" placeholder="Date Released" name="DOB" value={this.state.DOB} onChange={e => this.setState({ DOB: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Bio
                            </Form.Label>
                            <Col sm="6">
                                <Form.Control type="text" placeholder=" " name="bio" value={this.state.bio} onChange={e => this.setState({ bio: e.target.value })} />
                            </Col>
                        </Form.Group>

                        <Button type="submit" name="submit" onClick={e => this.handleFormSubmit(e)} >Submit</Button>

                    </Form>
                </div>
            </>
        )
    }
}

export default AddArt