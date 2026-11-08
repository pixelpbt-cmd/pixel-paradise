/* ===== EDIT THIS BLOCK FIRST: your real business details (shown on the website) ===== */
const BIZ={
  name:'Pixel Paradise (PlayStation Arena)',
  owners:'Talha and Taha',
  address:'[opp. pernambut municipality, pernambut, tamilnadu, 635810]',
  city:'[vellore]',
  email:'[pixelpbt@gmail.com]',
  phone:'+91 96296 68242',
  officer:'[Grievance Officer name]',
  officerEmail:'[grievance email address]',
  officerPhone:'+91 96296 68242',
  site:'pixelpbt.in',
  updated:'8 November 2026'
};
/* ================================================================================ */
const LEGAL={
privacy:{t:'Privacy Policy',h:()=>`<p><i>Last updated: ${BIZ.updated}</i></p>
<p>${BIZ.name}, run by ${BIZ.owners} (“we”), ${BIZ.address}, operates ${BIZ.site}. We respect your privacy and handle personal data under the Information Technology Act, 2000, the SPDI Rules, 2011 and the Digital Personal Data Protection Act, 2023 and Rules, 2025, as they apply from time to time.</p>
<h4>1. Data we collect</h4><p>For bookings: your name, phone number, chosen game, date and time. At the shop: customer name, game, session time, amount and payment mode (Cash or UPI). Staff and owner logins: login ID and authentication data. We do not collect card or UPI details, ID documents or your location on this website.</p>
<h4>2. Why we use it</h4><p>To receive and confirm bookings, run sessions and billing, contact you (WhatsApp or phone) about your booking, keep accounts, meet legal duties and handle complaints. We do not sell your data and do not send marketing without your separate consent.</p>
<h4>3. Consent</h4><p>By ticking the box and submitting a booking you agree to this use. You may withdraw consent at any time by contacting us; this will not affect earlier lawful use, and we may be unable to serve a booking without the data.</p>
<h4>4. Sharing and storage</h4><p>We share data only with service providers needed to run the site: Supabase (database; servers are outside India, currently in Seoul, South Korea), GitHub Pages (hosting), Google Fonts and jsDelivr (fonts and scripts, which may see your IP address) and WhatsApp (Meta) when you message us. We disclose data to authorities or courts when the law requires.</p>
<h4>5. Retention</h4><p>Booking details are kept up to 12 months. Billing records are kept as long as tax and accounting law requires. After that they are deleted or anonymised.</p>
<h4>6. Security</h4><p>We use reasonable safeguards: encrypted connection (HTTPS), login-protected staff and owner panels, and limited access. No system is fully secure. If a data breach affects you, we will inform you and the authorities as the law requires.</p>
<h4>7. Children</h4><p>If you are under 18, a parent or guardian must make the booking or give consent. We do not knowingly collect a child's data without verifiable parental consent, and we do not track or target children with advertising.</p>
<h4>8. Your rights</h4><p>You may ask for a summary of your data, correction, completion, updating or erasure, withdraw consent, nominate a person to exercise your rights if you die or cannot act, and make a grievance. Write to us using the Contact and Grievance details.</p>
<h4>9. Complaints</h4><p>Please contact our Grievance Officer first. If it is not resolved, you may approach the Data Protection Board of India once the relevant provisions are in force.</p>
<h4>10. Changes</h4><p>We may update this policy and will show the new date above.</p>`},
terms:{t:'Terms and Conditions',h:()=>`<p><i>Last updated: ${BIZ.updated}</i></p>
<p>By using ${BIZ.site} or our shop you accept these terms, which are governed by Indian law including the Indian Contract Act, 1872 and the Consumer Protection Act, 2019.</p>
<h4>1. Age</h4><p>If you are under 18, you must book and play with a parent or guardian's consent. Some games, VR and the car simulator have age and health limits set by their makers, and we may refuse play for safety.</p>
<h4>2. Bookings</h4><p>An online booking is only a request. It is confirmed when we confirm it on WhatsApp or the booking status shows Confirmed. We may decline or change a slot because of availability or technical problems. We may release your slot if you are over 10 minutes late.</p>
<h4>3. Prices and payment</h4><p>Prices are in Indian rupees as shown on the site or shop, and may change. Payment is made at the shop by Cash or UPI. This website does not take payments. Extensions are charged at the listed rate.</p>
<h4>4. Session time</h4><p>Time starts when staff start your session. If a power cut or technical fault stops play, we pause the timer and resume it afterwards. Time already played is not refundable.</p>
<h4>5. Conduct and safety</h4><p>Handle equipment with care and follow staff directions. You are responsible for damage you cause. Do not use unlawful, pirated or age-inappropriate content, and do not gamble or bet. Take breaks and stop if you feel unwell, dizzy or uncomfortable, especially in VR. We may end a session without refund for misconduct or danger.</p>
<h4>6. Liability</h4><p>To the extent allowed by law, we are not responsible for lost belongings, lost game progress or indirect losses. Nothing here limits any right you have under law that cannot be excluded.</p>
<h4>7. Intellectual property</h4><p>The site, logo and design belong to us or their owners. Game titles and consoles belong to their respective owners such as Sony and Meta. Do not copy or misuse them.</p>
<h4>8. Website use</h4><p>Do not make false bookings, attack or misuse the site, or access staff and owner areas without permission.</p>
<h4>9. Governing law</h4><p>Indian law applies. Courts at ${BIZ.city} have jurisdiction, subject to your right to approach a Consumer Commission under the Consumer Protection Act, 2019.</p>
<h4>10. Changes and contact</h4><p>We may update these terms and show the new date above. Questions: see Contact and Grievance.</p>`},
refund:{t:'Cancellation and Refund Policy',h:()=>`<p><i>Last updated: ${BIZ.updated}</i></p>
<h4>Customer cancellation</h4><p>Please tell us at least 2 hours before your slot by WhatsApp ${BIZ.phone}. No advance payment is taken online, so there is nothing to refund for an online booking.</p>
<h4>During a session</h4><p>If you ask to cancel while playing, we charge only for the time already played, as recorded by staff. A session cancelled at the start may be free at our discretion.</p>
<h4>If we cannot serve you</h4><p>If we cancel, or a power or equipment fault stops your session, we will pause and resume the timer, offer another slot, or refund the unused amount at your choice. Refunds are made by the same mode (Cash or UPI) within 7 days.</p>
<h4>No-shows</h4><p>If you do not arrive within 10 minutes of your slot, we may release it.</p>`},
cookies:{t:'Cookie Policy',h:()=>`<p><i>Last updated: ${BIZ.updated}</i></p>
<p>This website uses only essential browser storage. It does not use advertising or tracking cookies, and we do not run analytics.</p>
<h4>What is stored</h4><p>If staff or owners log in, a login token is kept in the browser so they stay signed in. Customers using the booking page are not given any tracking cookie by us.</p>
<h4>Third parties</h4><p>Google Fonts and jsDelivr load fonts and scripts and may receive your IP address. WhatsApp opens when you choose to message us.</p>
<h4>Your choice</h4><p>You can clear cookies and site data in your browser settings at any time. If we add analytics or advertising later, we will update this policy and ask for your consent first.</p>`},
contact:{t:'Contact and Grievance Redressal',h:()=>`<h4>${BIZ.name}</h4><p>${BIZ.address}<br>Phone / WhatsApp: ${BIZ.phone}<br>Email: ${BIZ.email}<br>Website: ${BIZ.site}<br>${BIZ.gstin}</p>
<h4>Grievance Officer</h4><p>Name: ${BIZ.officer}<br>Email: ${BIZ.officerEmail}<br>Phone / WhatsApp: ${BIZ.officerPhone}<br>Availability: daily during shop hours</p>
<h4>How to complain</h4><p>Send your complaint about a booking, service, billing or your personal data (access, correction, erasure, withdrawal of consent) to the Grievance Officer with your name, phone number and details. We acknowledge it within 48 hours and resolve it within 30 days, and in any case within the time the law allows.</p>
<h4>If you are not satisfied</h4><p>You may approach the Data Protection Board of India for data matters (once in force), or your Consumer Commission. The National Consumer Helpline is 1915.</p>`}
};
