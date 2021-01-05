import React, {useState} from 'react';
import {Document, Page} from 'react-pdf';
import resume from '../../Resume.pdf'

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <embed src="resume" width="800px" height="2100px"/>
    </div>
  );
}

export default Resume;
