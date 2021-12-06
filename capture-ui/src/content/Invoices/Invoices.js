import React from 'react';
import DocumentUnderstanding from '../../components/DocumentUnderstanding'


const Invoices = () => {
  return <div>
    <DocumentUnderstanding page="Invoice_Page" application="dan" workflow="dan" rules="Documents,NormalOCR,GenerateText,InvoiceRules" />
  </div>;
};

export default Invoices;
