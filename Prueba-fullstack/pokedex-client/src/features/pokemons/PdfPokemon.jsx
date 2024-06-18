import {
  PDFDownloadLink,
  Document,
  Page,
  Image,
  Text,
  StyleSheet,
  View,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#c92a2a',
    display: 'flex',
    flexDirection: 'column',
  },
  section: { color: 'white', textAlign: 'center', margin: 30 },
});

const MyDoc = ({ pokemon }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={{ fontSize: '20mm', fontWeight: 'bold' }}>
          Name: {pokemon?.name}
        </Text>
        <Image src={pokemon.img} />
        <Text>Height: {pokemon?.height}</Text>
      </View>
    </Page>
  </Document>
);

const PdfLink = ({ pokemon }) => {
  return (
    <div>
      <PDFDownloadLink
        document={<MyDoc pokemon={pokemon} />}
        fileName={`${pokemon.name}.pdf`}
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF!'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PdfLink;
