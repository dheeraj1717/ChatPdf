import React, { useState, useRef } from "react";
import { blobToURL } from "./utils/utils";
import Drag from "./components/Drag";
import PdfView from "./components/PdfView";
import ChatPanel from "./components/ChatPanel";

function App() {
  const [pdf, setPdf] = useState(null);
  const [selectedPdfName, setSelectedPdfName] = useState("");
  const [targetPage, setTargetPage] = useState("");
  const pdfViewRef = useRef(null);

  const onPdfSelected = async (files) => {
    const URL = await blobToURL(files[0]);
    setPdf(URL);

    const selectedPdf = files[0];
    setSelectedPdfName(selectedPdf.name);

    // Reset the page state when a new PDF is loaded
    pdfViewRef.current.resetPageState();
  };

  return (
    <div>
      <div className="flex h-screen">
        <Drag onLoaded={onPdfSelected} selectedPdfName={selectedPdfName} />
        <PdfView
          ref={pdfViewRef}
          selectedPdfName={selectedPdfName}
          onPdfSelected={onPdfSelected}
          pdf={pdf}
        />
        <ChatPanel />
      </div>
    </div>
  );
}

export default App;