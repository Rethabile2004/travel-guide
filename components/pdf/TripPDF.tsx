import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"

type TripPDFProps = {
  trip: {
    title: string
    startDate?: string
    endDate?: string
    notes?: string
    city: {
      name: string
      province: string
      description: string
    }
  }
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
  },
  header: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 10,
    color: "#666",
    marginBottom: 2,
    textTransform: "uppercase",
  },
  value: {
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 16,
  },
})

export function TripPDF({ trip }: TripPDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <Text style={styles.header}>{trip.title}</Text>

        {/* City Info */}
        <View style={styles.section}>
          <Text style={styles.label}>City</Text>
          <Text style={styles.value}>
            {trip.city.name} ({trip.city.province})
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>City Description</Text>
          <Text style={styles.value}>{trip.city.description}</Text>
        </View>

        <View style={styles.divider} />

        {/* Dates */}
        <View style={styles.section}>
          <Text style={styles.label}>Trip Dates</Text>
          <Text style={styles.value}>
            {trip.startDate ?? "N/A"} → {trip.endDate ?? "N/A"}
          </Text>
        </View>

        {/* Notes */}
        {trip.notes && (
          <View style={styles.section}>
            <Text style={styles.label}>Notes</Text>
            <Text style={styles.value}>{trip.notes}</Text>
          </View>
        )}
      </Page>
    </Document>
  )
}