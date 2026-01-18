import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Plus, FolderPlus, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Kelola Galeri</h1>
          <p className="text-gray-600 mt-2">Kelola album dan foto galeri</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FolderPlus className="w-4 h-4 mr-2" />
            Buat Album
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Upload Foto
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardContent className="pt-6">
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <ImageIcon className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-semibold text-lg">Album {i}</h3>
              <p className="text-sm text-gray-600 mt-1">12 foto</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
