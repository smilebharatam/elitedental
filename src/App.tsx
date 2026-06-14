/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Lock, 
  Eye, 
  FileSpreadsheet, 
  Calculator, 
  ListOrdered, 
  Search, 
  AlertTriangle, 
  Bot, 
  ChevronRight, 
  ShieldAlert, 
  CalendarCheck2, 
  Award,
  Users,
  Timer,
  BookOpen
} from 'lucide-react';

// Custom elegant tooth SVG icon matching the Elite Dental brand logo
export const ToothIcon = ({ className = "w-5 h-5", light = false }: { className?: string; light?: boolean }) => {
  const darkBlue = light ? "#FFFFFF" : "#0C3F72"; // Exact Elite Dental Royal Deep Navy
  const lightBlue = "#73CAE9"; // Exact Elite Dental Soft Sky Blue
  const paleAccent = "#AEE6FA"; // Exact top connector pale cyan

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 500 500" 
      className={className}
      fill="none"
    >
      {/* 1. Upper connecting pale background wave (top of the tooth crown) */}
      <path
        d="M 190 85 C 240 110, 300 70, 385 85 C 330 85, 260 105, 190 85 Z"
        fill={paleAccent}
        opacity={light ? "0.4" : "1"}
      />

      {/* 2. Left Cusp & Outer Casing (Dark Blue) */}
      {/* Sweeps smoothly from the top left cleft, follows the outer profile of the left side, loops around the bottom-left root tip, and hooks beautifully upwards and to the right */}
      <path
        d="M 190 85 
           C 142 87, 105 125, 105 210 
           C 105 290, 137 385, 200 470
           C 202 474, 209 470, 207 460
           C 177 380, 165 295, 182 220
           C 189 185, 207 160, 222 140
           C 225 136, 215 115, 202 100 
           C 197 95, 194 89, 190 85 Z"
        fill={darkBlue}
      />

      {/* 3. Upper Inner Ribbon (Dark Blue - matching the curved sweep in the upper part of the logo) */}
      <path
        d="M 190 85
           C 225 120, 275 145, 320 132
           C 280 147, 220 125, 190 85 Z"
        fill={darkBlue}
      />

      {/* 4. Left Inner Light Blue Casing Highlights */}
      <path
        d="M 172 150
           C 132 160, 112 200, 112 250
           C 112 320, 147 400, 187 450
           C 189 453, 193 450, 191 445
           C 161 375, 151 300, 165 240
           C 169 210, 177 180, 182 160
           C 183 155, 177 150, 172 150 Z"
        fill={lightBlue}
        opacity={light ? "0.4" : "0.9"}
      />

      {/* 5. Right Cusp & Outer Casing (Light Blue) */}
      {/* Mirrored counterpart on the right, curving down into the bottom-right root tip and looping up-left */}
      <path
        d="M 385 85
           C 432 87, 469 125, 469 210
           C 469 290, 437 385, 374 470
           C 372 474, 365 470, 367 460
           C 397 380, 409 295, 392 220
           C 385 185, 367 160, 352 140
           C 349 136, 359 115, 372 100
           C 377 95, 381 89, 385 85 Z"
        fill={lightBlue}
      />

      {/* 6. Upper Right Inner Ribbon Wave (Light Blue) */}
      <path
        d="M 385 85
           C 350 120, 300 145, 255 132
           C 295 147, 350 125, 385 85 Z"
        fill={lightBlue}
      />

      {/* 7. Under-lapping Lower Hooks (Root terminals curving elegant towards each other) */}
      {/* Dark blue left root hook sweeping upwards */}
      <path
        d="M 200 470
           C 212 490, 237 500, 267 480
           C 282 470, 282 445, 257 450
           C 227 455, 212 450, 200 470 Z"
        fill={darkBlue}
      />
      {/* Light blue right root hook sweeping upwards */}
      <path
        d="M 374 470
           C 362 490, 337 500, 307 480
           C 292 470, 292 445, 317 450
           C 347 455, 362 450, 374 470 Z"
        fill={lightBlue}
      />

      {/* 8. The Signature Dynamic Smile Swoosh crossing horizontally through the middle */}
      {/* Tapered calligraphic brush stroke, extending way out to the left as a sharp flight crest and ending neatly in the right cheek */}
      <path
        d="M 10 195 
           C 110 300, 290 315, 380 220 
           C 385 215, 390 198, 391 188 
           C 393 194, 388 220, 375 230 
           C 290 320, 110 305, 10 195 Z"
        fill={darkBlue}
      />

      {/* 9. Smile Dimple Tick (above terminal right cheek) */}
      <path
        d="M 360 205
           C 370 190, 377 185, 380 195
           C 383 205, 375 210, 365 215
           C 360 210, 357 208, 360 205 Z"
        fill={darkBlue}
      />
    </svg>
  );
};

// High-fidelity Elite Dental brand logo component with text and handwritten tagline
export const EliteDentalLogo = ({ light = false, className = "" }: { light?: boolean; className?: string }) => {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Icon Frame */}
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${light ? 'bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]' : 'bg-[#FCFDFF] border border-sky-50 shadow-sm'}`}>
        <ToothIcon className="w-8 h-8" light={light} />
      </div>
      <div className="flex flex-col">
        {/* Brand Main Text: single line with original brand dual-coloring */}
        <div className="flex items-baseline gap-1 leading-none">
          <span className="font-sans tracking-wide font-extrabold text-base sm:text-lg uppercase text-[#00C4EB]">
            Elite
          </span>
          <span className={`font-sans tracking-wide font-extrabold text-base sm:text-lg uppercase ${light ? 'text-white' : 'text-[#003B66]'}`}>
            Dental Clinic
          </span>
        </div>
        {/* Calligraphy handwritten signature tagline matched in cursive script */}
        <span className={`font-script text-xl leading-none ${light ? 'text-stone-300' : 'text-stone-600'} -mt-1`}>
          Fill your smile with Us
        </span>
      </div>
    </div>
  );
};

// Predefined treatment solutions mapped to user dental concerns
interface TreatmentSolution {
  title: string;
  duration: string;
  visits: string;
  comfort: string;
  mainTechnology: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  clinicalExplanation: string;
}

const TREATMENTS_SOLUTIONS: Record<string, TreatmentSolution> = {
  crooked: {
    title: "Clear Aligners & Invisible Orthodontics",
    duration: "6 - 12 Months",
    visits: "Monthly Progress Checks",
    comfort: "Mild pressure, highly transparent & removable",
    mainTechnology: "Computerized Aligner Mapping",
    beforeLabel: "Misaligned",
    afterLabel: "Elite Ortho Alignment",
    beforeDesc: "Overcrowded incisors, wide gap, malocclusion",
    afterDesc: "Perfect symmetrical bite, straight smile centerline",
    clinicalExplanation: "Utilizing custom-molded medical grade clear polymers that micro-advance each individual tooth structure into optimal dental aesthetics without visible metal tracks or severe gum soreness."
  },
  discolored: {
    title: "High-Gloss Laser Teeth Whitening",
    duration: "45 Minutes",
    visits: "1 Single Visit",
    comfort: "Completely painless with custom desensitizers",
    mainTechnology: "Laser Photo-Activation",
    beforeLabel: "Stained/Tarnished",
    afterLabel: "Porcelain Radiance",
    beforeDesc: "Enamel yellowing from tea/coffee, internal micro-cracks",
    afterDesc: "Up to 8 shades lighter medical composite shine",
    clinicalExplanation: "Application of concentrated hydrogen peroxide gel, photo-activated with a specialized elite laser beam to break down deep-seated dentin organic stains instantly without compromising surface enamel."
  },
  missing: {
    title: "Painless Titanium Dental Implants",
    duration: "3 - 6 Months",
    visits: "3 Precision Appointments",
    comfort: "Local surgical anesthesia, no feel during process",
    mainTechnology: "3D-Guided Titanium Placement",
    beforeLabel: "Edentulous Gap",
    afterLabel: "Titanium Root Anchor",
    beforeDesc: "Missing tooth, bone structure reabsorption",
    afterDesc: "Full bite chewing strength, lifelike custom crown",
    clinicalExplanation: "Surgical placement of a bio-compatible titanium root post into the alveolar bone, serving as a permanent anchor. Once osseointegrated, a zirconium model crown is mounted for absolute fidelity."
  },
  decay: {
    title: "Laser Root Canal Treatment (RCT) & Fillings",
    duration: "1 - 2 Visits",
    visits: "1 to 2 Target Sessions",
    comfort: "State of the art painless micro-drilling tech",
    mainTechnology: "Micro-Endodontic Laser",
    beforeLabel: "Deep Pulp Decay",
    afterLabel: "Ceramic Sealant",
    beforeDesc: "Cavity pulp infection, sharp severe tooth pains",
    afterDesc: "Filled, laser sanitized, dental crown protected",
    clinicalExplanation: "Complete cleaning of infected raw nerve canals, subsequent micro-seal with gutta-percha, sterilized with high-frequency therapeutic clean laser, topped off with a master-layered composite filling and natural ceramic crown."
  }
};

interface Appointment {
  id: string;
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  timeSlot: string;
  doctor: string;
  notes: string;
  threatRisk?: string;
  riskScore?: number;
  status: 'Pending Review' | 'Scheduled' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
  doctorNotes?: string;
}

export default function App() {
  // Custom interactive slider for Before/After treatment section
  const [selectedConcern, setSelectedConcern] = useState<string>('crooked');
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(480);

  useEffect(() => {
    if (!sliderContainerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(sliderContainerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Diagnostic questionnaire states (Self Test)
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selfTestResult, setSelfTestResult] = useState<{
    score: number;
    threat: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL';
    recommendation: string;
  } | null>(null);

  // Appointment Scheduler Form States
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [patientEmail, setPatientEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('10:00 AM - 11:30 AM');
  const [selectedTreatmentType, setSelectedTreatmentType] = useState('General Checkup & Clean');
  const [selectedClinician, setSelectedClinician] = useState('Chief Aesthetic Surgeon & Implantologist');
  const [patientNotes, setPatientNotes] = useState('');
  
  const [isBooked, setIsBooked] = useState<boolean>(false);
  const [latestBooking, setLatestBooking] = useState<Appointment | null>(null);

  // Clinic Management (Local state for reference)
  const [appointmentsList, setAppointmentsList] = useState<Appointment[]>([]);

  // Load appointments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('elite_appointments');
    if (saved) {
      try {
        setAppointmentsList(JSON.parse(saved));
      } catch (err) {
        console.error("Error reading storage", err);
      }
    } else {
      // Seed initial dummy appointment for presentation display
      const seed: Appointment[] = [
        {
          id: "EL-8794",
          name: "Alex Johnson (Sample Case)",
          phone: "+91 99625 96979",
          email: "elitedental.medavakkam@gmail.com",
          treatment: "Invisible Aligners",
          date: "2026-06-20",
          timeSlot: "04:30 PM - 06:00 PM",
          doctor: "Chief Aesthetic Surgeon & Implantologist",
          notes: "Interested in painless clear aligners for teeth gaps misalignment.",
          threatRisk: "MODERATE",
          riskScore: 45,
          status: 'Confirmed',
          createdAt: new Date().toISOString()
        }
      ];
      localStorage.setItem('elite_appointments', JSON.stringify(seed));
      setAppointmentsList(seed);
    }
  }, []);

  // Sync to local storage helper
  const saveAppointmentsToStorage = (updatedList: Appointment[]) => {
    setAppointmentsList(updatedList);
    localStorage.setItem('elite_appointments', JSON.stringify(updatedList));
  };

  // Handle Drag / Move of the Before-After Comparison Slider
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    isDraggingRef.current = true;
    handleSliderMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDraggingRef.current) {
      handleSliderMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = false;
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  // Oral threat safety calculations
  const diagnosticQuestions = [
    {
      q: "How regular are your brushing and flossing routines?",
      options: [
        { text: "Optimally twice daily + floss daily", score: 10 },
        { text: "Once daily, occasionally floss", score: 30 },
        { text: "Quick surface brush, never floss", score: 65 },
        { text: "Irregular mornings or skip bedtime brushing", score: 90 }
      ]
    },
    {
      q: "Have you experienced pain or sharp sensitivity to foods?",
      options: [
        { text: "None, raw health dental structures", score: 5 },
        { text: "Mild cold sensitivity that passes in seconds", score: 35 },
        { text: "Sharp sweet pain or heat lingering aches", score: 70 },
        { text: "Continuous throbbing pain requiring urgent pain-killers", score: 95 }
      ]
    },
    {
      q: "Do you observe gum puffiness, bleeding, or pink traces during brushing?",
      options: [
        { text: "Zero bleeding, strong light-pink solid gums", score: 10 },
        { text: "Rare streaks during rigorous flossing only", score: 30 },
        { text: "Regular bleeding gums with mild tooth brushing", score: 75 },
        { text: "Spontaneous bleeding, dark reddish-swollen areas", score: 95 }
      ]
    },
    {
      q: "How would you rate your daily enamel habits (clenching or sweet foods)?",
      options: [
        { text: "Low sugar diet, no grinding/jaw tension", score: 10 },
        { text: "Moderate sugar snacks, occasional stressful dental clenches", score: 40 },
        { text: "Heavy sodas, sweets, noticeable nighttime grinding", score: 75 },
        { text: "Acid reflux daily, dry mouth + heavy grinding clenches", score: 95 }
      ]
    }
  ];

  const handleStepAnswer = (score: number) => {
    const updated = { ...answers, [currentStep]: score };
    setAnswers(updated);
    if (currentStep < diagnosticQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate final composite score
      const total = Object.values(updated).reduce((a: number, b: number) => a + b, 0) as number;
      const average = Math.round(total / diagnosticQuestions.length);
      
      let threat: 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL' = 'LOW';
      let recList = "";
      if (average < 25) {
        threat = 'LOW';
        recList = "Your dental profile matches perfect protective standards. Keep brushing twice. Request standard 6-month prophylactic scaling.";
      } else if (average < 55) {
        threat = 'MODERATE';
        recList = "Moderate plaque danger detected. We recommend implementing antibacterial rinse and professional dental prophylaxis. Let our senior clinician do digital bite checking.";
      } else if (average < 80) {
        threat = 'HIGH';
        recList = "HIGH threat index: Gum bleed risk and enamel abrasion. Highly advise full clean review, professional panoramic X-Ray diagnostics, and laser enamel seal.";
      } else {
        threat = 'CRITICAL';
        recList = "IMMEDIATE dental hazard profile. Signs of deep structure exposure or systemic gingival decay. Book root canal check/infection block within 48 hours.";
      }
      setSelfTestResult({ score: average, threat, recommendation: recList });
    }
  };

  const resetThreatSurvey = () => {
    setAnswers({});
    setCurrentStep(0);
    setSelfTestResult(null);
  };

  // Inject Self-Test Diagnostics direct to form notes
  const injectDiagnosticsToAppointment = () => {
    if (selfTestResult) {
      setPatientNotes((prev) => 
        (prev ? prev + "\n" : "") + 
        `[Self-Test Risk Assessment: Score ${selfTestResult.score}/100, Threat Level: ${selfTestResult.threat}. Clinical Rec: ${selfTestResult.recommendation}]`
      );
      // scroll down to Booking panel
      document.getElementById('booking-portal-panel')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Process appointment creation
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone || !patientEmail || !preferredDate) {
      alert("Please populate Name, Phone, Email and Booking Date.");
      return;
    }

    const uniqueId = "EL-" + Math.floor(1000 + Math.random() * 9000);
    const newBooking: Appointment = {
      id: uniqueId,
      name: patientName,
      phone: patientPhone,
      email: patientEmail,
      treatment: selectedTreatmentType,
      date: preferredDate,
      timeSlot: preferredTimeSlot,
      doctor: selectedClinician,
      notes: patientNotes,
      threatRisk: selfTestResult?.threat || 'UNKNOWN',
      riskScore: selfTestResult?.score || 0,
      status: 'Pending Review',
      createdAt: new Date().toISOString()
    };

    const nextList = [newBooking, ...appointmentsList];
    saveAppointmentsToStorage(nextList);
    setLatestBooking(newBooking);
    setIsBooked(true);

    // Scroll to the receipt card
    setTimeout(() => {
      document.getElementById('booking-receipt-card')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Redirect to WhatsApp with pre-filled patient request details
  const triggerWhatsAppRedirect = (booking: Appointment) => {
    const formattedText = 
      `🦷 *ELITE DENTAL CLINIC - APPOINTMENT REQUEST* 🦷\n` +
      `---------------------------------------\n` +
      `📌 *Reference ID*: ${booking.id}\n` +
      `👤 *Patient*: ${booking.name}\n` +
      `📱 *Phone*: ${booking.phone}\n` +
      `📧 *Email*: ${booking.email}\n` +
      `🩺 *Required Treatment*: ${booking.treatment}\n` +
      `📅 *Proposed Date*: ${booking.date}\n` +
      `⏰ *Time Slot*: ${booking.timeSlot}\n` +
      `🏥 *Treatment Suite*: Elite Dental Care suite\n` +
      `🦷 *Threat Diagnostic Score*: ${booking.riskScore}% (${booking.threatRisk})\n` +
      `📝 *Direct Message/Notes*: ${booking.notes || "None"}\n` +
      `---------------------------------------\n` +
      `Please check the availability and send booking confirmation block. Thank you!`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/919962596979?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  // Doctor dispatch WhatsApp confirmation message direct to patient
  const triggerDoctorNotificationWhatsApp = (booking: Appointment) => {
    const textMessage = 
      `✨ *ELITE DENTAL CLINIC CONFIRMATION* ✨\n` +
      `---------------------------------------\n` +
      `Hello *${booking.name}*,\n\n` +
      `We have processed and confirmed your premium dental appointment at Elite Dental Clinic!\n\n` +
      `📅 *Date*: ${booking.date}\n` +
      `⏰ *Confirmed Time*: ${booking.timeSlot}\n` +
      `🩺 *Clinical Treatment*: ${booking.treatment}\n` +
      `🏥 *Location*: Elite Dental Clinic Google Maps (Chennai)\n` +
      `📝 *Coordinator Note*: ${booking.doctorNotes || "Kindly arrive 10 minutes prior to your time block."}\n\n` +
      `If you need to reschedule or have pre-clinical questions, chat with us here. See you soon for your vibrant smile upgrade! 🦷🎨`;

    const cleanPhone = booking.phone.replace(/[^0-9+]/g, '');
    const actualPhone = cleanPhone.startsWith('+') ? cleanPhone.slice(1) : (cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone);
    const apiLink = `https://wa.me/${actualPhone}?text=${encodeURIComponent(textMessage)}`;
    window.open(apiLink, '_blank');
  };

  // Book quick treatments preset clicker
  const quickBookTreatmentType = (treatmentName: string) => {
    setSelectedTreatmentType(treatmentName);
    document.getElementById('booking-portal-panel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FCFDFF] text-[#1A1A1A] font-sans selection:bg-[#00C4EB]/20 selection:text-[#003B66]">
      {/* UPPER TRUST HEADER INFO */}
      <div className="bg-[#003B66] text-stone-100 text-xs py-3 px-6 shadow-sm border-b border-sky-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/919962596979" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-white hover:text-[#00C4EB] transition duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
              💬 Chat on WhatsApp: +91 99625 96979
            </a>
            <span className="hidden md:inline text-sky-800">|</span>
            <span className="hidden md:inline flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider">
              <Clock className="w-3.5 h-3.5 text-[#00C4EB]" />
              Mon - Sun: 10:00 AM - 10:00 PM (All Days)
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-wider">
            <a 
              href="tel:+919962596979" 
              className="hover:text-[#00C4EB] transition duration-200 flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> +91 99625 96979
            </a>
            <a 
              href="https://www.instagram.com/_elitedental._/" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#00C4EB] transition duration-200 flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" /> @_elitedental._
            </a>
          </div>
        </div>
      </div>

      {/* STICKY GLASSMORPHIC HERO NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FCFDFF]/95 backdrop-blur-md border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo Brand Custom */}
          <EliteDentalLogo />

          {/* Desktop Right Reservation Link */}
          <a
            href="#booking-portal-panel"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#003B66] hover:bg-[#002d4f] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00C4EB]" />
            Request Appointment
          </a>
        </div>
      </header>

      {/* CORE CONTAINER VIEWS */}
      <main className="pb-16">
        
        {/* ========================================================= */}
        {/* VIEW 1: PATIENT PLATFORM (HOMEPAGE & SERVICES) */}
        {/* ========================================================= */}
        <div className="animate-fadeIn">
            {/* HERO SEGMENT BUILD */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#FCFDFF] via-[#F0F6FA] to-[#FCFDFF] py-20 px-4 border-b border-sky-100/60">
              {/* Abstract decorative floating medical crosses */}
              <div className="absolute top-10 right-10 opacity-[0.06] pointer-events-none">
                <ToothIcon className="w-64 h-64 rotate-12" />
              </div>
              <div className="absolute bottom-5 left-10 text-sky-100/15 pointer-events-none">
                <Sparkles className="w-32 h-32 rotate-45" />
              </div>

              <div className="max-w-5xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E5EFFC] rounded-full border border-sky-200/50 text-[#003B66] text-[10px] font-bold uppercase tracking-[0.15em] mb-8">
                  <Award className="w-3.5 h-3.5 text-[#00A2C8]" /> 
                  Elite Dental – Advanced Dentistry. Trusted Care. Beautiful Smiles.
                </div>

                <div className="relative mb-6">
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[8rem] sm:text-[11rem] font-serif italic text-sky-100/30 -z-10 select-none">Elite</span>
                  <h1 className="text-[#1A1A1A] font-serif leading-[1.05] tracking-tight text-4xl sm:text-6xl mb-6">
                    Elite Dental Clinic <br/>
                    <span className="italic text-[#003B66] text-2xl sm:text-4xl block mt-2 font-sans font-semibold tracking-wide">
                      Best Dental Clinic in Medavakkam | Invisalign Provider | Root Canal & Implant Center | Kids Specialist
                    </span>
                  </h1>
                </div>

                <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-3xl mx-auto mb-10">
                  We combine advanced technology, specialist expertise, and compassionate care to deliver exceptional dental treatments for patients of all ages. Located in Medavakkam, Chennai, our mission is to help every patient achieve a healthy, confident, and beautiful smile through personalized treatment plans and world-class dental care.
                </p>

                {/* Main Action CTAs */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                  <a 
                    href="#booking-portal-panel" 
                    className="w-full sm:w-auto px-10 py-5 bg-[#003B66] hover:bg-[#002d4f] text-white font-bold rounded-full shadow-lg hover:shadow-xl tracking-[0.2em] uppercase text-xs transition-all flex items-center justify-center gap-3"
                  >
                    <Calendar className="w-4 h-4 text-[#00C4EB]" />
                    Book Your Appointment Today
                  </a>
                  <a 
                    href="#threat-assessment" 
                    className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-[#E1EDF7]/30 text-[#1A1A1A] font-bold rounded-full border-[1.5px] border-[#003B66] tracking-[0.2em] uppercase text-xs transition duration-200 flex items-center justify-center gap-3"
                  >
                    <Calculator className="w-4 h-4 text-stone-600" />
                    Interactive Threat Scan
                  </a>
                </div>

                {/* Treatment Presets Quick Navigation */}
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto mb-12">
                  {[
                    "Dental Implants",
                    "Root Canal Treatment",
                    "Invisalign & Braces",
                    "Smile Makeovers",
                    "Pediatric Dentistry",
                    "Cosmetic Dentistry"
                  ].map((srv, i) => (
                    <button
                      key={i}
                      onClick={() => quickBookTreatmentType(srv)}
                      className="px-4 py-2 bg-white hover:bg-[#F0F6FA] text-stone-700 text-xs font-bold rounded-full border border-sky-100 shadow-sm transition-all uppercase tracking-wider"
                    >
                      ✦ {srv}
                    </button>
                  ))}
                </div>

                {/* Social Credibility Numbers */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-sky-100 max-w-3xl mx-auto">
                  <div className="text-center">
                    <p className="text-3xl font-serif italic font-bold text-[#003B66]">4.9 ★</p>
                    <p className="text-[10px] text-stone-400 font-bold tracking-widest uppercase mt-1">840+ Patient Reviews</p>
                  </div>
                  <div className="text-center border-l border-sky-100">
                    <p className="text-3xl font-serif italic font-bold text-[#003B66]">99%</p>
                    <p className="text-[10px] text-stone-400 font-bold tracking-widest uppercase mt-1">Painless Achievement</p>
                  </div>
                  <div className="text-center border-l border-sky-100">
                    <p className="text-3xl font-serif italic font-bold text-[#003B66]">15k+</p>
                    <p className="text-[10px] text-stone-400 font-bold tracking-widest uppercase mt-1">Smiles Engineered</p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: INTERACTIVE DECK PART (THE BEFORE AFTER CLINICAL RESTORATIONS) */}
            <section className="max-w-7xl mx-auto px-6 py-20 pb-24 border-b border-sky-100/60">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#007A99] bg-[#E5EFFC] px-4 py-1.5 rounded-full">Interactive Curation Gallery</span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight mt-4">Clinical Artistry in Focus</h2>
                <p className="text-sm text-stone-500 mt-3 leading-relaxed">
                  Select your current dental concern and drag the interactive slider to preview the signature results curated by our expert team.
                </p>
              </div>

              {/* Concern Selector Buttons Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
                {[
                  { key: 'crooked', label: "🦷 Gaps & Misalignment" },
                  { key: 'discolored', label: "✨ Yellow Enamel" },
                  { key: 'missing', label: "🔩 Missing Post Tooth" },
                  { key: 'decay', label: "⚡ Infection / Pulp Ache" }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => {
                      setSelectedConcern(item.key);
                      setSliderPosition(50);
                    }}
                    className={`py-3.5 px-4 text-xs font-bold rounded-full transition-all outline-none uppercase tracking-wider ${
                      selectedConcern === item.key
                        ? 'bg-[#003B66] text-white shadow-lg'
                        : 'bg-[#F0F6FA]/60 text-[#003B66] border border-sky-100 hover:bg-[#E1EDF7]/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Before/After Visualizer Canvas */}
              <div className="grid lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto bg-white p-8 rounded-[40px] border border-sky-100 shadow-lg shadow-sky-100/40">
                {/* Visualizer Col */}
                <div className="lg:col-span-7 flex flex-col items-center">
                  <div 
                    ref={sliderContainerRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerCancel={handlePointerUp}
                    className="relative w-full max-w-[480px] h-[320px] rounded-[30px] overflow-hidden cursor-ew-resize select-none border-[6px] border-[#E1EDF7] shadow-inner touch-none animate-fade-in"
                  >
                    {/* AFTER TREATMENT IMAGE (High contrast elegant mock dentistry graphic representation) */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#003B66] to-[#00C4EB] flex flex-col justify-center items-center text-white text-center p-8 select-none pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
                        <Sparkles className="w-6 h-6 text-[#00C4EB]" />
                      </div>
                      <span className="px-4 py-1.5 bg-[#00C4EB] text-slate-900 rounded-full text-[10px] font-black tracking-widest uppercase mb-2">
                        {TREATMENTS_SOLUTIONS[selectedConcern].afterLabel}
                      </span>
                      <p className="text-2xl font-serif italic">{TREATMENTS_SOLUTIONS[selectedConcern].afterDesc}</p>
                      <p className="text-xs text-stone-200 mt-2 italic">“Painless lasers, ceramic design alignment”</p>
                    </div>

                    {/* BEFORE TREATMENT IMAGE (Left Overlaid panel) */}
                    <div 
                      className="absolute inset-y-0 left-0 bg-[#0c1f30] overflow-hidden pointer-events-none"
                      style={{ width: `${sliderPosition}%` }}
                    >
                      <div 
                        className="absolute inset-y-0 left-0 flex flex-col justify-center items-center text-slate-300 text-center p-8"
                        style={{ width: `${containerWidth}px` }}
                      >
                        <div className="w-14 h-14 rounded-full bg-red-950/40 flex items-center justify-center mb-3">
                          <AlertTriangle className="w-6 h-6 text-orange-400" />
                        </div>
                        <span className="px-4 py-1 bg-red-950/70 text-orange-400 border border-orange-400/20 rounded-full text-[10px] font-black tracking-widest uppercase mb-2">
                          {TREATMENTS_SOLUTIONS[selectedConcern].beforeLabel}
                        </span>
                        <p className="text-2xl font-serif text-white">{TREATMENTS_SOLUTIONS[selectedConcern].beforeDesc}</p>
                        <p className="text-xs text-stone-400 mt-2 italic">Dental stress, progressive deterioration</p>
                      </div>
                    </div>

                    {/* DRAG HANDLE BAR */}
                    <div 
                      className="absolute top-0 bottom-0 w-[2px] bg-[#E1EDF7] cursor-ew-resize pointer-events-none shadow"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-[45%] -left-4 w-9 h-9 bg-[#003B66] text-white rounded-full flex items-center justify-center shadow-lg font-bold text-xs border-2 border-white">
                        ↔
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-stone-400 font-extrabold mt-4 uppercase tracking-widest">▲ Slide to compare before & after results</p>
                </div>

                {/* Analytical Explanation Col */}
                <div className="lg:col-span-5 space-y-6">
                  <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] leading-tight">
                    {TREATMENTS_SOLUTIONS[selectedConcern].title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed italic bg-[#F0F6FA]/60 p-4 rounded-xl border-l-[3px] border-[#003B66]">
                    &ldquo;{TREATMENTS_SOLUTIONS[selectedConcern].clinicalExplanation}&rdquo;
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-[#F0F6FA]/40 rounded-2xl border border-sky-100">
                      <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Average Duration</p>
                      <p className="text-sm font-bold text-[#003B66] mt-0.5">{TREATMENTS_SOLUTIONS[selectedConcern].duration}</p>
                    </div>
                    <div className="p-4 bg-[#F0F6FA]/40 rounded-2xl border border-sky-100">
                      <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Required Visits</p>
                      <p className="text-sm font-bold text-[#003B66] mt-0.5">{TREATMENTS_SOLUTIONS[selectedConcern].visits}</p>
                    </div>
                    <div className="p-4 bg-[#F0F6FA]/40 rounded-2xl border border-sky-100">
                      <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider">Comfort Scale</p>
                      <p className="text-xs font-semibold text-stone-700 mt-0.5">{TREATMENTS_SOLUTIONS[selectedConcern].comfort}</p>
                    </div>
                    <div className="p-4 bg-[#F0F6FA] rounded-2xl border border-sky-200">
                      <p className="text-[9px] text-[#003B66] font-black uppercase tracking-wider">Clinical Focus</p>
                      <p className="text-xs font-bold text-[#003B66] mt-0.5">{TREATMENTS_SOLUTIONS[selectedConcern].mainTechnology}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => quickBookTreatmentType(TREATMENTS_SOLUTIONS[selectedConcern].title)}
                    className="w-full py-4 bg-[#003B66] hover:bg-[#002d4f] text-[#00C4EB] font-bold text-xs uppercase tracking-[0.2em] rounded-full transition duration-200 shadow-md"
                  >
                    Secure Treatment Suite
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 2B: ABOUT US, WHY CHOOSE US & TEAM MULTI-SPECIALTY */}
            <section id="about-us" className="bg-[#FCFDFF] py-24 px-6 border-b border-sky-100/60">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 items-start">
                  
                  {/* Left Column: About Us & Specialists Available */}
                  <div className="lg:col-span-7 space-y-10 animate-fadeIn">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#007A99] bg-[#E5EFFC] px-4 py-1.5 rounded-full inline-block">
                        About Clinic Excellence
                      </span>
                      <h2 className="text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
                        Welcome to Elite Dental
                      </h2>
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-sans mt-4">
                        Elite Dental is a multi-specialty dental clinic located in Medavakkam, Chennai, offering comprehensive oral healthcare solutions under one roof. Our team includes experienced specialists in Implantology, Orthodontics, Endodontics, Prosthodontics, Periodontics, Pediatric Dentistry, and Oral Surgery. We focus on delivering painless, affordable, and evidence-based dental treatments using modern technology and international sterilization standards.
                      </p>
                    </div>

                    <div className="p-8 bg-[#F0F6FA]/45 rounded-3xl border border-sky-100/60 shadow-inner">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-5 h-5 text-[#003B66]" />
                        <h3 className="text-lg font-serif font-bold text-[#1A1A1A]">
                          Meet Our Multidisciplinary Team
                        </h3>
                      </div>
                      <p className="text-xs text-stone-500 leading-relaxed mb-6">
                        Our team of medical experts work collaboratively across oral specialties to deliver accurate diagnosis and optimal beauty alignment for every patient.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          "Implantologists",
                          "Orthodontists",
                          "Endodontists",
                          "Prosthodontists",
                          "Pediatric Dentists",
                          "Periodontists",
                          "Oral & Maxillofacial Surgeons"
                        ].map((specialist, idx) => (
                          <div 
                            key={idx} 
                            className="flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-xl border border-stone-150 text-[11px] font-bold text-[#003B66]"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00C4EB] shrink-0"></span>
                            {specialist}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Why Choose Us & Human Touch Strengths */}
                  <div className="lg:col-span-5 space-y-8">
                    <div className="bg-[#003B66] text-stone-100 p-8 sm:p-10 rounded-[32px] shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4EB]/10 rounded-full blur-2xl"></div>
                      <div className="relative z-10 space-y-6">
                        <span className="text-[9px] uppercase tracking-wider text-[#00C4EB] font-black">
                          Modern Dentistry with a Human Touch
                        </span>
                        <h3 className="text-2xl font-serif italic tracking-wide">
                          Why Patients Choose Us
                        </h3>
                        <p className="text-xs text-stone-300 leading-relaxed font-sans">
                          Our clinic is equipped with advanced diagnostic and treatment technologies that enable accurate diagnosis, faster treatment, and improved patient comfort. We believe every smile is unique, which is why we create customized treatment plans tailored to individual needs and expectations.
                        </p>

                        <div className="space-y-3.5 pt-4 border-t border-sky-900 text-xs">
                          {[
                            "Experienced Specialist Dentists",
                            "Advanced Digital Dentistry",
                            "Painless Treatment Protocols",
                            "Strict Sterilization Standards",
                            "Affordable Treatment Plans",
                            "Family-Friendly Environment",
                            "Emergency Dental Care",
                            "Personalized Patient Experience"
                          ].map((item, index) => (
                            <div key={index} className="flex items-start gap-2.5">
                              <span className="text-[#00C4EB] font-serif pr-1">✔</span>
                              <span className="text-stone-200 font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick strengths subgrid */}
                    <div className="p-6 bg-white rounded-3xl border border-sky-100 shadow-sm space-y-4">
                      <h4 className="text-[10px] uppercase font-bold text-stone-400 tracking-widest">
                        Clinical Strengths Panel
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Digital Smile Design",
                          "Advanced Implants",
                          "Pediatric-Friendly",
                          "Aesthetic & Cosmetic",
                          "Preventative Programs",
                          "Oral Rehabilitation",
                          "Emergency Services"
                        ].map((strength, index) => (
                          <span 
                            key={index} 
                            className="bg-[#F0F6FA] text-stone-700 text-[10px] font-bold px-3 py-1.5 rounded-full border border-sky-100"
                          >
                            ✦ {strength}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </section>

            {/* SECTION 2C: OUR CLINICAL SERVICES GRID - THE 10 MODERN TREATMENTS DRAFT */}
            <section id="services-grid" className="bg-[#F0F6FA]/30 py-24 px-6 border-b border-sky-100/60">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#007A99] bg-[#E5EFFC] px-4 py-1.5 rounded-full">
                    Dental Care Redefined
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight mt-4">
                    Our Comprehensive Clinical Services
                  </h2>
                  <p className="text-xs sm:text-xs text-stone-500 mt-2 tracking-wide uppercase font-semibold">
                    Providing state-of-the-art procedures with extreme detail focus and patient-first care routines
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Dental Implants",
                      desc: "Replace missing teeth permanently with advanced implant solutions that look, feel, and function like natural teeth.",
                      formPreset: "Titanium Dental Implant Surgery"
                    },
                    {
                      name: "Root Canal Treatment",
                      desc: "Save infected teeth through painless and precise root canal therapy using modern endodontic techniques.",
                      formPreset: "Laser Painless Root Canal"
                    },
                    {
                      name: "Invisalign & Clear Aligners",
                      desc: "Straighten your teeth discreetly with clear aligners customized for your smile.",
                      formPreset: "Invisible Aligners & Orthodontics"
                    },
                    {
                      name: "Orthodontic Braces",
                      desc: "Metal, ceramic, and self-ligating braces or advanced invisible solutions tailored for children, teens, and adults.",
                      formPreset: "Invisible Aligners & Orthodontics"
                    },
                    {
                      name: "Smile Designing",
                      desc: "Transform your smile with veneers, teeth whitening, gum contouring, and advanced cosmetic enhancements.",
                      formPreset: "Cosmetic Dental Veneers"
                    },
                    {
                      name: "Pediatric Dentistry",
                      desc: "Specialized gentle dental care for infants, children, and adolescents taught in a cozy comfortable environment.",
                      formPreset: "Pediatric Pediatric Suite Care"
                    },
                    {
                      name: "Crowns & Bridges",
                      desc: "Restore heavily damaged or missing teeth structures with high-quality customized ceramic and zirconia restorations.",
                      formPreset: "Cosmetic Dental Veneers"
                    },
                    {
                      name: "Wisdom Tooth Removal",
                      desc: "Safe, rapid, and completely painless extraction procedures performed by highly experienced oral surgeons.",
                      formPreset: "General Checkup & Clean"
                    },
                    {
                      name: "Dentures",
                      desc: "Highly comfortable, hygienic, and extremely natural-looking complete or partial acrylic and custom dentures.",
                      formPreset: "General Checkup & Clean"
                    },
                    {
                      name: "Gum Treatment",
                      desc: "Advanced periodontal care for raw bleeding gums, gum disease regression, and systemic bone loss prevention.",
                      formPreset: "General Checkup & Clean"
                    }
                  ].map((srv, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-8 rounded-[30px] border border-sky-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group transform hover:-translate-y-1 duration-200"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-full bg-[#F0F6FA] flex items-center justify-center text-[#003B66] text-sm font-serif font-black mb-6 group-hover:bg-[#003B66] group-hover:text-white transition-colors duration-200">
                          {idx + 1}
                        </div>
                        <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#003B66]">
                          {srv.name}
                        </h3>
                        <p className="text-xs text-stone-500 leading-relaxed mt-3 leading-relaxed">
                          {srv.desc}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                        <button
                          onClick={() => quickBookTreatmentType(srv.formPreset)}
                          className="text-[10px] font-black uppercase tracking-widest text-[#003B66] hover:text-[#007A99] flex items-center gap-1 transition-colors outline-none"
                        >
                          Book Unit Consultation <span className="text-xs font-serif">➜</span>
                        </button>
                        <span className="w-2 h-2 rounded-full bg-stone-200 group-hover:bg-[#00C4EB] transition-colors"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECTION 3: REVOLUTIONARY DENTAL HYGIENE SELF TEST */}
            <section id="threat-assessment" className="bg-[#F0F6FA]/55 py-20 px-6 border-b border-sky-100/60">
              <div className="max-w-4xl mx-auto bg-[#FCFDFF] rounded-[32px] p-8 sm:p-10 shadow-lg border border-sky-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-sky-100">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] flex items-center gap-3">
                      <Calculator className="w-6 h-6 text-stone-600" />
                      Oral Hygiene Threat Scan
                    </h3>
                    <p className="text-xs text-stone-500 mt-1">
                      Assess your clinical threat coefficient to determine required laser scaling or preventative veneers.
                    </p>
                  </div>
                  <span className="text-[10px] text-stone-600 bg-[#E5EFFC] px-3.5 py-1.5 font-bold rounded-full uppercase tracking-widest">
                    Clinical Threat Score
                  </span>
                </div>

                {!selfTestResult ? (
                  <div>
                    {/* Progress indicators */}
                    <div className="flex justify-between items-center text-xs font-semibold text-stone-500 mb-2">
                      <span className="uppercase tracking-wider">Progress: Question {currentStep + 1} of {diagnosticQuestions.length}</span>
                      <span className="font-mono">{Math.round(((currentStep + 1) / diagnosticQuestions.length) * 100)}%</span>
                    </div>
                    <div className="w-full bg-stone-200 h-2 rounded-full mb-8 overflow-hidden">
                      <div 
                        className="bg-[#003B66] h-2 transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / diagnosticQuestions.length) * 100}%` }}
                      ></div>
                    </div>

                    <p className="text-xl font-serif font-bold text-[#1A1A1A] mb-8">
                       {diagnosticQuestions[currentStep].q}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {diagnosticQuestions[currentStep].options.map((opt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleStepAnswer(opt.score)}
                          className="p-5 text-left border border-sky-100 bg-[#FCFDFF] hover:bg-[#F0F6FA]/55 text-stone-700 hover:text-slate-900 hover:border-sky-300 rounded-2xl font-bold text-sm transition duration-150 flex items-center justify-between shadow-sm transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <span className="pr-4">{opt.text}</span>
                          <span className="text-[#003B66] shrink-0 font-mono">➜</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6 animate-fadeIn">
                    <div className="max-w-md mx-auto space-y-6">
                      {/* Risk Gauge */}
                      <div className="inline-flex flex-col items-center p-8 bg-gradient-to-tr from-[#003B66] to-[#002d4f] rounded-3xl text-white shadow-xl w-full">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C4EB]">Composite Risk Coefficient</span>
                        <span className="text-5xl font-serif italic font-bold mt-3">{selfTestResult.score} / 100</span>
                        
                        <div className="mt-5 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest inline-block"
                          style={{
                            background: selfTestResult.threat === 'CRITICAL' ? '#991b1b' : (selfTestResult.threat === 'HIGH' ? '#b45309' : '#14532d')
                          }}
                        >
                          {selfTestResult.threat} Threat Level
                        </div>
                      </div>

                      <div className="p-5 bg-[#F0F6FA] rounded-2xl border border-sky-100 text-left">
                        <h4 className="text-[10px] font-bold text-[#003B66] uppercase tracking-wider flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-4 h-4 text-stone-700" />
                          Personalized Care Action Plan:
                        </h4>
                        <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                          {selfTestResult.recommendation}
                        </p>
                      </div>

                      <div className="flex gap-4 justify-center">
                        <button
                          onClick={resetThreatSurvey}
                          className="px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-full font-bold uppercase tracking-wider text-xs"
                        >
                          Reset Scan
                        </button>
                        <button
                          onClick={injectDiagnosticsToAppointment}
                          className="px-6 py-3 bg-[#003B66] hover:bg-[#002d4f] text-white rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-2 shadow-md"
                        >
                          Apply to Suite Booking ➜
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
            <section id="booking-portal-panel" className="max-w-7xl mx-auto px-6 py-20 border-b border-sky-100/60">
              <div className="grid lg:grid-cols-12 gap-10 items-start">
                
                {/* Form Col */}
                <div className="lg:col-span-7 bg-[#FCFDFF] p-8 sm:p-10 rounded-[32px] border border-sky-100 shadow-lg">
                  <div className="mb-8">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#007A99] bg-[#E5EFFC] px-3.5 py-1.5 rounded-full">Suite Registration Registry</span>
                    <h3 className="text-3xl font-serif font-bold text-[#003B66] mt-4">Secure Elite Dental Suite</h3>
                    <p className="text-xs text-stone-500 mt-2">
                      Simple dental booking process. Schedule your session and submit directly to our WhatsApp care desk.
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Full Patient Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g., Alex Johnson"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full p-3.5 rounded-full border border-sky-100 focus:border-[#003B66] focus:ring-1 focus:ring-[#003B66]/30 text-sm outline-none transition bg-[#FCFDFF]"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">WhatsApp Mobile *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g., +91 99625 96979"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          className="w-full p-3.5 rounded-full border border-sky-100 focus:border-[#003B66] focus:ring-1 focus:ring-[#003B66]/30 text-sm outline-none transition bg-[#FCFDFF]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g., client@gmail.com"
                          value={patientEmail}
                          onChange={(e) => setPatientEmail(e.target.value)}
                          className="w-full p-3.5 rounded-full border border-sky-100 focus:border-[#003B66] focus:ring-1 focus:ring-[#003B66]/30 text-sm outline-none transition bg-[#FCFDFF]"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Proposed Clinical Date *</label>
                        <input
                          type="date"
                          required
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full p-3.5 rounded-full border border-sky-100 focus:border-[#003B66] focus:ring-1 focus:ring-[#003B66]/30 text-sm text-stone-700 outline-none bg-[#FCFDFF]"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Preferred Time Block</label>
                        <select
                          value={preferredTimeSlot}
                          onChange={(e) => setPreferredTimeSlot(e.target.value)}
                          className="w-full p-3.5 rounded-full border border-sky-100 text-sm text-stone-700 outline-none bg-[#FCFDFF]"
                        >
                          <option>10:00 AM - 11:30 AM (Mornings)</option>
                          <option>11:30 AM - 01:00 PM (Mid-day)</option>
                          <option>02:30 PM - 04:00 PM (Afternoon)</option>
                          <option>04:30 PM - 06:00 PM (Late evening)</option>
                          <option>06:00 PM - 08:30 PM (End of day specialty)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Target Dental Treatment</label>
                        <select
                          value={selectedTreatmentType}
                          onChange={(e) => setSelectedTreatmentType(e.target.value)}
                          className="w-full p-3.5 rounded-full border border-sky-100 text-sm text-stone-700 outline-none bg-[#FCFDFF]"
                        >
                          <option>General Checkup & Clean</option>
                          <option>Invisible Aligners & Orthodontics</option>
                          <option>Teeth Whitening Radiance</option>
                          <option>Titanium Dental Implant Surgery</option>
                          <option>Laser Painless Root Canal</option>
                          <option>Cosmetic Dental Veneers</option>
                          <option>Pediatric Pediatric Suite Care</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">Select Lead Specialist Clinician</label>
                      <select
                        value={selectedClinician}
                        onChange={(e) => setSelectedClinician(e.target.value)}
                        className="w-full p-3.5 rounded-full border border-sky-100 text-sm text-stone-700 outline-none bg-[#FCFDFF]"
                      >
                        <option>Chief Aesthetic Surgeon & Implantologist</option>
                        <option>Senior Pediatric Dental Expert</option>
                        <option>Consultant Orthodontics Specialist</option>
                      </select>
                    </div>

                    <div>
                      <label className="flex justify-between text-[9px] font-bold text-stone-500 uppercase tracking-widest mb-1.5">
                        <span>Chief Complaint or Specific Notes</span>
                        <span className="text-[10px] text-stone-400 normal-case">Optional</span>
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Detail pain levels, sensitivity, or alignment aesthetic demands..."
                        value={patientNotes}
                        onChange={(e) => setPatientNotes(e.target.value)}
                        className="w-full p-4 rounded-2xl border border-sky-100 focus:border-[#003B66] focus:ring-1 focus:ring-[#003B66]/30 text-sm outline-none transition bg-[#FCFDFF]"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full p-4.5 bg-[#003B66] hover:bg-[#002d4f] text-[#00C4EB] font-bold text-xs tracking-widest uppercase rounded-full transition duration-200 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Generate Suite Pass Barcode 🖨
                    </button>
                  </form>
                </div>

                {/* Receipt Card Display Col */}
                <div className="lg:col-span-5 space-y-6">
                  {isBooked && latestBooking ? (
                    <div id="booking-receipt-card" className="bg-gradient-to-tr from-[#003B66] to-[#002d4f] p-8 rounded-[2.5rem] text-white shadow-xl max-w-sm mx-auto border border-sky-900 absolute overflow-hidden animate-fadeIn">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#00C4EB]/15 rounded-full blur-2xl pointer-events-none"></div>

                      <div className="text-center pb-6 border-b border-dashed border-white/20">
                        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-3">
                          <CheckCircle2 className="w-10 h-10 text-[#00C4EB]" />
                        </div>
                        <h4 className="text-lg font-serif italic tracking-wide">Elite Clinic Receipt</h4>
                        <p className="text-[9px] text-stone-300 tracking-widest mt-1">SECURE DIGITAL RESERVATION</p>
                      </div>

                      <div className="py-6 space-y-4 text-xs font-semibold">
                        <div className="flex justify-between items-center text-stone-300">
                           <span>Ref Reference ID</span>
                          <span className="text-white font-mono text-sm">{latestBooking.id}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-300">Patient</span>
                          <span>{latestBooking.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-300">Date</span>
                          <span>{latestBooking.date}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-300">Time Block</span>
                          <span>{latestBooking.timeSlot}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-300">Procedure</span>
                          <span className="text-[#00C4EB]">{latestBooking.treatment}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-stone-300">Clinic Suite</span>
                          <span>Elite Dental Care Suite</span>
                        </div>
                      </div>

                      {/* Barcode graphic simulation for clinical aesthetic */}
                      <div className="bg-white/5 py-4 px-4 rounded-2xl flex flex-col items-center justify-center mb-6">
                        <div className="flex gap-0.5 justify-center h-8 w-full opacity-65">
                          {[1,2,1,4,1,3,2,1,2,4,1,2,1,3,2,4,1,2,1,1,3,1,2,4,2].map((w, idx) => (
                            <div key={idx} className="bg-white h-full" style={{ width: `${w * 1.5}px` }}></div>
                          ))}
                        </div>
                        <span className="text-[9px] text-stone-300 tracking-widest mt-2 font-mono">DENTAL_BAR_ID_SECURE_2026</span>
                      </div>

                      <button
                        onClick={() => triggerWhatsAppRedirect(latestBooking)}
                        className="w-full py-4 bg-[#00C4EB] hover:bg-[#72e5fc] text-slate-900 font-bold text-xs tracking-widest uppercase rounded-full transition duration-155 shadow-lg shadow-black/20 hover:-translate-y-0.5"
                      >
                        ⚡ Submit Directly to WhatsApp ➜
                      </button>

                      <p className="text-[10px] text-center text-stone-300 mt-4 leading-relaxed font-semibold">
                        *Note: Click submit to send pre-filled details to the direct desk. Booking confirmation will arrive in seconds!
                      </p>
                    </div>
                  ) : (
                    <div className="bg-[#FCFDFF] p-8 rounded-[32px] border border-sky-100 shadow-lg flex flex-col items-center justify-center text-center h-full min-h-[420px]">
                      <div className="w-16 h-16 rounded-full bg-[#F0F6FA] border border-sky-100 flex items-center justify-center mb-5">
                        <CalendarCheck2 className="w-8 h-8 text-[#003B66]" />
                      </div>
                      <h4 className="text-lg font-serif font-bold text-[#003B66]">Design Suite Pending</h4>
                      <p className="text-xs text-stone-500 max-w-xs mt-2 leading-relaxed">
                        Populate our digital dental registration form. We will generate your clinical patient pass barcode instantly.
                      </p>
                      
                      <div className="mt-8 p-5 bg-[#F0F6FA]/55 rounded-2xl border border-dashed border-sky-200 w-full text-left">
                        <h5 className="text-[10px] uppercase tracking-widest text-[#007A99] font-bold flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                          Did you take the Threat Scan?
                        </h5>
                        <p className="text-xs text-stone-600 leading-relaxed mt-2">
                          Our system will overlay dental risks directly on your surgical ticket so the clinical staff gets full details in advance.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* SECTION 5: DOCTOR REVIEWS & CREDENTIALS SHOWCASE */}
            <section className="bg-white py-16 border-t border-slate-100">
              <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#007A99] bg-[#E5EFFC] px-3.5 py-1.5 rounded-full">Clinical Credentials</span>
                  <h3 className="text-3xl font-serif font-bold text-[#003B66] mt-4">Driven By Medical Perfection</h3>
                  <p className="text-xs sm:text-sm text-stone-500 mt-2">
                    Why discerning patients from Chennai and abroad select Elite Dental.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-8 bg-[#FCFDFF] rounded-3xl border border-sky-100 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F6FA] text-[#003B66] flex items-center justify-center mb-5 border border-sky-100">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#003B66] tracking-tight">Advanced Micro-Surgery</h4>
                    <p className="text-xs text-stone-500 leading-relaxed mt-3">
                      Featuring ultra-definition dental magnifying scopes and painless laser cutting technology that limits recovery bleeding or subsequent pain.
                    </p>
                  </div>
                  <div className="p-8 bg-[#FCFDFF] rounded-3xl border border-sky-100 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F6FA] text-[#003B66] flex items-center justify-center mb-5 border border-sky-100">
                      <Users className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#003B66] tracking-tight">High Aesthetic Rating</h4>
                    <p className="text-xs text-stone-500 leading-relaxed mt-3">
                      Trusted by top creators, and medical reviewers for aligner modeling and teeth whitening with 98.7% perfect outcome compliance.
                    </p>
                  </div>
                  <div className="p-8 bg-[#FCFDFF] rounded-3xl border border-sky-100 shadow-md">
                    <div className="w-12 h-12 rounded-xl bg-[#F0F6FA] text-[#003B66] flex items-center justify-center mb-5 border border-sky-100">
                      <Instagram className="w-6 h-6 text-[#003B66]" />
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#003B66] tracking-tight">Highly Curated Experience</h4>
                    <p className="text-xs text-stone-500 leading-relaxed mt-3">
                      Our active Instagram community exhibits hundreds of genuine clinic live treatment records, clinical walkups, and smile transitions.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 5B: GENUINE PATIENT TESTIMONIALS */}
            <section className="bg-[#F0F6FA]/20 py-20 px-6 border-t border-sky-100">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#007A99] bg-[#E5EFFC] px-4 py-1.5 rounded-full">
                    Patient Journeys
                  </span>
                  <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mt-4">
                    Stories of Revitalized Smiles
                  </h3>
                  <p className="text-xs sm:text-xs text-[#003B66] mt-2 tracking-widest uppercase font-semibold">
                    Unedited treatment reviews from our Chennai patient community
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      quote: "Excellent care and painless treatment. Highly recommended for families.",
                      author: "Ananya Iyer",
                      location: "Medavakkam",
                      rating: 5
                    },
                    {
                      quote: "Professional doctors, modern facilities, and transparent treatment plans.",
                      author: "Rajesh Kumar",
                      location: "Perumbakkam",
                      rating: 5
                    },
                    {
                      quote: "The team made me feel comfortable throughout my dental implant journey.",
                      author: "Deepika R.",
                      location: "Pallikaranai",
                      rating: 5
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white p-8 rounded-[32px] border border-sky-100 shadow-sm flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                             <span key={i} className="text-[#00C4EB] text-sm">★</span>
                          ))}
                        </div>
                        <p className="text-sm font-medium text-stone-700 italic leading-relaxed">
                          &ldquo;{item.quote}&rdquo;
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-stone-100 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-[#1A1A1A]">{item.author}</p>
                          <p className="text-[9px] text-stone-400 font-bold uppercase tracking-wider mt-0.5">{item.location}</p>
                        </div>
                        <span className="text-stone-300 font-serif text-3xl opacity-50 font-black">&rdquo;</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </main>

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-stone-400 py-16 px-6 border-t border-stone-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <EliteDentalLogo light={true} />
            <p className="text-[11px] leading-relaxed max-w-xs text-stone-400 font-sans italic">
              &ldquo;Elite dental - best dental clinic in medavakkam | Invisalign provider | Root canal & implant center | kids specialist&rdquo;
            </p>
            <p className="text-[11px] leading-relaxed text-stone-500 font-bold uppercase tracking-wider">
              ✦ Open All Week
            </p>
          </div>

          <div className="space-y-3">
            <h5 className="text-[#00C4EB] text-[10px] uppercase tracking-widest font-bold">Treatment Suites</h5>
            <ul className="space-y-2 text-xs font-semibold">
              <li><button onClick={() => quickBookTreatmentType('Invisible Aligners & Orthodontics')} className="hover:text-white transition">Invisible Clear Aligners</button></li>
              <li><button onClick={() => quickBookTreatmentType('Teeth Whitening Radiance')} className="hover:text-white transition">Laser Teeth Whitening</button></li>
              <li><button onClick={() => quickBookTreatmentType('Titanium Dental Implant Surgery')} className="hover:text-white transition">Titanium Dental Implants</button></li>
              <li><button onClick={() => quickBookTreatmentType('Laser Painless Root Canal')} className="hover:text-white transition">Painless Root Canal</button></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-[#00C4EB] text-[10px] uppercase tracking-widest font-bold">Location & Contact</h5>
            <ul className="space-y-2 text-[11px] font-semibold text-stone-400">
              <li className="flex items-start gap-1.5">
                <a 
                  href="https://maps.app.goo.gl/dNLucYeeYL1A2Ad39" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-1.5 hover:text-white transition group cursor-pointer"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00C4EB]/80 shrink-0 mt-0.5 group-hover:text-[#00C4EB]" />
                  <span className="leading-tight group-hover:underline">
                    No. 12/485, Mambakkam–Medavakkam Main Road, Medavakkam, Chennai – 600100.
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5 text-pink-400/80" />
                <a href="https://www.instagram.com/_elitedental._/" target="_blank" rel="noreferrer" className="hover:underline">@_elitedental._</a>
              </li>
              <li className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#00C4EB]/80" />
                <a href="mailto:elitedental.medavakkam@gmail.com" className="hover:text-white hover:underline transition">
                  elitedental.medavakkam@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-white font-mono font-bold mt-1.5">
                <span className="text-emerald-400 text-xs">💬</span>
                <a href="tel:+919962596979" className="hover:text-[#00C4EB] hover:underline transition">
                  +91 99625 96979
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="text-[#00C4EB] text-[10px] uppercase tracking-widest font-bold">Serving Neighborhoods</h5>
            <p className="text-[11px] leading-relaxed text-stone-400 font-sans font-semibold">
              Medavakkam, Perumbakkam, Pallikaranai, Vengaivasal, Kovilambakkam, Santhosapuram, Sithalapakkam, Sholinganallur, Velachery, and surrounding Chennai areas.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-800 text-center text-[10px] tracking-wider text-stone-500 uppercase">
          <p>© 2026 ELITE DENTAL. DESIGNED BY <a href="https://www.smilebharatam.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00C4EB] transition font-bold underline">SMILE BHARATAM</a>. CHENNAI, INDIA. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
