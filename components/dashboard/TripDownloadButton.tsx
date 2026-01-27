'use client'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { TripDocument } from '@/components/pdf/TripDocument';

export default function TripClientPage({ tripData }: { tripData: any }) {
  return (
    <div>
      <h1>{tripData.title}</h1>
      
      <PDFDownloadLink 
        document={<TripDocument trip={tripData} />} 
        fileName={`${tripData.title}.pdf`}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {({ loading }) => (loading ? 'Preparing guide...' : 'Download Travel Guide (PDF)')}
      </PDFDownloadLink>
    </div>
  );
}
