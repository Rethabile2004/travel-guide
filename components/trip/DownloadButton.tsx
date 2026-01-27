import { PDFDownloadLink } from "@react-pdf/renderer"
import { TripPDF } from "../pdf/TripPDF"

export function DownloadTripPDF({ trip }: { trip: any }) {
  return (
    <PDFDownloadLink
      document={<TripPDF trip={trip} />}
      fileName={`${trip.title.replace(/\s+/g, "_")}.pdf`}
    >
      {({ loading }) =>
        loading ? (
          <button disabled>Preparing PDF…</button>
        ) : (
          <button
            style={{
              marginTop: "24px",
              padding: "12px 20px",
              backgroundColor: "#000",
              color: "#fff",
              borderRadius: "8px",
              fontWeight: 600,
            }}
          >
            Download Trip PDF
          </button>
        )
      }
    </PDFDownloadLink>
  )
}