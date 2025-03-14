
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight, 
  LucideIcon, 
  Users, 
  Trophy, 
  Target,
  Sparkles 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from "@/lib/utils";

type StepData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  questions: {
    id: string;
    question: string;
    options?: {
      value: string;
      label: string;
    }[];
    type: 'radio' | 'input';
  }[];
};

const QualificationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const steps: StepData[] = [
    {
      title: "Persönliche Informationen",
      subtitle: "Erzählen Sie uns über sich",
      icon: Users,
      questions: [
        {
          id: "name",
          question: "Wie ist Ihr Name?",
          type: "input"
        },
        {
          id: "email",
          question: "Wie lautet Ihre E-Mail-Adresse?",
          type: "input"
        },
        {
          id: "experience",
          question: "Wie viele Jahre Berufserfahrung haben Sie?",
          options: [
            { value: "0-2", label: "0-2 Jahre" },
            { value: "3-5", label: "3-5 Jahre" },
            { value: "6-10", label: "6-10 Jahre" },
            { value: "10+", label: "Mehr als 10 Jahre" }
          ],
          type: "radio"
        }
      ]
    },
    {
      title: "Aktuelle Situation",
      subtitle: "Ihre berufliche Situation",
      icon: Target,
      questions: [
        {
          id: "employment",
          question: "Was ist Ihr aktueller Beschäftigungsstatus?",
          options: [
            { value: "employed", label: "Vollzeit beschäftigt" },
            { value: "part-time", label: "Teilzeit beschäftigt" },
            { value: "freelance", label: "Freiberufler/Selbstständig" },
            { value: "unemployed", label: "Auf der Suche nach Möglichkeiten" }
          ],
          type: "radio"
        },
        {
          id: "social_presence",
          question: "Wie würden Sie Ihre aktuelle Social-Media-Präsenz bewerten?",
          options: [
            { value: "none", label: "Keine Präsenz" },
            { value: "basic", label: "Grundlegende Profile, aber inaktiv" },
            { value: "active", label: "Aktiv, aber nicht strategisch" },
            { value: "strategic", label: "Strategisch und gut gepflegt" }
          ],
          type: "radio"
        }
      ]
    },
    {
      title: "Ziele & Ambitionen",
      subtitle: "Was Sie erreichen möchten",
      icon: Trophy,
      questions: [
        {
          id: "primary_goal",
          question: "Was ist Ihr Hauptziel beim Personal Branding?",
          options: [
            { value: "job_opportunities", label: "Bessere Karrieremöglichkeiten" },
            { value: "visibility", label: "Anerkennung in der Branche" },
            { value: "networking", label: "Erweitertes berufliches Netzwerk" },
            { value: "business", label: "Wachstum meines Unternehmens" }
          ],
          type: "radio"
        },
        {
          id: "timeline",
          question: "Welchen Zeitrahmen haben Sie für die Erreichung von Ergebnissen?",
          options: [
            { value: "immediate", label: "So schnell wie möglich" },
            { value: "3months", label: "Innerhalb von 3 Monaten" },
            { value: "6months", label: "Innerhalb von 6 Monaten" },
            { value: "1year", label: "Innerhalb eines Jahres" }
          ],
          type: "radio"
        }
      ]
    }
  ];

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
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = currentSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        
        setMousePosition({ x, y });
      };
      
      currentSection.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
        currentSection.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  const handleInputChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const isStepComplete = () => {
    const currentQuestions = steps[currentStep].questions;
    return currentQuestions.every(q => answers[q.id] && answers[q.id].trim() !== '');
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeQualification();
    }
  };

  const completeQualification = () => {
    setIsCompleting(true);
    // Simuliere API-Aufruf
    setTimeout(() => {
      setIsComplete(true);
      setIsCompleting(false);
      toast({
        title: "Qualifikation abgeschlossen!",
        description: "Unser Team wird Ihre Informationen prüfen und sich in Kürze bei Ihnen melden.",
      });
    }, 1500);
  };

  return (
    <section 
      id="qualification" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-beige-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-40">
        <div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-turquoise-100/30 rounded-full filter blur-3xl -translate-y-20 translate-x-20 opacity-60 transition-transform duration-500"
          style={{ transform: `translate(calc(-20px + ${mousePosition.x * 0.3}px), calc(20px + ${mousePosition.y * 0.3}px))` }}
        />
        <div 
          className="absolute left-0 top-1/4 w-72 h-72 bg-beige-200/40 rounded-full filter blur-3xl -translate-x-20 opacity-60 transition-transform duration-500"
          style={{ transform: `translate(calc(20px + ${mousePosition.x * -0.2}px), calc(0px + ${mousePosition.y * -0.2}px))` }}
        />
        
        {/* Zusätzliche dynamische Elemente */}
        <div 
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-turquoise-200/30 rounded-full filter blur-2xl opacity-40 transition-transform duration-700"
          style={{ transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) rotate(${mousePosition.x * 0.05}deg)` }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-beige-300/25 rounded-full filter blur-xl opacity-50 transition-transform duration-700"
          style={{ transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px) scale(${1 + Math.abs(mousePosition.y) * 0.003})` }}
        />
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
            Qualifikationsprozess
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Sind Sie <span className="text-gradient">bereit</span> für Ihren sozialen Erfolg?
          </h2>
          <p className="text-muted-foreground text-lg">
            Füllen Sie diesen kurzen Qualifikationsprozess aus, damit wir verstehen können, ob unsere Dienstleistungen zu Ihren Karrierezielen passen.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isComplete ? (
            <div 
              className="bg-white rounded-xl shadow-subtle border border-beige-100 overflow-hidden animate-on-scroll transition-all duration-500 hover:shadow-lg transform-3d"
              style={{ transform: `perspective(1000px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * -0.01}deg)` }}
            >
              {/* Progress Steps */}
              <div className="px-8 py-6 border-b border-beige-100 bg-beige-50/50">
                <div className="flex items-center justify-between">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div 
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                          idx < currentStep 
                            ? "bg-turquoise-500 text-white" 
                            : idx === currentStep 
                              ? "bg-turquoise-100 text-turquoise-800 ring-2 ring-turquoise-500 ring-offset-2" 
                              : "bg-beige-100 text-foreground"
                        )}
                      >
                        {idx < currentStep ? (
                          <CheckCircle2 size={20} className="animate-pulse-subtle" />
                        ) : (
                          <step.icon size={20} className={idx === currentStep ? "animate-pulse-subtle" : ""} />
                        )}
                      </div>
                      <div className={cn(
                        "hidden sm:block ml-3",
                        idx === currentStep ? "text-foreground" : "text-muted-foreground"
                      )}>
                        <p className="text-sm font-medium">{step.title}</p>
                        <p className="text-xs">{step.subtitle}</p>
                      </div>
                      {idx < steps.length - 1 && (
                        <div className={cn(
                          "hidden sm:block h-0.5 w-8 md:w-12 mx-2 transition-all duration-700",
                          idx < currentStep ? "bg-turquoise-500" : "bg-beige-200"
                        )} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Step Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">{steps[currentStep].title}</h3>
                  <p className="text-muted-foreground">{steps[currentStep].subtitle}</p>
                </div>

                <div className="space-y-8">
                  {steps[currentStep].questions.map((q) => (
                    <div key={q.id} className="animate-fade-in transition-all duration-500 hover:translate-x-1">
                      <Label htmlFor={q.id} className="mb-3 text-lg font-medium block">
                        {q.question}
                      </Label>
                      
                      {q.type === 'input' ? (
                        <Input
                          id={q.id}
                          value={answers[q.id] || ''}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                          className="input-focus-effect transition-all duration-300 focus:shadow-md"
                          placeholder="Ihre Antwort..."
                        />
                      ) : (
                        <RadioGroup 
                          value={answers[q.id]}
                          onValueChange={(value) => handleInputChange(q.id, value)}
                          className="grid sm:grid-cols-2 gap-3 mt-2"
                        >
                          {q.options?.map((option) => (
                            <div 
                              key={option.value} 
                              className="flex items-start space-x-2 transition-all duration-300 hover:translate-x-1"
                            >
                              <RadioGroupItem 
                                id={`${q.id}-${option.value}`} 
                                value={option.value} 
                                className="transition-all duration-300 data-[state=checked]:scale-110"
                              />
                              <Label 
                                htmlFor={`${q.id}-${option.value}`}
                                className="font-normal cursor-pointer transition-colors duration-300 hover:text-turquoise-700"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between mt-12">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                    disabled={currentStep === 0}
                    className="rounded-full border-turquoise-200 hover:border-turquoise-300 transition-all duration-300 hover:shadow-md"
                  >
                    Zurück
                  </Button>
                  
                  <Button
                    onClick={handleNextStep}
                    disabled={!isStepComplete() || isCompleting}
                    className={cn(
                      "rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect min-w-32 transition-all duration-500",
                      isStepComplete() && !isCompleting ? "animate-pulse-subtle hover:scale-105 hover:shadow-xl" : ""
                    )}
                  >
                    {isCompleting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Verarbeitung...
                      </div>
                    ) : currentStep < steps.length - 1 ? (
                      <div className="flex items-center">
                        Weiter <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Absenden <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-subtle border border-beige-100 p-8 text-center animate-fade-in transition-all duration-500 hover:shadow-xl">
              <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce relative group">
                <CheckCircle2 size={30} className="text-turquoise-600 transition-transform duration-300 group-hover:scale-110" />
                <Sparkles size={16} className="absolute top-0 right-0 text-turquoise-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Vielen Dank für den Abschluss des Qualifikationsprozesses!</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Unser Team wird Ihre Informationen prüfen und sich innerhalb von 24-48 Stunden bei Ihnen melden, um zu besprechen, wie wir Ihre persönliche Marke verbessern können.
              </p>
              <Button 
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Kontaktieren Sie uns direkt <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
