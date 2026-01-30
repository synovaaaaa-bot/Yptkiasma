import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Mail, MailOpen, Loader2, Trash2, Eye } from 'lucide-react';
import { contactMessagesApi } from '@/api/supabase-db';
import { toast } from 'sonner';
import type { ContactMessage } from '@/db/schema';

export default function MessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      const data = await contactMessagesApi.getAll();
      setMessages(data);
    } catch (error) {
      console.error('Error loading messages:', error);
      toast.error('Gagal memuat pesan');
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: number) => {
    try {
      await contactMessagesApi.markAsRead(id);
      await loadMessages();
      toast.success('Pesan ditandai sebagai sudah dibaca');
    } catch (error) {
      console.error('Error marking message as read:', error);
      toast.error('Gagal mengupdate status pesan');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus pesan ini?')) return;
    
    try {
      await contactMessagesApi.delete(id);
      await loadMessages();
      toast.success('Pesan berhasil dihapus');
      if (selectedMessage?.id === id) {
        setIsDetailOpen(false);
        setSelectedMessage(null);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Gagal menghapus pesan');
    }
  };

  const handleViewDetail = async (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsDetailOpen(true);
    
    // Mark as read when viewing
    if (message.status === 'unread') {
      await handleMarkAsRead(message.id);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const stats = {
    total: messages.length,
    unread: messages.filter(m => m.status === 'unread').length,
    read: messages.filter(m => m.status === 'read').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Pesan Masuk</h1>
        <p className="text-gray-600 mt-2">Kelola pesan dari pengunjung website</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Pesan</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
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
                    <p className="text-2xl font-bold text-gray-900">{stats.unread}</p>
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
                    <p className="text-2xl font-bold text-gray-900">{stats.read}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-center py-12">
                  <Mail className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">Belum ada pesan</p>
                </CardContent>
              </Card>
            ) : (
              messages.map((message) => (
                <Card key={message.id} className={message.status === 'unread' ? 'border-l-4 border-l-blue-500' : ''}>
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
                        {message.phone && (
                          <p className="text-sm text-gray-600 mb-1">Telp: {message.phone}</p>
                        )}
                        <p className="font-medium text-gray-900 mb-2">{message.subject}</p>
                        <p className="text-gray-700 line-clamp-2">{message.message}</p>
                        <p className="text-sm text-gray-500 mt-2">{formatDate(message.createdAt)}</p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleViewDetail(message)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Detail
                        </Button>
                        {message.status === 'unread' && (
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleMarkAsRead(message.id)}
                          >
                            Tandai Dibaca
                          </Button>
                        )}
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDelete(message.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Detail Modal */}
          {isDetailOpen && selectedMessage && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Detail Pesan</CardTitle>
                    <Button variant="ghost" size="sm" onClick={() => {
                      setIsDetailOpen(false);
                      setSelectedMessage(null);
                    }}>
                      ✕
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Nama</p>
                    <p className="font-semibold">{selectedMessage.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <p className="font-semibold">{selectedMessage.email}</p>
                  </div>
                  {selectedMessage.phone && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Telepon</p>
                      <p className="font-semibold">{selectedMessage.phone}</p>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Subjek</p>
                    <p className="font-semibold">{selectedMessage.subject}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Pesan</p>
                    <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Tanggal</p>
                    <p className="text-gray-700">{formatDate(selectedMessage.createdAt)}</p>
                  </div>
                  <div className="flex gap-2 pt-4 border-t">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        window.location.href = `mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`;
                      }}
                    >
                      Balas via Email
                    </Button>
                    {selectedMessage.status === 'unread' && (
                      <Button 
                        onClick={() => handleMarkAsRead(selectedMessage.id)}
                      >
                        Tandai Dibaca
                      </Button>
                    )}
                    <Button 
                      variant="destructive"
                      onClick={() => handleDelete(selectedMessage.id)}
                    >
                      Hapus
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </>
      )}
    </div>
  );
}
