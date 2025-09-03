import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  tattooType: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    tattooType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: t('contact.success.title'),
        description: t('contact.success.desc'),
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        tattooType: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: t('contact.error.title'),
        description: error.message || t('contact.error.desc'),
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t('contact.required.title'),
        description: t('contact.required.desc'),
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            {t('contact.title')} <span className="text-accent">{t('contact.titleAccent')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="contact-description">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card rounded-lg p-8" data-testid="contact-form-container">
            <h3 className="font-serif text-2xl font-semibold mb-6">{t('contact.formTitle')}</h3>
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium mb-2">{t('contact.name')} *</Label>
                  <Input 
                    type="text"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('contact.namePlaceholder')}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium mb-2">{t('contact.email')} *</Label>
                  <Input 
                    type="email"
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder={t('contact.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">{t('contact.phone')}</Label>
                <Input 
                  type="tel"
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('contact.phonePlaceholder')}
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  data-testid="input-phone"
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">{t('contact.tattooType')}</Label>
                <Select onValueChange={(value) => handleInputChange('tattooType', value)} data-testid="select-tattoo-type">
                  <SelectTrigger className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent">
                    <SelectValue placeholder={t('contact.selectStyle')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realismo">{t('services.realism')}</SelectItem>
                    <SelectItem value="tradicional">{t('services.traditional')}</SelectItem>
                    <SelectItem value="fine-line">{t('services.fineline')}</SelectItem>
                    <SelectItem value="geometrico">{t('services.geometric')}</SelectItem>
                    <SelectItem value="cover-up">{t('services.coverup')}</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="block text-sm font-medium mb-2">{t('contact.message')} *</Label>
                <Textarea 
                  rows={4}
                  className="w-full bg-input border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t('contact.messagePlaceholder')}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  data-testid="textarea-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:red-glow transition-all duration-300"
                disabled={contactMutation.isPending}
                data-testid="button-submit-contact"
              >
                {contactMutation.isPending ? t('contact.submitting') : t('contact.submitBtn')}
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card rounded-lg p-8" data-testid="contact-info">
              <h3 className="font-serif text-2xl font-semibold mb-6">{t('contact.infoTitle')}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-location">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Localização</h4>
                    <p className="text-muted-foreground">Rua do Norte, 123<br />1200-289 Lisboa, Portugal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">+351 912 345 678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@queenofheartslisboa.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 10:00 - 20:00<br />
                      Sábado: 10:00 - 18:00<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="glass-card rounded-lg p-8" data-testid="map-container">
              <h3 className="font-serif text-2xl font-semibold mb-6">Localização</h3>
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <Map className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-medium">{t('contact.mapTitle')}</p>
                  <p className="text-sm">{t('contact.mapDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
