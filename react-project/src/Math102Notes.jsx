import Accordion from "react-bootstrap/Accordion";
import { v4 as uuidv4 } from "uuid";
import { Math102Files } from "./EachNote";

export default function Math102Notes() {
  return (
    <Accordion defaultActiveKey="0">
      {Math102Files.map((pn) => (
        <>
          <Accordion.Item eventKey="0">
            <Accordion.Header key={uuidv4()}>{pn.title}</Accordion.Header>
            <Accordion.Body key={uuidv4()}>
              {pn.info}
              <br />
              <button className="p-2 px-3 bg-gray-800 text-white font-['Poppins'] text-center my-3 rounded-md">
                <a className=" no-underline text-white" href={pn.href} download>
                  Download Now
                </a>
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </>
      ))}
    </Accordion>
  );
}
