export interface Translation {
  // Navigation & Header
  title: string;
  description: string;
  getStarted: string;
  backToHomepage: string;
  
  // Landing Page
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  trustedBy: string;
  noRegistration: string;
  
  // Features
  featuresTitle: string;
  featuresSubtitle: string;
  anonymous: string;
  anonymousDesc: string;
  instantSetup: string;
  instantSetupDesc: string;
  autoExpiry: string;
  autoExpiryDesc: string;
  realTimeInbox: string;
  realTimeInboxDesc: string;
  universalAccess: string;
  universalAccessDesc: string;
  cleanInterface: string;
  cleanInterfaceDesc: string;
  
  // How It Works
  howItWorksTitle: string;
  clickGenerate: string;
  clickGenerateDesc: string;
  copyUse: string;
  copyUseDesc: string;
  receiveRead: string;
  receiveReadDesc: string;
  
  // Email Interface
  yourTempEmail: string;
  expiredEmail: string;
  validUntil: string;
  emailExpired: string;
  copyEmailAddress: string;
  copied: string;
  generateNewEmail: string;
  generating: string;
  openInbox: string;
  timeRemaining: string;
  extend: string;
  extending: string;
  cannotExtend: string;
  
  // Messages
  noMessages: string;
  noMessagesDesc: string;
  recentMessages: string;
  inbox: string;
  sent: string;
  starred: string;
  trash: string;
  compose: string;
  searchEmails: string;
  selectAll: string;
  selected: string;
  delete: string;
  deleteAll: string;
  
  // Compose Email
  composeEmail: string;
  to: string;
  cc: string;
  bcc: string;
  subject: string;
  from: string;
  writeMessage: string;
  sendEmail: string;
  sending: string;
  cancel: string;
  emailSent: string;
  emailSentDesc: string;
  
  // Errors & Validation
  enterRecipient: string;
  enterValidEmail: string;
  enterSubject: string;
  enterMessage: string;
  failedToSend: string;
  
  // Footer
  footerText: string;
  freeService: string;
  
  // Stats
  emailsGenerated: string;
  dailyUsers: string;
  uptime: string;
  cost: string;
  
  // Use Cases
  perfectFor: string;
  onlineNeed: string;
  signupNewsletters: string;
  testRegistrations: string;
  downloadResources: string;
  accessContent: string;
  verifyEmail: string;
  protectMainEmail: string;
  
  // CTA
  readyToProtect: string;
  joinThousands: string;
  getFreeEmail: string;
  anonymous100: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation & Header
    title: "Yoo! mail - Free Temporary Email Service",
    description: "Get a free temporary email address that expires in 10 minutes. No registration required. Perfect for protecting your privacy online.",
    getStarted: "Get Free Email Now",
    backToHomepage: "← Back to homepage",
    
    // Landing Page
    heroTitle: "Temporary Email Made Simple",
    heroSubtitle: "Get a disposable email address in seconds. No registration, no spam, no hassle. Perfect for protecting your privacy online.",
    heroDescription: "Get a disposable email address in seconds. No registration, no spam, no hassle. Perfect for protecting your privacy online.",
    trustedBy: "Trusted by 50,000+ users daily",
    noRegistration: "No registration required",
    
    // Features
    featuresTitle: "Why Choose Yoo! mail?",
    featuresSubtitle: "Built for privacy, designed for simplicity. Everything you need in a temporary email service.",
    anonymous: "100% Anonymous",
    anonymousDesc: "No registration, no personal info required. Complete privacy protection.",
    instantSetup: "Instant Setup",
    instantSetupDesc: "Get your temporary email in seconds. No waiting, no verification needed.",
    autoExpiry: "Auto-Expiry",
    autoExpiryDesc: "Emails automatically expire in 10 minutes. Extend when needed.",
    realTimeInbox: "Real-time Inbox",
    realTimeInboxDesc: "Receive emails instantly with live updates. No refresh needed.",
    universalAccess: "Universal Access",
    universalAccessDesc: "Works with any website or service. No restrictions or limitations.",
    cleanInterface: "Clean Interface",
    cleanInterfaceDesc: "Gmail-like reading experience with professional email viewer.",
    
    // How It Works
    howItWorksTitle: "How It Works",
    clickGenerate: "Click & Generate",
    clickGenerateDesc: "Click 'Get Free Email Now' to instantly generate a temporary email address. No forms, no waiting.",
    copyUse: "Copy & Use",
    copyUseDesc: "Copy your temporary email and use it anywhere online. Sign up for services, download content, or test registrations.",
    receiveRead: "Receive & Read",
    receiveReadDesc: "Emails appear instantly in your inbox. Read them with our Gmail-like interface, then let them auto-expire.",
    
    // Email Interface
    yourTempEmail: "Your Temporary Email Address",
    expiredEmail: "Expired Email Address",
    validUntil: "Valid until",
    emailExpired: "This email has expired and can no longer receive messages",
    copyEmailAddress: "Copy Email Address",
    copied: "Copied!",
    generateNewEmail: "Generate New Email",
    generating: "Generating...",
    openInbox: "Open Inbox",
    timeRemaining: "Time Remaining",
    extend: "Extend +10min",
    extending: "Extending...",
    cannotExtend: "Cannot Extend",
    
    // Messages
    noMessages: "No messages yet",
    noMessagesDesc: "Send an email to your temporary address and it will appear here",
    recentMessages: "Recent Messages",
    inbox: "Inbox",
    sent: "Sent",
    starred: "Starred",
    trash: "Trash",
    compose: "Compose",
    searchEmails: "Search emails...",
    selectAll: "Select all",
    selected: "selected",
    delete: "Delete",
    deleteAll: "Delete All",
    
    // Compose Email
    composeEmail: "Compose New Email",
    to: "To:",
    cc: "Cc:",
    bcc: "Bcc:",
    subject: "Subject:",
    from: "From:",
    writeMessage: "Write your message here...",
    sendEmail: "Send Email",
    sending: "Sending Email...",
    cancel: "Cancel",
    emailSent: "Email Sent Successfully!",
    emailSentDesc: "Your email has been delivered to",
    
    // Errors & Validation
    enterRecipient: "Please enter a recipient email address.",
    enterValidEmail: "Please enter a valid email address.",
    enterSubject: "Please enter a subject for your email.",
    enterMessage: "Please enter a message body.",
    failedToSend: "Failed to send email. Please try again.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. All rights reserved.",
    freeService: "Free temporary email service for everyone",
    
    // Stats
    emailsGenerated: "Emails Generated",
    dailyUsers: "Daily Users",
    uptime: "Uptime",
    cost: "Cost",
    
    // Use Cases
    perfectFor: "Perfect For Every",
    onlineNeed: "Online Need",
    signupNewsletters: "Sign up for newsletters without spam",
    testRegistrations: "Test website registrations",
    downloadResources: "Download free resources",
    accessContent: "Access gated content",
    verifyEmail: "Verify email functionality",
    protectMainEmail: "Protect your main email",
    
    // CTA
    readyToProtect: "Ready to Protect Your Privacy?",
    joinThousands: "Join thousands of users who trust Yoo! mail for their temporary email needs.",
    getFreeEmail: "Get Your Free Email Now",
    anonymous100: "100% Anonymous"
  },
  
  es: {
    // Navigation & Header
    title: "Yoo! mail - Servicio de Email Temporal Gratuito",
    description: "Obtén una dirección de email temporal gratuita que expira en 10 minutos. No requiere registro. Perfecto para proteger tu privacidad online.",
    getStarted: "Obtener Email Gratis",
    backToHomepage: "← Volver al inicio",
    
    // Landing Page
    heroTitle: "Email Temporal Hecho Simple",
    heroSubtitle: "Obtén una dirección de email desechable en segundos. Sin registro, sin spam, sin complicaciones. Perfecto para proteger tu privacidad online.",
    heroDescription: "Obtén una dirección de email desechable en segundos. Sin registro, sin spam, sin complicaciones. Perfecto para proteger tu privacidad online.",
    trustedBy: "Confiado por más de 50,000 usuarios diarios",
    noRegistration: "No requiere registro",
    
    // Features
    featuresTitle: "¿Por Qué Elegir Yoo! mail?",
    featuresSubtitle: "Construido para la privacidad, diseñado para la simplicidad. Todo lo que necesitas en un servicio de email temporal.",
    anonymous: "100% Anónimo",
    anonymousDesc: "Sin registro, sin información personal requerida. Protección completa de privacidad.",
    instantSetup: "Configuración Instantánea",
    instantSetupDesc: "Obtén tu email temporal en segundos. Sin esperas, sin verificación necesaria.",
    autoExpiry: "Expiración Automática",
    autoExpiryDesc: "Los emails expiran automáticamente en 10 minutos. Extiende cuando sea necesario.",
    realTimeInbox: "Bandeja en Tiempo Real",
    realTimeInboxDesc: "Recibe emails instantáneamente con actualizaciones en vivo. Sin necesidad de actualizar.",
    universalAccess: "Acceso Universal",
    universalAccessDesc: "Funciona con cualquier sitio web o servicio. Sin restricciones o limitaciones.",
    cleanInterface: "Interfaz Limpia",
    cleanInterfaceDesc: "Experiencia de lectura similar a Gmail con visor de email profesional.",
    
    // How It Works
    howItWorksTitle: "Cómo Funciona",
    clickGenerate: "Hacer Clic y Generar",
    clickGenerateDesc: "Haz clic en 'Obtener Email Gratis' para generar instantáneamente una dirección de email temporal. Sin formularios, sin esperas.",
    copyUse: "Copiar y Usar",
    copyUseDesc: "Copia tu email temporal y úsalo en cualquier lugar online. Regístrate en servicios, descarga contenido o prueba registros.",
    receiveRead: "Recibir y Leer",
    receiveReadDesc: "Los emails aparecen instantáneamente en tu bandeja. Léelos con nuestra interfaz similar a Gmail, luego déjalos expirar automáticamente.",
    
    // Email Interface
    yourTempEmail: "Tu Dirección de Email Temporal",
    expiredEmail: "Dirección de Email Expirada",
    validUntil: "Válido hasta",
    emailExpired: "Este email ha expirado y ya no puede recibir mensajes",
    copyEmailAddress: "Copiar Dirección de Email",
    copied: "¡Copiado!",
    generateNewEmail: "Generar Nuevo Email",
    generating: "Generando...",
    openInbox: "Abrir Bandeja",
    timeRemaining: "Tiempo Restante",
    extend: "Extender +10min",
    extending: "Extendiendo...",
    cannotExtend: "No se Puede Extender",
    
    // Messages
    noMessages: "Aún no hay mensajes",
    noMessagesDesc: "Envía un email a tu dirección temporal y aparecerá aquí",
    recentMessages: "Mensajes Recientes",
    inbox: "Bandeja de Entrada",
    sent: "Enviados",
    starred: "Destacados",
    trash: "Papelera",
    compose: "Redactar",
    searchEmails: "Buscar emails...",
    selectAll: "Seleccionar todo",
    selected: "seleccionados",
    delete: "Eliminar",
    deleteAll: "Eliminar Todo",
    
    // Compose Email
    composeEmail: "Redactar Nuevo Email",
    to: "Para:",
    cc: "Cc:",
    bcc: "Cco:",
    subject: "Asunto:",
    from: "De:",
    writeMessage: "Escribe tu mensaje aquí...",
    sendEmail: "Enviar Email",
    sending: "Enviando Email...",
    cancel: "Cancelar",
    emailSent: "¡Email Enviado Exitosamente!",
    emailSentDesc: "Tu email ha sido entregado a",
    
    // Errors & Validation
    enterRecipient: "Por favor ingresa una dirección de email del destinatario.",
    enterValidEmail: "Por favor ingresa una dirección de email válida.",
    enterSubject: "Por favor ingresa un asunto para tu email.",
    enterMessage: "Por favor ingresa el cuerpo del mensaje.",
    failedToSend: "Error al enviar email. Por favor intenta de nuevo.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. Todos los derechos reservados.",
    freeService: "Servicio de email temporal gratuito para todos",
    
    // Stats
    emailsGenerated: "Emails Generados",
    dailyUsers: "Usuarios Diarios",
    uptime: "Tiempo Activo",
    cost: "Costo",
    
    // Use Cases
    perfectFor: "Perfecto Para Cada",
    onlineNeed: "Necesidad Online",
    signupNewsletters: "Registrarse en boletines sin spam",
    testRegistrations: "Probar registros de sitios web",
    downloadResources: "Descargar recursos gratuitos",
    accessContent: "Acceder a contenido restringido",
    verifyEmail: "Verificar funcionalidad de email",
    protectMainEmail: "Proteger tu email principal",
    
    // CTA
    readyToProtect: "¿Listo Para Proteger Tu Privacidad?",
    joinThousands: "Únete a miles de usuarios que confían en Yoo! mail para sus necesidades de email temporal.",
    getFreeEmail: "Obtén Tu Email Gratis Ahora",
    anonymous100: "100% Anónimo"
  },
  
  fr: {
    // Navigation & Header
    title: "Yoo! mail - Service d'Email Temporaire Gratuit",
    description: "Obtenez une adresse email temporaire gratuite qui expire en 10 minutes. Aucune inscription requise. Parfait pour protéger votre vie privée en ligne.",
    getStarted: "Obtenir un Email Gratuit",
    backToHomepage: "← Retour à l'accueil",
    
    // Landing Page
    heroTitle: "Email Temporaire Rendu Simple",
    heroSubtitle: "Obtenez une adresse email jetable en quelques secondes. Pas d'inscription, pas de spam, pas de tracas. Parfait pour protéger votre vie privée en ligne.",
    heroDescription: "Obtenez une adresse email jetable en quelques secondes. Pas d'inscription, pas de spam, pas de tracas. Parfait pour protéger votre vie privée en ligne.",
    trustedBy: "Approuvé par plus de 50 000 utilisateurs quotidiens",
    noRegistration: "Aucune inscription requise",
    
    // Features
    featuresTitle: "Pourquoi Choisir Yoo! mail?",
    featuresSubtitle: "Conçu pour la confidentialité, pensé pour la simplicité. Tout ce dont vous avez besoin dans un service d'email temporaire.",
    anonymous: "100% Anonyme",
    anonymousDesc: "Pas d'inscription, aucune information personnelle requise. Protection complète de la vie privée.",
    instantSetup: "Configuration Instantanée",
    instantSetupDesc: "Obtenez votre email temporaire en quelques secondes. Pas d'attente, aucune vérification nécessaire.",
    autoExpiry: "Expiration Automatique",
    autoExpiryDesc: "Les emails expirent automatiquement en 10 minutes. Prolongez si nécessaire.",
    realTimeInbox: "Boîte de Réception en Temps Réel",
    realTimeInboxDesc: "Recevez des emails instantanément avec des mises à jour en direct. Pas besoin d'actualiser.",
    universalAccess: "Accès Universel",
    universalAccessDesc: "Fonctionne avec n'importe quel site web ou service. Aucune restriction ou limitation.",
    cleanInterface: "Interface Propre",
    cleanInterfaceDesc: "Expérience de lecture similaire à Gmail avec un visualiseur d'email professionnel.",
    
    // How It Works
    howItWorksTitle: "Comment Ça Marche",
    clickGenerate: "Cliquer et Générer",
    clickGenerateDesc: "Cliquez sur 'Obtenir un Email Gratuit' pour générer instantanément une adresse email temporaire. Pas de formulaires, pas d'attente.",
    copyUse: "Copier et Utiliser",
    copyUseDesc: "Copiez votre email temporaire et utilisez-le n'importe où en ligne. Inscrivez-vous aux services, téléchargez du contenu ou testez des inscriptions.",
    receiveRead: "Recevoir et Lire",
    receiveReadDesc: "Les emails apparaissent instantanément dans votre boîte de réception. Lisez-les avec notre interface similaire à Gmail, puis laissez-les expirer automatiquement.",
    
    // Email Interface
    yourTempEmail: "Votre Adresse Email Temporaire",
    expiredEmail: "Adresse Email Expirée",
    validUntil: "Valide jusqu'à",
    emailExpired: "Cet email a expiré et ne peut plus recevoir de messages",
    copyEmailAddress: "Copier l'Adresse Email",
    copied: "Copié!",
    generateNewEmail: "Générer un Nouvel Email",
    generating: "Génération...",
    openInbox: "Ouvrir la Boîte de Réception",
    timeRemaining: "Temps Restant",
    extend: "Prolonger +10min",
    extending: "Prolongation...",
    cannotExtend: "Impossible de Prolonger",
    
    // Messages
    noMessages: "Aucun message pour le moment",
    noMessagesDesc: "Envoyez un email à votre adresse temporaire et il apparaîtra ici",
    recentMessages: "Messages Récents",
    inbox: "Boîte de Réception",
    sent: "Envoyés",
    starred: "Favoris",
    trash: "Corbeille",
    compose: "Composer",
    searchEmails: "Rechercher des emails...",
    selectAll: "Tout sélectionner",
    selected: "sélectionnés",
    delete: "Supprimer",
    deleteAll: "Tout Supprimer",
    
    // Compose Email
    composeEmail: "Composer un Nouvel Email",
    to: "À:",
    cc: "Cc:",
    bcc: "Cci:",
    subject: "Objet:",
    from: "De:",
    writeMessage: "Écrivez votre message ici...",
    sendEmail: "Envoyer l'Email",
    sending: "Envoi de l'Email...",
    cancel: "Annuler",
    emailSent: "Email Envoyé avec Succès!",
    emailSentDesc: "Votre email a été livré à",
    
    // Errors & Validation
    enterRecipient: "Veuillez saisir une adresse email de destinataire.",
    enterValidEmail: "Veuillez saisir une adresse email valide.",
    enterSubject: "Veuillez saisir un objet pour votre email.",
    enterMessage: "Veuillez saisir le corps du message.",
    failedToSend: "Échec de l'envoi de l'email. Veuillez réessayer.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. Tous droits réservés.",
    freeService: "Service d'email temporaire gratuit pour tous",
    
    // Stats
    emailsGenerated: "Emails Générés",
    dailyUsers: "Utilisateurs Quotidiens",
    uptime: "Temps de Fonctionnement",
    cost: "Coût",
    
    // Use Cases
    perfectFor: "Parfait Pour Chaque",
    onlineNeed: "Besoin en Ligne",
    signupNewsletters: "S'inscrire aux newsletters sans spam",
    testRegistrations: "Tester les inscriptions de sites web",
    downloadResources: "Télécharger des ressources gratuites",
    accessContent: "Accéder au contenu restreint",
    verifyEmail: "Vérifier la fonctionnalité email",
    protectMainEmail: "Protéger votre email principal",
    
    // CTA
    readyToProtect: "Prêt à Protéger Votre Vie Privée?",
    joinThousands: "Rejoignez des milliers d'utilisateurs qui font confiance à Yoo! mail pour leurs besoins d'email temporaire.",
    getFreeEmail: "Obtenez Votre Email Gratuit Maintenant",
    anonymous100: "100% Anonyme"
  },
  
  de: {
    // Navigation & Header
    title: "Yoo! mail - Kostenloser Temporärer E-Mail-Service",
    description: "Erhalten Sie eine kostenlose temporäre E-Mail-Adresse, die in 10 Minuten abläuft. Keine Registrierung erforderlich. Perfekt zum Schutz Ihrer Online-Privatsphäre.",
    getStarted: "Kostenlose E-Mail Erhalten",
    backToHomepage: "← Zurück zur Startseite",
    
    // Landing Page
    heroTitle: "Temporäre E-Mail Einfach Gemacht",
    heroSubtitle: "Erhalten Sie eine Wegwerf-E-Mail-Adresse in Sekunden. Keine Registrierung, kein Spam, kein Ärger. Perfekt zum Schutz Ihrer Online-Privatsphäre.",
    heroDescription: "Erhalten Sie eine Wegwerf-E-Mail-Adresse in Sekunden. Keine Registrierung, kein Spam, kein Ärger. Perfekt zum Schutz Ihrer Online-Privatsphäre.",
    trustedBy: "Vertraut von über 50.000 täglichen Nutzern",
    noRegistration: "Keine Registrierung erforderlich",
    
    // Features
    featuresTitle: "Warum Yoo! mail Wählen?",
    featuresSubtitle: "Für Privatsphäre gebaut, für Einfachheit designed. Alles was Sie in einem temporären E-Mail-Service brauchen.",
    anonymous: "100% Anonym",
    anonymousDesc: "Keine Registrierung, keine persönlichen Informationen erforderlich. Vollständiger Privatsphärenschutz.",
    instantSetup: "Sofortige Einrichtung",
    instantSetupDesc: "Erhalten Sie Ihre temporäre E-Mail in Sekunden. Kein Warten, keine Verifizierung nötig.",
    autoExpiry: "Automatisches Ablaufen",
    autoExpiryDesc: "E-Mails laufen automatisch in 10 Minuten ab. Bei Bedarf verlängern.",
    realTimeInbox: "Echtzeit-Posteingang",
    realTimeInboxDesc: "Erhalten Sie E-Mails sofort mit Live-Updates. Kein Aktualisieren nötig.",
    universalAccess: "Universeller Zugang",
    universalAccessDesc: "Funktioniert mit jeder Website oder jedem Service. Keine Einschränkungen oder Limitierungen.",
    cleanInterface: "Saubere Oberfläche",
    cleanInterfaceDesc: "Gmail-ähnliche Leseerfahrung mit professionellem E-Mail-Viewer.",
    
    // How It Works
    howItWorksTitle: "Wie Es Funktioniert",
    clickGenerate: "Klicken & Generieren",
    clickGenerateDesc: "Klicken Sie auf 'Kostenlose E-Mail Erhalten' um sofort eine temporäre E-Mail-Adresse zu generieren. Keine Formulare, kein Warten.",
    copyUse: "Kopieren & Verwenden",
    copyUseDesc: "Kopieren Sie Ihre temporäre E-Mail und verwenden Sie sie überall online. Melden Sie sich für Services an, laden Sie Inhalte herunter oder testen Sie Registrierungen.",
    receiveRead: "Empfangen & Lesen",
    receiveReadDesc: "E-Mails erscheinen sofort in Ihrem Posteingang. Lesen Sie sie mit unserer Gmail-ähnlichen Oberfläche, dann lassen Sie sie automatisch ablaufen.",
    
    // Email Interface
    yourTempEmail: "Ihre Temporäre E-Mail-Adresse",
    expiredEmail: "Abgelaufene E-Mail-Adresse",
    validUntil: "Gültig bis",
    emailExpired: "Diese E-Mail ist abgelaufen und kann keine Nachrichten mehr empfangen",
    copyEmailAddress: "E-Mail-Adresse Kopieren",
    copied: "Kopiert!",
    generateNewEmail: "Neue E-Mail Generieren",
    generating: "Generiere...",
    openInbox: "Posteingang Öffnen",
    timeRemaining: "Verbleibende Zeit",
    extend: "Verlängern +10min",
    extending: "Verlängere...",
    cannotExtend: "Kann Nicht Verlängern",
    
    // Messages
    noMessages: "Noch keine Nachrichten",
    noMessagesDesc: "Senden Sie eine E-Mail an Ihre temporäre Adresse und sie wird hier erscheinen",
    recentMessages: "Aktuelle Nachrichten",
    inbox: "Posteingang",
    sent: "Gesendet",
    starred: "Markiert",
    trash: "Papierkorb",
    compose: "Verfassen",
    searchEmails: "E-Mails suchen...",
    selectAll: "Alle auswählen",
    selected: "ausgewählt",
    delete: "Löschen",
    deleteAll: "Alle Löschen",
    
    // Compose Email
    composeEmail: "Neue E-Mail Verfassen",
    to: "An:",
    cc: "Cc:",
    bcc: "Bcc:",
    subject: "Betreff:",
    from: "Von:",
    writeMessage: "Schreiben Sie Ihre Nachricht hier...",
    sendEmail: "E-Mail Senden",
    sending: "E-Mail Wird Gesendet...",
    cancel: "Abbrechen",
    emailSent: "E-Mail Erfolgreich Gesendet!",
    emailSentDesc: "Ihre E-Mail wurde zugestellt an",
    
    // Errors & Validation
    enterRecipient: "Bitte geben Sie eine Empfänger-E-Mail-Adresse ein.",
    enterValidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    enterSubject: "Bitte geben Sie einen Betreff für Ihre E-Mail ein.",
    enterMessage: "Bitte geben Sie einen Nachrichtentext ein.",
    failedToSend: "E-Mail senden fehlgeschlagen. Bitte versuchen Sie es erneut.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. Alle Rechte vorbehalten.",
    freeService: "Kostenloser temporärer E-Mail-Service für alle",
    
    // Stats
    emailsGenerated: "E-Mails Generiert",
    dailyUsers: "Tägliche Nutzer",
    uptime: "Betriebszeit",
    cost: "Kosten",
    
    // Use Cases
    perfectFor: "Perfekt Für Jeden",
    onlineNeed: "Online-Bedarf",
    signupNewsletters: "Für Newsletter anmelden ohne Spam",
    testRegistrations: "Website-Registrierungen testen",
    downloadResources: "Kostenlose Ressourcen herunterladen",
    accessContent: "Auf gesperrte Inhalte zugreifen",
    verifyEmail: "E-Mail-Funktionalität überprüfen",
    protectMainEmail: "Ihre Haupt-E-Mail schützen",
    
    // CTA
    readyToProtect: "Bereit Ihre Privatsphäre zu Schützen?",
    joinThousands: "Schließen Sie sich Tausenden von Nutzern an, die Yoo! mail für ihre temporären E-Mail-Bedürfnisse vertrauen.",
    getFreeEmail: "Holen Sie Sich Jetzt Ihre Kostenlose E-Mail",
    anonymous100: "100% Anonym"
  },
  
  it: {
    // Navigation & Header
    title: "Yoo! mail - Servizio Email Temporanea Gratuito",
    description: "Ottieni un indirizzo email temporaneo gratuito che scade in 10 minuti. Nessuna registrazione richiesta. Perfetto per proteggere la tua privacy online.",
    getStarted: "Ottieni Email Gratuita",
    backToHomepage: "← Torna alla homepage",
    
    // Landing Page
    heroTitle: "Email Temporanea Resa Semplice",
    heroSubtitle: "Ottieni un indirizzo email usa e getta in pochi secondi. Nessuna registrazione, niente spam, nessun problema. Perfetto per proteggere la tua privacy online.",
    heroDescription: "Ottieni un indirizzo email usa e getta in pochi secondi. Nessuna registrazione, niente spam, nessun problema. Perfetto per proteggere la tua privacy online.",
    trustedBy: "Fidato da oltre 50.000 utenti giornalieri",
    noRegistration: "Nessuna registrazione richiesta",
    
    // Features
    featuresTitle: "Perché Scegliere Yoo! mail?",
    featuresSubtitle: "Costruito per la privacy, progettato per la semplicità. Tutto ciò di cui hai bisogno in un servizio di email temporanea.",
    anonymous: "100% Anonimo",
    anonymousDesc: "Nessuna registrazione, nessuna informazione personale richiesta. Protezione completa della privacy.",
    instantSetup: "Configurazione Istantanea",
    instantSetupDesc: "Ottieni la tua email temporanea in pochi secondi. Nessuna attesa, nessuna verifica necessaria.",
    autoExpiry: "Scadenza Automatica",
    autoExpiryDesc: "Le email scadono automaticamente in 10 minuti. Estendi quando necessario.",
    realTimeInbox: "Casella di Posta in Tempo Reale",
    realTimeInboxDesc: "Ricevi email istantaneamente con aggiornamenti dal vivo. Nessun aggiornamento necessario.",
    universalAccess: "Accesso Universale",
    universalAccessDesc: "Funziona con qualsiasi sito web o servizio. Nessuna restrizione o limitazione.",
    cleanInterface: "Interfaccia Pulita",
    cleanInterfaceDesc: "Esperienza di lettura simile a Gmail con visualizzatore email professionale.",
    
    // How It Works
    howItWorksTitle: "Come Funziona",
    clickGenerate: "Clicca e Genera",
    clickGenerateDesc: "Clicca su 'Ottieni Email Gratuita' per generare istantaneamente un indirizzo email temporaneo. Nessun modulo, nessuna attesa.",
    copyUse: "Copia e Usa",
    copyUseDesc: "Copia la tua email temporanea e usala ovunque online. Registrati ai servizi, scarica contenuti o testa registrazioni.",
    receiveRead: "Ricevi e Leggi",
    receiveReadDesc: "Le email appaiono istantaneamente nella tua casella di posta. Leggile con la nostra interfaccia simile a Gmail, poi lasciale scadere automaticamente.",
    
    // Email Interface
    yourTempEmail: "Il Tuo Indirizzo Email Temporaneo",
    expiredEmail: "Indirizzo Email Scaduto",
    validUntil: "Valido fino a",
    emailExpired: "Questa email è scaduta e non può più ricevere messaggi",
    copyEmailAddress: "Copia Indirizzo Email",
    copied: "Copiato!",
    generateNewEmail: "Genera Nuova Email",
    generating: "Generando...",
    openInbox: "Apri Casella di Posta",
    timeRemaining: "Tempo Rimanente",
    extend: "Estendi +10min",
    extending: "Estendendo...",
    cannotExtend: "Non Può Estendere",
    
    // Messages
    noMessages: "Nessun messaggio ancora",
    noMessagesDesc: "Invia un'email al tuo indirizzo temporaneo e apparirà qui",
    recentMessages: "Messaggi Recenti",
    inbox: "Posta in Arrivo",
    sent: "Inviati",
    starred: "Preferiti",
    trash: "Cestino",
    compose: "Componi",
    searchEmails: "Cerca email...",
    selectAll: "Seleziona tutto",
    selected: "selezionati",
    delete: "Elimina",
    deleteAll: "Elimina Tutto",
    
    // Compose Email
    composeEmail: "Componi Nuova Email",
    to: "A:",
    cc: "Cc:",
    bcc: "Ccn:",
    subject: "Oggetto:",
    from: "Da:",
    writeMessage: "Scrivi il tuo messaggio qui...",
    sendEmail: "Invia Email",
    sending: "Invio Email...",
    cancel: "Annulla",
    emailSent: "Email Inviata con Successo!",
    emailSentDesc: "La tua email è stata consegnata a",
    
    // Errors & Validation
    enterRecipient: "Per favore inserisci un indirizzo email del destinatario.",
    enterValidEmail: "Per favore inserisci un indirizzo email valido.",
    enterSubject: "Per favore inserisci un oggetto per la tua email.",
    enterMessage: "Per favore inserisci il corpo del messaggio.",
    failedToSend: "Invio email fallito. Per favore riprova.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. Tutti i diritti riservati.",
    freeService: "Servizio email temporaneo gratuito per tutti",
    
    // Stats
    emailsGenerated: "Email Generate",
    dailyUsers: "Utenti Giornalieri",
    uptime: "Tempo di Attività",
    cost: "Costo",
    
    // Use Cases
    perfectFor: "Perfetto Per Ogni",
    onlineNeed: "Necessità Online",
    signupNewsletters: "Iscriversi alle newsletter senza spam",
    testRegistrations: "Testare registrazioni di siti web",
    downloadResources: "Scaricare risorse gratuite",
    accessContent: "Accedere a contenuti riservati",
    verifyEmail: "Verificare funzionalità email",
    protectMainEmail: "Proteggere la tua email principale",
    
    // CTA
    readyToProtect: "Pronto a Proteggere la Tua Privacy?",
    joinThousands: "Unisciti a migliaia di utenti che si fidano di Yoo! mail per le loro esigenze di email temporanea.",
    getFreeEmail: "Ottieni la Tua Email Gratuita Ora",
    anonymous100: "100% Anonimo"
  },
  
  pt: {
    // Navigation & Header
    title: "Yoo! mail - Serviço de Email Temporário Gratuito",
    description: "Obtenha um endereço de email temporário gratuito que expira em 10 minutos. Nenhum registro necessário. Perfeito para proteger sua privacidade online.",
    getStarted: "Obter Email Grátis",
    backToHomepage: "← Voltar ao início",
    
    // Landing Page
    heroTitle: "Email Temporário Feito Simples",
    heroSubtitle: "Obtenha um endereço de email descartável em segundos. Sem registro, sem spam, sem complicações. Perfeito para proteger sua privacidade online.",
    heroDescription: "Obtenha um endereço de email descartável em segundos. Sem registro, sem spam, sem complicações. Perfeito para proteger sua privacidade online.",
    trustedBy: "Confiado por mais de 50.000 usuários diários",
    noRegistration: "Nenhum registro necessário",
    
    // Features
    featuresTitle: "Por Que Escolher Yoo! mail?",
    featuresSubtitle: "Construído para privacidade, projetado para simplicidade. Tudo que você precisa em um serviço de email temporário.",
    anonymous: "100% Anônimo",
    anonymousDesc: "Sem registro, nenhuma informação pessoal necessária. Proteção completa de privacidade.",
    instantSetup: "Configuração Instantânea",
    instantSetupDesc: "Obtenha seu email temporário em segundos. Sem espera, sem verificação necessária.",
    autoExpiry: "Expiração Automática",
    autoExpiryDesc: "Emails expiram automaticamente em 10 minutos. Estenda quando necessário.",
    realTimeInbox: "Caixa de Entrada em Tempo Real",
    realTimeInboxDesc: "Receba emails instantaneamente com atualizações ao vivo. Sem necessidade de atualizar.",
    universalAccess: "Acesso Universal",
    universalAccessDesc: "Funciona com qualquer site ou serviço. Sem restrições ou limitações.",
    cleanInterface: "Interface Limpa",
    cleanInterfaceDesc: "Experiência de leitura similar ao Gmail com visualizador de email profissional.",
    
    // How It Works
    howItWorksTitle: "Como Funciona",
    clickGenerate: "Clique e Gere",
    clickGenerateDesc: "Clique em 'Obter Email Grátis' para gerar instantaneamente um endereço de email temporário. Sem formulários, sem espera.",
    copyUse: "Copie e Use",
    copyUseDesc: "Copie seu email temporário e use em qualquer lugar online. Registre-se em serviços, baixe conteúdo ou teste registros.",
    receiveRead: "Receba e Leia",
    receiveReadDesc: "Emails aparecem instantaneamente em sua caixa de entrada. Leia-os com nossa interface similar ao Gmail, depois deixe-os expirar automaticamente.",
    
    // Email Interface
    yourTempEmail: "Seu Endereço de Email Temporário",
    expiredEmail: "Endereço de Email Expirado",
    validUntil: "Válido até",
    emailExpired: "Este email expirou e não pode mais receber mensagens",
    copyEmailAddress: "Copiar Endereço de Email",
    copied: "Copiado!",
    generateNewEmail: "Gerar Novo Email",
    generating: "Gerando...",
    openInbox: "Abrir Caixa de Entrada",
    timeRemaining: "Tempo Restante",
    extend: "Estender +10min",
    extending: "Estendendo...",
    cannotExtend: "Não Pode Estender",
    
    // Messages
    noMessages: "Nenhuma mensagem ainda",
    noMessagesDesc: "Envie um email para seu endereço temporário e ele aparecerá aqui",
    recentMessages: "Mensagens Recentes",
    inbox: "Caixa de Entrada",
    sent: "Enviados",
    starred: "Favoritos",
    trash: "Lixeira",
    compose: "Compor",
    searchEmails: "Pesquisar emails...",
    selectAll: "Selecionar tudo",
    selected: "selecionados",
    delete: "Excluir",
    deleteAll: "Excluir Tudo",
    
    // Compose Email
    composeEmail: "Compor Novo Email",
    to: "Para:",
    cc: "Cc:",
    bcc: "Cco:",
    subject: "Assunto:",
    from: "De:",
    writeMessage: "Escreva sua mensagem aqui...",
    sendEmail: "Enviar Email",
    sending: "Enviando Email...",
    cancel: "Cancelar",
    emailSent: "Email Enviado com Sucesso!",
    emailSentDesc: "Seu email foi entregue para",
    
    // Errors & Validation
    enterRecipient: "Por favor, insira um endereço de email do destinatário.",
    enterValidEmail: "Por favor, insira um endereço de email válido.",
    enterSubject: "Por favor, insira um assunto para seu email.",
    enterMessage: "Por favor, insira o corpo da mensagem.",
    failedToSend: "Falha ao enviar email. Por favor, tente novamente.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. Todos os direitos reservados.",
    freeService: "Serviço de email temporário gratuito para todos",
    
    // Stats
    emailsGenerated: "Emails Gerados",
    dailyUsers: "Usuários Diários",
    uptime: "Tempo Ativo",
    cost: "Custo",
    
    // Use Cases
    perfectFor: "Perfeito Para Cada",
    onlineNeed: "Necessidade Online",
    signupNewsletters: "Inscrever-se em newsletters sem spam",
    testRegistrations: "Testar registros de sites",
    downloadResources: "Baixar recursos gratuitos",
    accessContent: "Acessar conteúdo restrito",
    verifyEmail: "Verificar funcionalidade de email",
    protectMainEmail: "Proteger seu email principal",
    
    // CTA
    readyToProtect: "Pronto Para Proteger Sua Privacidade?",
    joinThousands: "Junte-se a milhares de usuários que confiam no Yoo! mail para suas necessidades de email temporário.",
    getFreeEmail: "Obtenha Seu Email Grátis Agora",
    anonymous100: "100% Anônimo"
  },
  
  ru: {
    // Navigation & Header
    title: "Yoo! mail - Бесплатный Сервис Временной Почты",
    description: "Получите бесплатный временный адрес электронной почты, который истекает через 10 минут. Регистрация не требуется. Идеально для защиты вашей конфиденциальности в интернете.",
    getStarted: "Получить Бесплатную Почту",
    backToHomepage: "← Вернуться на главную",
    
    // Landing Page
    heroTitle: "Временная Почта Стала Простой",
    heroSubtitle: "Получите одноразовый адрес электронной почты за секунды. Без регистрации, без спама, без проблем. Идеально для защиты вашей конфиденциальности в интернете.",
    heroDescription: "Получите одноразовый адрес электронной почты за секунды. Без регистрации, без спама, без проблем. Идеально для защиты вашей конфиденциальности в интернете.",
    trustedBy: "Доверяют более 50 000 пользователей ежедневно",
    noRegistration: "Регистрация не требуется",
    
    // Features
    featuresTitle: "Почему Выбрать Yoo! mail?",
    featuresSubtitle: "Создан для конфиденциальности, разработан для простоты. Все, что вам нужно в сервисе временной почты.",
    anonymous: "100% Анонимно",
    anonymousDesc: "Без регистрации, без личной информации. Полная защита конфиденциальности.",
    instantSetup: "Мгновенная Настройка",
    instantSetupDesc: "Получите временную почту за секунды. Без ожидания, без верификации.",
    autoExpiry: "Автоматическое Истечение",
    autoExpiryDesc: "Письма автоматически истекают через 10 минут. Продлевайте при необходимости.",
    realTimeInbox: "Почтовый Ящик в Реальном Времени",
    realTimeInboxDesc: "Получайте письма мгновенно с живыми обновлениями. Без необходимости обновления.",
    universalAccess: "Универсальный Доступ",
    universalAccessDesc: "Работает с любым сайтом или сервисом. Без ограничений или лимитов.",
    cleanInterface: "Чистый Интерфейс",
    cleanInterfaceDesc: "Опыт чтения как в Gmail с профессиональным просмотрщиком писем.",
    
    // How It Works
    howItWorksTitle: "Как Это Работает",
    clickGenerate: "Нажмите и Создайте",
    clickGenerateDesc: "Нажмите 'Получить Бесплатную Почту' чтобы мгновенно создать временный адрес электронной почты. Без форм, без ожидания.",
    copyUse: "Скопируйте и Используйте",
    copyUseDesc: "Скопируйте временную почту и используйте где угодно в интернете. Регистрируйтесь в сервисах, скачивайте контент или тестируйте регистрации.",
    receiveRead: "Получайте и Читайте",
    receiveReadDesc: "Письма появляются мгновенно в вашем почтовом ящике. Читайте их с нашим интерфейсом как в Gmail, затем позвольте им автоматически истечь.",
    
    // Email Interface
    yourTempEmail: "Ваш Временный Адрес Электронной Почты",
    expiredEmail: "Истекший Адрес Электронной Почты",
    validUntil: "Действителен до",
    emailExpired: "Эта почта истекла и больше не может получать сообщения",
    copyEmailAddress: "Скопировать Адрес Почты",
    copied: "Скопировано!",
    generateNewEmail: "Создать Новую Почту",
    generating: "Создание...",
    openInbox: "Открыть Почтовый Ящик",
    timeRemaining: "Оставшееся Время",
    extend: "Продлить +10мин",
    extending: "Продление...",
    cannotExtend: "Нельзя Продлить",
    
    // Messages
    noMessages: "Пока нет сообщений",
    noMessagesDesc: "Отправьте письмо на ваш временный адрес и оно появится здесь",
    recentMessages: "Недавние Сообщения",
    inbox: "Входящие",
    sent: "Отправленные",
    starred: "Помеченные",
    trash: "Корзина",
    compose: "Написать",
    searchEmails: "Поиск писем...",
    selectAll: "Выбрать все",
    selected: "выбрано",
    delete: "Удалить",
    deleteAll: "Удалить Все",
    
    // Compose Email
    composeEmail: "Написать Новое Письмо",
    to: "Кому:",
    cc: "Копия:",
    bcc: "Скрытая копия:",
    subject: "Тема:",
    from: "От:",
    writeMessage: "Напишите ваше сообщение здесь...",
    sendEmail: "Отправить Письмо",
    sending: "Отправка Письма...",
    cancel: "Отмена",
    emailSent: "Письмо Успешно Отправлено!",
    emailSentDesc: "Ваше письмо доставлено",
    
    // Errors & Validation
    enterRecipient: "Пожалуйста, введите адрес электронной почты получателя.",
    enterValidEmail: "Пожалуйста, введите действительный адрес электронной почты.",
    enterSubject: "Пожалуйста, введите тему для вашего письма.",
    enterMessage: "Пожалуйста, введите текст сообщения.",
    failedToSend: "Не удалось отправить письмо. Пожалуйста, попробуйте снова.",
    
    // Footer
    footerText: "© 2025 Yoo! mail. Все права защищены.",
    freeService: "Бесплатный сервис временной почты для всех",
    
    // Stats
    emailsGenerated: "Писем Создано",
    dailyUsers: "Ежедневных Пользователей",
    uptime: "Время Работы",
    cost: "Стоимость",
    
    // Use Cases
    perfectFor: "Идеально Для Каждой",
    onlineNeed: "Онлайн Потребности",
    signupNewsletters: "Подписка на рассылки без спама",
    testRegistrations: "Тестирование регистраций на сайтах",
    downloadResources: "Скачивание бесплатных ресурсов",
    accessContent: "Доступ к закрытому контенту",
    verifyEmail: "Проверка функциональности почты",
    protectMainEmail: "Защита основной почты",
    
    // CTA
    readyToProtect: "Готовы Защитить Вашу Конфиденциальность?",
    joinThousands: "Присоединяйтесь к тысячам пользователей, которые доверяют Yoo! mail для своих потребностей во временной почте.",
    getFreeEmail: "Получите Вашу Бесплатную Почту Сейчас",
    anonymous100: "100% Анонимно"
  },
  
  ja: {
    // Navigation & Header
    title: "Yoo! mail - 無料一時メールサービス",
    description: "10分で期限切れになる無料の一時メールアドレスを取得。登録不要。オンラインプライバシー保護に最適。",
    getStarted: "無料メールを取得",
    backToHomepage: "← ホームページに戻る",
    
    // Landing Page
    heroTitle: "一時メールをシンプルに",
    heroSubtitle: "数秒で使い捨てメールアドレスを取得。登録なし、スパムなし、面倒なし。オンラインプライバシー保護に最適。",
    heroDescription: "数秒で使い捨てメールアドレスを取得。登録なし、スパムなし、面倒なし。オンラインプライバシー保護に最適。",
    trustedBy: "毎日50,000人以上のユーザーに信頼されています",
    noRegistration: "登録不要",
    
    // Features
    featuresTitle: "なぜYoo! mailを選ぶのか？",
    featuresSubtitle: "プライバシーのために構築され、シンプルさのために設計されました。一時メールサービスに必要なすべて。",
    anonymous: "100%匿名",
    anonymousDesc: "登録なし、個人情報不要。完全なプライバシー保護。",
    instantSetup: "即座セットアップ",
    instantSetupDesc: "数秒で一時メールを取得。待機なし、認証不要。",
    autoExpiry: "自動期限切れ",
    autoExpiryDesc: "メールは10分で自動的に期限切れ。必要に応じて延長。",
    realTimeInbox: "リアルタイム受信箱",
    realTimeInboxDesc: "ライブ更新でメールを即座に受信。更新不要。",
    universalAccess: "ユニバーサルアクセス",
    universalAccessDesc: "あらゆるウェブサイトやサービスで動作。制限や制限なし。",
    cleanInterface: "クリーンインターフェース",
    cleanInterfaceDesc: "プロフェッショナルなメールビューアーでGmailのような読書体験。",
    
    // How It Works
    howItWorksTitle: "使い方",
    clickGenerate: "クリックして生成",
    clickGenerateDesc: "「無料メールを取得」をクリックして一時メールアドレスを即座に生成。フォームなし、待機なし。",
    copyUse: "コピーして使用",
    copyUseDesc: "一時メールをコピーしてオンラインのどこでも使用。サービスに登録、コンテンツをダウンロード、または登録をテスト。",
    receiveRead: "受信して読む",
    receiveReadDesc: "メールは受信箱に即座に表示。Gmailのようなインターフェースで読み、自動的に期限切れにする。",
    
    // Email Interface
    yourTempEmail: "あなたの一時メールアドレス",
    expiredEmail: "期限切れメールアドレス",
    validUntil: "有効期限",
    emailExpired: "このメールは期限切れで、もうメッセージを受信できません",
    copyEmailAddress: "メールアドレスをコピー",
    copied: "コピーしました！",
    generateNewEmail: "新しいメールを生成",
    generating: "生成中...",
    openInbox: "受信箱を開く",
    timeRemaining: "残り時間",
    extend: "延長 +10分",
    extending: "延長中...",
    cannotExtend: "延長できません",
    
    // Messages
    noMessages: "まだメッセージがありません",
    noMessagesDesc: "一時アドレスにメールを送信すると、ここに表示されます",
    recentMessages: "最近のメッセージ",
    inbox: "受信箱",
    sent: "送信済み",
    starred: "スター付き",
    trash: "ゴミ箱",
    compose: "作成",
    searchEmails: "メールを検索...",
    selectAll: "すべて選択",
    selected: "選択済み",
    delete: "削除",
    deleteAll: "すべて削除",
    
    // Compose Email
    composeEmail: "新しいメールを作成",
    to: "宛先:",
    cc: "Cc:",
    bcc: "Bcc:",
    subject: "件名:",
    from: "差出人:",
    writeMessage: "ここにメッセージを書いてください...",
    sendEmail: "メールを送信",
    sending: "メール送信中...",
    cancel: "キャンセル",
    emailSent: "メールが正常に送信されました！",
    emailSentDesc: "あなたのメールが配信されました",
    
    // Errors & Validation
    enterRecipient: "受信者のメールアドレスを入力してください。",
    enterValidEmail: "有効なメールアドレスを入力してください。",
    enterSubject: "メールの件名を入力してください。",
    enterMessage: "メッセージ本文を入力してください。",
    failedToSend: "メールの送信に失敗しました。もう一度お試しください。",
    
    // Footer
    footerText: "© 2025 Yoo! mail. 全著作権所有。",
    freeService: "すべての人のための無料一時メールサービス",
    
    // Stats
    emailsGenerated: "生成されたメール",
    dailyUsers: "日次ユーザー",
    uptime: "稼働時間",
    cost: "コスト",
    
    // Use Cases
    perfectFor: "あらゆる",
    onlineNeed: "オンラインニーズに最適",
    signupNewsletters: "スパムなしでニュースレターに登録",
    testRegistrations: "ウェブサイト登録をテスト",
    downloadResources: "無料リソースをダウンロード",
    accessContent: "制限されたコンテンツにアクセス",
    verifyEmail: "メール機能を確認",
    protectMainEmail: "メインメールを保護",
    
    // CTA
    readyToProtect: "プライバシーを保護する準備はできましたか？",
    joinThousands: "一時メールのニーズでYoo! mailを信頼する何千ものユーザーに参加してください。",
    getFreeEmail: "今すぐ無料メールを取得",
    anonymous100: "100%匿名"
  },
  
  zh: {
    // Navigation & Header
    title: "Yoo! mail - 免费临时邮箱服务",
    description: "获取10分钟后过期的免费临时邮箱地址。无需注册。完美保护您的在线隐私。",
    getStarted: "获取免费邮箱",
    backToHomepage: "← 返回首页",
    
    // Landing Page
    heroTitle: "临时邮箱变得简单",
    heroSubtitle: "几秒钟内获取一次性邮箱地址。无需注册，无垃圾邮件，无麻烦。完美保护您的在线隐私。",
    heroDescription: "几秒钟内获取一次性邮箱地址。无需注册，无垃圾邮件，无麻烦。完美保护您的在线隐私。",
    trustedBy: "每日超过50,000用户信赖",
    noRegistration: "无需注册",
    
    // Features
    featuresTitle: "为什么选择Yoo! mail？",
    featuresSubtitle: "为隐私而构建，为简单而设计。临时邮箱服务所需的一切。",
    anonymous: "100%匿名",
    anonymousDesc: "无需注册，无需个人信息。完全隐私保护。",
    instantSetup: "即时设置",
    instantSetupDesc: "几秒钟内获取临时邮箱。无需等待，无需验证。",
    autoExpiry: "自动过期",
    autoExpiryDesc: "邮件10分钟后自动过期。需要时可延长。",
    realTimeInbox: "实时收件箱",
    realTimeInboxDesc: "通过实时更新即时接收邮件。无需刷新。",
    universalAccess: "通用访问",
    universalAccessDesc: "适用于任何网站或服务。无限制或限制。",
    cleanInterface: "简洁界面",
    cleanInterfaceDesc: "类似Gmail的阅读体验，专业邮件查看器。",
    
    // How It Works
    howItWorksTitle: "工作原理",
    clickGenerate: "点击生成",
    clickGenerateDesc: "点击\"获取免费邮箱\"即时生成临时邮箱地址。无表单，无等待。",
    copyUse: "复制使用",
    copyUseDesc: "复制临时邮箱并在线上任何地方使用。注册服务，下载内容或测试注册。",
    receiveRead: "接收阅读",
    receiveReadDesc: "邮件即时出现在收件箱中。使用类似Gmail的界面阅读，然后让它们自动过期。",
    
    // Email Interface
    yourTempEmail: "您的临时邮箱地址",
    expiredEmail: "已过期邮箱地址",
    validUntil: "有效期至",
    emailExpired: "此邮箱已过期，无法再接收消息",
    copyEmailAddress: "复制邮箱地址",
    copied: "已复制！",
    generateNewEmail: "生成新邮箱",
    generating: "生成中...",
    openInbox: "打开收件箱",
    timeRemaining: "剩余时间",
    extend: "延长 +10分钟",
    extending: "延长中...",
    cannotExtend: "无法延长",
    
    // Messages
    noMessages: "暂无消息",
    noMessagesDesc: "向您的临时地址发送邮件，它将出现在这里",
    recentMessages: "最近消息",
    inbox: "收件箱",
    sent: "已发送",
    starred: "已加星标",
    trash: "垃圾箱",
    compose: "撰写",
    searchEmails: "搜索邮件...",
    selectAll: "全选",
    selected: "已选择",
    delete: "删除",
    deleteAll: "全部删除",
    
    // Compose Email
    composeEmail: "撰写新邮件",
    to: "收件人:",
    cc: "抄送:",
    bcc: "密送:",
    subject: "主题:",
    from: "发件人:",
    writeMessage: "在此写下您的消息...",
    sendEmail: "发送邮件",
    sending: "发送邮件中...",
    cancel: "取消",
    emailSent: "邮件发送成功！",
    emailSentDesc: "您的邮件已送达",
    
    // Errors & Validation
    enterRecipient: "请输入收件人邮箱地址。",
    enterValidEmail: "请输入有效的邮箱地址。",
    enterSubject: "请输入邮件主题。",
    enterMessage: "请输入消息正文。",
    failedToSend: "邮件发送失败。请重试。",
    
    // Footer
    footerText: "© 2025 Yoo! mail. 保留所有权利。",
    freeService: "为所有人提供的免费临时邮箱服务",
    
    // Stats
    emailsGenerated: "已生成邮件",
    dailyUsers: "日活用户",
    uptime: "正常运行时间",
    cost: "费用",
    
    // Use Cases
    perfectFor: "完美适用于每个",
    onlineNeed: "在线需求",
    signupNewsletters: "无垃圾邮件注册新闻通讯",
    testRegistrations: "测试网站注册",
    downloadResources: "下载免费资源",
    accessContent: "访问受限内容",
    verifyEmail: "验证邮件功能",
    protectMainEmail: "保护主邮箱",
    
    // CTA
    readyToProtect: "准备保护您的隐私？",
    joinThousands: "加入数千名信赖Yoo! mail满足临时邮箱需求的用户。",
    getFreeEmail: "立即获取免费邮箱",
    anonymous100: "100%匿名"
  }
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations.en;
};

export const getSupportedLanguages = () => {
  return [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' }
  ];
};