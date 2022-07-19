import React, { useState } from "react"
import {Modal, ModalHeader, ModalBody} from "reactstrap"
import AddArt from "../pages/AddArt"

function Popform() {
    const [model, setModel] = useState(false)
  return (
    <div>
        <Modal size='lg' isOpen={model} toggle={() => setModel(!model)}>
            <ModalHeader toggle={() => setModel(!model)}>
                    Add Artists
            </ModalHeader>
            <ModalBody>
                <AddArt/>
            </ModalBody>
        </Modal>
        <button className="btn" onClick={() => setModel(true)}>Add Artists</button>
    </div>
  )
}

export default Popform