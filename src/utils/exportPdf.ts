import jsPDF, { HTMLOptions } from "jspdf";
import html2canvas from "html2canvas";

export default async (fileName: string) => {
  const pdf = new jsPDF({
    orientation: "p",
    unit: "pt",
    format: [816, 1057],
    compress: true,
  });

  const doc = document.documentElement.cloneNode(true) as HTMLElement;

  const imagesInTheDocumentCloned = doc.querySelectorAll("img");

  // Remove buttons and elements with .pdf-remove class
  doc.querySelectorAll("button").forEach((button) => button.remove());
  doc.querySelectorAll(".pdf-remove").forEach((text) => text.remove());

  // Set styles for the document
  doc.style.width = "880pt";
  doc.style.height = "auto";
  doc.style.marginTop = "10pt";
  doc.style.marginLeft = "10pt";

  const options: HTMLOptions = {
    autoPaging: "text",
    html2canvas: {
      scale: 0.68,
    },
  };

  pdf.setFontSize(8);
  pdf.text(`Boa Vista | an Equifax Company`, 600, 0);

  const imagesInTheDocument = document.querySelectorAll(".show-in-pdf");

  // Use a loop with direct element access
  for (const image of imagesInTheDocument) {
    try {
      // Assert that 'image' is an HTMLElement
      const htmlElement = image as HTMLElement;

      const canvas = await html2canvas(htmlElement); // Generate canvas from the image

      const dataUrl = canvas.toDataURL("image/svg");
      const clonedImg = imagesInTheDocumentCloned.item(
        Array.from(imagesInTheDocument).indexOf(image)
      );
      if (clonedImg) {
        clonedImg.setAttribute("src", dataUrl); // Set the data URL on the cloned image
      }
    } catch (error) {
      throw new Error((error as Error).message); // Propagate error for testing
    }
  }

  // Finally generate PDF after all images have been processed
  await pdf.html(doc, options);
  pdf.save(`ICBOX-PJ-Consulta-${fileName}.pdf`);
};
