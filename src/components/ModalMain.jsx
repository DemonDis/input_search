"use client";
import React, {useState} from 'react';
import {Button,Modal} from 'react-bootstrap';
import InputGoast from './InputGost';
import { Data } from '@/utils/static';
import 'bootstrap/dist/css/bootstrap.min.css';

import './modal.css';

const ModalPanel = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тесты в план
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGoast data={Data} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Добавить</Button>
        <Button onClick={props.onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
}

const ModalMain = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="modal_button">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Добавить
      </Button>

      <ModalPanel
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default ModalMain;