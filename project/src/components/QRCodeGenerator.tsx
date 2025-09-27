import React from 'react';

interface QRCodeGeneratorProps {
  data: string;
  size?: number;
  className?: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({
  data,
  size = 128,
  className = ''
}) => {
  // Generate QR code URL using a free API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(data)}`;

  return (
    <div className={`bg-white rounded-lg p-4 ${className}`}>
      <div className="text-center">
        <img
          src={qrCodeUrl}
          alt="QR Code for networking"
          className="mx-auto rounded-lg shadow-lg"
          width={size}
          height={size}
          onError={(e) => {
            // Fallback if QR service fails
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement?.appendChild(
              Object.assign(document.createElement('div'), {
                innerHTML: `<div class="w-32 h-32 bg-gray-900 rounded-lg flex items-center justify-center text-white">
                  <div class="text-center">
                    <svg class="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zm-8 4H3v8h8v-8zm-2 6H5v-4h4v4zm8-6h2v2h-2v-2zm0 4h2v2h-2v-2zm2-6h2v2h-2V9zm-2 0h2v2h-2V9zm4 4h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2 2h2v2h-2v-2z"/>
                    </svg>
                    <p class="text-xs">QR Code</p>
                  </div>
                </div>`
              })
            );
          }}
        />
        <p className="text-xs text-gray-600 mt-3">
          Scan to connect and exchange contact details
        </p>
        <div className="mt-2 p-2 bg-gray-100 rounded text-xs text-gray-600 max-w-full overflow-hidden">
          <p className="truncate">Contains: Profile info & LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;