import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const syncDocumentLanguage = (language) => {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = language;
};

const resources = {
  en: {
    translation: {
      // Nav
      "nav.home": "Home",
      "nav.projects": "Selected Works",
      "nav.studio": "Studio",
      "nav.contact": "Inquire",
      "nav.lang.switch": "ქართული",
      
      // Footer
      "footer.social": "Social",
      "footer.contact": "Contact",
      "footer.rights": "All rights reserved.",
      "footer.location": "Tbilisi, Georgia",
      
      // Home - Hero
      "home.hero.title": "Warm, refined, and deeply personal interiors.",
      "home.hero.subtitle": "We craft minimalist spaces in Tbilisi that elevate contemporary living. Let's build your sanctuary.",
      "home.cta.primary": "Inquire Now",
      
      // Home - Selected Works
      "home.works.title": "Selected Works",
      "home.works.link": "View all projects",
      
      // Home - Studio Preview
      "home.studio.title": "The Studio",
      "home.studio.text": "NM Designs is founded on the belief that spaces profoundly impact how we feel and live. Led by Nini, we specialize in warm minimalism—stripping away the unnecessary to reveal elegance, calm, and purpose in every corner.",
      "home.studio.link": "Read our story",
      
      // Home - Expertise
      "home.expertise.title": "Our Expertise",
      "home.service.1": "Full interior design",
      "home.service.2": "Space and furniture planning",
      "home.service.3": "Custom furniture design",
      "home.service.4": "Technical documentation and drawings",
      "home.service.5": "3D visualizations",
      "home.service.6": "Material and finish selection",
      "home.service.7": "Lighting and electrical layout planning",
      
      // Home - Process
      "home.process.title": "The Approach",
      "home.step.1.title": "Discovery",
      "home.step.1.desc": "Understanding your vision, lifestyle, and the architectural context.",
      "home.step.2.title": "Concept",
      "home.step.2.desc": "Developing the mood, layout, and visual aesthetic through 3D renders.",
      "home.step.3.title": "Detailing",
      "home.step.3.desc": "Producing precise technical drawings and selecting materials.",
      
      // Home - CTA
      "home.cta.title": "Ready to transform your space?",
      "home.cta.text": "We take on a limited number of projects each year to ensure the highest level of detail and care.",
      "home.cta.button": "Start a Project",

      // Home - Featured Project Categories
      "home.proj.1.cat": "Interior Concept",
      "home.proj.2.cat": "Full Renovation",
      "home.proj.3.cat": "Space Planning",

      // Projects
      "projects.title": "Selected Works",
      "projects.intro": "A curated collection of residential interiors, concepts, and renovations. We approach every project as an opportunity to distill space down to its most beautiful, functional essence.",
      "projects.view": "View Project",

      // Portfolio - Project Data
      "proj.1.type": "Full Interior Architecture",
      "proj.1.desc": "A mountain retreat designed around warmth and refuge — oak joinery, travertine surfaces, and a bespoke fireplace wall.",
      "proj.2.type": "Residential Concept",
      "proj.2.desc": "A penthouse conceived around panoramic city views, Venetian plaster, and restrained warm-toned luxury.",
      "proj.3.type": "Space Planning & Styling",
      "proj.3.desc": "Maximizing space in a compact footprint through custom integrated joinery and a continuous warm palette.",

      // Project Detail
      "detail.meta.location": "Location",
      "detail.meta.scope": "Scope",
      "detail.meta.year": "Year",
      "detail.meta.status": "Status",
      "detail.concept.title": "The Concept",
      "detail.cta.title": "Like what you see?",
      "detail.cta.button": "Inquire About Your Project",
      "detail.room.living": "Living Room",
      "detail.room.kitchen": "Kitchen & Dining",
      "detail.room.bathroom": "Bathroom",
      "detail.room.plan": "Floor Plan",

      // Studio
      "studio.title": "The Studio",
      "studio.philosophy.lead": "NM Designs approaches interiors with technical rigor and an editing eye. We believe warm minimalism isn't just a visual aesthetic—it is the discipline of removing the unnecessary to reveal calm, purpose, and elegance in everyday living.",
      "studio.philosophy.secondary": "Led by Nini in Tbilisi, we specialize in residential sanctuaries. Our process bridges the gap between conceptual beauty and absolute technical precision, ensuring that the spaces we design can actually be built flawlessly.",
      "studio.expertise.title": "Area of Expertise",
      
      // Studio - Service Categories
      "studio.cat.1.title": "Structural Planning & Technical Design",
      "studio.cat.1.item.1": "Full interior design & concept development",
      "studio.cat.1.item.2": "Comprehensive space planning",
      "studio.cat.1.item.3": "Technical drawings & design documentation",
      "studio.cat.1.item.4": "Lighting & electrical layout planning",
      "studio.cat.2.title": "Curation & Custom Fabrication",
      "studio.cat.2.item.1": "Material & finish selection",
      "studio.cat.2.item.2": "Furniture planning & sourcing",
      "studio.cat.2.item.3": "Custom furniture design & detailing",
      "studio.cat.3.title": "Visualization & Creative Direction",
      "studio.cat.3.item.1": "Moodboards & aesthetic direction",
      "studio.cat.3.item.2": "High-fidelity 3D visualizations & renders",
      
      // Studio - Process
      "studio.process.title": "Our Process",
      "studio.step.1.title": "Consultation & Briefing",
      "studio.step.1.desc": "We begin by deeply analyzing the architectural constraints of your space and your functional requirements.",
      "studio.step.2.title": "Concept & Visualization",
      "studio.step.2.desc": "Developing the visual language through rigorous material selection and precise 3D rendering to ensure absolute alignment.",
      "studio.step.3.title": "Technical Documentation",
      "studio.step.3.desc": "Translating the concept into comprehensive technical drawings, electrical plans, and custom joinery detailing for contractors.",
      
      // Studio - Expectations
      "studio.expectations.title": "Client Expectations",
      "studio.exp.scope.title": "Comprehensive Scope",
      "studio.exp.scope.text": "We do not offer piecemeal consulting or hourly decorating. We prefer to take on full-room or full-home projects to guarantee the integrity of the final design.",
      "studio.exp.visual.title": "Visual Reliance",
      "studio.exp.visual.text": "We rely heavily on precise 3D visualizations before breaking ground. This ensures total clarity between our vision and yours, preventing costly changes during construction.",
      "studio.exp.trust.title": "Mutual Trust",
      "studio.exp.trust.text": "Premium design requires time and decisiveness. We work best with clients who value our expertise and give us the creative freedom to deliver our best work.",
      
      // Studio - CTA
      "studio.cta.title": "Ready to transform your space?",
      "studio.cta.text": "Tell us about your project, timeline, and vision to see if we are a good fit.",
      "studio.cta.button": "Inquire Now",

      // Contact
      "contact.title": "Inquire",
      "contact.intro1": "NM Designs takes on a limited number of comprehensive interior architecture and design projects each year to ensure uncompromising quality.",
      "contact.intro2": "Please fill out the details below. We will review your brief and respond within 48 hours to schedule a consultation if we appear to be a good mutual fit.",
      "contact.direct": "Direct Email",
      "contact.location": "Location",
      "contact.social": "Social",
      
      // Contact - Form Labels
      "contact.form.name": "Full Name *",
      "contact.form.email": "Email Address *",
      "contact.form.phone": "Phone Number",
      "contact.form.loc": "Project Location",
      "contact.form.loc.placeholder": "e.g. Vake, Tbilisi",
      "contact.form.type": "Project Type *",
      "contact.form.type.select": "Select Type",
      "contact.form.type.residential": "Residential Build",
      "contact.form.type.apartment": "Apartment Renovation",
      "contact.form.type.commercial": "Commercial / Boutique",
      "contact.form.type.concept": "Concept & 3D Visualization",
      "contact.form.scope": "Approximate Scope *",
      "contact.form.scope.select": "Select Scope",
      "contact.form.scope.full": "Full Property",
      "contact.form.scope.partial": "Multiple Rooms",
      "contact.form.scope.single": "Single Room / Custom Joinery",
      "contact.form.budget": "Budget Range *",
      "contact.form.budget.select": "Select Budget",
      "contact.form.budget.1": "Under $50,000",
      "contact.form.budget.2": "$50,000 – $100,000",
      "contact.form.budget.3": "$100,000 – $250,000",
      "contact.form.budget.4": "$250,000+",
      "contact.form.timeline": "Desired Start Date",
      "contact.form.timeline.select": "Select Timeline",
      "contact.form.timeline.1": "Immediately",
      "contact.form.timeline.2": "1 to 3 Months",
      "contact.form.timeline.3": "3 to 6 Months",
      "contact.form.timeline.4": "Flexible",
      "contact.form.desc": "Project Description & Goals",
      "contact.form.desc.placeholder": "Briefly describe the vision alongside any architectural constraints...",
      "contact.form.submit": "Submit Inquiry",
      "contact.form.note": "Your details are strictly confidential. We do not share project info without consent.",
      "contact.form.success": "Inquiry submitted successfully. This is currently a frontend demo."
    }
  },
  ka: {
    translation: {
      // Nav
      "nav.home": "მთავარი",
      "nav.projects": "რჩეული ნამუშევრები",
      "nav.studio": "სტუდია",
      "nav.contact": "შეკითხვა",
      "nav.lang.switch": "English",
      
      // Footer
      "footer.social": "სოციალური მედია",
      "footer.contact": "კონტაქტი",
      "footer.rights": "ყველა უფლება დაცულია.",
      "footer.location": "თბილისი, საქართველო",
      
      // Home - Hero
      "home.hero.title": "თბილი, დახვეწილი და ღრმად პერსონალური ინტერიერები.",
      "home.hero.subtitle": "ჩვენ ვქმნით მინიმალისტურ სივრცეებს თბილისში, რომლებიც ამაღლებს თანამედროვე ცხოვრების ხარისხს. მოდით ავაშენოთ თქვენი სამყარო.",
      "home.cta.primary": "შეკითხვის გაგზავნა",
      
      // Home - Selected Works
      "home.works.title": "რჩეული ნამუშევრები",
      "home.works.link": "ყველა პროექტის ნახვა",
      
      // Home - Studio Preview
      "home.studio.title": "სტუდია",
      "home.studio.text": "NM Designs დაფუძნებულია რწმენაზე, რომ სივრცეები რადიკალურად მოქმედებს ჩვენს განწყობასა და ცხოვრებაზე. ნინის ხელმძღვანელობით, ჩვენ ვსპეციალიზდებით თბილ მინიმალიზმში — ვაშორებთ ზედმეტს, რათა გამოვავლინოთ ელეგანტურობა და სიმშვიდე თითოეულ კუთხეში.",
      "home.studio.link": "წაიკითხეთ ჩვენი ისტორია",
      
      // Home - Expertise
      "home.expertise.title": "ჩვენი ექსპერტიზა",
      "home.service.1": "სრული ინტერიერის დიზაინი",
      "home.service.2": "სივრცის და ავეჯის დაგეგმარება",
      "home.service.3": "ინდივიდუალური ავეჯის დიზაინი",
      "home.service.4": "ტექნიკური დოკუმენტაცია და ნახაზები",
      "home.service.5": "3D ვიზუალიზაცია",
      "home.service.6": "მასალების და ფინიშის შერჩევა",
      "home.service.7": "განათების და ელექტრო გეგმის დაგეგმარება",
      
      // Home - Process
      "home.process.title": "მიდგომა",
      "home.step.1.title": "აღმოჩენა",
      "home.step.1.desc": "თქვენი ხედვის, ცხოვრების წესის და არქიტექტურული კონტექსტის გაგება.",
      "home.step.2.title": "კონცეფცია",
      "home.step.2.desc": "განწყობის, განლაგების და ვიზუალური ესთეტიკის შემუშავება 3D რენდერების მეშვეობით.",
      "home.step.3.title": "დეტალიზაცია",
      "home.step.3.desc": "ზუსტი ტექნიკური ნახაზების შექმნა და მასალების შერჩევა.",
      
      // Home - CTA
      "home.cta.title": "მზად ხართ შეცვალოთ თქვენი სივრცე?",
      "home.cta.text": "ჩვენ ვიღებთ შეზღუდული რაოდენობის პროექტებს ყოველწლიურად, რათა უზრუნველვყოთ დეტალების უმაღლესი დონე.",
      "home.cta.button": "პროექტის დაწყება",

      // Home - Featured Project Categories
      "home.proj.1.cat": "ინტერიერის კონცეფცია",
      "home.proj.2.cat": "სრული რენოვაცია",
      "home.proj.3.cat": "სივრცის დაგეგმარება",

      // Projects
      "projects.title": "რჩეული ნამუშევრები",
      "projects.intro": "საცხოვრებელი ინტერიერების, კონცეფციების და რენოვაციების შერჩეული კოლექცია. ჩვენ ვუდგებით თითოეულ პროექტს, როგორც შესაძლებლობას — დავიყვანოთ სივრცე მის ყველაზე ლამაზ, ფუნქციურ არსამდე.",
      "projects.view": "პროექტის ნახვა",

      // Portfolio - Project Data
      "proj.1.type": "სრული ინტერიერის არქიტექტურა",
      "proj.1.desc": "მთის თავშესაფარი, რომელიც სიტბოს და სიმყუდროვის გარშემოა ჩამოყალიბებული — მუხის ავეჯი, ტრავერტინი და ბუხრის ინდივიდუალური კედელი.",
      "proj.2.type": "საცხოვრებელი კონცეფცია",
      "proj.2.desc": "პენტჰაუსი, რომელიც ქალაქის პანორამულ ხედებზე, ვენეციური ტინზე და თბილ ლუქსზეა ორიენტირებული.",
      "proj.3.type": "სივრცის დაგეგმარება",
      "proj.3.desc": "სივრცის მაქსიმალიზაცია კომპაქტურ ფართობში ინტეგრირებული ავეჯის მეშვეობით და უწყვეტი თბილი პალიტრით.",

      // Project Detail
      "detail.meta.location": "ადგილმდებარეობა",
      "detail.meta.scope": "მასშტაბი",
      "detail.meta.year": "წელი",
      "detail.meta.status": "სტატუსი",
      "detail.concept.title": "კონცეფცია",
      "detail.cta.title": "მოგწონთ რასაც ხედავთ?",
      "detail.cta.button": "მოითხოვეთ შეთავაზება",
      "detail.room.living": "საცხოვრებელი ოთახი",
      "detail.room.kitchen": "სამზარეულო და სასადილო",
      "detail.room.bathroom": "სააბაზანო ოთახი",
      "detail.room.plan": "სართულის გეგმა",

      // Studio
      "studio.title": "სტუდია",
      "studio.philosophy.lead": "NM Designs უდგება ინტერიერებს ტექნიკური სიმკაცრით და რედაქტირების თვალით. ჩვენ გვჯერა, რომ თბილი მინიმალიზმი არ არის მხოლოდ ვიზუალური ესთეტიკა — ეს არის დისციპლინა, რომელიც შლის არასაჭიროს სიმშვიდის, მიზნისა და ელეგანტურობის გამოსავლენად.",
      "studio.philosophy.secondary": "თბილისში დაფუძნებული სტუდია სპეციალიზდება საცხოვრებელ სივრცეებზე. ჩვენი პროცესი ავსებს ნაპრალს კონცეპტუალურ სილამაზესა და აბსოლუტურ ტექნიკურ სიზუსტეს შორის.",
      "studio.expertise.title": "ექსპერტიზის სფერო",
      
      // Studio - Service Categories
      "studio.cat.1.title": "სტრუქტურული დაგეგმვა და ტექნიკური დიზაინი",
      "studio.cat.1.item.1": "სრული ინტერიერის დიზაინი და კონცეფციის შემუშავება",
      "studio.cat.1.item.2": "ყოვლისმომცველი სივრცის დაგეგმარება",
      "studio.cat.1.item.3": "ტექნიკური ნახაზები და დიზაინ დოკუმენტაცია",
      "studio.cat.1.item.4": "განათების და ელექტრო განლაგების დაგეგმარება",
      "studio.cat.2.title": "კურაცია და ინდივიდუალური წარმოება",
      "studio.cat.2.item.1": "მასალების და ფინიშის შერჩევა",
      "studio.cat.2.item.2": "ავეჯის დაგეგმარება და შერჩევა",
      "studio.cat.2.item.3": "ინდივიდუალური ავეჯის დიზაინი და დეტალიზაცია",
      "studio.cat.3.title": "ვიზუალიზაცია და შემოქმედებითი ხელმძღვანელობა",
      "studio.cat.3.item.1": "მუდბორდები და ესთეტიკური მიმართულება",
      "studio.cat.3.item.2": "მაღალი ხარისხის 3D ვიზუალიზაციები და რენდერები",
      
      // Studio - Process
      "studio.process.title": "ჩვენი პროცესი",
      "studio.step.1.title": "კონსულტაცია და დავალების გაცნობა",
      "studio.step.1.desc": "ვიწყებთ თქვენი სივრცის არქიტექტურული შეზღუდვების და ფუნქციური მოთხოვნების ღრმა ანალიზით.",
      "studio.step.2.title": "კონცეფცია და ვიზუალიზაცია",
      "studio.step.2.desc": "ვიზუალური ენის შემუშავება მკაცრი მასალების შერჩევით და ზუსტი 3D რენდერინგით.",
      "studio.step.3.title": "ტექნიკური დოკუმენტაცია",
      "studio.step.3.desc": "კონცეფციის გადაყვანა ყოვლისმომცველ ტექნიკურ ნახაზებში, ელექტრო გეგმებში და ინდივიდუალური სამუშაოების დეტალიზაციაში.",
      
      // Studio - Expectations
      "studio.expectations.title": "კლიენტის მოლოდინები",
      "studio.exp.scope.title": "სრული მასშტაბი",
      "studio.exp.scope.text": "ჩვენ არ გთავაზობთ ნაწილობრივ კონსულტაციას ან საათობრივ დეკორირებას. ვირჩევთ სრული ოთახის ან სახლის პროექტებს, საბოლოო დიზაინის მთლიანობის უზრუნველსაყოფად.",
      "studio.exp.visual.title": "ვიზუალური სიზუსტე",
      "studio.exp.visual.text": "ჩვენ ვეყრდნობით ზუსტ 3D ვიზუალიზაციას სამუშაოების დაწყებამდე. ეს უზრუნველყოფს სრულ სიცხადეს და თავიდან აგვარიდებს ძვირადღირებულ ცვლილებებს მშენებლობის დროს.",
      "studio.exp.trust.title": "ორმხრივი ნდობა",
      "studio.exp.trust.text": "პრემიუმ დიზაინი მოითხოვს დროს და გადამწყვეტობას. ჩვენ საუკეთესოდ ვმუშაობთ კლიენტებთან, რომლებიც აფასებენ ჩვენს ექსპერტიზას.",
      
      // Studio - CTA
      "studio.cta.title": "მზად ხართ ტრანსფორმაციისთვის?",
      "studio.cta.text": "გვიამბეთ თქვენი პროექტის, ვადების და ხედვის შესახებ.",
      "studio.cta.button": "შეკითხვის გაგზავნა",

      // Contact
      "contact.title": "შეკითხვა",
      "contact.intro1": "NM Designs იღებს შეზღუდული რაოდენობის ყოვლისმომცველ პროექტებს ხარისხის უზრუნველსაყოფად.",
      "contact.intro2": "გთხოვთ შეავსოთ ქვემოთ მოცემული დეტალები. ჩვენ განვიხილავთ თქვენს მოთხოვნას და გიპასუხებთ 48 საათის განმავლობაში.",
      "contact.direct": "პირდაპირი ელ-ფოსტა",
      "contact.location": "ლოკაცია",
      "contact.social": "სოციალური ქსელები",
      
      // Contact - Form Labels
      "contact.form.name": "სრული სახელი *",
      "contact.form.email": "ელ-ფოსტა *",
      "contact.form.phone": "ტელეფონის ნომერი",
      "contact.form.loc": "პროექტის ლოკაცია",
      "contact.form.loc.placeholder": "მაგ. ვაკე, თბილისი",
      "contact.form.type": "პროექტის ტიპი *",
      "contact.form.type.select": "აირჩიეთ ტიპი",
      "contact.form.type.residential": "საცხოვრებელი მშენებლობა",
      "contact.form.type.apartment": "ბინის რენოვაცია",
      "contact.form.type.commercial": "კომერციული / ბუტიკი",
      "contact.form.type.concept": "კონცეფცია და 3D ვიზუალიზაცია",
      "contact.form.scope": "სავარაუდო მასშტაბი *",
      "contact.form.scope.select": "აირჩიეთ მასშტაბი",
      "contact.form.scope.full": "სრული ქონება",
      "contact.form.scope.partial": "რამდენიმე ოთახი",
      "contact.form.scope.single": "ერთი ოთახი / ინდივიდუალური სამუშაო",
      "contact.form.budget": "ბიუჯეტის დიაპაზონი *",
      "contact.form.budget.select": "აირჩიეთ ბიუჯეტი",
      "contact.form.budget.1": "$50,000-ზე ნაკლები",
      "contact.form.budget.2": "$50,000 – $100,000",
      "contact.form.budget.3": "$100,000 – $250,000",
      "contact.form.budget.4": "$250,000+",
      "contact.form.timeline": "სასურველი დაწყების დრო",
      "contact.form.timeline.select": "აირჩიეთ ვადა",
      "contact.form.timeline.1": "დაუყოვნებლივ",
      "contact.form.timeline.2": "1-დან 3 თვემდე",
      "contact.form.timeline.3": "3-დან 6 თვემდე",
      "contact.form.timeline.4": "მოქნილი",
      "contact.form.desc": "პროექტის აღწერა და მიზნები",
      "contact.form.desc.placeholder": "მოკლედ აღწერეთ თქვენი ხედვა და არქიტექტურული შეზღუდვები...",
      "contact.form.submit": "მოთხოვნის გაგზავნა",
      "contact.form.note": "თქვენი მონაცემები მკაცრად კონფიდენციალურია.",
      "contact.form.success": "მოთხოვნა წარმატებით გაიგზავნა. ამჟამად ეს მხოლოდ ფრონტენდის დემოა."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", 
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

syncDocumentLanguage(i18n.language);
i18n.on('languageChanged', syncDocumentLanguage);

export default i18n;
