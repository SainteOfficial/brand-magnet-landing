
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { ArrowRightIcon, CheckIcon, LinkIcon } from 'lucide-react';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    linkedin: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (currentSection) {
        const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application received!",
        description: "We'll be in touch with you shortly.",
      });
      setFormState({
        name: '',
        email: '',
        linkedin: '',
        message: '',
      });
      setSelectedOption(null);
    }, 1500);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const contactOptions = [
    {
      id: 'personal-branding',
      title: 'Personal Branding',
      description: 'Develop a standout professional presence'
    },
    {
      id: 'job-opportunities',
      title: 'Job Opportunities',
      description: 'Find your next career move with our help'
    },
    {
      id: 'consultation',
      title: 'General Consultation',
      description: 'Discuss how we can support your career'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-turquoise-50 via-transparent to-beige-50"></div>
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-on-scroll">
              <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to <span className="text-gradient">Transform</span> Your Career?
              </h2>
              <p className="text-muted-foreground mb-8">
                Take the first step toward elevating your personal brand and unlocking premium career opportunities. Fill out the form and we'll be in touch within 24 hours.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-turquoise-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Schedule a Call</h3>
                    <p className="text-muted-foreground">Book a discovery call with one of our brand strategists</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-turquoise-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-turquoise-600">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us Directly</h3>
                    <p className="text-muted-foreground">contact@brandmagnet.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-turquoise-100 flex items-center justify-center shrink-0">
                    <LinkIcon size={20} className="text-turquoise-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Connect on LinkedIn</h3>
                    <p className="text-muted-foreground">Follow our page for industry insights and opportunities</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-beige-50 rounded-xl p-6 border border-beige-100">
                <h3 className="font-semibold mb-4">Client Success</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-white rounded-md py-1 px-3 text-sm">98% satisfaction</div>
                  <div className="bg-white rounded-md py-1 px-3 text-sm">500+ placements</div>
                  <div className="bg-white rounded-md py-1 px-3 text-sm">24h response</div>
                </div>
                <p className="text-sm text-muted-foreground">Join hundreds of professionals who have transformed their careers with BrandMagnet.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-beige-100 shadow-subtle p-6 md:p-8 animate-on-scroll">
              <h3 className="text-xl font-semibold mb-6">Get Started</h3>
              
              <div className="mb-8">
                <p className="mb-4 text-muted-foreground">What are you interested in?</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {contactOptions.map((option) => (
                    <div
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className={`
                        border rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-turquoise-300
                        ${selectedOption === option.id 
                          ? 'border-turquoise-500 bg-turquoise-50' 
                          : 'border-beige-100'
                        }
                      `}
                    >
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">{option.title}</h4>
                        {selectedOption === option.id && (
                          <CheckIcon size={16} className="text-turquoise-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    value={formState.name} 
                    onChange={handleChange} 
                    required 
                    className="input-focus-effect"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formState.email} 
                    onChange={handleChange} 
                    required 
                    className="input-focus-effect"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile URL (optional)</Label>
                  <div className="relative">
                    <Input 
                      id="linkedin" 
                      name="linkedin" 
                      placeholder="https://linkedin.com/in/yourprofile" 
                      value={formState.linkedin} 
                      onChange={handleChange} 
                      className="pl-10 input-focus-effect"
                    />
                    <LinkIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Tell us about your career goals and how we can help..." 
                    value={formState.message} 
                    onChange={handleChange} 
                    rows={4} 
                    className="resize-none input-focus-effect"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect h-12 mt-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      Submit Application <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </div>
                  )}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
