import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  // Taking notes from Local Storage when the page loads
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(storedNotes);
  }, []);

  // Save to Local Storage when notes are updated
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { text: newNote, date: new Date() }]);
      setNewNote("");
    }
  };

  const deleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <h1>Note App</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Form>
            <Form.Group controlId="formNote">
              <Form.Label>Note</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add your note here"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={addNote}>
              Save Note
            </Button>
            <hr></hr>
            <p>Notes</p>
          </Form>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <ul>
            {notes.map((note, index) => (
              <li key={index} className="note">
                {note.text}
                <div className="note-footer">
                  <small>{note.date.toLocaleDateString()}</small>
                  <MdDeleteForever
                    className="delete-icon"
                    size="1.3rem"
                    onClick={() => deleteNote(index)}
                  ></MdDeleteForever>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default NoteApp;
