import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2, Mail, Phone, MessageCircle, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ContactSkeleton } from "@/components/SectionSkeleton";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus the name input when the component is visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && nameInputRef.current) {
            nameInputRef.current.focus();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if Formspree ID is configured
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (!formspreeId) {
      toast({
        title: "表单服务未配置",
        description: "抱歉，表单服务尚未配置。请稍后再试或直接联系我们。",
        variant: "destructive",
        duration: 5000
      });
      return;
    }
    
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const resp = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (resp.ok) {
        setFormSubmitted(true);
        toast({
          title: "Thank you!",
          description: "Your message has been sent. We'll reply shortly.",
          duration: 5000,
          className: "bg-green-50 border-green-200 text-green-800"
        });
        form.reset();
        
        // Scroll to success message
        setTimeout(() => {
          const successMessage = document.getElementById('success-message');
          if (successMessage) {
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 100);
      } else {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.errors?.[0]?.message || `Status ${resp.status}`);
      }
    } catch (err) {
      setFormSubmitted(false);
      toast({
        title: "Submission failed",
        description: "Sorry, something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-20 bg-brand-gradient">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Contact Us
        </h2>
        
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Email</h3>
              <a 
                href="mailto:Jiahengc@binghengcredit.com" 
                className="text-sm text-gray-700 hover:text-primary transition-colors break-all"
              >
                Jiahengc@binghengcredit.com
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">Phone</h3>
              <a 
                href="tel:+8616653086767" 
                className="text-sm text-gray-700 hover:text-primary transition-colors"
              >
                +86 166 5308 6767
              </a>
              <p className="text-xs text-gray-500 mt-1">Available on WhatsApp</p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/8616653086767" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-700 hover:text-primary transition-colors"
              >
                +86 166 5308 6767
              </a>
              <p className="text-xs text-gray-500 mt-1">Click to chat</p>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Get in Touch
            </CardTitle>
            <CardDescription className="text-center text-primary/70">
              Ready to recover your claims? Let's discuss your case.
            </CardDescription>
          </CardHeader>
          
          {/* Success Message */}
          {formSubmitted && (
            <div 
              id="success-message"
              className="mx-6 mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-center animate-fade-in"
            >
              <div className="flex items-center justify-center gap-2 text-green-800">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Message sent successfully!</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                Thank you for reaching out. We'll reply to you shortly.
              </p>
            </div>
          )}
          
          <CardContent>
            {/* Privacy Promise */}
            <div className="flex items-center gap-2 mb-6 p-4 bg-primary/5 rounded-lg">
              <Shield className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Your information is safe with us. We respect your privacy and will only use your contact details to discuss your debt recovery case.
              </p>
            </div>
            
            <form 
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              {/* Honeypot field for spam protection */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary font-medium">
                  Name
                </Label>
                <Input
                  ref={nameInputRef}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-primary font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="rounded-lg border-primary/20 focus:border-primary focus:ring-primary"
                  defaultValue="Hi Bingheng team, I have a claim against a Chinese debtor. Please reach out to me."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#2A3470] hover:bg-[#1A2450] text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};