import { useState } from 'react';

function App() {
  const [device, setDevice] = useState<USBDevice | null>(null);
  const [status, setStatus] = useState('');

  const connectToPrinter = async () => {
    try {
      const device = await navigator.usb.requestDevice({ filters: [] });
      await device.open();
      await device.selectConfiguration(1);
      await device.claimInterface(0);

      setDevice(device);
      setStatus('Printer connected');
    } catch (error) {
      console.error('Error connecting to printer:', error);
      setStatus('Failed to connect to printer');
    }
  };

  const sendPrintCommand = async () => {
    if (!device) {
      setStatus('No printer connected');
      return;
    }

    try {
      const encoder = new TextEncoder();
      const command = encoder.encode('P1 ');
      await device.transferOut(1, command);
      setStatus('Print command sent');
    } catch (error) {
      console.error('Error sending print command:', error);
      setStatus('Failed to send print command');
    }
  };
  return (
    <div>
      <h1>Printer Control</h1>
      <div>
        <button onClick={connectToPrinter}>Connect to Printer</button>
        <button onClick={sendPrintCommand} disabled={!device}>
          Send Print Command
        </button>
        <p>Status: {status}</p>
      </div>
    </div>
  );
}

export default App;
