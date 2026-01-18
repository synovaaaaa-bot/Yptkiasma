import { X, Wallet, QrCode, Copy, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  program?: any;
  selectedAmount: number | null;
  customAmount: string;
  setSelectedAmount: (amount: number | null) => void;
  setCustomAmount: (amount: string) => void;
}

export function DonationModal({ isOpen, onClose, program, selectedAmount, customAmount, setSelectedAmount, setCustomAmount }: DonationModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'bank' | 'qris'>('bank');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  if (!isOpen) return null;

  const bankAccounts = [
    { 
      logo: '🏦', 
      bank: 'Bank Syariah Indonesia', 
      account: '1234567890123', 
      name: 'YTPK Iasma I Landbouw Bukittinggi',
    },
    { 
      logo: '🏦', 
      bank: 'Bank Mandiri', 
      account: '0987654321098', 
      name: 'YTPK Iasma I Landbouw Bukittinggi',
    },
    { 
      logo: '🏦', 
      bank: 'Bank BNI', 
      account: '5555666677778', 
      name: 'YTPK Iasma I Landbouw Bukittinggi',
    },
  ];

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(num);
  };

  const handleCopy = (text: string, accountNumber: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(accountNumber);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl animate-in slide-in-from-bottom-4">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary to-secondary p-6 text-white rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <h2 className="text-2xl font-bold mb-2">Salurkan Donasi Anda</h2>
          {program && (
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
              {program.title}
            </Badge>
          )}
          {selectedAmount && (
            <div className="mt-4 text-3xl font-bold">{formatCurrency(selectedAmount)}</div>
          )}
          {customAmount && (
            <div className="mt-4 text-3xl font-bold">{formatCurrency(parseFloat(customAmount))}</div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Payment Method Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-4">Pilih Metode Pembayaran</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setSelectedMethod('bank')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedMethod === 'bank'
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <Wallet className={`w-8 h-8 mx-auto mb-2 ${selectedMethod === 'bank' ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="font-semibold text-sm">Transfer Bank</div>
              </button>
              <button
                onClick={() => setSelectedMethod('qris')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedMethod === 'qris'
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-muted hover:border-primary/50'
                }`}
              >
                <QrCode className={`w-8 h-8 mx-auto mb-2 ${selectedMethod === 'qris' ? 'text-primary' : 'text-muted-foreground'}`} />
                <div className="font-semibold text-sm">QRIS</div>
              </button>
            </div>
          </div>

          {/* Payment Details */}
          <div className="space-y-4">
            {selectedMethod === 'bank' && (
              <div className="space-y-3">
                <h3 className="font-semibold">Pilih Rekening Tujuan:</h3>
                {bankAccounts.map((account, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-xl">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-bold text-lg">{account.bank}</div>
                        <div className="text-sm text-muted-foreground">{account.name}</div>
                      </div>
                      <Badge variant="outline">Transfer</Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 p-3 bg-white rounded-lg border font-mono text-lg">
                        {account.account}
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleCopy(account.account, account.account)}
                        className={copiedAccount === account.account ? 'bg-secondary text-white' : ''}
                      >
                        {copiedAccount === account.account ? (
                          <>
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Tersalin
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Salin
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedMethod === 'qris' && (
              <div className="text-center py-8">
                <div className="inline-block p-8 bg-white rounded-2xl shadow-lg border-2 border-dashed border-primary">
                  <QrCode className="w-48 h-48 mx-auto text-primary mb-4" />
                  <p className="text-sm text-muted-foreground">Scan QR Code menggunakan aplikasi mobile banking</p>
                </div>
              </div>
            )}
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-accent/10 rounded-xl">
            <h4 className="font-semibold mb-2 text-sm">Petunjuk Transfer:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Pilih metode pembayaran yang Anda inginkan</li>
              <li>Transfer sesuai nominal yang telah dipilih</li>
              <li>Simpan bukti transfer untuk konfirmasi</li>
              <li>Hubungi kami via WhatsApp untuk konfirmasi donasi</li>
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Tutup
            </Button>
            <Button 
              className="flex-1 bg-secondary hover:bg-secondary/90"
              onClick={() => {
                window.open('https://wa.me/6281234567890?text=Saya ingin konfirmasi donasi', '_blank');
              }}
            >
              Konfirmasi via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}