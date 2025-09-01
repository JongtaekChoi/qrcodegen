import QRCode from "qrcode";

const generateQRCode = async (
  text: string,
  filename: string = "qrcode.png"
) => {
  try {
    const qrCode = await QRCode.toFile(filename, text);
    return qrCode;
  } catch (error) {
    console.error(error);
  }
};

generateQRCode(process.argv[2], process.argv[3]);
