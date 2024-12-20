import { useRef } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import CreatableReactSelect from 'react-select/creatable'

export function NoteForm () {
    const titleRef = useRef<HTMLInputElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);    
    return (
        <>
            <Form>
                <Stack gap={4}>
                    <Row>
                        <Col>
                            <Form.Group controlId="title">
                                <Form.Label>Title</Form.Label>
                                <Form.Control ref={titleRef} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="tags" >
                                <Form.Label>Tags</Form.Label>
                                <CreatableReactSelect isMulti />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group controlId="markdown">
                        <Form.Label>Body</Form.Label>
                        <Form.Control ref={textAreaRef} required as="textarea" rows={15} />
                    </Form.Group>
                    <Stack direction="horizontal" gap={2} className="justify-content-end">
                        <Button type="submit" variant="primary">Save</Button>
                        <Link to="..">
                            <Button type="button" variant="outline-secondary">Cancel</Button>
                        </Link>
                    </Stack>
                </Stack>
            </Form>
        </>
    )
}