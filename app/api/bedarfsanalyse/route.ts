import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENTS = ['t.pirnay85@gmail.com', 'felix.schulze@why-worry.eu'];

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      throw new Error('Email configuration is missing');
    }

    const data = await request.json();
    
    // Basic validation
    if (!data.companyName || !data.contactName || !data.contactEmail || !data.positionTitle) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      throw new Error('Email configuration is invalid');
    }

    // Format the email content
    const formattedData = formatFormData(data);

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: RECIPIENTS.join(', '),
      subject: `Neue Bedarfsanalyse: ${data.positionTitle} - ${data.companyName}`,
      text: `
Neue Bedarfsanalyse von ${data.contactName} (${data.companyName})

${formattedData.text}
      `,
      html: `
<h2>Neue Bedarfsanalyse</h2>
<p><strong>Position:</strong> ${data.positionTitle}</p>
<p><strong>Unternehmen:</strong> ${data.companyName}</p>
<p><strong>Ansprechpartner:</strong> ${data.contactName}</p>
<p><strong>E-Mail:</strong> ${data.contactEmail}</p>
<p><strong>Telefon:</strong> ${data.contactPhone || 'Nicht angegeben'}</p>

${formattedData.html}
      `,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ success: true });
    } catch (sendError) {
      console.error('Failed to send email:', sendError);
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error in bedarfsanalyse form handler:', error);
    
    // Return user-friendly error message
    let errorMessage = 'Es gab einen Fehler beim Senden Ihrer Anfrage.';
    
    if (error instanceof Error) {
      if (error.message.includes('configuration')) {
        errorMessage = 'Es gibt ein Problem mit der E-Mail-Konfiguration. Bitte kontaktieren Sie uns telefonisch.';
      } else if (error.message.includes('verification')) {
        errorMessage = 'Die E-Mail-Verbindung konnte nicht hergestellt werden. Bitte versuchen Sie es später erneut.';
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// Helper function to format form data for email
function formatFormData(data: any) {
  let textContent = '';
  let htmlContent = '';

  // Customer and contact information
  htmlContent += '<h3>1. Kunde und Ansprechpartner</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  htmlContent += formatRow('Unternehmensname', data.companyName);
  htmlContent += formatRow('Ansprechpartner', data.contactName);
  htmlContent += formatRow('Position/Funktion', data.contactPosition);
  htmlContent += formatRow('E-Mail', data.contactEmail);
  htmlContent += formatRow('Telefon', data.contactPhone);
  htmlContent += formatRow('Adresse', data.contactAddress);
  htmlContent += '</table>';

  // Website analysis
  htmlContent += '<h3>2. Websiteanalyse</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  htmlContent += formatRow('Website vorhanden', data.hasWebsite === true ? 'Ja' : 'Nein');
  if (data.hasWebsite) {
    htmlContent += formatRow('Website URL', data.websiteUrl);
  }
  htmlContent += formatRow('Karrierewebsite vorhanden', data.hasCareerWebsite === true ? 'Ja' : 'Nein');
  if (data.hasCareerWebsite) {
    htmlContent += formatRow('Karrierewebsite URL', data.careerWebsiteUrl);
  }
  
  // Social Media
  let socialMediaText = [];
  if (data.socialMedia?.instagram) socialMediaText.push(`Instagram: ${data.socialMedia.instagram}`);
  if (data.socialMedia?.facebook) socialMediaText.push(`Facebook: ${data.socialMedia.facebook}`);
  if (data.socialMedia?.linkedin) socialMediaText.push(`LinkedIn: ${data.socialMedia.linkedin}`);
  
  htmlContent += formatRow('Social Media', socialMediaText.length > 0 ? socialMediaText.join('<br>') : 'Nicht angegeben');
  htmlContent += '</table>';

  // Position description
  htmlContent += '<h3>3. Positionsbeschreibung</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  htmlContent += formatRow('Positionstitel', data.positionTitle);
  htmlContent += formatRow('Unternehmensbeschreibung', data.companyDescription);
  
  // Map work location values
  let workLocationLabel = '';
  if (data.workLocation === 'vor_ort') workLocationLabel = 'Vor Ort';
  else if (data.workLocation === 'remote') workLocationLabel = 'Remote';
  else if (data.workLocation === 'hybrid') workLocationLabel = 'Hybrid';
  else workLocationLabel = data.workLocation || 'Nicht angegeben';
  
  htmlContent += formatRow('Arbeitsort', workLocationLabel);
  htmlContent += formatRow('Arbeitszeiten', data.workHours);
  
  // Map hiring reason values
  let hiringReasonLabel = '';
  if (data.hiringReason === 'wachstum') hiringReasonLabel = 'Wachstum';
  else if (data.hiringReason === 'neubesetzung') hiringReasonLabel = 'Neubesetzung';
  else if (data.hiringReason === 'nachbesetzung') hiringReasonLabel = 'Nachbesetzung';
  else hiringReasonLabel = data.hiringReason || 'Nicht angegeben';
  
  htmlContent += formatRow('Besetzungsgrund', hiringReasonLabel);
  htmlContent += formatRow('Entwicklungsmöglichkeiten', data.developmentOpportunities);
  
  // Format salary information
  let salaryInfo = '';
  if (data.targetSalaryFixed) salaryInfo += `${data.targetSalaryFixed} € (fix)`;
  if (data.targetSalaryVariable) {
    if (salaryInfo) salaryInfo += ' + ';
    salaryInfo += `${data.targetSalaryVariable} € (variabel)`;
  }
  
  htmlContent += formatRow('Zielgehalt', salaryInfo || 'Nicht angegeben');
  htmlContent += formatRow('Aufgabenbeschreibung', data.jobDescription);
  htmlContent += '</table>';

  // Team and structure
  htmlContent += '<h3>4. Team und Struktur</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  htmlContent += formatRow('Teamgröße', data.teamSize || 'Nicht angegeben');
  htmlContent += formatRow('Teamstruktur', data.teamStructure);
  htmlContent += formatRow('Vorgesetzter', data.supervisor);
  htmlContent += formatRow('Mitarbeiterführung', data.hasManagementResponsibility === true ? 'Ja' : 'Nein');
  
  if (data.hasManagementResponsibility === true) {
    htmlContent += formatRow('Anzahl unterstellter Mitarbeiter', data.numberOfDirectReports || 'Nicht angegeben');
  }
  
  htmlContent += '</table>';

  // Requirements profile
  htmlContent += '<h3>5. Anforderungsprofil</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  
  // Map education values to readable labels
  const educationMap: {[key: string]: string} = {
    'hauptschulabschluss': 'Hauptschulabschluss',
    'mittlere_reife': 'Mittlere Reife',
    'abitur': 'Abitur',
    'ausbildung': 'Abgeschlossene Ausbildung',
    'meister': 'Meister/Techniker',
    'bachelor': 'Bachelor',
    'master': 'Master',
    'promotion': 'Promotion'
  };
  
  let educationLabels = data.requiredEducation?.map((edu: string) => educationMap[edu] || edu).join(', ');
  htmlContent += formatRow('Erforderliche Ausbildung', educationLabels || 'Nicht angegeben');
  
  // Format years of experience
  let experienceText = 'Nicht angegeben';
  if (data.yearsOfExperience === 0) {
    experienceText = 'Keine Erfahrung erforderlich';
  } else if (data.yearsOfExperience === 20) {
    experienceText = '20+ Jahre';
  } else if (data.yearsOfExperience > 0) {
    experienceText = `${data.yearsOfExperience} Jahre`;
  }
  
  htmlContent += formatRow('Berufserfahrung', experienceText);
  htmlContent += formatRow('Must-have Skills', data.mustHaveSkills);
  htmlContent += formatRow('Nice-to-have Skills', data.niceToHaveSkills);
  htmlContent += formatRow('Erforderliche Zertifikate', data.requiredCertificates);
  htmlContent += formatRow('Wünschenswerte Zertifikate', data.desiredCertificates);
  
  // Format language skills
  let languageText = '';
  if (data.languageSkills && data.languageSkills.length > 0) {
    languageText = data.languageSkills
      .filter((skill: any) => skill.language && skill.level)
      .map((skill: any) => `${skill.language}: ${skill.level}`)
      .join('<br>');
  }
  
  htmlContent += formatRow('Sprachkenntnisse', languageText || 'Nicht angegeben');
  htmlContent += formatRow('Soft Skills', data.softSkills);
  htmlContent += formatRow('Persönlichkeitsmerkmale', data.personalityTraits);
  htmlContent += '</table>';

  // Benefits and culture
  htmlContent += '<h3>6. Benefits & Unternehmenskultur</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  htmlContent += formatRow('Urlaubstage', data.vacationDays || 'Nicht angegeben');
  
  // Map company car option
  let carOptionLabel = 'Nicht angegeben';
  if (data.companyCarOption === 'yes') carOptionLabel = 'Ja, wird gestellt';
  else if (data.companyCarOption === 'optional') carOptionLabel = 'Optional möglich';
  else if (data.companyCarOption === 'no') carOptionLabel = 'Nein';
  
  htmlContent += formatRow('Firmenwagen', carOptionLabel);
  htmlContent += formatRow('Firmenbike', data.companyBikeOption === true ? 'Ja' : 'Nein');
  
  // Map benefit options
  const benefitMap: {[key: string]: string} = {
    'flexible_hours': 'Flexible Arbeitszeiten',
    'home_office': 'Home Office / Remote Work',
    'pension': 'Betriebliche Altersvorsorge',
    'health_insurance': 'Betriebliche Krankenversicherung',
    'gym': 'Fitnessstudio-Mitgliedschaft',
    'food': 'Essenszuschuss / Kantine',
    'education': 'Weiterbildungsbudget',
    'childcare': 'Kinderbetreuung',
    'events': 'Teamevents / Firmenveranstaltungen',
    'public_transport': 'ÖPNV-Ticket / Mobilitätszuschuss'
  };
  
  let benefitsText = '';
  if (data.additionalBenefits && data.additionalBenefits.length > 0) {
    benefitsText = data.additionalBenefits.map((benefit: string) => benefitMap[benefit] || benefit).join(', ');
  }
  
  if (data.otherBenefits) {
    if (benefitsText) benefitsText += ', ';
    benefitsText += data.otherBenefits;
  }
  
  htmlContent += formatRow('Benefits', benefitsText || 'Nicht angegeben');
  htmlContent += formatRow('Unternehmenskultur', data.companyCulture);
  htmlContent += formatRow('Warum bei Ihnen arbeiten?', data.whyWorkHere);
  htmlContent += '</table>';

  // Recruitment process
  htmlContent += '<h3>7. Bewerbungsprozess</h3>';
  htmlContent += '<table border="0" cellpadding="5" style="width: 100%; border-collapse: collapse;">';
  htmlContent += formatRow('Anzahl Gesprächsrunden', data.interviewRounds || 'Nicht angegeben');
  htmlContent += formatRow('Beteiligte Personen', data.involvedPersons);
  
  // Map document types
  const documentMap: {[key: string]: string} = {
    'cv': 'Lebenslauf',
    'cover_letter': 'Anschreiben',
    'certificates': 'Zeugnisse',
    'references': 'Referenzen',
    'work_samples': 'Arbeitsproben',
    'portfolio': 'Portfolio'
  };
  
  let documentsText = '';
  if (data.requiredDocuments && data.requiredDocuments.length > 0) {
    documentsText = data.requiredDocuments.map((doc: string) => documentMap[doc] || doc).join(', ');
  }
  
  htmlContent += formatRow('Erforderliche Bewerbungsunterlagen', documentsText || 'Nicht angegeben');
  
  // Map timeframe
  let timeframeLabel = 'Nicht angegeben';
  if (data.timeframe === 'asap') timeframeLabel = 'So schnell wie möglich';
  else if (data.timeframe === '1_month') timeframeLabel = 'Innerhalb eines Monats';
  else if (data.timeframe === '3_months') timeframeLabel = 'Innerhalb von 3 Monaten';
  else if (data.timeframe === '6_months') timeframeLabel = 'Innerhalb von 6 Monaten';
  else if (data.timeframe === 'flexible') timeframeLabel = 'Flexibel / Kein fester Zeitrahmen';
  
  htmlContent += formatRow('Zeitrahmen für Besetzung', timeframeLabel);
  htmlContent += formatRow('Konkrete Zielfirmen', data.targetCompanies);
  htmlContent += formatRow('Blacklist', data.blacklistedCompanies);
  htmlContent += '</table>';

  // Create plain text version
  textContent = htmlContent
    .replace(/<h3>/g, '\n\n')
    .replace(/<\/h3>/g, '\n')
    .replace(/<table[^>]*>/g, '')
    .replace(/<\/table>/g, '')
    .replace(/<tr[^>]*>/g, '')
    .replace(/<\/tr>/g, '\n')
    .replace(/<td[^>]*>/g, '')
    .replace(/<\/td>/g, '')
    .replace(/<strong>/g, '')
    .replace(/<\/strong>/g, '')
    .replace(/<br>/g, '\n')
    .replace(/&nbsp;/g, ' ')
    .replace(/\n\n+/g, '\n\n');

  return {
    text: textContent,
    html: htmlContent
  };
}

// Helper function to format a row in the HTML table
function formatRow(label: string, value: string) {
  return `
    <tr>
      <td style="width: 30%; vertical-align: top;"><strong>${label}:</strong></td>
      <td style="width: 70%; vertical-align: top;">${value || 'Nicht angegeben'}</td>
    </tr>
  `;
} 