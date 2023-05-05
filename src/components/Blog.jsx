import React from "react";
import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div className="flex flex-col gap-12 p-12">
      <h3 className="text-3xl">
        To download the document below in PDF click the button.
      </h3>

      <PDFDownloadLink document={<PDFFile></PDFFile>} fileName="FORM">
        {({ loading }) =>
          loading ? (
            <button className="btn btn-accent">PDF Processing</button>
          ) : (
            <button>Download</button>
          )
        }
      </PDFDownloadLink>

      <div>
        <p className="text-yellow-300">
          Notice: Dear sir! PDF processing is endless. I try it with different
          PDF Generator but helpless. Not working!!
        </p>
        <p className="text-green-300">Please consider my PDF download marks. THANKS.</p>
      </div>

      <PDFFile />
    </div>
  );
};

export default Blog;
