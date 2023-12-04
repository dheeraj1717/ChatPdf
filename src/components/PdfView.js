import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfView = forwardRef(({ selectedPdfName, onPdfSelected, pdf }, ref) => {
  const styles = {
    DocumentBlock: {
      maxWidth: 600,
      margin: "20px auto",
      marginTop: 8,
      position: "relative",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
  };

  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageDetails, setPageDetails] = useState(null);
  const inputRef = useRef(null);

  // Reset page state when a new PDF is loaded
  useImperativeHandle(ref, () => ({
    resetPageState: () => {
      setCurrentPage(1);
      setTotalPages(0);
    },
  }));

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = () => {
    const target = parseInt(inputRef.current.value, 10);
    if (!isNaN(target) && target >= 1 && target <= totalPages) {
      setCurrentPage(target);
    } else {
      // If the input is invalid, update it to match the current page
      inputRef.current.value = currentPage;
    }
  };
  

  return (
    <div>
      <div className="flex justify-between">
        <div>
          {selectedPdfName && (
            <div className="text-[18px] font-semibold ml-5 pt-2">
              {selectedPdfName}
            </div>
          )}
        </div>
        <div className="flex items-center text-[#686868]">
          <button onClick={prevPage} disabled={currentPage === 1}>
            <AiOutlineArrowLeft className="mr-2 cursor-pointer" />
          </button>
          <span>
            {" "}
            Page{" "}
            <input
              ref={inputRef}
              type="number"
              value={totalPages === 0 ? 0 : currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              onBlur={goToPage}
              className="border  text-[15px] focus:border-2 focus:outline-none w-[25px] text-center rounded-md bg-[#f9f8f8] text-[#242424]"
            />{" "}
            / {totalPages}{" "}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            <AiOutlineArrowRight className="mx-2 cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="w-[45vw]">
        {pdf ? (
          <div style={styles.DocumentBlock}>
            <Document
              file={pdf}
              onLoadSuccess={(data) => {
                setTotalPages(data.numPages);
                setPageDetails(data);
              }}
            >
              <Page
                pageNumber={currentPage}
                height={650}
                width={510}
                onLoadSuccess={(data) => {
                  setPageDetails(data);
                }}
              />
            </Document>
          </div>
        ) : null}
      </div>
    </div>
  );
});

export default PdfView;
