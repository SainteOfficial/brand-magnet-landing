
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
  Target 
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
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const steps: StepData[] = [
    {
      title: "Personal Information",
      subtitle: "Tell us about yourself",
      icon: Users,
      questions: [
        {
          id: "name",
          question: "What is your name?",
          type: "input"
        },
        {
          id: "email",
          question: "What is your email address?",
          type: "input"
        },
        {
          id: "experience",
          question: "How many years of professional experience do you have?",
          options: [
            { value: "0-2", label: "0-2 years" },
            { value: "3-5", label: "3-5 years" },
            { value: "6-10", label: "6-10 years" },
            { value: "10+", label: "10+ years" }
          ],
          type: "radio"
        }
      ]
    },
    {
      title: "Current Status",
      subtitle: "Your career situation",
      icon: Target,
      questions: [
        {
          id: "employment",
          question: "What is your current employment status?",
          options: [
            { value: "employed", label: "Employed full-time" },
            { value: "part-time", label: "Employed part-time" },
            { value: "freelance", label: "Freelancer/Self-employed" },
            { value: "unemployed", label: "Looking for opportunities" }
          ],
          type: "radio"
        },
        {
          id: "social_presence",
          question: "How would you rate your current social media presence?",
          options: [
            { value: "none", label: "No presence" },
            { value: "basic", label: "Basic profiles but inactive" },
            { value: "active", label: "Active but not strategic" },
            { value: "strategic", label: "Strategic and well-maintained" }
          ],
          type: "radio"
        }
      ]
    },
    {
      title: "Goals & Objectives",
      subtitle: "What you want to achieve",
      icon: Trophy,
      questions: [
        {
          id: "primary_goal",
          question: "What is your primary goal with personal branding?",
          options: [
            { value: "job_opportunities", label: "Better job opportunities" },
            { value: "visibility", label: "Industry recognition" },
            { value: "networking", label: "Expanded professional network" },
            { value: "business", label: "Growing my business" }
          ],
          type: "radio"
        },
        {
          id: "timeline",
          question: "What is your timeline for achieving results?",
          options: [
            { value: "immediate", label: "As soon as possible" },
            { value: "3months", label: "Within 3 months" },
            { value: "6months", label: "Within 6 months" },
            { value: "1year", label: "Within a year" }
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
    }

    return () => {
      if (currentSection) {
        const animatedElements = currentSection.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
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
    // Simulate API call
    setTimeout(() => {
      setIsComplete(true);
      setIsCompleting(false);
      toast({
        title: "Qualification Complete!",
        description: "Our team will review your information and reach out soon.",
      });
    }, 1500);
  };

  return (
    <section 
      id="qualification" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-to-b from-white to-beige-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-turquoise-100/30 rounded-full filter blur-3xl -translate-y-20 translate-x-20 opacity-60"></div>
        <div className="absolute left-0 top-1/4 w-72 h-72 bg-beige-200/40 rounded-full filter blur-3xl -translate-x-20 opacity-60"></div>
      </div>

      <div className="max-container px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 font-medium text-sm">
            Qualification Process
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Are You <span className="text-gradient">Ready</span> For Social Success?
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete this short qualification process to help us understand if our services are the right fit for your career goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isComplete ? (
            <div className="bg-white rounded-xl shadow-subtle border border-beige-100 overflow-hidden animate-on-scroll">
              {/* Progress Steps */}
              <div className="px-8 py-6 border-b border-beige-100 bg-beige-50/50">
                <div className="flex items-center justify-between">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex items-center">
                      <div 
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                          idx < currentStep 
                            ? "bg-turquoise-500 text-white" 
                            : idx === currentStep 
                              ? "bg-turquoise-100 text-turquoise-800 ring-2 ring-turquoise-500 ring-offset-2" 
                              : "bg-beige-100 text-foreground"
                        )}
                      >
                        {idx < currentStep ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          <step.icon size={20} />
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
                          "hidden sm:block h-0.5 w-8 md:w-12 mx-2",
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
                    <div key={q.id} className="animate-fade-in">
                      <Label htmlFor={q.id} className="mb-3 text-lg font-medium block">
                        {q.question}
                      </Label>
                      
                      {q.type === 'input' ? (
                        <Input
                          id={q.id}
                          value={answers[q.id] || ''}
                          onChange={(e) => handleInputChange(q.id, e.target.value)}
                          className="input-focus-effect"
                          placeholder="Your answer..."
                        />
                      ) : (
                        <RadioGroup 
                          value={answers[q.id]}
                          onValueChange={(value) => handleInputChange(q.id, value)}
                          className="grid sm:grid-cols-2 gap-3 mt-2"
                        >
                          {q.options?.map((option) => (
                            <div key={option.value} className="flex items-start space-x-2">
                              <RadioGroupItem id={`${q.id}-${option.value}`} value={option.value} />
                              <Label 
                                htmlFor={`${q.id}-${option.value}`}
                                className="font-normal cursor-pointer"
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
                    className="rounded-full border-turquoise-200 hover:border-turquoise-300"
                  >
                    Back
                  </Button>
                  
                  <Button
                    onClick={handleNextStep}
                    disabled={!isStepComplete() || isCompleting}
                    className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect min-w-32"
                  >
                    {isCompleting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </div>
                    ) : currentStep < steps.length - 1 ? (
                      <div className="flex items-center">
                        Continue <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    ) : (
                      <div className="flex items-center">
                        Submit <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-subtle border border-beige-100 p-8 text-center animate-fade-in">
              <div className="w-16 h-16 bg-turquoise-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                <CheckCircle2 size={30} className="text-turquoise-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Thank You for Completing the Qualification Process!</h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Our team will review your information and get back to you within 24-48 hours to discuss how we can help elevate your personal brand.
              </p>
              <Button 
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-turquoise-500 hover:bg-turquoise-600 text-white button-hover-effect"
              >
                Contact Us Directly <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
