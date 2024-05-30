interface Navigator {
  usb: {
    requestDevice(options: {
      filters: { vendorId?: number; productId?: number }[];
    }): Promise<USBDevice>;
  };
}

interface USBDevice {
  open(): Promise<void>;
  selectConfiguration(configurationValue: number): Promise<void>;
  claimInterface(interfaceNumber: number): Promise<void>;
  transferOut(endpointNumber: number, data: BufferSource): Promise<USBOutTransferResult>;
}
