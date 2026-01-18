import { X, Clock, MapPin, Phone, CheckCircle2, Users, Calendar, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Program {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  icon: any;
  gradient: string;
  schedule: string;
  participants: string;
  location: string;
  benefits: string[];
  contact: string;
}

interface ProgramDetailModalProps {
  program: Program | null;
  isOpen: boolean;
  onClose: () => void;
  onRegister: (program: Program) => void;
}

export function ProgramDetailModal({ program, isOpen, onClose, onRegister }: ProgramDetailModalProps) {
  if (!isOpen || !program) return null;

  const Icon = program.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-4">
        {/* Header Image */}
        <div className="relative h-72 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80`}></div>
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 mb-2">
                  {program.category}
                </Badge>
                <h2 className="text-3xl font-bold">{program.title}</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-288px)]">
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Jadwal</div>
                  <div className="font-semibold text-sm">{program.schedule}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-xl">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Lokasi</div>
                  <div className="font-semibold text-sm">{program.location}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-xl">
                <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1">Peserta</div>
                  <div className="font-semibold text-sm">{program.participants}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-bold text-lg mb-3">Tentang Program</h3>
              <p className="text-muted-foreground leading-relaxed">{program.description}</p>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="font-bold text-lg mb-3">Manfaat Program</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {program.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <Phone className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground mb-1">Informasi Lebih Lanjut</div>
                <div className="font-semibold">{program.contact}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t bg-muted/30 flex gap-3">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Tutup
          </Button>
          <Link 
            to="/donasi" 
            state={{ programId: program.id.toString() }}
            className="flex-1"
          >
            <Button className="w-full bg-secondary hover:bg-secondary/90">
              <Heart className="mr-2 w-4 h-4" />
              Donasi Program
            </Button>
          </Link>
          <Button 
            onClick={() => onRegister(program)} 
            className="flex-1 bg-primary hover:bg-primary/90"
          >
            <Calendar className="mr-2 w-4 h-4" />
            Daftar
          </Button>
        </div>
      </div>
    </div>
  );
}