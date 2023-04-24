import { Center, Container } from "@chakra-ui/react";
import Html5QrcodePlugin from "./Reader";
export const QrScanner = () => {
  const onNewScanResult = (decodedText, decodedResult) => {
    // handle decoded results here
    if (typeof decodedResult == "object") {
    }
    console.log((decodedText));
    console.log((decodedResult));
  };

  return (
    <>
      <h1>Hello</h1>
      <Center>
        <Container w="500px">
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />
        </Container>
      </Center>
    </>
  );
};
