import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30, backgroundColor: '#fff' },
  header: { fontSize: 24, marginBottom: 10, fontWeight: 'bold' },
  section: { marginBottom: 10, padding: 10 },
  subHeader: { fontSize: 18, marginBottom: 5, color: '#2c3e50' },
  text: { fontSize: 12, marginBottom: 5, lineHeight: 1.5 },
});

export const TripDocument = ({ trip }: { trip: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>{trip.title}</Text>
        <Text style={styles.text}>Destination: {trip.city.name}, {trip.city.province}</Text>
        <Text style={styles.text}>Notes: {trip.notes || "No extra notes provided."}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>About {trip.city.name}</Text>
        <Text style={styles.text}>{trip.city.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeader}>Top Attractions</Text>
        {trip.city.attractions.map((attr: any) => (
          <Text key={attr.id} style={styles.text}>• {attr.name} ({attr.category})</Text>
        ))}
      </View>
    </Page>
  </Document>
);
