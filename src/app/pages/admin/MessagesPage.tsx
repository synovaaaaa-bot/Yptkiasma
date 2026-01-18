import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Mail, MailOpen } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'unread' | 'read';
  createdAt: string;
}

export default function MessagesPage() {
  const messages: Message[] = [
    {
      id: 1,
      name: 'Budi Santoso',
      email: 'budi@example.com',
      subject: 'Pertanyaan tentang Program',
      message: 'Saya ingin tahu lebih lanjut tentang program pendidikan...',
      status: 'unread',
      createdAt: '2024-01-20 10:30',
    },
    {
      id: 2,
      name: 'Dewi Lestari',
      email: 'dewi@example.com',
      subject: 'Kerjasama',
      message: 'Kami tertarik untuk bekerjasama dengan yayasan...',
      status: 'read',
      createdAt: '2024-01-19 14:20',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pesan Masuk</h1>
        <p className="text-gray-600 mt-2">Kelola pesan dari pengunjung website</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Pesan</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Belum Dibaca</p>
                <p className="text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <MailOpen className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Sudah Dibaca</p>
                <p className="text-2xl font-bold text-gray-900">18</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        {messages.map((message) => (
          <Card key={message.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{message.name}</h3>
                    <Badge variant={message.status === 'unread' ? 'default' : 'secondary'}>
                      {message.status === 'unread' ? 'Belum Dibaca' : 'Sudah Dibaca'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                  <p className="font-medium text-gray-900 mb-2">{message.subject}</p>
                  <p className="text-gray-700">{message.message}</p>
                  <p className="text-sm text-gray-500 mt-2">{message.createdAt}</p>
                </div>
                <Button variant="outline" size="sm">
                  Balas
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
